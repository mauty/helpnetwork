const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();
const { getBoundsOfDistance } = require('geolib');

router.get('/points', async function (req, res) {

  const latitude = parseFloat(req.query.lat);
  const longitude = parseFloat(req.query.long);

  const bounds = getBoundsOfDistance({
    latitude, longitude
  }, 1500)

  const people = await prisma.person.findMany({
    where: {
      lat: { gte: bounds[0].latitude, lte: bounds[1].latitude },
      long: { gte: bounds[0].longitude, lte: bounds[1].longitude },
    },
    take: 12
  })

  const requests = await prisma.request.groupBy({
    by: ['helper_id'],
    where: {
      request_completed: true,
      helper_id: {
        in: people.map(person => person.id)
      }
    },
    _sum: {
      points_value: true
    }
  })


  const returnArray = [];
    for(const point of requests) {
      for(const person of people) {
        if(person.id === point.helper_id) {
          returnArray.push({ ...person, points: point._sum.points_value })
        }
    }
  }

	res.status(200).json(returnArray.sort((person1, person2) => person2.points - person1.points));
});

module.exports = router;
