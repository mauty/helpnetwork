const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const person_data = [
	{
		email: 'helper@example.com',
		first_name: 'Bob',
		last_name: 'Johnson',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor commodo. Pulvinar pellentesque habitant morbi tristique senectus et.',
		postal_code: 'M6B 1L9',
		safety_details: 'Masks are good',
	},
	{
		email: 'sender@example.com',
		first_name: 'Sally',
		last_name: 'Smith',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor commodo. Pulvinar pellentesque habitant morbi tristique senectus et.',
		postal_code: 'M4D 2U8',
		safety_details: 'Masks are evil',
	},
	{
		email: 'george@email.com',
		first_name: 'George',
		last_name: 'Hollinger',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor commodo. Pulvinar pellentesque habitant morbi tristique senectus et.',
		postal_code: 'M5A T8E',
		lat: 43.65818641884621,
		long: -79.4805399308699,
		safety_details: 'Masks, vaccines, boosted',
	},
	{
		email: 'amir@email.com',
		first_name: 'Amir',
		last_name: 'Ali',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor commodo. Pulvinar pellentesque habitant morbi tristique senectus et.',
		postal_code: 'M9N 0B1',
		safety_details: 'Masks, vaccines, boosted',
	},
	{
		email: 'malcolm@email.com',
		first_name: 'Malcolm',
		last_name: 'Merchant',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor commodo. Pulvinar pellentesque habitant morbi tristique senectus et.',
		postal_code: 'M5A T8E',
		safety_details: 'Masks are evil',
	},
];

const request_data = [
	{
		request_details: 'I need help with repairing my car',
		long: -77.0364,
		lat: 38.8951,
		category_id: 1,
		requester_id: 1,
	},
	{
		request_details: 'I need help with picking up my groceries from Costco',
		long: -79.3871,
		lat: 43.6426,
		category_id: 2,
		requester_id: 2,
	},
	{
		request_details: 'I need a help clearing snow from my driveway',
		long: -79.3948,
		lat: 43.6677,
		category_id: 4,
		requester_id: 1,
	},
	{
		request_details:
			'I need help with cleaning my gutters. The downspouts are leaking.',
		long: -79.1848,
		lat: 43.8977,
		category_id: 3,
		requester_id: 2,
	},
];

const category_data = [
	{ name: 'Groceries' },
	{ name: 'Pharmacy Items' },
	{ name: 'Pet Care' },
	{ name: 'Cleaning' },
	{ name: 'Home Maintenance' },
	{ name: 'Meal Preparation' },
	{ name: 'Tech Support' },
	{ name: 'Gardening' },
	{ name: 'Exercise' },
	{ name: 'Moving Furniture' },
	{ name: 'Mental Wellness' },
	{ name: 'House Sitting' },
];

const resource_data = [
	{ name: 'Snow Blower', category: 'Tool' },
	{ name: 'Lawn Mower', category: 'Tool' },
	{ name: 'Pickup Truck', category: 'Transportation' },
	{ name: 'Ladder', category: 'Tool' },
	{ name: 'Wheelbarrow', category: 'Tool' },
	{ name: 'Hammer Drill', category: 'Tool' },
];

const requested_resource_data = [
	{ request_id: 3, resource_id: 3 },
	{ request_id: 2, resource_id: 1 },
];

const personal_resource_data = [
	{ person_id: 1, resource_id: 2 },
	{ person_id: 3, resource_id: 4 },
	{ person_id: 2, resource_id: 1 },
];

const conversation_data = [
	{ helper_id: 2, requester_id: 1, request_id: 1 },
	{ helper_id: 3, requester_id: 1, request_id: 1 },
	{ helper_id: 4, requester_id: 1, request_id: 1 },
	{ helper_id: 3, requester_id: 2, request_id: 2 },
	{ helper_id: 1, requester_id: 2, request_id: 2 },
	{ helper_id: 4, requester_id: 2, request_id: 2 },
	{ helper_id: 3, requester_id: 1, request_id: 3 },
	{ helper_id: 4, requester_id: 1, request_id: 3 },
	{ helper_id: 1, requester_id: 2, request_id: 4 },
	{ helper_id: 3, requester_id: 2, request_id: 4 },
	{ helper_id: 4, requester_id: 2, request_id: 4 },
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
		data: person_data,
	});

	await prisma.category.createMany({
		data: category_data,
	});

	await prisma.request.createMany({
		data: request_data,
	});

	await prisma.resource.createMany({
		data: resource_data,
	});

	await prisma.requested_resource.createMany({
		data: requested_resource_data,
	});

	await prisma.personal_resource.createMany({
		data: personal_resource_data,
	});

	await prisma.conversation.createMany({
		data: conversation_data,
	});

	await prisma.message.createMany({
		data: message_data,
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
