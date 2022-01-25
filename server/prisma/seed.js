const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const person_data = [
  {
    email: 'helper@email.com',
    first_name: 'Bob',
    last_name: 'Johnson',
    imgURL: 'https://randomuser.me/api/portraits/men/3.jpg',
    bio: 'Blonde, coily hair neatly coiffured to reveal a furrowed, radiant face. Bright hazel eyes, set seductively with in their sockets, watch anxiously over the people theyve defended for so long. A scar stretching from just under the right eyebrow , running towards his left nostril and ending under his left eye leaves an aching burden of innocence long lost. This is the face of Brodie Wakelin, a true warrior among halflings. He stands ordinary among others, despite his big frame. Theres something bewildering about him, perhaps its his kindness or perhaps its simply a feeling of indifference. But nonetheless, people tend to pretend to be his friend, while secretly training to become more like him.',
    postal_code: 'M6B 1L9',
    lat: 43.649744918000685,
    long: -79.46447462733938,
    safety_details: `["vaccinated", "will wear a mask", "willing to socially distance"]`
  },
  {
    email: 'sender@email.com',
    first_name: 'Joyce',
    last_name: 'Smith',
    imgURL: 'https://randomuser.me/api/portraits/women/85.jpg',
    bio: 'Gray, coily hair hangs over a strong, friendly face. Clear hazel eyes, set charmingly with in their sockets, watch anxiously over the deserts theyve defended for so long. A moustache gracefully compliments his eyes and hair and leaves a gracious memory of his reckless luck. This is the face of Orlando Davenport, a true defender among humans. He stands towering among others, despite his fragile frame. Theres something puzzling about him, perhaps its his decency or perhaps its simply a feeling of shame. But nonetheless, people tend to flock towards him, while secretly dispising him.',
    lat: 43.671488,
    long: -79.350599,
    postal_code: 'M4D 2U8',
    safety_details: `["will wear a mask", "willing to socially distance"]`
  },
  {
    email: 'george@email.com',
    first_name: 'George',
    last_name: 'Hollinger',
    imgURL: 'https://randomuser.me/api/portraits/men/51.jpg',
    bio: 'Red, short hair is pulled back to reveal a fine, friendly face. Bright gray eyes, set low with in their sockets, watch longingly over the farms theyve been seperated from for so long.An old tattoo of a small wolf is prominently featured just above the right side of his right eyebrow leaves a tormenting burden of his luck in love.',
    postal_code: 'M5A T8E',
    lat: 43.65818641884621,
    long: -79.4805399308699,
    safety_details: `[]`
  },
  {
    email: 'malcolm@email.com',
    first_name: 'Malcolm',
    last_name: 'Merchant',
    imgURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    bio: 'Golden, flowing hair clumsily hangs over a handsome, lively face. Wide aquamarine eyes, set handsomely with in their sockets, watch vigilantly over the ancestors theyve shown mercy on for so long. A sword left a mark stretching from the bottom of the right cheek , running towards the left side of his lips and ending above his right eye leaves a bittersweet memory of his luck.',
    postal_code: 'M5A T8E',
    lat: 43.651286,
    long: -79.422843,
    safety_details: `["willing to socially distance"]`
  },
  {
    email: 'cbushen0@privacy.gov.au',
    first_name: 'Corine',
    last_name: 'Bushen',
    imgURL: 'https://randomuser.me/api/portraits/women/1.jpg',
    bio: 'Removal of Nonautologous Tissue Substitute from Sternum, Percutaneous Endoscopic Approach',
    lat: 43.6442,
    long: -79.3933,
    safety_details: `["willing to socially distance"]`
  },
  {
    email: 'chackelton1@soundcloud.com',
    first_name: 'Constance',
    last_name: 'Hackelton',
    imgURL: 'https://randomuser.me/api/portraits/women/2.jpg',
    bio: 'Voice Prosthetic Assessment using Audiovisual Equipment',
    lat: 43.6578,
    long: -79.3846,
  },
  {
    email: 'rgrubb2@loc.gov',
    first_name: 'Raquela',
    last_name: 'Grubb',
    imgURL: 'https://randomuser.me/api/portraits/women/3.jpg',
    bio: 'Dilation of Gastric Vein with  Intraluminal Device, Open Approach',
    lat: 43.6628,
    long: -79.3848,
  },
  {
    email: 'bkroger3@yellowpages.com',
    first_name: 'Bartram',
    last_name: 'Kroger',
    imgURL: 'https://randomuser.me/api/portraits/men/4.jpg',
    bio: 'Occlusion of Right Peroneal Artery with  Extraluminal Device, Open Approach',
    lat: 43.6641,
    long: -79.398,
  },
  {
    email: 'htiesman4@auda.org.au',
    first_name: 'Holli',
    last_name: 'Tiesman',
    imgURL: 'https://randomuser.me/api/portraits/women/4.jpg',
    bio: 'Replacement of Abdomen Skin with  Nonautologous Tissue Substitute, Partial Thickness, External Approach',
    lat: 43.658,
    long: -79.382,
  },
  {
    email: 'ashippard5@diigo.com',
    first_name: 'Aileen',
    last_name: 'Shippard',
    imgURL: 'https://randomuser.me/api/portraits/women/5.jpg',
    bio: 'Release Left Thorax Tendon, Percutaneous Endoscopic Approach',
    lat: 43.6521,
    long: -79.3909,
  },
  {
    email: 'tkeers6@opensource.org',
    first_name: 'Tymothy',
    last_name: 'Keers',
    imgURL: 'https://randomuser.me/api/portraits/men/5.jpg',
    bio: 'Excision of Left Upper Lung Lobe, Via Natural or Artificial Opening',
    lat: 43.6586,
    long: -79.3821,
  },
  {
    email: 'tsheryn7@nasa.gov',
    first_name: 'Teodoor',
    last_name: 'Sheryn',
    imgURL: 'https://randomuser.me/api/portraits/men/6.jpg',
    bio: 'Drainage of Right Lower Lobe Bronchus with  Drainage Device, Open Approach',
    lat: 43.6456,
    long: -79.3907,
  },
  {
    email: 'hgribbin8@foxnews.com',
    first_name: 'Hermina',
    last_name: 'Gribbin',
    imgURL: 'https://randomuser.me/api/portraits/women/6.jpg',
    bio: 'Supplement Right Atrium with  Zooplastic Tissue, Open Approach',
    lat: 43.6539,
    long: -79.3964,
  },
  {
    email: 'msterzaker9@facebook.com',
    first_name: 'Manny',
    last_name: 'Sterzaker',
    imgURL: 'https://randomuser.me/api/portraits/men/7.jpg',
    bio: 'Supplement Right Humeral Head with  Nonautologous Tissue Substitute, Percutaneous Approach',
    lat: 43.6651,
    long: -79.3907,
  },
  {
    email: 'rmayhewa@state.gov',
    first_name: 'Robin',
    last_name: 'Mayhew',
    imgURL: 'https://randomuser.me/api/portraits/men/8.jpg',
    bio: 'Insertion of Infusion Device into Left Colic Artery, Open Approach',
    lat: 43.6447,
    long: -79.3963,
  },
  {
    email: 'bkuschkeb@baidu.com',
    first_name: 'Bettine',
    last_name: 'Kuschke',
    imgURL: 'https://randomuser.me/api/portraits/women/8.jpg',
    bio: 'Dilation of Right Temporal Artery, Bifurcation, with  Drug-eluting Intraluminal Device, Percutaneous Approach',
    lat: 43.6466,
    long: -79.3958,
  },
  {
    email: 'ctassellc@europa.eu',
    first_name: 'Coral',
    last_name: 'Tassell',
    imgURL: 'https://randomuser.me/api/portraits/women/9.jpg',
    bio: 'Excision of Left Upper Leg Subcutaneous Tissue and Fascia, Percutaneous Approach, Diagnostic',
    lat: 43.6427,
    long: -79.3895,
  },
  {
    email: 'cmccannd@google.com.br',
    first_name: 'Cynthea',
    last_name: 'McCann',
    imgURL: 'https://randomuser.me/api/portraits/women/10.jpg',
    bio: 'Bypass Left Foot Vein to Lower Vein with  Synthetic Substitute, Percutaneous Endoscopic Approach',
    lat: 43.6559,
    long: -79.3875,
  },
  {
    email: 'egosseline@bigcartel.com',
    first_name: 'Edna',
    last_name: 'Gosselin',
    imgURL: 'https://randomuser.me/api/portraits/women/11.jpg',
    bio: 'Excision of Femoral Nerve, Percutaneous Endoscopic Approach, Diagnostic',
    lat: 43.6401,
    long: -79.3875,
  },
  {
    email: 'dbotterillf@google.de',
    first_name: 'Damita',
    last_name: 'Botterill',
    imgURL: 'https://randomuser.me/api/portraits/women/12.jpg',
    bio: 'Revision of Synthetic Substitute in Left Extraocular Muscle, Open Approach',
    lat: 43.6443,
    long: -79.3975,
  },
  {
    email: 'cgerbig@netlog.com',
    first_name: 'Charleen',
    last_name: 'Gerbi',
    imgURL: 'https://randomuser.me/api/portraits/women/13.jpg',
    bio: 'Dilation of Right Main Bronchus, Via Natural or Artificial Opening Endoscopic',
    lat: 43.6614,
    long: -79.3999,
  },
  {
    email: 'lmackellarh@microsoft.com',
    first_name: 'Liliane',
    last_name: 'MacKellar',
    imgURL: 'https://randomuser.me/api/portraits/women/14.jpg',
    bio: 'Replacement of Left Brachial Vein with  Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach',
    lat: 43.6454,
    long: -79.3935,
  },
  {
    email: 'ajehui@alibaba.com',
    first_name: 'Aubry',
    last_name: 'Jehu',
    imgURL: 'https://randomuser.me/api/portraits/women/15.jpg',
    bio: 'Excision of Esophageal Vein, Open Approach',
    lat: 43.6475,
    long: -79.3886,
  },
  {
    email: 'estonnerj@wordpress.com',
    first_name: 'Ethelbert',
    last_name: 'Stonner',
    imgURL: 'https://randomuser.me/api/portraits/men/15.jpg',
    bio: 'Bypass Left Common Iliac Artery to Bilateral External Iliac Arteries with  Autologous Arterial Tissue, Open Approach',
    lat: 43.6533,
    long: -79.3821,
  },
  {
    email: 'gtarrenk@typepad.com',
    first_name: 'Guillaume',
    last_name: 'Tarren',
    imgURL: 'https://randomuser.me/api/portraits/men/16.jpg',
    bio: 'Revision of Internal Fixation Device in Left Finger Phalanx, Percutaneous Endoscopic Approach',
    lat: 43.6664,
    long: -79.3861,
  },
  {
    email: 'cprisleyl@narod.ru',
    first_name: 'Cross',
    last_name: 'Prisley',
    imgURL: 'https://randomuser.me/api/portraits/men/17.jpg',
    bio: 'Revision of Drainage Device in Penis, Via Natural or Artificial Opening Endoscopic',
    lat: 43.6574,
    long: -79.3925,
  },
  {
    email: 'pdoalem@stanford.edu',
    first_name: 'Pearl',
    last_name: 'Doale',
    imgURL: 'https://randomuser.me/api/portraits/women/17.jpg',
    bio: 'Release Right Parotid Gland, Percutaneous Approach',
    lat: 43.6458,
    long: -79.3821,
  },
  {
    email: 'jduckern@upenn.edu',
    first_name: 'Judon',
    last_name: 'Ducker',
    imgURL: 'https://randomuser.me/api/portraits/women/18.jpg',
    bio: 'Drainage of Left Lower Lobe Bronchus with  Drainage Device, Percutaneous Approach',
    lat: 43.6624,
    long: -79.3812,
  },
  {
    email: 'lfearneleyo@pagesperso-orange.fr',
    first_name: 'Laurie',
    last_name: 'Fearneley',
    imgURL: 'https://randomuser.me/api/portraits/men/18.jpg',
    bio: 'Performance of Biliary Filtration, Multiple',
    lat: 43.6404,
    long: -79.3855,
  },
  {
    email: 'atommenp@cpanel.net',
    first_name: 'Anselma',
    last_name: 'Tommen',
    imgURL: 'https://randomuser.me/api/portraits/women/19.jpg',
    bio: 'Removal of Infusion Device from Peritoneal Cavity, Open Approach',
    lat: 43.6682,
    long: -79.3995,
  },
];

