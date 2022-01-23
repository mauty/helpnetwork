const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

/*Get route to see other users profiles*/
router.post('/profile/:id/newReview', async function (req, res) {
  const { body, userId } = req.body.params;
  const rating = parseInt(req.body.params.rating);
  const profileId = parseInt(req.params.id);

  const newReview = await prisma.review.create({
    data: {
      body,
      rating,
      personId: profileId,
      reviewerId: userId,
    }
  })

  res.json(newReview);
});

module.exports = router;