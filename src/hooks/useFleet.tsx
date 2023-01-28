import { useState, useEffect } from 'react';

import useGuildMembers from './useGuildMembers';
import { rarityOrder } from './useRarityOrder';

interface Fleet {
  data: {
    galaxyData: GalaxyData;
    quantity: number;
    valuePerAsset: number;
  };
  quantity: number;
  value: number;
}
interface GalaxyData {
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

interface Attributes {
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

const useFleet = (pubKeys: string[]) => {
  const { guildMembers, membersLoading, membersError } =
    useGuildMembers(pubKeys);

  const [fleet, setFleet] = useState<Fleet[]>([]);
  const [fleetLoading, setFleetLoading] = useState(true);

  const [fleetValue, setFleetValue] = useState(0);

  const getFleet = (members) => {
    const totalFleet = members?.reduce((acc, member) => {
      const ships = member.nfts.filter(
        (nft) => nft?.galaxyData?.attributes.category === 'ship'
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
    return Object.values(totalFleet);
  };

  const sortFleet = (f: any[]) =>
    f.sort((a, b) => {
      const rarityA: any = rarityOrder.find(
        (item) => item.rarity === a.data.galaxyData.attributes.rarity
      );

      const rarityB: any = rarityOrder.find(
        (item) => item.rarity === b.data.galaxyData.attributes.rarity
      );
      return rarityB.order - rarityA.order;
    });

  const totalFleetValue = fleet.reduce((acc, ship) => acc + ship.value, 0);

  useEffect(() => {
    if (!membersLoading || !membersError) {
      const sortedFleet = sortFleet(getFleet(guildMembers));
      setFleet(sortedFleet);
      setFleetValue(totalFleetValue);
    }
  }, [guildMembers, membersError, membersLoading, pubKeys, totalFleetValue]);

  useEffect(() => {
    if (fleet.length !== 0) {
      setFleetLoading(false);
    }
  }, [fleet]);

  return { fleet, fleetValue, fleetLoading };
};

export default useFleet;
