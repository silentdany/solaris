import axios from 'axios';
import { useQuery } from 'react-query';

const galaxyUrl = 'https://galaxy.staratlas.com/nfts';

const useFetchNFTs = () => {
  return useQuery('nfts', async () => {
    const { data } = await axios(galaxyUrl);
    return data;
  });
};

export default useFetchNFTs;
