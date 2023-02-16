import { useState, useEffect } from 'react';

import useGuildMembers from './useGuildMembers';
import { rarityOrder } from './useRarityOrder';
import { shipSizeOrder } from './useShipSizeOrder';

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
  tradeSettings: TradeSettings;
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

export interface TradeSettings {
  msrp: { currencySymbol: string; value: number };
  vwap: number;
  saleTime?: number;
}

const hideSensibleData = (ships: NFT[], nftSize: string, nftRarity: string) => {
  const getSizeOrder = (size: string) => {
    return shipSizeOrder.find((item) => item.size === size)?.order;
  };

  const getRarityOrder = (rarity: string) => {
    return rarityOrder.find((item) => item.rarity === rarity)?.order;
  };

  const filteredShips = ships.filter((ship: NFT) => {
    const sizeOrderValue = getSizeOrder(ship.data.galaxyData.attributes.class);
    const rarityOrderValue = getRarityOrder(
      ship.data.galaxyData.attributes.rarity
    );
    const targetSizeOrderValue = getSizeOrder(nftSize)! - 1;
    const targetRarityOrderValue = getRarityOrder(nftRarity)! - 1;

    if (
      sizeOrderValue &&
      targetSizeOrderValue &&
      sizeOrderValue > targetSizeOrderValue
    ) {
      return false;
    }

    if (
      rarityOrderValue &&
      targetRarityOrderValue &&
      rarityOrderValue > targetRarityOrderValue
    ) {
      return false;
    }

    return true;
  });

  return filteredShips;
};

const useNFT = (
  pubKeys: string[],
  NFTtype: string,
  userLevel: string | undefined
) => {
  const { guildMembers, membersLoading, membersError } =
    useGuildMembers(pubKeys);

  const [nft, setNFT] = useState<NFT[]>([]);
  const [nftLoading, setNFTLoading] = useState(true);

  const [nftValue, setNFTValue] = useState(0);

  const getNFT = (members) => {
    const totalNFT = members?.reduce((acc, member) => {
      const nfts = member.nfts.filter(
        (n) => n?.galaxyData?.attributes.itemType === NFTtype
      );
      nfts.forEach((item) => {
        const { mint } = item.galaxyData;
        if (acc[mint]) {
          acc[mint].quantity += item.quantity;
          acc[mint].value += item.valuePerAsset * item.quantity;
        } else {
          acc[mint] = {
            data: item,
            quantity: item.quantity,
            value: item.valuePerAsset * item.quantity,
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

  const totalNFTValue = nft.reduce((acc, item) => acc + item.value, 0);

  useEffect(() => {
    if (!membersLoading || !membersError) {
      const sortedNFT = sortNFT(getNFT(guildMembers));
      setNFT(hideSensibleData(sortedNFT, 'medium', 'epic'));
      if (userLevel === 'solar') {
        setNFT(hideSensibleData(sortedNFT, 'large', 'legendary'));
      }
      if (userLevel === 'staff') {
        setNFT(sortedNFT);
      }
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