const request_data = [
  {
    request_details: 'I need help with repairing my car',
    long: -77.0364,
    lat: 38.8951,
    category_id: 1,
    requester_id: 1,
    points_value: 300,
  },
  {
    request_details: 'I need help with picking up my groceries from Costco',
    long: -79.3871,
    lat: 43.6426,
    category_id: 2,
    requester_id: 2,
    points_value: 200,
  },
  {
    request_details: 'I need a help clearing snow from my driveway',
    long: -79.3948,
    lat: 43.6677,
    category_id: 4,
    requester_id: 1,
    points_value: 150,
  },
  {
    request_details:
      'I need help with cleaning my gutters. The downspouts are leaking.',
    long: -79.1848,
    lat: 43.8977,
    category_id: 3,
    requester_id: 2,
    points_value: 150,
  },
  {
    request_details:
      'I need help with toxic effect of nitrogen oxides, accidental (unintentional), initial encounter',
    lat: 43.6514,
    long: -79.3902,
    category_id: 5,
    requester_id: 9,
    helper_id: 2,
    request_claimed: true,
    request_completed: true,
    points_value: 430,
    time_sensitive: true,
  },
  {
    request_details:
      'I need help with breakdown (mechanical) of other urinary devices and implants, sequela',
    lat: 43.6527,
    long: -79.3822,
    category_id: 2,
    requester_id: 3,
    time_sensitive: true,
    points_value: 450,
  },
  {
    request_details:
      'I need help with displaced fracture of neck of fourth metacarpal bone, left hand, subsequent encounter for fracture with  routine healing',
    lat: 43.6434,
    long: -79.3809,
    category_id: 2,
    requester_id: 25,
    points_value: 420,
  },
  {
    request_details:
      'I need help with other specified osteochondropathies, right thigh',
    lat: 43.6675,
    long: -79.3924,
    category_id: 8,
    requester_id: 22,
    points_value: 220,
  },
  {
    request_details:
      'I need help with pathological dislocation of hand, not elsewhere classified',
    lat: 43.6515,
    long: -79.3971,
    category_id: 12,
    requester_id: 14,
    points_value: 120,
  },
  {
    request_details:
      'I need help with infection and inflammatory reaction due to implanted electronic neurostimulator, generator, initial encounter',
    lat: 43.6682,
    long: -79.3885,
    category_id: 4,
    requester_id: 23,
    time_sensitive: true,
    points_value: 320,
  },
  {
    request_details:
      'I need help with unspecified injury of intrinsic muscle, fascia and tendon of left ring finger at wrist and hand level',
    lat: 43.6501,
    long: -79.3914,
    category_id: 4,
    requester_id: 20,
    points_value: 350,
  },
  {
    request_details:
      'I need help with laceration of other muscle(s) and tendon(s) at lower leg level, right leg, sequela',
    lat: 43.6652,
    long: -79.3831,
    category_id: 5,
    requester_id: 23,
    points_value: 360,
  },
  {
    request_details:
      'I need help with unspecified war operations occurring after cessation of hostilities, civilian, subsequent encounter',
    lat: 43.6683,
    long: -79.3872,
    category_id: 8,
    requester_id: 22,
    points_value: 310,
  },
  {
    request_details:
      'I need help with encounter for dental examination and cleaning with out abnormal findings',
    lat: 43.6514,
    long: -79.3937,
    category_id: 8,
    requester_id: 7,
    time_sensitive: false,
    points_value: 300,
  },
  {
    request_details:
      'I need help with nondisplaced fracture of anterior column [iliopubic] of left acetabulum, initial encounter for closed fracture',
    lat: 43.6602,
    long: -79.3869,
    category_id: 7,
    requester_id: 24,
    points_value: 200,
  },
  {
    request_details:
      'I need help with poisoning by ganglionic blocking drugs, undetermined, initial encounter',
    lat: 43.6545,
    long: -79.3899,
    category_id: 5,
    requester_id: 11,
    points_value: 100,
  },
  {
    request_details:
      'I need help with corrosion of second degree of lower limb, except ankle and foot',
    lat: 43.6664,
    long: -79.3813,
    category_id: 8,
    requester_id: 19,
    points_value: 150,
  },
  {
    request_details: 'I need help with age-related nuclear cataract, bilateral',
    lat: 43.6452,
    long: -79.3889,
    category_id: 5,
    requester_id: 18,
    points_value: 100,
  },
  {
    request_details:
      'I need help with salter-harris type ii physeal fracture of upper end of right tibia, subsequent encounter for fracture with  malunion',
    lat: 43.6523,
    long: -79.3869,
    category_id: 3,
    requester_id: 27,
    time_sensitive: true,
    points_value: 300,
  },
  {
    request_details:
      'I need help with blister (nonthermal) of unspecified external genital organs, male',
    lat: 43.6445,
    long: -79.3895,
    category_id: 7,
    requester_id: 27,
    points_value: 350,
  },
  {
    request_details:
      'I need help with other specified disorders of synovium and tendon, shoulder',
    lat: 43.6478,
    long: -79.3907,
    category_id: 1,
    requester_id: 28,
    points_value: 450,
  },
  {
    request_details: 'I need help with recurrent dislocation, unspecified hand',
    lat: 43.6416,
    long: -79.394,
    category_id: 3,
    requester_id: 13,
    points_value: 650,
  },
  {
    request_details:
      'I need help with atherosclerosis of bypass graft of coronary artery of transplanted heart with  unstable angina',
    lat: 43.651,
    long: -79.389,
    category_id: 2,
    requester_id: 11,
    points_value: 750,
  },
  {
    request_details:
      'I need help with ulnar collateral ligament sprain of unspecified elbow, subsequent encounter',
    lat: 43.642,
    long: -79.3912,
    category_id: 9,
    requester_id: 26,
    points_value: 850,
  },
  {
    request_details:
      'I need help with strain of extensor or abductor muscles, fascia and tendons of thumb at forearm level',
    lat: 43.6606,
    long: -79.3917,
    category_id: 12,
    requester_id: 11,
    points_value: 950,
  },
  {
    request_details:
      'I need help with poisoning by phenothiazine antipsychotics and neuroleptics, accidental (unintentional), initial encounter',
    lat: 43.6475,
    long: -79.3806,
    category_id: 4,
    requester_id: 20,
    points_value: 350,
  },
  {
    request_details:
      'I need help with maternal care for anti-a sensitization, first trimester, fetus 5',
    lat: 43.669,
    long: -79.391,
    category_id: 8,
    requester_id: 14,
    points_value: 250,
  },
  {
    request_details: 'I need help with unspecified subluxation of left knee',
    lat: 43.6642,
    long: -79.3962,
    category_id: 6,
    requester_id: 6,
    points_value: 220,
  },
  {
    request_details:
      'I need help with other pre-existing diabetes mellitus in pregnancy, first trimester',
    lat: 43.6588,
    long: -79.386,
    category_id: 5,
    requester_id: 28,
    points_value: 120,
  },
  {
    request_details:
      'I need help with type 1 diabetes mellitus with  severe nonproliferative diabetic retinopathy with out macular edema, left eye',
    lat: 43.6693,
    long: -79.3897,
    category_id: 3,
    requester_id: 29,
    points_value: 420,
  },
  {
    request_details: 'I need help with primary syphilis of other sites',
    lat: 43.6663,
    long: -79.389,
    category_id: 10,
    requester_id: 18,
    points_value: 520,
  },
  {
    request_details:
      'I need help with nondisplaced fracture of greater trochanter of unspecified femur, initial encounter for closed fracture',
    lat: 43.6468,
    long: -79.3896,
    category_id: 11,
    requester_id: 23,
    points_value: 320,
  },
  {
    request_details:
      'I need help with complete traumatic amputation at elbow level, right arm, subsequent encounter',
    lat: 43.663,
    long: -79.3942,
    category_id: 4,
    requester_id: 22,
    points_value: 620,
  },
  {
    request_details:
      'I need help with nondisplaced fracture of anterior process of unspecified calcaneus, subsequent encounter for fracture with  malunion',
    lat: 43.6477,
    long: -79.3915,
    category_id: 11,
    requester_id: 28,
    time_sensitive: false,
    points_value: 250,
  },
  {
    request_details:
      'I need help with military operation involving nuclear radiation effects of nuclear weapon, civilian, initial encounter',
    lat: 43.6505,
    long: -79.3835,
    category_id: 8,
    requester_id: 1,
    points_value: 270,
  },
  {
    request_details:
      'clearing the snow on my sidewalk and path to my front door.',
    lat: 43.685690,
    long: -79.423140,
    category_id: 4,
    requester_id: 3,
    points_value: 50,
  },
  {
    request_details:
      'clearing the snow on my sidewalk and path along the side of my house.',
    lat: 43.684236,
    long: -79.422123,
    category_id: 4,
    requester_id: 4,
    points_value: 50,
  },
  {
    request_details:
      'feeding my cat Floofer. He needs wet food put out around dinner time.',
    lat: 43.686464,
    long: -79.424809,
    category_id: 3,
    requester_id: 14,
    points_value: 75,
  },
  {
    request_details:
      'clearing the snow on my sidewalk and my driveway so I can use my car to get to work.',
    lat: 43.683379,
    long: -79.423598,
    category_id: 4,
    requester_id: 5,
    points_value: 75,
  },
  {
    request_details:
      'picking up groceries from No Frills. Just need milk, eggs and bread.',
    lat: 43.683689,
    long: -79.420926,
    category_id: 1,
    requester_id: 13,
    points_value: 75,
    start_time: new Date('25 Jan 2022 14:12:00 GMT'),
  },
  {
    request_details:
      'clearing the snow on my sidewalk and my back laneway so I can use my car to get groceries.',
    lat: 43.681871,
    long: -79.420634,
    category_id: 4,
    requester_id: 6,
    points_value: 75,
  },
  {
    request_details:
      'clearing my sidewalk.',
    lat: 43.685536,
    long: -79.420483,
    category_id: 4,
    requester_id: 8,
    points_value: 50,
  },
  {
    request_details:
      'clearing my sidewalk.',
    lat: 43.684383,
    long: -79.425416,
    category_id: 4,
    requester_id: 9,
    points_value: 50,
  },
  {
    request_details:
      'clearing the snow on my sidewalk and my back laneway so I can use my car to get groceries.',
    lat: 43.691722,
    long: -79.415720,
    category_id: 4,
    requester_id: 10,
    points_value: 75,
  },
  {
    request_details:
      'clearing the snow on my sidewalk and my front porch.',
    lat: 43.687654,
    long: -79.413525,
    category_id: 4,
    requester_id: 11,
    points_value: 75,
  },
  {
    request_details:
      'clearing the snow on my sidewalk and my back laneway so I can use my car to get groceries.',
    lat: 43.690748,
    long: -79.417176,
    category_id: 4,
    requester_id: 12,
    points_value: 75,
  },
];

