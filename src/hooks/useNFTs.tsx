import useSWR from 'swr';

const galaxyUrl = 'https://galaxy.staratlas.com/nfts';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useNFTs = () => {
  const { data, error } = useSWR(galaxyUrl, fetcher);
  const NFTs = data;
  console.log('🚀 ~ file: useNFTs.tsx:9 ~ useNFTs ~ NFTs', NFTs);

  return {
    NFTs,
    NFTsLoading: !error && !data,
    NFTsError: error,
  };
};

export default useNFTs;
