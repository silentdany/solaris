/* eslint-disable consistent-return */
import { Row } from 'react-table';

const array = [
  {
    order: 1,
    size: 'xx-small',
  },
  {
    order: 2,
    size: 'x-small',
  },
  {
    order: 3,
    size: 'small',
  },
  {
    order: 4,
    size: 'medium',
  },
  {
    order: 5,
    size: 'large',
  },
  {
    order: 6,
    size: 'capital',
  },
  {
    order: 7,
    size: 'commander',
  },
  {
    order: 8,
    size: 'titan',
  },
];

export const useShipSizeOrder = (rowA: Row, rowB: Row, columnId: string) => {
  const aSize = array.find((item) => item.size === rowA.original[columnId]);
  const bSize = array.find((item) => item.size === rowB.original[columnId]);
  if (aSize && bSize) {
    if (aSize.order > bSize.order) {
      return 1;
    }
    if (aSize.order < bSize.order) {
      return -1;
    }
  }
  return null;
};