const category_data = [
  { name: 'Groceries', image: '/material/shopping_cart_black_24dp.svg' },
  { name: 'Medical Needs', image: '/material/medication_black_24dp.svg'},
  { name: 'Pet Care', image: '/material/pets_black_24dp.svg' },
  { name: 'Snow Removal', image: '/material/ac_unit_white_24dp.svg' },
  { name: 'Home Maintenance', image: '/material/home_black_24dp.svg' },
  { name: 'Meal Preparation', image: '/material/restaurant_black_24dp.svg' },
  { name: 'Tech Support', image: '/material/computer_black_24dp.svg' },
  { name: 'Gardening', image: '/material/park_black_24dp.svg' },
  { name: 'Exercise', image: '/material/fitness_center_black_24dp.svg' },
  { name: 'Moving Furniture', image: '/material/weekend_black_24dp.svg' },
  { name: 'Mental Wellness', image: '/material/psychology_black_24dp.svg' },
  { name: 'House Sitting', image: '/material/mail_outline_black_24dp.svg' },
];

const resource_data = [
  { name: 'Snow Blower', category_id: 5 },
  { name: 'Lawn Mower', category_id: 5 },
  { name: 'Pickup Truck', category_id: 10 },
  { name: 'Ladder', category_id: 5 },
  { name: 'Wheelbarrow', category_id: 8 },
  { name: 'Hammer Drill', category_id: 5 },
  { name: 'Mac', category_id: 7 },
  { name: 'Windows', category_id: 7 },
  { name: 'Networking', category_id: 7 },
];

