const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

/* GET request listing. */
router.get('/request/:id', async function (req, res) {
	const { id } = req.params;

	const request = await prisma.request.findOne({
		where: {
			id,
		},
	});

	res.json(request);
});

router.get('/requests', async function (req, res) {
  const lat = parseFloat(req.query.lat);
  const lng = parseFloat(req.query.long);

  // const requests = await prisma.$queryRaw`
  // SELECT * FROM (SELECT id, request_details, lat, long, ( 3959 * acos( cos( radians(${lat}) ) * cos( radians( lat ) ) * cos( radians( long ) - radians(${lng}) ) + sin( radians(${lat}) ) * sin( radians( lat ) ) ) ) as distance from "Request") al WHERE distance < 3 ORDER BY distance;`;

  const requests = await prisma.$queryRaw`
  SELECT * FROM (SELECT id, request_details, lat, long, ( 3959 * acos( cos( radians(${lat}) ) * cos( radians( lat ) ) * cos( radians( long ) - radians(${lng}) ) + sin( radians(${lat}) ) * sin( radians( lat ) ) ) ) as distance from "Request") al WHERE distance < 3 ORDER BY distance;`;

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
