import axios from 'axios';
import { useQuery } from 'react-query';

import useFetchNFTs from './useFetchNFTs';

const galaxyUrl = 'https://galaxy.staratlas.com/players';

// interface GuildMember {
//   avatarId: string;
//   badgeMint: string;
//   totalBalance: number;
//   balances: any[];
//   nfts: Array<{
//     galaxyData: object;
//     quantity: number;
//     valuePerAsset: number;
//   }>;
//   country: string;
//   currencySymbol: string;
//   faction: number;
//   factionRank: number;
//   publicKey: string;
//   globalRank: number;
//   registrationDate: string;
//   updatedAt: string;
//   _id: string;
// }

const useGuildMembers = (pubKeys) => {
  const { data: NFTs, isLoading: isNFTsLoading } = useFetchNFTs();

  // useQuery members when NFT is loaded
  const { isLoading: isGuildMembersLoading, data: guildMembers } = useQuery(
    ['guildMembers', pubKeys],
    async () => {
      const responses = await Promise.all(
        pubKeys.map((pubKey) => axios(`${galaxyUrl}/${pubKey}`))
      );

      const data = await Promise.all(responses.map((res) => res.data));
      const parsedData = data.map(({ balances, ...rest }) => {
        return {
          ...rest,
          nfts: balances.map(({ mint, quantity, valuePerAsset }) => {
            const galaxyData = NFTs.find((galaxy) => galaxy.mint === mint);
            return {
              galaxyData,
              quantity,
              valuePerAsset,
            };
          }),
        };
      });
      return parsedData;
    },
    {
      enabled: !!NFTs,
    }
  );
  return { isLoading: isNFTsLoading || isGuildMembersLoading, guildMembers };
};

export default useGuildMembers;
