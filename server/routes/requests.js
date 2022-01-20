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
      requester: true,
      category: true
    }
	});

	res.json(request);
});

router.get('/requests', async function (req, res) {

  const latitude = parseFloat(req.query.lat);
  const longitude = parseFloat(req.query.long);

  const { time: strTime, category_id, resources } = req.query;

  let conditional = {}

  if(category_id) conditional["category_id"] = parseInt(category_id);
  if(resources) {
    conditional = {
      ...conditional,
      requested_resources: {
        some: {
          resource_id: {
            in: resources.map(resource => parseInt(resource) )
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
  }, 5000)

  const requests = await prisma.request.findMany({
    where: {
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
router.post('/request', async function (req, res) {
	const {
		details,
		category,
		map_id,
		time_sensitive,
		start_time,
		end_time,
		points_value,
	} = req.body;

	const request = await prisma.request.create({
		data: {
			details,
			category,
			map_id,
			time_sensitive,
			start_time,
			end_time,
			points_value,
			requester_id: 1, // TODO: USE cookie
			// TODO: for resources, use an array coming from the body and create each in the requested resource
		},
	});

	res.json(request);
});

//TODO: for create profile page post resources
//TODO: for profile display page get resources
//TODO: for search filtering query by resources

/* Offer help to request listing */
router.post('/request/:request_id', async (req, res) => {
	const { request_id } = req.params;

	const request = await prisma.request.findOne({
		where: {
			id: request_id,
		},
	});

	const conversation = await prisma.conversation.create({
		data: {
			request: request.request_id,
			requester_id: request.requester_id,
			message: {
				create: [
					{
						body: `Hey I would love to help you with your request ${request.details}`,
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
