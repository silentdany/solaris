/* eslint-disable consistent-return */
import { Row } from 'react-table';

const array = [
  {
    order: 1,
    rarity: 'common',
  },
  {
    order: 2,
    rarity: 'uncommon',
  },
  {
    order: 3,
    rarity: 'rare',
  },
  {
    order: 4,
    rarity: 'epic',
  },
  {
    order: 5,
    rarity: 'legendary',
  },
  {
    order: 6,
    rarity: 'anomaly',
  },
];

export const useRarityOrder = (rowA: Row, rowB: Row, columnId: string) => {
  const aRarity = array.find((item) => item.rarity === rowA.original[columnId]);
  const bRarity = array.find((item) => item.rarity === rowB.original[columnId]);
  if (aRarity && bRarity) {
    if (aRarity.order > bRarity.order) {
      return 1;
    }
    if (aRarity.order < bRarity.order) {
      return -1;
    }
  }
  return null;
};
