import { Row } from 'react-table';

export const useInsensitiveSort = (prev: Row, curr: Row, columnId: string) => {
  if (
    prev.original[columnId].toLowerCase() >
    curr.original[columnId].toLowerCase()
  ) {
    return 1;
  }
  if (
    prev.original[columnId].toLowerCase() <
    curr.original[columnId].toLowerCase()
  ) {
    return -1;
  }
  return 0;
};
