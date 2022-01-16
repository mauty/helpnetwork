const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

/*Get route to see our own profile*/
router.get('/profile', async function (req, res) {
	// TODO: Get the ID from the session
	const id = 1;

	const person = await prisma.person.findOne({
		where: { id },
	});

	res.json(person);
});

/*Get route to see other users profiles*/
router.get('/profile/:id', async function (req, res) {
	const { id } = req.params;

	const person = await prisma.person.findOne({
		where: { id },
	});

	res.json(person);
});

module.exports = router;

//requests
//person
//resources
//messages
//conversation
