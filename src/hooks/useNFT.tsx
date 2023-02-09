import { useState, useEffect } from 'react';

import useGuildMembers from './useGuildMembers';
import { rarityOrder } from './useRarityOrder';

export interface NFT {
  data: {
    galaxyData: GalaxyData;
    quantity: number;
    valuePerAsset: number;
  };
  quantity: number;
  value: number;
}
export interface GalaxyData {
  airdrops: Array<Object>;
  attributes: Attributes;
  collection: Object;
  createdAt: string;
  deactivated: boolean;
  description: string;
  id: string;
  image: string;
  markets: Array<Object>;
  media: Object;
  mint: string;
  name: string;
  primarySales: Array<Object>;
  slots: Object;
  symbol: string;
  tradeSettings: Object;
  updatedAt: string;
  _id: string;
}

export interface Attributes {
  category: string;
  class: string;
  itemType: string;
  make: string;
  model: string;
  rarity: string;
  spec: string;
  tier: number;
  unitHeight: number;
  unitLength: number;
  unitWidth: number;
}

const useNFT = (pubKeys: string[], NFTtype: string) => {
  const { guildMembers, membersLoading, membersError } =
    useGuildMembers(pubKeys);

  const [nft, setNFT] = useState<NFT[]>([]);
  const [nftLoading, setNFTLoading] = useState(true);

  const [nftValue, setNFTValue] = useState(0);

  const getNFT = (members) => {
    const totalNFT = members?.reduce((acc, member) => {
      const ships = member.nfts.filter(
        (n) => n?.galaxyData?.attributes.itemType === NFTtype
      );
      ships.forEach((ship) => {
        const { mint } = ship.galaxyData;
        if (acc[mint]) {
          acc[mint].quantity += ship.quantity;
          acc[mint].value += ship.valuePerAsset * ship.quantity;
        } else {
          acc[mint] = {
            data: ship,
            quantity: ship.quantity,
            value: ship.valuePerAsset * ship.quantity,
          };
        }
      });
      return acc;
    }, {});
    return Object.values(totalNFT);
  };

  const sortNFT = (f: any[]) =>
    f.sort((a, b) => {
      const rarityA: any = rarityOrder.find(
        (item) => item.rarity === a.data.galaxyData.attributes.rarity
      );

      const rarityB: any = rarityOrder.find(
        (item) => item.rarity === b.data.galaxyData.attributes.rarity
      );
      return rarityB.order - rarityA.order;
    });

  const totalNFTValue = nft.reduce((acc, ship) => acc + ship.value, 0);

  useEffect(() => {
    if (!membersLoading || !membersError) {
      const sortedNFT = sortNFT(getNFT(guildMembers));
      setNFT(sortedNFT);
      setNFTValue(totalNFTValue);
    }
  }, [guildMembers, membersError, membersLoading, pubKeys, totalNFTValue]);

  useEffect(() => {
    if (nft.length !== 0) {
      setNFTLoading(false);
    }
  }, [nft]);

  return { nft, nftValue, nftLoading };
};

export default useNFT;
