const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = PrismaClient();

/* GET request listing. */
router.get('/message/:id', async function(req, res) {
  const { id } = req.params;

  const request = await prisma.request.findOne({
    where: {
      id
    }
  });

  res.json(request);
});

router.post('/messages/:conversation_id', async function(req, res) {
  const { id } = req.body;

  //get all messages by conv id
  //get first message, create conversation
    //check if already having a conversation
    //check if already having a conersation for a specific request
  //if conversation doesn't exist create conversation then message
  //else create new message and push it with conversation_id

  const request = await prisma.request.findMany({
    where: { id }
  })


  res.json(request);
});

router.get('/requests', async function(req, res) {
  const { map_id } = req.body;

  const request = await prisma.request.findMany({
    where: { map_id }
  });

  res.json(request);
});

/* POST request listing. */
router.get('/request', async function(req, res) {
  const { details, category, map_id, time_sensitive, start_time, end_time, points_value } = req.body;

  const request = await prisma.request.create({
    data: {
      details,
      category,
      map_id,
      time_sensitive,
      start_time,
      end_time,
      points_value,
      requester_id: 1 // TODO: USE cookie
    }
  });

  res.json(request);
});



module.exports = router;

//get all messages by conv id
//get first message, create conversation
  //check if already having a conversation
  //check if already having a conersation for a specific request
//