const requested_resource_data = [
  { request_id: 3, resource_id: 3 },
  { request_id: 2, resource_id: 1 },
  {
    request_id: 23,
    resource_id: 1,
  },
  {
    request_id: 28,
    resource_id: 4,
  },
  {
    request_id: 20,
    resource_id: 5,
  },
  {
    request_id: 20,
    resource_id: 5,
  },
  {
    request_id: 21,
    resource_id: 5,
  },
  {
    request_id: 4,
    resource_id: 4,
  },
  {
    request_id: 20,
    resource_id: 5,
  },
  {
    request_id: 34,
    resource_id: 2,
  },
  {
    request_id: 10,
    resource_id: 3,
  },
  {
    request_id: 25,
    resource_id: 3,
  },
  {
    request_id: 16,
    resource_id: 6,
  },
  {
    request_id: 15,
    resource_id: 4,
  },
  {
    request_id: 5,
    resource_id: 5,
  },
  {
    request_id: 13,
    resource_id: 2,
  },
  {
    request_id: 18,
    resource_id: 6,
  },
  {
    request_id: 21,
    resource_id: 1,
  },
  {
    request_id: 26,
    resource_id: 3,
  },
  {
    request_id: 26,
    resource_id: 4,
  },
  {
    request_id: 22,
    resource_id: 4,
  },
  {
    request_id: 20,
    resource_id: 1,
  },
  {
    request_id: 26,
    resource_id: 2,
  },
  {
    request_id: 26,
    resource_id: 3,
  },
  {
    request_id: 18,
    resource_id: 1,
  },
  {
    request_id: 15,
    resource_id: 5,
  },
  {
    request_id: 22,
    resource_id: 1,
  },
  {
    request_id: 19,
    resource_id: 3,
  },
  {
    request_id: 20,
    resource_id: 3,
  },
  {
    request_id: 12,
    resource_id: 1,
  },
  {
    request_id: 13,
    resource_id: 4,
  },
  {
    request_id: 11,
    resource_id: 4,
  },
  {
    request_id: 14,
    resource_id: 3,
  },
  {
    request_id: 23,
    resource_id: 2,
  },
  {
    request_id: 12,
    resource_id: 6,
  },
  {
    request_id: 17,
    resource_id: 5,
  },
  {
    request_id: 18,
    resource_id: 4,
  },
  {
    request_id: 6,
    resource_id: 3,
  },
  {
    request_id: 19,
    resource_id: 4,
  },
  {
    request_id: 18,
    resource_id: 5,
  },
  {
    request_id: 18,
    resource_id: 5,
  },
  {
    request_id: 20,
    resource_id: 1,
  },
  {
    request_id: 24,
    resource_id: 1,
  },
  {
    request_id: 13,
    resource_id: 1,
  },
  {
    request_id: 1,
    resource_id: 3,
  },
  {
    request_id: 21,
    resource_id: 1,
  },
  {
    request_id: 24,
    resource_id: 3,
  },
  {
    request_id: 12,
    resource_id: 6,
  },
  {
    request_id: 15,
    resource_id: 6,
  },
  {
    request_id: 22,
    resource_id: 4,
  },
  {
    request_id: 26,
    resource_id: 5,
  },
  {
    request_id: 5,
    resource_id: 4,
  },
  {
    request_id: 37,
    resource_id: 1,
  },
  {
    request_id: 39,
    resource_id: 1,
  },
  {
    request_id: 42,
    resource_id: 1,
  },
];

