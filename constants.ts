import { Product, FAQ, Review } from './types';

export const CLIQ_PHONE: Product = {
  id: 'cliq-01',
  name: 'CLIQ Flip Phone',
  tagline: 'A modern flip phone with a tactile keypad, designed for calm daily use.',
  price: 299,
  description: 'Disconnect to reconnect. The CLIQ phone brings back the satisfying snap of a flip phone with modern essentials like Maps and Music, minus the distractions.',
  colors: [
    { id: 'cloud-white', name: 'Cloud White', hex: '#F5F5F5' },
    { id: 'midnight-grey', name: 'Midnight Grey', hex: '#333333' },
    { id: 'matcha-green', name: 'Matcha Green', hex: '#8BA888' },
  ],
  gallery: [
    { type: 'video', url: 'https://cdn.pixabay.com/video/2024/05/03/210356_large.mp4', poster: 'https://picsum.photos/id/2/800/1000', alt: 'CLIQ Lifestyle Video' }, // Placeholder video
    { type: 'image', url: 'https://picsum.photos/id/201/800/800', alt: 'CLIQ Front View' },
    { type: 'image', url: 'https://picsum.photos/id/3/800/800', alt: 'CLIQ Keypad Detail' },
    { type: 'image', url: 'https://picsum.photos/id/4/800/800', alt: 'CLIQ In Hand' },
  ],
  specs: {
    'Display': '2.8" E-Ink Main + 1.2" OLED Cover',
    'Keypad': 'Tactile backlit mechanical keys',
    'Connectivity': '4G LTE, Wi-Fi 802.11 b/g/n, Bluetooth 5.0',
    'Battery': '2800mAh (4 days standby)',
    'Camera': '8MP Rear + 2MP Front',
    'Storage': '4GB RAM + 64GB Storage',
    'Port': 'USB-C Charging & Audio',
    'OS': 'LightOS (Android based core)',
  },
  features: [
    { title: 'Feel the click again', description: 'Real physical keypad with a satisfying tactile response. Every press feels intentional.' },
    { title: 'Flip to disconnect', description: 'The clamshell design helps you pause, close, and stay present.' },
    { title: 'Small, light, and personal', description: 'Compact enough for any bag. Cute enough to become part of your outfit.' },
  ],
  reviews: [
    { id: 'r1', author: 'Sarah Jenkins', rating: 5, text: "I didn’t expect a flip phone to feel this satisfying. It helps me disconnect after work.", date: '2 days ago' },
    { id: 'r2', author: 'Marcus Chen', rating: 5, text: "Perfect as a second phone when I want less screen time. The aesthetics are top tier.", date: '1 week ago' },
    { id: 'r3', author: 'Elena R.', rating: 5, text: "The keypad alone sold me. Writing texts feels deliberate and nice again.", date: '3 weeks ago' },
  ],
  faqs: [
    { question: "What’s included in the box?", answer: "1 × CLIQ Phone, 1 × Charging Cable, 1 × SIM Eject Tool, 1 × Quick Start Guide." },
    { question: "Will CLIQ work for me?", answer: "Yes! CLIQ is unlocked and works with most GSM carriers worldwide. You can also connect via Wi-Fi for apps and daily use." },
    { question: "Is the keypad fully functional?", answer: "Absolutely. The physical keypad is fully functional and provides a satisfying tactile click. You can type using the keypad or switch to voice-to-text when needed." },
    { question: "What can I do on CLIQ?", answer: "CLIQ is designed for calls, texts, music, navigation, and essential apps — without the overwhelm of a traditional smartphone." },
    { question: "Shipping & delivery", answer: "Orders are processed within 1–2 business days. Delivery time varies by destination, typically between 4–8 business days." },
    { question: "Returns & warranty", answer: "We offer a 30-day return policy and a 1-year limited warranty for peace of mind." },
  ]
};

export const ACCESSORIES = [
  { id: 'acc-1', name: 'Vegan Leather Case', price: 35, image: 'https://picsum.photos/id/24/400/400' },
  { id: 'acc-2', name: 'Braided USB-C Cable', price: 19, image: 'https://picsum.photos/id/25/400/400' },
  { id: 'acc-3', name: 'Minimalist Lanyard', price: 15, image: 'https://picsum.photos/id/26/400/400' },
];
