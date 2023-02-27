export const getValueWithSeparators = (x: number | string) => {
  if (x === 0 || Number.isNaN(x)) return '??';
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