const personal_resource_data = [
  { person_id: 1, resource_id: 2 },
  { person_id: 3, resource_id: 4 },
  { person_id: 2, resource_id: 1 },
  {
    person_id: 19,
    resource_id: 2,
  },
  {
    person_id: 1,
    resource_id: 1,
  },
  {
    person_id: 17,
    resource_id: 3,
  },
  {
    person_id: 25,
    resource_id: 3,
  },
  {
    person_id: 15,
    resource_id: 2,
  },
  {
    person_id: 27,
    resource_id: 4,
  },
  {
    person_id: 15,
    resource_id: 4,
  },
  {
    person_id: 5,
    resource_id: 1,
  },
  {
    person_id: 2,
    resource_id: 6,
  },
  {
    person_id: 30,
    resource_id: 6,
  },
  {
    person_id: 7,
    resource_id: 5,
  },
  {
    person_id: 18,
    resource_id: 2,
  },
  {
    person_id: 3,
    resource_id: 2,
  },
  {
    person_id: 12,
    resource_id: 6,
  },
  {
    person_id: 12,
    resource_id: 6,
  },
  {
    person_id: 14,
    resource_id: 5,
  },
  {
    person_id: 8,
    resource_id: 5,
  },
  {
    person_id: 4,
    resource_id: 3,
  },
  {
    person_id: 19,
    resource_id: 2,
  },
  {
    person_id: 5,
    resource_id: 1,
  },
  {
    person_id: 16,
    resource_id: 2,
  },
  {
    person_id: 14,
    resource_id: 5,
  },
  {
    person_id: 18,
    resource_id: 4,
  },
  {
    person_id: 26,
    resource_id: 2,
  },
  {
    person_id: 23,
    resource_id: 2,
  },
  {
    person_id: 22,
    resource_id: 1,
  },
  {
    person_id: 13,
    resource_id: 3,
  },
  {
    person_id: 11,
    resource_id: 2,
  },
  {
    person_id: 30,
    resource_id: 2,
  },
  {
    person_id: 1,
    resource_id: 4,
  },
  {
    person_id: 19,
    resource_id: 1,
  },
  {
    person_id: 3,
    resource_id: 6,
  },
  {
    person_id: 30,
    resource_id: 5,
  },
  {
    person_id: 17,
    resource_id: 4,
  },
  {
    person_id: 16,
    resource_id: 4,
  },
  {
    person_id: 30,
    resource_id: 2,
  },
  {
    person_id: 29,
    resource_id: 6,
  },
  {
    person_id: 22,
    resource_id: 5,
  },
  {
    person_id: 20,
    resource_id: 5,
  },
  {
    person_id: 10,
    resource_id: 5,
  },
  {
    person_id: 7,
    resource_id: 3,
  },
  {
    person_id: 6,
    resource_id: 4,
  },
  {
    person_id: 25,
    resource_id: 1,
  },
  {
    person_id: 20,
    resource_id: 5,
  },
  {
    person_id: 18,
    resource_id: 3,
  },
  {
    person_id: 16,
    resource_id: 3,
  },
  {
    person_id: 27,
    resource_id: 4,
  },
  {
    person_id: 8,
    resource_id: 4,
  },
  {
    person_id: 7,
    resource_id: 6,
  },
  {
    person_id: 26,
    resource_id: 4,
  },
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
    body: 'Hey I would love to help you with  your request',
    conversation_id: 1,
    sender_id: 1,
  },
  {
    body: 'Hi, thank you for excepting my request',
    conversation_id: 1,
    sender_id: 2,
  },
  {
    body: 'Hey I would love to help you with  your request',
    conversation_id: 2,
    sender_id: 1,
  },
  {
    body: 'Hi, thank you for excepting my request',
    conversation_id: 2,
    sender_id: 2,
  },
  {
    body: 'Hey I would love to help you with  your request',
    conversation_id: 3,
    sender_id: 1,
  },
  {
    body: 'Hi, thank you for excepting my request',
    conversation_id: 3,
    sender_id: 2,
  },
];

const comment_data = [
  { body: 'Helloooo', request_id: 1, sender_id: 1 },
  { body: 'How are you?', request_id: 1, sender_id: 2 },
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

  await prisma.comment.createMany({
    data: comment_data,
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
