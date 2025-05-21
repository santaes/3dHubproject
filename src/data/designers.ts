import { Designer } from '../types';

export const featuredDesigners = [
  {
    id: 'iris-van-herpen',
    name: 'Iris van Herpen',
    image: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg',
    bio: 'Dutch fashion designer known for fusing technology and haute couture. Renowned for her innovative use of 3D printing and organic forms in fashion.',
    featuredWorks: [
      {
        id: 'crystallization-dress',
        title: 'Crystallization Dress',
        image: 'https://images.irisvanherpen.com/3d-crystallization.jpg',
        description: 'A groundbreaking 3D printed dress inspired by the transformation of water to crystal. Showcased at the Amsterdam Fashion Week.',
        printerCompatibility: ['SLA', 'FDM', 'Resin']
      },
      {
        id: 'hybrid-skirt',
        title: 'Hybrid Skirt',
        image: 'https://images.irisvanherpen.com/3d-hybrid-skirt.jpg',
        description: 'A skirt blending flexible 3D printed mesh with delicate fabrics, pushing the boundaries of wearable art.',
        printerCompatibility: ['SLS', 'FDM']
      }
    ]
  },
  {
    id: 'zaha-hadid',
    name: 'Zaha Hadid',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
    bio: 'Legendary architect and designer, celebrated for futuristic architecture and bold, parametric forms. Her work in 3D-printed furniture and interior design is iconic.',
    featuredWorks: [
      {
        id: 'z-chair',
        title: '3D Printed Z-Chair',
        image: 'https://images.zaha-hadid.com/z-chair.jpg',
        description: 'A sculptural chair produced using advanced 3D printing, reflecting Zaha Hadid’s signature fluid geometry.',
        printerCompatibility: ['Industrial FDM', 'SLA']
      },
      {
        id: 'parametric-vase',
        title: 'Parametric Vase',
        image: 'https://images.zaha-hadid.com/parametric-vase.jpg',
        description: 'A vase with complex parametric curves, made possible by multi-material 3D printing.',
        printerCompatibility: ['PolyJet', 'Resin']
      }
    ]
  },
  {
    id: 'julia-korner',
    name: 'Julia Körner',
    image: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg',
    bio: 'Austrian designer specializing in computational design and additive manufacturing. Her work bridges architecture, fashion, and product design.',
    featuredWorks: [
      {
        id: 'arid-dress',
        title: 'Arid Dress',
        image: 'https://images.juliakoerner.com/arid-dress.jpg',
        description: 'A lightweight, breathable dress inspired by desert landscapes, produced using selective laser sintering.',
        printerCompatibility: ['SLS', 'FDM']
      },
      {
        id: 'coral-necklace',
        title: 'Coral Necklace',
        image: 'https://images.juliakoerner.com/coral-necklace.jpg',
        description: 'A 3D printed necklace mimicking coral growth patterns, created for the Venice Biennale.',
        printerCompatibility: ['Resin', 'FDM']
      }
    ]
  },
  {
    id: 'neri-oxman',
    name: 'Neri Oxman',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    bio: 'MIT professor and designer whose work explores the intersection of biology, computation, and design. Famous for pioneering new materials and fabrication techniques.',
    featuredWorks: [
      {
        id: 'wanderers-series',
        title: 'Wanderers Series',
        image: 'https://images.nerioxman.com/wanderers-series.jpg',
        description: 'Wearable 3D printed structures designed for interplanetary travel, merging biology and technology.',
        printerCompatibility: ['SLA', 'PolyJet']
      },
      {
        id: 'mushtari-helmet',
        title: 'Mushtari Helmet',
        image: 'https://images.nerioxman.com/mushtari-helmet.jpg',
        description: 'A helmet grown with living microorganisms and printed with multi-material 3D printers.',
        printerCompatibility: ['PolyJet', 'FDM']
      }
    ]
  },
  {
    id: 'francis-bitonti',
    name: 'Francis Bitonti',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    bio: 'Designer and educator known for algorithmic design and digital fabrication. His studio focuses on computational fashion and architecture.',
    featuredWorks: [
      {
        id: 'molecule-shoes',
        title: 'Molecule Shoes',
        image: 'https://images.francisbitonti.com/molecule-shoes.jpg',
        description: 'A pair of shoes with a molecular lattice structure, 3D printed for maximum strength and flexibility.',
        printerCompatibility: ['SLS', 'FDM']
      },
      {
        id: 'clouds-dress',
        title: 'Clouds Dress',
        image: 'https://images.francisbitonti.com/clouds-dress.jpg',
        description: 'A dress made from interlocking 3D printed components, inspired by cloud formations.',
        printerCompatibility: ['SLA', 'FDM']
      }
    ]
  }
];

export const featuredProducts = [
  {
    id: 1,
    name: '3D Printed Crystallization Dress',
    designer: 'Iris van Herpen',
    price: '$12,999',
    image: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&w=400&q=80',
    category: 'Dresses',
    description: 'A stunning dress inspired by the transformation of water to crystal, created using SLA and FDM 3D printing technologies. Lightweight, flexible, and visually striking.',
    printerCompatibility: ['SLA', 'FDM', 'Resin']
  },
  {
    id: 2,
    name: 'Parametric Statement Necklace',
    designer: 'Francis Bitonti',
    price: '$899',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&w=400&q=80',
    category: 'Accessories',
    description: 'A bold, algorithmically designed necklace featuring interlocking forms. Printed in durable resin for a unique, wearable piece.',
    printerCompatibility: ['Resin', 'FDM']
  },
  {
    id: 3,
    name: '3D Printed Sculptural Chair',
    designer: 'Zaha Hadid',
    price: '$4,599',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&w=400&q=80',
    category: 'Interior',
    description: 'A flowing, sculptural chair produced with industrial FDM printers. Showcases parametric design and advanced 3D fabrication.',
    printerCompatibility: ['Industrial FDM', 'SLA']
  },
];

export const featuredBrands: Designer[] = [
  {
    id: 'adidas',
    name: 'Adidas Futurecraft',
    company: 'Adidas',
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg',
    bio: 'Revolutionary 3D-printed footwear division of Adidas, focusing on performance and sustainability.',
    achievements: [
      'First mass-produced 3D-printed midsole',
      'Development of Digital Light Synthesis technology',
      'Sustainable manufacturing processes'
    ],
    featuredWorks: [
      {
        id: '4d-runner',
        title: '4D Runner',
        image: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg',
        description: 'Performance running shoe with 3D-printed lattice midsole',
        printerCompatibility: ['Carbon DLS Technology']
      }
    ]
  },
  {
    id: 'under-armour',
    name: 'Under Armour Labs',
    company: 'Under Armour',
    image: 'https://images.pexels.com/photos/3682293/pexels-photo-3682293.jpeg',
    bio: 'Innovative division focusing on 3D-printed performance footwear and training gear.',
    achievements: [
      'Development of UA Architech technology',
      'Custom-fit 3D-printed cleats for athletes',
      'Advanced lattice structure design'
    ],
    featuredWorks: [
      {
        id: 'architech-futurist',
        title: 'Architech Futurist',
        image: 'https://images.pexels.com/photos/4495761/pexels-photo-4495761.jpeg',
        description: 'Training shoe with 3D-printed heel structure',
        printerCompatibility: ['Selective Laser Sintering']
      }
    ]
  }
];