const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

/*Get route to see other users profiles*/
router.get('/profile/:id/newReview', async function (req, res) {

});

module.exports = router;