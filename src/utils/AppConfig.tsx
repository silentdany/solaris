import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiNetworkChart } from 'react-icons/bi';
import { FaDiscord, FaDollarSign, FaTwitter } from 'react-icons/fa';
import { ImEarth } from 'react-icons/im';
import { IoIosPeople } from 'react-icons/io';

export const AppConfig = {
  site_name: 'Solaris by QTT | Guilde française sur Star Atlas',
  title: 'Solaris',
  destructuredTitle: ['Solaris', 'QTT'],
  url: 'solaris.qtt.com/',
  description:
    'La branche spatiale de QTT, plus grosse communauté de P2E francophone !',
  locale: 'fr',
  social: [
    {
      link: 'https://discord.com/invite/vECEHD6GdJ',
      title: 'Discord QTT',
      icon: <FaDiscord />,
    },
    {
      link: 'https://twitter.com/SOLARIS_byQtt',
      title: 'Twitter Solaris',
      icon: <FaTwitter />,
    },
    // {
    //   link: 'https://www.instagram.com/SOLARIS_byQtt/',
    //   title: 'Instagram Solaris',
    //   icon: FaInstagram,
    // },
  ],
};

export const position = [
  {
    title: 'Factions',
    value: 'MUD / ONI / USTUR',
    icon: IoIosPeople,
  },
  {
    title: 'Secteurs ',
    value: 'Multi-activité',
    icon: BiNetworkChart,
  },
  {
    title: 'Timezone',
    value: 'Multiple - 24/7',
    icon: ImEarth,
  },
];

export const attributs = [
  {
    title: 'Actifs',
    value: '> 100k $',
    icon: FaDollarSign,
  },
  {
    title: 'Membres',
    value: '> 300',
    icon: AiOutlineUsergroupAdd,
  },
  // {
  //   title: 'Followers',
  //   value: '> 130',
  //   icon: IoLogoTwitter,
  // },
];

export const dna = [
  {
    title: 'Mottos',
    picture: '/assets/images/motto.webp',
    text: [
      'Dépasser les difficultés, rester fort et résolument tourné vers l’*avenir*.',
      'Respecter nos règles, notre communauté et nos partenaires.',
      'Communiquer avec *sincérité* envers les membres et agir conformément aux décisions prises.',
    ],
  },
  {
    title: 'Solaris',
    picture: '/assets/images/council.webp',
    text: [
      'Notre équipe veut construire un projet ambitieux et souhaite vivre *collectivement* cette aventure humaine hors du commun.',
      'Nous travaillons à l’élaboration d’une structure sérieuse et pérenne ou chacun peut s’engager à la hauteur de ses ambitions.',
      'Chez nous, comme chacun le sait, de grands pouvoirs impliquent de grandes *responsabilités*.',
    ],
  },
  {
    title: 'Vous',
    picture: '/assets/images/onboard.webp',
    text: [
      'Chacun peut être force de *proposition*, participer aux votes et évoluer dans l’organisation.',
      'Chaque décision est prise dans l’intérêt de la communauté.',
    ],
  },
];

export const ambitions = [
  {
    picture: '/assets/images/structure.webp',
    text: 'Nous offrons un cadre adapté et *flexible* aux différents profils de joueurs et d’investisseurs avec l’opportunité d’intégrer une structure officielle.',
  },
  {
    picture: '/assets/images/network.webp',
    text: 'Nous désirons tisser un *réseau* de partenaires dans Star Atlas et en dehors.',
  },
  {
    picture: '/assets/images/information.webp',
    text: 'Nous mettons en place un département de recherche et développement dans le *Web3* ainsi qu’un pôle de communication permettant de devenir un acteur incontournable de l’information francophone.',
  },
  {
    picture: '/assets/images/award.webp',
    text: 'Nous construisons une organisation autonome décentralisé (*DAO*) inclusive basé sur le mérite.',
  },
];

export const profils = [
  {
    type: 'Communauté',
    picture: '/assets/images/gamer.webp',
    list: [
      'Accès en français aux informations du jeu',
      'Une stratégie de guilde multi-faction au gameplay varié',
      "Joueurs de tous âges/niveaux menés par des leaders d'expérience",
      'Pionniers de Star Atlas en France et fondateurs de communautés (600 à 5000 membres)',
      "Développement d'outils optimisés et performants",
    ],
  },
  {
    type: 'Investisseurs',
    picture: '/assets/images/investor.webp',
    list: [
      'Une organisation exclusiment dédiée à Star Atlas',
      'Une association officielle sécurisant la gestion des actifs',
      'Une équipe rassemblant de nombreuses compétences professionnelles (finance, programmation, networking...)',
      'Des spécialistes crypto, NFT et metavers',
      "Des profits optimisés grâce au développement de l'industrie, du commerce et de différents services",
    ],
  },
];
