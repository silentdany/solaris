import { BiUserCheck, BiDollarCircle, BiTargetLock } from 'react-icons/bi';
import { FiPackage } from 'react-icons/fi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdOutlineCollections } from 'react-icons/md';
import { RiServiceFill, RiSpaceShipLine, RiStarHalfLine } from 'react-icons/ri';
import { TbMilitaryRank } from 'react-icons/tb';

import { topHodlers } from '../../../data/topHodlers';

export const pages = ['Flotte', 'Structures', 'Collection', 'Badges'];

const getPercentage = (value: number, values: number[]) => {
  const sum = values.reduce((total, val) => total + val, 0);
  return (value / sum) * 100;
};

export const getResume = (
  capital: number[],
  getTotalShipCount: { (): number }
) => [
  {
    icon: <BiUserCheck className="text-4xl text-secondary-200" />,
    title: 'Solars incorporés',
    value: topHodlers.length,
  },
  {
    icon: <BiDollarCircle className="text-4xl text-secondary-200" />,
    title: 'Capital Total',
    value: +capital.reduce((total, val) => total + val, 0).toFixed(0),
  },
  {
    icon: <RiSpaceShipLine className="text-4xl text-secondary-200" />,
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
      icon: <RiSpaceShipLine className="text-4xl text-secondary-200" />,
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
      icon: <HiOutlineOfficeBuilding className="text-4xl text-secondary-200" />,
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
      icon: <MdOutlineCollections className="text-4xl text-secondary-200" />,
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
      icon: <TbMilitaryRank className="text-4xl text-secondary-200" />,
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
      icon: <BiTargetLock className="text-4xl text-secondary-200" />,
      title: 'Combat',
      value: getShipCountBySpec(['fighter', 'bomber']),
      sub: `${(
        (getShipCountBySpec(['fighter', 'bomber']) / getTotalShipCount()) *
        100
      ).toFixed(0)}% de la flotte`,
    },
    {
      icon: <FiPackage className="text-4xl text-secondary-200" />,
      title: 'Transport',
      value: getShipCountBySpec(['freight', 'transport']),
      sub: `${(
        (getShipCountBySpec(['freight', 'transport']) / getTotalShipCount()) *
        100
      ).toFixed(0)}% de la flotte`,
    },
    {
      icon: <RiServiceFill className="text-4xl text-secondary-200" />,
      title: 'Service',
      value: getShipCountBySpec(['rescue', 'repair', 'refuel/repair']),
      sub: `${(
        (getShipCountBySpec(['rescue', 'repair', 'refuel/repair']) /
          getTotalShipCount()) *
        100
      ).toFixed(0)}% de la flotte`,
    },
    {
      icon: <RiStarHalfLine className="text-4xl text-secondary-200" />,
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
