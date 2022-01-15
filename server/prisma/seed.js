const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const person_data = [
	{
		email: 'bob@example.com',
		first_name: 'Bob',
		last_name: 'Johnson',
		safety_details: 'Masks are good',
	},
	{
		email: 'sally@example.com',
		first_name: 'Sally',
		last_name: 'Smith',
		safety_details: 'Masks are evil',
	},
];

const request_data = [{}, {}, {}];

const resource_data = [{}, {}, {}, {}, {}];

const requested_resource_data = [{}, {}, {}];

const personal_resource_data = [{}, {}, {}];

const conversation_data = [{}, {}, {}];

const message_data = [{}, {}, {}, {}, {}, {}, {}];
/*
Request
Resource
Requested_resource
Personal_resource
Conversation
Message
*/
const main = async () => {
	console.log('Start seeding');

	await prisma.person.createMany({
		person_data,
	});

	await prisma.request.createMany({
		request_data,
	});

	await prisma.resource.createMany({
		resource_data,
	});

	await prisma.requested_resource.createMany({
		requested_resource_data,
	});

	await prisma.personal_resource.createMany({
		personal_resource_data,
	});

	await prisma.conversation.createMany({
		conversation_data,
	});

	await prisma.message.createMany({
		message_data,
	});
	console.log(`Seeding finished.`);
};

main()
	.catch((e) => {
		console.log(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
