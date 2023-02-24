import { BiUserCheck, BiDollarCircle, BiTargetLock } from 'react-icons/bi';
import { FiPackage } from 'react-icons/fi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdOutlineCollections } from 'react-icons/md';
import { RiServiceLine, RiSpaceShipLine, RiFlagLine } from 'react-icons/ri';
import { TbMilitaryRank } from 'react-icons/tb';

import { DefinedAccessOnly } from '../../components/DefinedAccessOnly';
import { getValueWithSeparators } from '../global';

export const pages = ['Flotte', 'Structures', 'Collection', 'Badges'];

const getPercentage = (value: number, values: number[]) => {
  const sum = values.reduce((total, val) => total + val, 0);
  return (value / sum) * 100;
};

export const getResume = (
  capital: number[],
  pubKeys: string[],
  getTotalShipCount: { (): number },
  capitalByMSRP: number[],
  capitalByVWAP: number[],
  fetchOrigin: string
) => {
  const isGuild = fetchOrigin === 'guild';
  return [
    {
      icon: <BiUserCheck className="text-2xl text-secondary-200 md:text-4xl" />,
      title: isGuild ? 'Solars incorporés' : 'Utilisateur',
      value: isGuild ? pubKeys.length : 1,
    },
    {
      icon: (
        <RiSpaceShipLine className="text-2xl text-secondary-200 md:text-4xl" />
      ),
      title: 'Vaisseaux',
      value: getTotalShipCount(),
    },
    {
      icon: (
        <BiDollarCircle className="text-2xl text-secondary-200 md:text-4xl" />
      ),
      title: 'Capital Total',
      value: getValueWithSeparators(
        +capital.reduce((total, val) => total + val, 0).toFixed(0)
      ),
    },
    {
      icon: (
        <BiDollarCircle className="text-2xl text-secondary-200 md:text-4xl" />
      ),
      title: 'Total (MSRP)',
      value: getValueWithSeparators(
        +capitalByMSRP.reduce((total, val) => total + val, 0).toFixed(0)
      ),
    },
    {
      icon: (
        <BiDollarCircle className="text-2xl text-secondary-200 md:text-4xl" />
      ),
      title: 'Total (VWAP)',
      value: getValueWithSeparators(
        +capitalByVWAP.reduce((total, val) => total + val, 0).toFixed(0)
      ),
    },
  ];
};

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
        <span className="flex items-center justify-center">
          <DefinedAccessOnly
            role="staff"
            comp={getValueWithSeparators(+shipsValue.toFixed(0))}
          />
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
        <span className="flex items-center justify-center">
          <DefinedAccessOnly
            role="staff"
            comp={getValueWithSeparators(+structuresValue.toFixed(0))}
          />
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
        <span className="flex items-center justify-center">
          <DefinedAccessOnly
            role="staff"
            comp={getValueWithSeparators(+collectiblesValue.toFixed(0))}
          />
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
        <span className="flex items-center justify-center">
          <DefinedAccessOnly
            role="staff"
            comp={getValueWithSeparators(+accessValue.toFixed(0))}
          />
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
      value: (
        <DefinedAccessOnly
          role="staff"
          comp={getShipCountBySpec([
            'fighter',
            'bomber',
            'bounty hunter',
            'racer',
          ])}
        />
      ),
      sub: `${(
        (getShipCountBySpec(['fighter', 'bomber', 'bounty hunter']) /
          getTotalShipCount()) *
        100
      ).toFixed(0)}% de la flotte`,
    },
    {
      icon: <FiPackage className="text-2xl text-secondary-200 md:text-4xl" />,
      title: 'Transport',
      value: (
        <DefinedAccessOnly
          role="staff"
          comp={getShipCountBySpec(['freight', 'transport'])}
        />
      ),
      sub: `${(
        (getShipCountBySpec(['freight', 'transport']) / getTotalShipCount()) *
        100
      ).toFixed(0)}% de la flotte`,
    },
    {
      icon: (
        <RiServiceLine className="text-2xl text-secondary-200 md:text-4xl" />
      ),
      title: 'Support',
      value: (
        <DefinedAccessOnly
          role="staff"
          comp={getShipCountBySpec([
            'rescue',
            'repair',
            'refuel/repair',
            'multi-role',
            'data runner',
          ])}
        />
      ),
      sub: `${(
        (getShipCountBySpec([
          'rescue',
          'repair',
          'refuel/repair',
          'multi-role',
          'data runner',
        ]) /
          getTotalShipCount()) *
        100
      ).toFixed(0)}% de la flotte`,
    },
    {
      icon: <RiFlagLine className="text-2xl text-secondary-200 md:text-4xl" />,
      title: 'Course',
      value: (
        <DefinedAccessOnly role="staff" comp={getShipCountBySpec(['racer'])} />
      ),
      sub: `${(
        (getShipCountBySpec(['racer']) / getTotalShipCount()) *
        100
      ).toFixed(0)}% de la flotte`,
    },
  ];
};
