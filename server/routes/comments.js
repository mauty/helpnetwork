const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

/* GET comments. */
router.get('/comments/:id', async function (req, res) {
	const { id } = req.params;

	const comments = await prisma.comment.findMany({
		where: {
			request_id: parseInt(id),
		},
	});
	console.log('hit comments route');
	res.json(comments);
});

/* Post comment*/
router.post('/comments/:id', async function (req, res) {
	const { id } = req.params;
	const { body } = req.body.params;

	const comments = await prisma.comment.create({
		data: {
			request_id: parseInt(id),
			body,
		},
	});
	console.log('hit comments route');
	res.json(comments);
});
module.exports = router;
