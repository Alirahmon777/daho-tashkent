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
  corporativeOne,
  corporativeTwo,
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
    { component_id: '#home', name: 'Bosh Sahifa' },
    { component_id: '#concept', name: 'Koncepciya' },
    { component_id: '#project', name: 'Loyiha' },
    { component_id: '#gallery', name: 'Galereya' },
    {
      name: 'Planirovkalar',
      child: [
        { component_id: '#apartments', name: 'Kvartiralar' },
        { component_id: '#offices', name: 'Ofislar' },
      ],
    },
    { component_id: '#location', name: 'Lokatsiya' },
    { component_id: '#footer', name: 'Aloqa' },
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
  { image: heroThree, name: 'advantages image' },
];

export const corporativCarousel = [
  { image: corporativeOne, name: 'corporative image' },
  { image: corporativeTwo, name: 'corporative image' },
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
        title: '1- xonali',
        image: apartmentOneOne,
        info: [
          {
            name: 'Umumiy maydoni',
            metr: '43.67 m²',
          },
          {
            name: 'Balkon',
            metr: '4.58 m²',
          },
          {
            name: 'Mehmonxona + Oshxona',
            metr: '29.87 m²',
          },
          {
            name: 'Dahliz',
            metr: '4.60 m²',
          },
          {
            name: 'Hammom',
            metr: '4.62 m²',
          },
        ],
      },
      {
        title: '1 - xonali',
        image: apartmentOneTwo,
        info: [
          {
            name: 'Umumiy maydoni',
            metr: '40.97 m²',
          },
          {
            name: 'Mehmonxona + Oshxona',
            metr: '30.76 m²',
          },
          {
            name: 'Dahliz',
            metr: '4.60 m²',
          },
          {
            name: 'Hammom',
            metr: '4.62 m²',
          },
        ],
      },
      {
        title: '1 - xonali',
        image: apartmentOneThree,
        info: [
          {
            name: 'Umumiy maydoni',
            metr: '38.78 m²',
          },
          {
            name: 'Balkon',
            metr: '4.50 m²',
          },
          {
            name: 'Mehmonxona + Oshxona',
            metr: '26.22 m²',
          },
          {
            name: 'Dahliz',
            metr: '4.72 m²',
          },
          {
            name: 'Hammom',
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
        title: '2 - xonali',
        image: apartmentTwoOne,
        info: [
          {
            name: 'Umumiy maydoni',
            metr: '51.7 m²',
          },
          {
            name: 'Balkon',
            metr: '4.24 m²',
          },
          {
            name: 'Mehmonxona',
            metr: '17.57 m²',
          },
          {
            name: 'Oshxona',
            metr: '4.27 m²',
          },
          {
            name: 'Yotoqxona',
            metr: '14.42 m²',
          },
          {
            name: 'Dahliz',
            metr: '7.19 m²',
          },
          {
            name: 'Hammom',
            metr: '4.01 m²',
          },
        ],
      },
      {
        title: '2 - xonali',
        image: apartmentTwoTwo,
        info: [
          {
            name: 'Umumiy maydoni',
            metr: '71.40 m²',
          },
          {
            name: 'Balkon',
            metr: '5.60 m²',
          },
          {
            name: 'Mehmonxona',
            metr: '30.36 m²',
          },
          {
            name: 'Oshxona',
            metr: '8.19 m²',
          },
          {
            name: 'Yotoqxona',
            metr: '17.31 m²',
          },
          {
            name: 'Dahliz',
            metr: '5.30 m²',
          },
          {
            name: 'Hammom',
            metr: '5.00 m²',
          },
        ],
      },
      {
        title: '2 - xonali',
        image: apartmentTwoThree,
        info: [
          {
            name: 'Umumiy maydoni',
            metr: '53.28 m²',
          },

          {
            name: 'Mehmonxona',
            metr: '19.14 m²',
          },
          {
            name: 'Oshxona',
            metr: '5.26 m²',
          },
          {
            name: 'Yotoqxona',
            metr: '17.38 m²',
          },
          {
            name: 'Dahliz',
            metr: '5.01 m²',
          },
          {
            name: 'Hammom',
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
        title: '3 - xonali',
        image: apartmentThreeOne,
        info: [
          {
            name: 'Umumiy maydoni',
            metr: '81.58 m²',
          },
          {
            name: 'Balkon',
            metr: '4.30 m²',
          },
          {
            name: 'Mehmonxona',
            metr: '16.83 m²',
          },
          {
            name: 'Oshxona',
            metr: '7.60 m²',
          },
          {
            name: 'Yotoqxona 1',
            metr: '18.49 m²',
          },
          {
            name: 'Yotoqxona 2',
            metr: '12.20 m²',
          },
          {
            name: 'Dahliz',
            metr: '10.34 m²',
          },
          {
            name: 'Hammom 1',
            metr: '5.23 m²',
          },
          {
            name: 'Hammom 2',
            metr: '5.61 m²',
          },
        ],
      },
      {
        title: '3 - xonali',
        image: apartmentThreeOne,
        info: [
          {
            name: 'Umumiy maydoni',
            metr: '81.58 m²',
          },
          {
            name: 'Balkon',
            metr: '4.30 m²',
          },
          {
            name: 'Mehmonxona',
            metr: '16.83 m²',
          },
          {
            name: 'Oshxona',
            metr: '7.60 m²',
          },
          {
            name: 'Yotoqxona 1',
            metr: '18.49 m²',
          },
          {
            name: 'Yotoqxona 2',
            metr: '12.20 m²',
          },
          {
            name: 'Dahliz',
            metr: '10.34 m²',
          },
          {
            name: 'Hammom 1',
            metr: '5.23 m²',
          },
          {
            name: 'Hammom 2',
            metr: '5.61 m²',
          },
        ],
      },
      {
        title: '3 - xonali',
        image: apartmentThreeOne,
        info: [
          {
            name: 'Umumiy maydoni',
            metr: '81.58 m²',
          },
          {
            name: 'Balkon',
            metr: '4.30 m²',
          },
          {
            name: 'Mehmonxona',
            metr: '16.83 m²',
          },
          {
            name: 'Oshxona',
            metr: '7.60 m²',
          },
          {
            name: 'Yotoqxona 1',
            metr: '18.49 m²',
          },
          {
            name: 'Yotoqxona 2',
            metr: '12.20 m²',
          },
          {
            name: 'Dahliz',
            metr: '10.34 m²',
          },
          {
            name: 'Hammom 1',
            metr: '5.23 m²',
          },
          {
            name: 'Hammom 2',
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
        title: '1 ofis',
        image: officeOne,
        info: [
          {
            name: 'Umimiy maydoni',
            metr: '110.71 m²',
          },
          {
            name: 'Shift balandligi',
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
        title: '2 ofis',
        image: officeTwo,
        info: [
          {
            name: 'Umimiy maydoni',
            metr: '60.91 m²',
          },
          {
            name: 'Shift balandligi',
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
        title: '3 ofis',
        image: officeThree,
        info: [
          {
            name: 'Umimiy maydoni',
            metr: '60.91 m²',
          },
          {
            name: 'Shift balandligi',
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
        title: '4 ofis',
        image: officeFour,
        info: [
          {
            name: 'Umimiy maydoni',
            metr: '64.16 m²',
          },
          {
            name: 'Shift balandligi',
            metr: '4.5 m²',
          },
        ],
      },
    ],
  },
];
