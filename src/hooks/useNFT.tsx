import { useQuery } from 'react-query';

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

// const hideSensibleData = (ships: NFT[], nftSize: string, nftRarity: string) => {
//   const getSizeOrder = (size: string) => {
//     return shipSizeOrder.find((item) => item.size === size)?.order;
//   };

//   const getRarityOrder = (rarity: string) => {
//     return rarityOrder.find((item) => item.rarity === rarity)?.order;
//   };

//   const filteredShips = ships.filter((ship: NFT) => {
//     const sizeOrderValue = getSizeOrder(ship.data.galaxyData.attributes.class);
//     const rarityOrderValue = getRarityOrder(
//       ship.data.galaxyData.attributes.rarity
//     );
//     const targetSizeOrderValue = getSizeOrder(nftSize)! - 1;
//     const targetRarityOrderValue = getRarityOrder(nftRarity)! - 1;

//     if (
//       sizeOrderValue &&
//       targetSizeOrderValue &&
//       sizeOrderValue > targetSizeOrderValue
//     ) {
//       return false;
//     }

//     if (
//       rarityOrderValue &&
//       targetRarityOrderValue &&
//       rarityOrderValue > targetRarityOrderValue
//     ) {
//       return false;
//     }

//     return true;
//   });

//   return filteredShips;
// };

const useNFT = (
  pubKeys: string[],
  NFTtype: string
  // userLevel: string | undefined
) => {
  const { guildMembers, isLoading } = useGuildMembers(pubKeys);

  const { data: nftData, isLoading: isNFTLoading } = useQuery(
    ['nftData', pubKeys, NFTtype],
    async () => {
      const members = await guildMembers;
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
      const sortedNFT = totalNFT
        ? Object.values(totalNFT).sort((a: any, b: any) => {
            const rarityA: any = rarityOrder.find(
              (item) => item.rarity === a.data.galaxyData.attributes.rarity
            );
            const rarityB: any = rarityOrder.find(
              (item) => item.rarity === b.data.galaxyData.attributes.rarity
            );
            return rarityB.order - rarityA.order;
          })
        : [];
      return sortedNFT;
    },
    {
      enabled: !!guildMembers,
    }
  );

  const getTotalNFTValue = (data: any[], key: string | null) => {
    return data.reduce((acc, item) => {
      const { msrp } = item.data.galaxyData.tradeSettings;
      const { vwap } = item.data.galaxyData.tradeSettings;
      let value = 0;
      if (key === 'msrp') {
        if (msrp) {
          value = msrp.value;
        }
      } else if (key === 'vwap') {
        value = vwap;
      } else {
        value = item.value;
      }
      return acc + (value ?? 0);
    }, 0);
  };

  const totalNFTValue = nftData ? getTotalNFTValue(nftData, null) : 0;
  const totalNFTValueByMSRP = nftData ? getTotalNFTValue(nftData, 'msrp') : 0;
  const totalNFTValueByVWAP = nftData ? getTotalNFTValue(nftData, 'vwap') : 0;

  return {
    nftData,
    isLoading: isLoading || isNFTLoading,
    totalNFTValue,
    totalNFTValueByMSRP,
    totalNFTValueByVWAP,
  };
};

export default useNFT;
