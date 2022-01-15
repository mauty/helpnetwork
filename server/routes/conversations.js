const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = PrismaClient();

// This is for existing conversation
router.post('/', async function(req, res) {
  const { conversation_id } = req.body;

});