import {
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  TelegramIcon,
  heroOne,
  heroTwo,
  heroThree,
  heroFour,
  progressOne,
  progressTwo,
  advantagesOne,
  advantagesTwo,
  advantagesThree,
  corporativeOne,
  infrastructureOne,
  infrastructureTwo,
  infrastructureThree,
  apartmentOneOne,
  apartmentOneTwo,
  apartmentOneThree,
  apartmentTwoOne,
  apartmentTwoTwo,
  apartmentTwoThree,
  apartmentThreeOne,
  officeOne,
  officeTwo,
  officeThree,
  officeFour,
} from 'assets';

export const header = {
  nav: [
    { component_id: '#home', label: 'home' },
    { component_id: '#concept', label: 'concept' },
    { component_id: '#project', label: 'project' },
    { component_id: '#gallery', label: 'gallery' },
    {
      label: 'plans',
      child: [
        { component_id: '#apartments', label: 'apartments' },
        { component_id: '#offices', label: 'offices' },
      ],
    },
    { component_id: '#location', label: 'location' },
    { component_id: '#footer', label: 'contact' },
  ],
};

export const heroCarousel = [
  { image: heroOne, name: 'hero image' },
  { image: heroTwo, name: 'hero image' },
  { image: heroThree, name: 'hero image' },
  { image: heroFour, name: 'hero image' },
];

export const progressCarousel = [
  { image: progressOne, name: 'hero image' },
  { image: progressTwo, name: 'hero image' },
];

export const advantagesCarousel = [
  { image: advantagesOne, name: 'advantages image' },
  { image: advantagesTwo, name: 'advantages image' },
  { image: advantagesThree, name: 'advantages image' },
];

export const corporativCarousel = [
  { image: corporativeOne, name: 'corporative image' },
  { image: heroFour, name: 'corporative image' },
];

export const infrastructureCarousel = [
  { image: infrastructureOne, name: 'infrastructure image' },
  { image: infrastructureTwo, name: 'infrastructure image' },
  { image: infrastructureThree, name: 'infrastructure image' },
];

export const footer = {
  socials: [
    { path: 'https://www.facebook.com/dahotashkentuz', name: 'facebook icon', icon: FacebookIcon },
    { path: 'https://www.instagram.com/daho.uz/', name: 'instagram icon', icon: InstagramIcon },
    { path: 'https://t.me/dahotashkent', name: 'telegram icon', icon: TelegramIcon },
    { path: 'http://twitter.com/dahotashkent', name: 'twitter - X icon', icon: TwitterIcon },
    { path: 'https://www.linkedin.com/in/daho-tashkent-393b1b254/', name: 'linkedin icon', icon: LinkedinIcon },
  ],
};

