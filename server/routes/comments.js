const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

/* GET categories listing. */
router.get('/comments', async function (req, res) {
	const comments = await prisma.category.findMany();
	console.log('hit comments route');
	res.json(comments);
});

module.exports = router;
