import { Designer } from '../types';

export const featuredDesigners: Designer[] = [
  {
    id: 'julia-koerner',
    name: 'Julia Körner',
    company: 'JK Design GmbH',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    bio: 'Award-winning designer specializing in 3D-printed fashion and architecture. Known for her work with Iris van Herpen and costume design for Black Panther.',
    achievements: [
      'Collaborated with Chanel on 3D-printed haute couture',
      'Created innovative 3D-printed costumes for Marvel\'s Black Panther',
      'Multiple exhibitions at prestigious museums worldwide'
    ],
    featuredWorks: [
      {
        id: 'digital-nature',
        title: 'Digital Nature Collection',
        image: 'https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg',
        description: 'Biomimetic 3D-printed dresses inspired by natural structures',
        printerCompatibility: ['SLA Printers', 'Multi-Material FDM']
      }
    ]
  },
  {
    id: 'nervous-system',
    name: 'Jessica Rosenkrantz',
    company: 'Nervous System',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    bio: 'Pioneering generative design in 3D-printed fashion with innovative software tools and techniques.',
    achievements: [
      'Created the first 4D-printed dress',
      'Developed custom software for generative design',
      'Permanent collection at MoMA'
    ],
    featuredWorks: [
      {
        id: 'kinematics-dress',
        title: 'Kinematics Dress',
        image: 'https://images.pexels.com/photos/7319315/pexels-photo-7319315.jpeg',
        description: '4D-printed dress that unfolds from compressed form',
        printerCompatibility: ['SLA Printers', 'FDM with Soluble Supports']
      }
    ]
  }
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