export const tabData = [
  {
    name: '1-',
    content: [
      {
        title: 'one_room_apartment_title',
        image: apartmentOneOne,
        info: [
          {
            name: 'room_total_area',
            metr: '43.67 m²',
          },
          {
            name: 'room_balcony',
            metr: '4.58 m²',
          },
          {
            name: 'room_living_kitchen',
            metr: '29.87 m²',
          },
          {
            name: 'room_hallway',
            metr: '4.60 m²',
          },
          {
            name: 'room_bath',
            metr: '4.62 m²',
          },
        ],
      },
      {
        title: 'one_room_apartment_title',
        image: apartmentOneTwo,
        info: [
          {
            name: 'room_total_area',
            metr: '40.97 m²',
          },
          {
            name: 'room_living_kitchen',
            metr: '30.76 m²',
          },
          {
            name: 'room_hallway',
            metr: '4.60 m²',
          },
          {
            name: 'room_bath',
            metr: '4.62 m²',
          },
        ],
      },
      {
        title: 'one_room_apartment_title',
        image: apartmentOneThree,
        info: [
          {
            name: 'room_total_area',
            metr: '38.78 m²',
          },
          {
            name: 'room_balcony',
            metr: '4.50 m²',
          },
          {
            name: 'room_living_kitchen',
            metr: '26.22 m²',
          },
          {
            name: 'room_hallway',
            metr: '4.72 m²',
          },
          {
            name: 'room_bath',
            metr: '4.61 m²',
          },
        ],
      },
    ],
  },
  {
    name: '2-',
    content: [
      {
        title: 'two_room_apartment_title',
        image: apartmentTwoOne,
        info: [
          {
            name: 'room_total_area',
            metr: '51.7 m²',
          },
          {
            name: 'room_balcony',
            metr: '4.24 m²',
          },
          {
            name: 'room_living',
            metr: '17.57 m²',
          },
          {
            name: 'room_kitchen',
            metr: '4.27 m²',
          },
          {
            name: 'room_bed',
            metr: '14.42 m²',
          },
          {
            name: 'room_hallway',
            metr: '7.19 m²',
          },
          {
            name: 'room_bath',
            metr: '4.01 m²',
          },
        ],
      },
      {
        title: 'two_room_apartment_title',
        image: apartmentTwoTwo,
        info: [
          {
            name: 'room_total_area',
            metr: '71.40 m²',
          },
          {
            name: 'room_balcony',
            metr: '5.60 m²',
          },
          {
            name: 'room_living',
            metr: '30.36 m²',
          },
          {
            name: 'room_kitchen',
            metr: '8.19 m²',
          },
          {
            name: 'room_bed',
            metr: '17.31 m²',
          },
          {
            name: 'room_hallway',
            metr: '5.30 m²',
          },
          {
            name: 'room_bath',
            metr: '5.00 m²',
          },
        ],
      },
      {
        title: 'two_room_apartment_title',
        image: apartmentTwoThree,
        info: [
          {
            name: 'room_total_area',
            metr: '53.28 m²',
          },

          {
            name: 'room_living',
            metr: '19.14 m²',
          },
          {
            name: 'room_kitchen',
            metr: '5.26 m²',
          },
          {
            name: 'room_bed',
            metr: '17.38 m²',
          },
          {
            name: 'room_hallway',
            metr: '5.01 m²',
          },
          {
            name: 'room_bath',
            metr: '5.00 m²',
          },
        ],
      },
    ],
  },
  {
    name: '3-',
    content: [
      {
        title: 'three_room_apartment_title',
        image: apartmentThreeOne,
        info: [
          {
            name: 'room_total_area',
            metr: '81.58 m²',
          },
          {
            name: 'room_balcony',
            metr: '4.30 m²',
          },
          {
            name: 'room_living',
            metr: '16.83 m²',
          },
          {
            name: 'room_kitchen',
            metr: '7.60 m²',
          },
          {
            name: 'one_room_bed',
            metr: '18.49 m²',
          },
          {
            name: 'two_room_bed',
            metr: '12.20 m²',
          },
          {
            name: 'room_hallway',
            metr: '10.34 m²',
          },
          {
            name: 'one_room_bath',
            metr: '5.23 m²',
          },
          {
            name: 'two_room_bath',
            metr: '5.61 m²',
          },
        ],
      },
      {
        title: 'three_room_apartment_title',
        image: apartmentThreeOne,
        info: [
          {
            name: 'room_total_area',
            metr: '81.58 m²',
          },
          {
            name: 'room_balcony',
            metr: '4.30 m²',
          },
          {
            name: 'room_living',
            metr: '16.83 m²',
          },
          {
            name: 'room_kitchen',
            metr: '7.60 m²',
          },
          {
            name: 'one_room_bed',
            metr: '18.49 m²',
          },
          {
            name: 'two_room_bed',
            metr: '12.20 m²',
          },
          {
            name: 'room_hallway',
            metr: '10.34 m²',
          },
          {
            name: 'one_room_bath',
            metr: '5.23 m²',
          },
          {
            name: 'two_room_bath',
            metr: '5.61 m²',
          },
        ],
      },
      {
        title: 'three_room_apartment_title',
        image: apartmentThreeOne,
        info: [
          {
            name: 'room_total_area',
            metr: '81.58 m²',
          },
          {
            name: 'room_balcony',
            metr: '4.30 m²',
          },
          {
            name: 'room_living',
            metr: '16.83 m²',
          },
          {
            name: 'room_kitchen',
            metr: '7.60 m²',
          },
          {
            name: 'one_room_bed',
            metr: '18.49 m²',
          },
          {
            name: 'two_room_bed',
            metr: '12.20 m²',
          },
          {
            name: 'room_hallway',
            metr: '10.34 m²',
          },
          {
            name: 'one_room_bath',
            metr: '5.23 m²',
          },
          {
            name: 'two_room_bath',
            metr: '5.61 m²',
          },
        ],
      },
    ],
  },
];

export const officeTabData = [
  {
    name: '01',
    content: [
      {
        title: 'one_room_office_title',
        image: officeOne,
        info: [
          {
            name: 'room_total_area',
            metr: '110.71 m²',
          },
          {
            name: 'room_ceiling_height',
            metr: '4.5 m²',
          },
        ],
      },
    ],
  },
  {
    name: '02',
    content: [
      {
        title: 'two_room_office_title',
        image: officeTwo,
        info: [
          {
            name: 'room_total_area',
            metr: '60.91 m²',
          },
          {
            name: 'room_ceiling_height',
            metr: '4.5 m²',
          },
        ],
      },
    ],
  },
  {
    name: '03',
    content: [
      {
        title: 'three_room_office_title',
        image: officeThree,
        info: [
          {
            name: 'room_total_area',
            metr: '60.91 m²',
          },
          {
            name: 'room_ceiling_height',
            metr: '4.5 m²',
          },
        ],
      },
    ],
  },
  {
    name: '04',
    content: [
      {
        title: 'four_room_office_title',
        image: officeFour,
        info: [
          {
            name: 'room_total_area',
            metr: '64.16 m²',
          },
          {
            name: 'room_ceiling_height',
            metr: '4.5 m²',
          },
        ],
      },
    ],
  },
];
