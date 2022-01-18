const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

/* GET categories listing. */
router.get('/categories', async function (_req, res) {
  const categories = await prisma.category.findMany();
  res.json(categories);
});

module.exports = router;
