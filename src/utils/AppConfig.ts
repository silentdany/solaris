import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiNetworkChart } from 'react-icons/bi';
import { FaDollarSign } from 'react-icons/fa';
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
  twitter: 'https://twitter.com/SOLARIS_byQtt',
  discord: 'https://discord.com/invite/vECEHD6GdJ',
  instagram: 'https://www.instagram.com/SOLARIS_byQtt/',
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
    value: '> 1M $',
    icon: FaDollarSign,
  },
  {
    title: 'Membres',
    value: '> 500',
    icon: AiOutlineUsergroupAdd,
  },
  // {
  //   title: 'Followers',
  //   value: '> 130',
  //   icon: IoLogoTwitter,
  // },
];

export const values = [
  {
    number: '01',
    text: [
      'Dépasser les difficultés, rester fort et résolument tourné vers l’*avenir*.',
      'Respecter nos règles, notre *communauté* et nos partenaires.',
      'Nous travaillons à l’élaboration d’une *structure* sérieuse et pérenne ou chacun peut s’engager à la hauteur de ses ambitions.',
    ],
  },
  {
    number: '02',
    text: [
      'Chez nous, comme chacun le sait, de grands pouvoirs impliquent de grandes *responsabilités*.',
      'Chacun peut être force de *proposition*, participer aux votes et évoluer dans l’organisation.',
      'Chaque décision est prise dans l’intérêt de la communauté.',
    ],
  },
  {
    number: '03',
    text: [
      'Communiquer avec *sincérité* envers les membres et agir conformément aux décisions prises.',
      'Notre équipe veut construire un projet *ambitieux* et souhaite vivre collectivement cette aventure humaine hors du commun.',
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
    type: 'Joueur',
    picture: '/assets/images/gamer.webp',
    list: [
      'Jouer en solo ou en groupe',
      'Explorer les secteurs',
      'Participer aux événements',
      'Participer aux votes',
      'Participer aux missions',
      'Participer aux raids',
    ],
  },
  {
    type: 'Investisseur',
    picture: '/assets/images/investor.webp',
    list: [
      'Investir dans la communauté',
      'Investir dans les projets',
      'Participer aux votes',
      'Participer aux missions',
      'Participer aux raids',
    ],
  },
];
