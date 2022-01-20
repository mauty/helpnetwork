const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

router.get('/points', async function (req, res) {
  const lat = parseFloat(req.query.lat);
  const lng = parseFloat(req.query.long);

  const requests = await prisma.$queryRaw`
    SELECT * FROM
    (SELECT "Request".id, request_details, "Request".lat, "Request".long, "Category".name as category_name, "Person".first_name, "Person".last_name, "Request".time_sensitive, "Request".start_time, "Request"."createdAt", ( 3959 * acos( cos( radians(${lat}) ) * cos( radians( "Request".lat ) ) * cos( radians( "Request".long ) - radians(${lng}) ) + sin( radians(${lat}) ) * sin( radians( "Request".lat ) ) ) ) as distance
      FROM "Request"
      INNER JOIN "Category" ON "Request".category_id="Category".id
      INNER JOIN "Person" ON "Request".requester_id="Person".id) al
    WHERE distance < 3 ORDER BY distance;`;

	res.status(200).json(requests);
});

module.exports = router;