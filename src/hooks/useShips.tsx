import useSWR from 'swr';

const galaxyUrl = 'https://galaxy.staratlas.com/nfts';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useShips = () => {
  const { data, error } = useSWR(galaxyUrl, fetcher);
  const ships = data?.filter((ship) => ship.attributes.itemType === 'ship');

  return {
    ships,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useShips;
