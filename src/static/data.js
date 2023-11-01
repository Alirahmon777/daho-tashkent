import { LinkedinIcon, FacebookIcon, TwitterIcon, InstagramIcon, TelegramIcon } from 'assets';

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

export const footer = {
  socials: [
    { path: 'https://www.facebook.com/dahotashkentuz', name: 'facebook icon', icon: FacebookIcon },
    { path: 'https://www.instagram.com/daho.uz/', name: 'instagram icon', icon: InstagramIcon },
    { path: 'https://t.me/dahotashkent', name: 'telegram icon', icon: TelegramIcon },
    { path: 'http://twitter.com/dahotashkent', name: 'twitter - X icon', icon: TwitterIcon },
    { path: 'https://www.linkedin.com/in/daho-tashkent-393b1b254/', name: 'linkedin icon', icon: LinkedinIcon },
  ],
};
