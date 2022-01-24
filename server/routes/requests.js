const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();
const { getBoundsOfDistance } = require('geolib');

/* GET request listing. */
router.get('/request/:id', async function (req, res) {
	const { id } = req.params;

	const request = await prisma.request.findFirst({
		where: {
			id: parseInt(id),
		},
    include: {
      requested_resources: {
        include: {
          resource: true
        }
      },
      conversations: true,
      requester: true,
      category: true,
      helper: true
    }
	});

	res.json(request);
});

router.get('/requests', async function (req, res) {

  const latitude = parseFloat(req.query.lat);
  const longitude = parseFloat(req.query.long);

  const { time: strTime, categories, resources } = req.query;

  let conditional = {}

  if(categories) {
    conditional = {
      category_id: {
        in: categories.map(category_id => parseInt(category_id) )
      }
    };
  }

  if(resources) {
    conditional = {
      ...conditional,
      requested_resources: {
        some: {
          resource_id: {
            in: resources.map(resource_id => parseInt(resource_id) )
          }
        }
      }
    };
  }

  if(strTime) {
    const time = JSON.parse(strTime);
    conditional = {
      ...conditional,
      time_sensitive: true,
      start_time: {
        gte: new Date(`${new Date().toLocaleDateString()} ${time.from}`),
      },
      end_time: {
        lte: new Date(`${new Date().toLocaleDateString()} ${time.to}`),
      }
    }
  }

  const bounds = getBoundsOfDistance({
    latitude, longitude
  }, 500)

  const requests = await prisma.request.findMany({
    where: {
      request_completed: false,
      lat: { gte: bounds[0].latitude, lte: bounds[1].latitude },
      long: { gte: bounds[0].longitude, lte: bounds[1].longitude },
      ...conditional,
    },
    include: {
      category: true,
      requester: true,
      requested_resources: {
        include: {
          resource: {
            select: {
              name: true
            }
          }
        }
      }
    },
    take: 15,
  })

	res.status(200).json(requests);
});

/* POST request listing. */
router.post('/request', async function(req, res) {
	const {
		request_details,
		lat,
		long,
		postal_code,
		category_id,
		time_sensitive,
		start_time,
		end_time,
		points_value,
		requester_id,
		requested_resources,
	} = req.body.params;

	console.log('req.body>>>', req.body);

	const request = await prisma.request.create({
		data: {
			request_details,
			lat,
			long,
			postal_code,
			category_id,
			time_sensitive,
			start_time: new Date(start_time),
			end_time: new Date(start_time),
			points_value,
			requester_id,
			requested_resources: {
        createMany: {
          data: requested_resources.map(resource => ({ resource_id: resource})),
        }
      }, // TODO: USE cookie
			// TODO: for resources, use an array coming from the body and create each in the requested resource
		},
	});

	res.status(200).json(request);
});


/* Complete the request listing */
router.post('/request/complete/:id', async (req, res) => {
	const { id: strId } = req.params;
  const id = parseInt(strId);

	const request = await prisma.request.update({
		where: {
			id,
		},
    data: {
      request_completed: true
    }
	});

  res.status(200).json(request);
});

/* Offer help to request listing */
router.post('/request/help/:id', async (req, res) => {
	const { id: strId } = req.params;
  const { helper_id } = req.body.params;
  const id = parseInt(strId);

  if(!helper_id) return res.status(500).send();

	const request = await prisma.request.update({
		where: {
			id,
		},
    data: {
      helper_id,
      request_claimed: true
    }
	});

  if(!request) return res.status(500).send();
  console.log(request);

	const conversation = await prisma.conversation.create({
		data: {
			request_id: id,
			requester_id: request.requester_id,
      helper_id,
			messages: {
				create: [
					{
						body: `Hey I would love to help you with your request ${request.request_details}`,
            sender_id: helper_id
					},
				],
			},
		},
	});

	res.send(conversation);
});

/*UPDATE request listing */
router.put('/request/:id', async (req, res) => {
	const { id } = req.params;
	const {
		details,
		category,
		map_id,
		time_sensitive,
		start_time,
		end_time,
		points_value,
	} = req.body;
	const request = await prisma.request.update({
		where: {
			id,
		},
		data: {
			details,
			category,
			map_id,
			time_sensitive,
			start_time,
			end_time,
			points_value,
			requester_id: 1, // TODO: USE cookie
		},
	});

	res.send(request);
});

/* DELETE request listing. */
router.delete('/request/:id', async function (req, res) {
	const { id } = req.params;
	const request = await prisma.request.delete({
		where: {
			id,
		},
	});
	res.json(request);
});

module.exports = router;

//requests
//person
//resources
//messages
//conversation
