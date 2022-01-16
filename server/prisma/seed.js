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

const request_data = [
	{
		request_details: 'I need help with repairing my car',
		category: 'Repair',
	},
	{
		request_details: 'I need help with picking up my groceries from Costco',
		category: 'Delivery',
	},
	{
		request_details: 'I need a help clearing snow from my driveway',
		category: 'Cleaning',
	},
];

const resource_data = [
	{ name: 'Car Repair', category: 'Repair' },
	{ name: 'Groceries', category: 'Delivery' },
	{ name: 'Medicine', category: 'Delivery' },
	{ name: 'Outdoor Cleaning', category: 'Cleaning' },
	{ name: 'Indoor Cleaning', category: 'Cleaning' },
];

const message_data = [
	{
		body: 'Hey I would love to help you with your request',
		conversation_id: 1,
	},
	{ body: 'Hi, thank you for excepting my request', conversation_id: 1 },
	{
		body: 'Hey I would love to help you with your request',
		conversation_id: 2,
	},
	{ body: 'Hi, thank you for excepting my request', conversation_id: 2 },
	{
		body: 'Hey I would love to help you with your request',
		conversation_id: 3,
	},
	{ body: 'Hi, thank you for excepting my request', conversation_id: 3 },
];

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
