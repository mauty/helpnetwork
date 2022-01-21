const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

/*Get route to see other users profiles*/
router.get('/profile/:id', async function (req, res) {
	const { id } = req.params;

	const person = await prisma.person.findFirst({
		where: {
      id: parseInt(id),
    },
    include: {
      personal_resources: {
        include: {
          resource: true
        }
      },
      Helper: {
        where: {
          request_completed: true
        },
        include: {
          category: true,
          requester: true
        }
      },
    }
	});

  const points = await prisma.request.groupBy({
    where: {
      request_completed: true,
      helper_id: {
        equals: person.id
      }
    },
    by: ['helper_id'],
    _sum: {
      points_value: true
    }
  })

	res.json({ ...person, points });
});

/* Post route to see edit own profile*/
router.post('/profile', async function (req, res) {
	// TODO: Get the ID from the session
  const { id, first_name, last_name, email, postal_code, bio, personal_resources } = req.body.params;
  console.log(req.body.params);


	const person = await prisma.person.update({
		where: { id },
    data: {
      first_name,
      last_name,
      email,
      postal_code,
      bio,
      personal_resources: {
        deleteMany: {},
        createMany: {
          data: personal_resources.map(resource => ({ resource_id: resource})),
        }
      }
    }
	});

	res.json(person);
});

module.exports = router;

//requests
//person
//resources
//messages
//conversation
