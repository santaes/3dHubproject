import { Model } from '../types';

export const sampleModels: Model[] = [
  {
    id: '1',
    title: '3D Printed Geometric Dress',
    description: 'A stunning geometric dress design optimized for FDM and SLA 3D printers. Features intricate lattice patterns and adjustable measurements. Tested on Prusa i3 MK3S+, Ultimaker S5, and Formlabs Form 3 printers. Includes detailed printing instructions and recommended settings for PLA, PETG, and TPU materials.',
    price: 49.99,
    designer: {
      id: 'designer1',
      name: 'Emma Designer',
      email: 'emma@example.com',
      picture: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      isDesigner: true,
    },
    images: [
      {
        id: 'img1',
        url: 'https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg',
        alt: '3D Printed Geometric Dress',
        isPrimary: true
      },
      {
        id: 'img2',
        url: 'https://images.pexels.com/photos/7319315/pexels-photo-7319315.jpeg',
        alt: '3D Printed Geometric Dress Detail',
        isPrimary: false
      }
    ],
    modelUrl: 'https://example.com/models/geometric-dress',
    fileFormats: ['STL', '3MF', 'OBJ', 'STEP'],
    likes: 245,
    downloads: 89,
    tags: ['dress', 'geometric', 'fashion', 'FDM-ready', 'SLA-ready'],
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Modular Fashion Jacket',
    description: 'Customizable jacket optimized for large-format FDM printers. Pre-sliced for Creality K1, Bambu Lab X1C, and Voron 2.4. Includes multi-material configurations and assembly instructions. Compatible with PLA, PETG, and TPU materials.',
    price: 39.99,
    designer: {
      id: 'designer2',
      name: 'Alex Maker',
      email: 'alex@example.com',
      picture: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      isDesigner: true,
    },
    images: [
      {
        id: 'img3',
        url: 'https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg',
        alt: 'Modular Fashion Jacket',
        isPrimary: true
      },
      {
        id: 'img4',
        url: 'https://images.pexels.com/photos/7319334/pexels-photo-7319334.jpeg',
        alt: 'Modular Fashion Jacket Components',
        isPrimary: false
      }
    ],
    modelUrl: 'https://example.com/models/modular-jacket',
    fileFormats: ['STL', '3MF', 'STEP', 'F3D'],
    likes: 189,
    downloads: 67,
    tags: ['jacket', 'modular', 'FDM-ready', 'large-format'],
    createdAt: '2025-01-14T15:30:00Z',
    updatedAt: '2025-01-14T15:30:00Z'
  },
  {
    id: '3',
    title: 'Parametric Fashion Sneakers',
    description: 'Revolutionary sneaker design optimized for multi-material 3D printing. Pre-sliced for Prusa MK4 with MMU3 and Bambu Lab X1C. Features flexible TPU soles and rigid PLA/PETG uppers. Includes detailed print settings and assembly guide.',
    price: 34.99,
    designer: {
      id: 'designer3',
      name: 'Sarah Tech',
      email: 'sarah@example.com',
      picture: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      isDesigner: true,
    },
    images: [
      {
        id: 'img5',
        url: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg',
        alt: '3D Printed Sneakers',
        isPrimary: true
      },
      {
        id: 'img6',
        url: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg',
        alt: '3D Printed Sneakers Detail',
        isPrimary: false
      }
    ],
    modelUrl: 'https://example.com/models/fashion-sneakers',
    fileFormats: ['STL', '3MF', 'STEP', 'F3D'],
    likes: 312,
    downloads: 128,
    tags: ['shoes', 'sneakers', 'multi-material', 'TPU'],
    createdAt: '2025-01-16T09:15:00Z',
    updatedAt: '2025-01-16T09:15:00Z'
  },
  {
    id: '4',
    title: 'High Fashion Heels',
    description: 'Elegant high heel design optimized for resin 3D printing. Pre-supported for Elegoo Saturn 3 and Anycubic Photon M3. Includes hollow versions for resin saving and multiple size options. Tested with various tough and flexible resins.',
    price: 44.99,
    designer: {
      id: 'designer4',
      name: 'Maria Style',
      email: 'maria@example.com',
      picture: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      isDesigner: true,
    },
    images: [
      {
        id: 'img7',
        url: 'https://images.pexels.com/photos/3682293/pexels-photo-3682293.jpeg',
        alt: '3D Printed High Heels',
        isPrimary: true
      },
      {
        id: 'img8',
        url: 'https://images.pexels.com/photos/4495761/pexels-photo-4495761.jpeg',
        alt: '3D Printed High Heels Detail',
        isPrimary: false
      }
    ],
    modelUrl: 'https://example.com/models/fashion-heels',
    fileFormats: ['STL', '3MF', 'OBJ'],
    likes: 276,
    downloads: 94,
    tags: ['shoes', 'heels', 'resin-ready', 'SLA-ready'],
    createdAt: '2025-01-17T14:20:00Z',
    updatedAt: '2025-01-17T14:20:00Z'
  }
];