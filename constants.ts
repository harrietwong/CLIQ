import { Product } from './types';

export const CLIQ_PHONE: Product = {
  id: 'cliq-01',
  name: 'CLIQ Retro Flip Phone',
  tagline: 'A phone that does less. So you can live more.',
  price: 99,
  description: 'Disconnect to reconnect. The CLIQ phone brings back the satisfying snap of a flip phone with modern essentials like Maps and Music, minus the distractions.',
  colors: [
    { 
      id: 'black', 
      name: 'Onyx Black', 
      hex: '#1A1A1A',
      gallery: [
        { type: 'image', url: 'https://i.ibb.co/5XvBXcF5/1.png', alt: 'CLIQ Black Main' },
        { type: 'image', url: 'https://i.ibb.co/5xLs8CFd/2.png', alt: 'CLIQ Black on table' },
        { type: 'image', url: 'https://i.ibb.co/TBMnt1H8/4.png', alt: 'CLIQ Black in hand' },
        { type: 'image', url: 'https://i.ibb.co/0y4v4wBQ/3.png', alt: 'CLIQ Black detail' },
      ]
    },
    { 
      id: 'red', 
      name: 'Deep Red', 
      hex: '#8B0000',
      gallery: [
        { type: 'image', url: 'https://i.ibb.co/SwQCgK0N/1.png', alt: 'CLIQ Red Main' },
        { type: 'image', url: 'https://i.ibb.co/b5hytdy3/image.png', alt: 'CLIQ Red opened' },
        { type: 'image', url: 'https://i.ibb.co/xShJxCW8/2.png', alt: 'CLIQ Red on table' },
        { type: 'image', url: 'https://i.ibb.co/G3nnBYyC/3.png', alt: 'CLIQ Red detail' },
      ]
    },
    { 
      id: 'gold', 
      name: 'Champagne Gold', 
      hex: '#E3CBA8',
      gallery: [
        { type: 'image', url: 'https://i.ibb.co/QvdHQMsq/1.png', alt: 'CLIQ Gold Main' },
        { type: 'image', url: 'https://i.ibb.co/S47nZwjD/2.png', alt: 'CLIQ Gold on table' },
      ]
    },
  ],
  gallery: [],
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
  ],
  faqs: [
    { question: "What’s included in the box?", answer: "1 × CLIQ Phone, 1 × Charging Cable, 1 × SIM Eject Tool, 1 × Quick Start Guide." },
    { question: "Will CLIQ work for me?", answer: "Yes! CLIQ is unlocked and works with most GSM carriers worldwide. You can also connect via Wi-Fi for apps and daily use." },
  ]
};

export const EDITORIAL_VIDEOS = {
  videoA: "https://raw.githubusercontent.com/harrietwong/cliq-assets/main/%E6%BD%AE%E4%BA%BA.mp4",
  videoB: "https://raw.githubusercontent.com/harrietwong/cliq-assets/main/%E9%BB%91%E4%BA%BA%20in%20a%20word.mp4",
  videoC: "https://raw.githubusercontent.com/harrietwong/cliq-assets/main/%E7%94%B7%E7%94%9F%E6%94%BE%E5%8C%85%E5%8C%85%E9%87%8C.mp4",
  videoD: "https://raw.githubusercontent.com/harrietwong/cliq-assets/main/%E7%94%B7%E7%94%9Fok.mp4"
};