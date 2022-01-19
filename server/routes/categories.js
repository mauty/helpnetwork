const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

/* GET categories listing. */
router.get('/categories', async function(req, res) {
  const categories = await prisma.category.findMany();
  console.log('hit category route');
  res.json(categories);
});

module.exports = router;
