export const getValueWithSeparators = (x: number | string) => {
  if (x === 0 || Number.isNaN(x)) return '??';
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
