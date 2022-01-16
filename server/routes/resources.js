const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

/* GET resources listing. */
router.get('/resources', async function (_req, res) {
	const resources = await prisma.resource.findMany();
	res.json(resources);
});

module.exports = router;
