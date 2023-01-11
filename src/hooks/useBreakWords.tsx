export const useBreakWord = (word: string) => {
  // replace -, / and _ with spaces
  const wordWithSpaces = word.replace(/[-/_]/g, ' ');
  return <span className="break-word">{wordWithSpaces}</span>;
};
