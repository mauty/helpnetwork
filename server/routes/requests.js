const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = PrismaClient();

/* GET request listing. */
router.get('/request/:id', async function(req, res) {
  const { id } = req.params;

  const request = await prisma.request.findOne({
    where: {
      id
    }
  });

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

/* Offer help to request listing */
router.post('/request/:request_id', async (req, res) => {
  const { request_id } = req.params;

  const request = await prisma.request.findOne({
    where: {
      id: request_id
    }
  });

  const conversation = await prisma.conversation.create({
    data: {
      request_id
    }
  });

  res.send(request);
});

/*UPDATE request listing */
router.put('/request/:id', async (req, res) => {
  const { id } = req.params;
  const { details, category, map_id, time_sensitive, start_time, end_time, points_value } = req.body;
  const request = await prisma.request.update({
    where: {
      id,
    },
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

  res.send(request);
});

/* DELETE request listing. */
router.delete('/request/:id', async function(req, res){
  const { id } = req.params
  const request = await prisma.request.delete({
    where: {
      id,
    },
  })
  res.json(request)
});


module.exports = router;


//requests
//person
//resources
//messages
//conversation