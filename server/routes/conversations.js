const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

const requester_id = 1;
const helper_id = 1;

// Get all conversations that user has
router.get('/conversations', async function (req, res) {
	const conversations = await prisma.conversation.findMany({
		where: {
			OR: [
				{
					// TODO: 1 is user 1. Need to get current user id
					requester_id,
				},
				{
					helper_id,
				},
			],
		},
	});

	res.json(conversations);
});

//Get a specific conversation that the user has
router.get('/conversations/:conversation_id', async function (req, res) {
	const { conversation_id } = req.body;

	const conversation = await prisma.conversation.findOne({
		where: {
			conversation_id,
		},
		include: {
			messages: true,
		},
	});

	res.json(conversation);
});

/* Route to post a new message to the db */

router.post('/conversations/:conversation_id', async function (req, res) {
	const conversation_id = req.params;
	const { body } = req.body;

	const message = await prisma.message.create({
		data: {
			conversation_id,
			body,
		},
	});

	res.json(message);
});

module.exports = router;