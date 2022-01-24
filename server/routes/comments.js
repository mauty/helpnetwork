const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

/* GET comments. */
router.get('/comments/:id', async function (req, res) {
	const comments = await prisma.category.findMany();
	console.log('hit comments route');
	res.json(comments);
});

/* Post comment*/
router.post('/comments/:id', async function (req, res) {
	const { id } = req.params;
	const { body, sender_id } = req.body.params;

	const comments = await prisma.comment.create({
		data: {
			request_id: parseInt(id),
			body,
			sender_id,
		},
	});
	console.log('hit comments route');
	res.json(comments);
});
module.exports = router;
