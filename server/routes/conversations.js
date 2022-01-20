const { PrismaClient } = require('@prisma/client');
const { json } = require('express');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

const user_id = 1;

// Get all conversations that user has
router.get('/conversations', async function (req, res) {
	const conversations = await prisma.conversation.findMany({
		where: {
			OR: [
				{
					// TODO: 1 is user 1. Need to get current user id

					requester_id: user_id,
				},
				{
					helper_id: user_id,
				},
			],
		},

		include: {
			sender: true,
			messages: {
				orderBy: {
					timestamp: 'desc',
				},
			},
		},
	});

	res.json(conversations);
});

//Get a specific conversation that the user has
router.get('/conversations/:id', async function (req, res) {
	const { id } = req.params;
	console.log('Conversation ID: ', id);
	const conversation = await prisma.conversation.findFirst({
		where: {
			id: parseInt(id),
		},
		include: {
			messages: {
				orderBy: {
					timestamp: 'desc',
				},
			},
		},
	});

	res.json(conversation);
});

/* Route to post a new message to the db */

router.post('/conversations/:id', async function (req, res) {
	const id = req.params;
	const { body, sender_id } = req.body.params;

	const message = await prisma.message.create({
		data: {
			conversation_id: 1,
			body,
			sender_id,
		},
	});

	res.json(message);
});

module.exports = router;
