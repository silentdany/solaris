import { useState, useEffect } from 'react';

import useNFTs from './useNFTs';

const galaxyUrl = 'https://galaxy.staratlas.com/players';

interface GuildMember {
  avatarId: string;
  badgeMint: string;
  totalBalance: number;
  balances: any[];
  nfts: Array<{
    galaxyData: object;
    quantity: number;
    valuePerAsset: number;
  }>;
  country: string;
  currencySymbol: string;
  faction: number;
  factionRank: number;
  publicKey: string;
  globalRank: number;
  registrationDate: string;
  updatedAt: string;
  _id: string;
}

const useGuildMembers = (pubKeys) => {
  const { NFTs, NFTsLoading, NFTsError } = useNFTs();

  const [guildMembers, setGuildMembers] = useState<GuildMember[]>([]);
  const [membersLoading, setMembersLoading] = useState(false);
  const [membersError, setMembersError] = useState<any | null>(null);

  const getGalaxyData = (mint: string) => {
    if (!NFTsLoading && !NFTsError) {
      const ship = NFTs.find((galaxy) => galaxy.mint === mint);
      return ship;
    }
    throw new Error(`No ship found for mint ${mint}`);
  };

  useEffect(() => {
    setMembersLoading(true);
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          pubKeys.map((pubKey: any) => fetch(`${galaxyUrl}/${pubKey}`))
        );

        const data = await Promise.all(responses.map((res) => res.json()));
        const parsedData = data.map(({ balances, ...rest }) => {
          return {
            ...rest,
            nfts: balances.map(({ mint, quantity, valuePerAsset }) => {
              const galaxyData = getGalaxyData(mint);
              return {
                galaxyData,
                quantity,
                valuePerAsset,
              };
            }),
          };
        });
        setGuildMembers(parsedData);
      } catch (error) {
        setMembersError(error);
      } finally {
        setMembersLoading(false);
      }
    };
    fetchData();
  }, [pubKeys]);

  return { guildMembers, membersLoading, membersError };
};

export default useGuildMembers;