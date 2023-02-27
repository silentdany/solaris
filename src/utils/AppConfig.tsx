import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiNetworkChart } from 'react-icons/bi';
import { FaDiscord, FaDollarSign, FaTwitter } from 'react-icons/fa';
import { ImEarth } from 'react-icons/im';
import { IoIosPeople } from 'react-icons/io';

export const AppConfig = {
  site_name: 'Solaris by QTT | Guilde française sur Star Atlas',
  title: 'Solaris',
  destructuredTitle: ['Solaris', 'QTT'],
  url: 'solaris-qtt.com/',
  description:
    'Solaris, la branche spatiale de QTT, communauté P2E francophone !',
  locale: 'fr_FR',
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

export const joinData = {
  title: 'Devenir membre Solaris',
  text: 'Vous souhaitez rejoindre Solaris ?',
  url: AppConfig.social[0]!.link,
};

export const position = [
  {
    title: 'Factions',
    value: 'MUD / ONI / USTUR',
    icon: IoIosPeople,
  },
  {
    title: 'Secteurs ',
    value: 'Services',
    icon: BiNetworkChart,
  },
  {
    title: 'Timezone',
    value: 'Multiple - 24/7',
    icon: ImEarth,
  },
];

export const datas = [
  {
    title: 'Actifs',
    value: '> 170k $',
    icon: FaDollarSign,
  },
  {
    title: 'Membres',
    value: '40',
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
    title: 'Esprit',
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

export const project = [
  {
    picture: '/assets/images/map.webp',
    text: 'Nous voulons créer un espace bienveillant et sécurisé afin de *rassembler* la plus grande communauté francophone, active (24/7) et présente sur tous les continents.',
  },
  {
    picture: '/assets/images/crowd.webp',
    text: 'Nous continuerons d’organiser de *rencontres* et de participer aux évènements réels (IRL), tout en conservant un espace vivant, créatif et dynamique sur les réseaux.',
  },
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

export const profiles = [
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

export const resources = [
  {
    type: 'skills',
    picture: '/assets/images/workshop.webp',
    text: '### De *réelles* compétences professionnelles au service de la guilde',
    list: [
      'Développement technologique',
      'Ressources humaines',
      'Gestion de projet',
      'Journalisme web',
      'Investissement',
      'Montage vidéo',
      'Entreprenariat',
      'Juridique',
      'Trading',
    ],
  },
  {
    type: 'Team',
    picture: '/assets/images/meeting.webp',
    text: '### Une équipe *soudée* de 12 personnes',
    subText: [
      'forte d’une première expérience collective d’un an',
      '*avec un nouveau projet*',
    ],
    list: [
      'Elaboration de la structure de guilde',
      'Réalisation d’animations et de Lives',
      'Recrutement de 700+ membres',
      'Développement de projets UE5',
      'Développement d’outils Web3',
      'Génération de contenu par IA',
      'Création de sites internet',
      'Rédaction de litepaper',
      'Réalisation de trailers',
    ],
  },
];
