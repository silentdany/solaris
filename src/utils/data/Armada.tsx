import { BiUserCheck, BiDollarCircle, BiTargetLock } from 'react-icons/bi';
import { FiPackage } from 'react-icons/fi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdOutlineCollections } from 'react-icons/md';
import { RiServiceFill, RiSpaceShipLine, RiStarHalfLine } from 'react-icons/ri';
import { TbMilitaryRank } from 'react-icons/tb';

export const pages = ['Flotte', 'Structures', 'Collection', 'Badges'];

const getPercentage = (value: number, values: number[]) => {
  const sum = values.reduce((total, val) => total + val, 0);
  return (value / sum) * 100;
};

export const getResume = (
  capital: number[],
  pubKeys: string[],
  getTotalShipCount: { (): number }
) => [
  {
    icon: <BiUserCheck className="text-2xl text-secondary-200 md:text-4xl" />,
    title: 'Solars incorporés',
    value: pubKeys.length,
  },
  {
    icon: (
      <BiDollarCircle className="text-2xl text-secondary-200 md:text-4xl" />
    ),
    title: 'Capital Total',
    value: +capital.reduce((total, val) => total + val, 0).toFixed(0),
  },
  {
    icon: (
      <RiSpaceShipLine className="text-2xl text-secondary-200 md:text-4xl" />
    ),
    title: 'Vaisseaux',
    value: getTotalShipCount(),
  },
];

export const getCapitalRepartition = (
  capital: number[],
  shipsValue: number,
  structuresValue: number,
  collectiblesValue: number,
  accessValue: number
) => {
  return [
    {
      icon: (
        <RiSpaceShipLine className="text-2xl text-secondary-200 md:text-4xl" />
      ),
      title: 'Flotte',
      value: (
        <span className="flex items-center">
          {+shipsValue.toFixed(0)}
          <span className="opacity-20">$</span>
        </span>
      ),
      sub: `${getPercentage(shipsValue, capital).toFixed(0)}% du capital`,
    },
    {
      icon: (
        <HiOutlineOfficeBuilding className="text-2xl text-secondary-200 md:text-4xl" />
      ),
      title: 'Structures',
      value: (
        <span className="flex items-center">
          {+structuresValue.toFixed(0)}
          <span className="opacity-20">$</span>
        </span>
      ),
      sub: `${getPercentage(structuresValue, capital).toFixed(0)}% du capital`,
    },
    {
      icon: (
        <MdOutlineCollections className="text-2xl text-secondary-200 md:text-4xl" />
      ),
      title: 'Collection',
      value: (
        <span className="flex items-center">
          {+collectiblesValue.toFixed(0)}
          <span className="opacity-20">$</span>
        </span>
      ),
      sub: `${getPercentage(collectiblesValue, capital).toFixed(
        0
      )}% du capital`,
    },
    {
      icon: (
        <TbMilitaryRank className="text-2xl text-secondary-200 md:text-4xl" />
      ),
      title: 'Badges',
      value: (
        <span className="flex items-center">
          {+accessValue.toFixed(0)}
          <span className="opacity-20">$</span>
        </span>
      ),
      sub: `${getPercentage(accessValue, capital).toFixed(0)}% du capital`,
    },
  ];
};

export const getFleetRepartition = (
  getShipCountBySpec: { (spec: string[]): number },
  getTotalShipCount: { (): number; (): number }
) => {
  return [
    {
      icon: (
        <BiTargetLock className="text-2xl text-secondary-200 md:text-4xl" />
      ),
      title: 'Combat',
      value: getShipCountBySpec(['fighter', 'bomber']),
      sub: `${(
        (getShipCountBySpec(['fighter', 'bomber']) / getTotalShipCount()) *
        100
      ).toFixed(0)}% de la flotte`,
    },
    {
      icon: <FiPackage className="text-2xl text-secondary-200 md:text-4xl" />,
      title: 'Transport',
      value: getShipCountBySpec(['freight', 'transport']),
      sub: `${(
        (getShipCountBySpec(['freight', 'transport']) / getTotalShipCount()) *
        100
      ).toFixed(0)}% de la flotte`,
    },
    {
      icon: (
        <RiServiceFill className="text-2xl text-secondary-200 md:text-4xl" />
      ),
      title: 'Service',
      value: getShipCountBySpec(['rescue', 'repair', 'refuel/repair']),
      sub: `${(
        (getShipCountBySpec(['rescue', 'repair', 'refuel/repair']) /
          getTotalShipCount()) *
        100
      ).toFixed(0)}% de la flotte`,
    },
    {
      icon: (
        <RiStarHalfLine className="text-2xl text-secondary-200 md:text-4xl" />
      ),
      title: 'Spé',
      value: getShipCountBySpec([
        'multi-role',
        'bounty hunter',
        'racer',
        'data runner',
      ]),
      sub: `${(
        (getShipCountBySpec([
          'multi-role',
          'bounty hunter',
          'racer',
          'data runner',
        ]) /
          getTotalShipCount()) *
        100
      ).toFixed(0)}% de la flotte`,
    },
  ];
};
