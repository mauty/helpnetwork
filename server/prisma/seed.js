const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const data = [
  {
    email: "bob@example.com",
    first_name: "Bob",
    last_name: "Johnson",
    safety_details: "Masks are good"
  },
  {
    email: "sally@example.com",
    first_name: "Sally",
    last_name: "Smith",
    safety_details: "Masks are evil"
  }
];

const main = async() => {
  console.log("Start seeding");
  
  await prisma.person.createMany({
    data
  });
  console.log(`Seeding finished.`);

}

main()
  .catch(e => {
    console.log(e);
    process.exit(1);
  }).finally(async () => {
    await prisma.$disconnect();
  });
