import { useMemo } from 'react';

import Index from '../..';
import { RarityBadge } from '../../../components/tools/ships/RarityBadge';
import { Table } from '../../../components/tools/ships/Table';
import { useInsensitiveSort } from '../../../hooks/useInsensitiveSort';
import { useRarityOrder } from '../../../hooks/useRarityOrder';
import useShips from '../../../hooks/useShips';
import { useShipSize } from '../../../hooks/useShipSize';
import { useShipSizeOrder } from '../../../hooks/useShipSizeOrder';
import InnerSectionBlock from '../../../layout/InnerSectionBlock';

const ShipsList = () => {
  const { ships, isLoading, isError } = useShips();

  const data = useMemo(
    () =>
      ships?.map((ship) => ({
        image: ship.image,
        model: ship.attributes.model,
        class: ship.attributes.class.toLowerCase(),
        spec: ship.attributes.spec,
        rarity: ship.attributes.rarity,
        attributes: ship.attributes,
      })),
    [ships]
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Modèle',
        accessor: 'model',
        sortType: useInsensitiveSort,
        Cell: (tableProps) => (
          <div className="flex h-24 flex-col justify-center text-right">
            <span className="-mb-3 align-bottom font-title text-lg">
              {tableProps.row.original.attributes.make}
            </span>
            <span className="text-3xl font-bold">{tableProps.value}</span>
          </div>
        ),
      },
      {
        Header: 'Taille',
        accessor: 'class',
        sortType: useShipSizeOrder,
        Cell: (tableProps) => (
          <div className="flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-stone-600 text-xl font-extrabold">
              {useShipSize(tableProps.value)}
            </div>
          </div>
        ),
      },
      {
        Header: 'Type',
        accessor: 'spec',
        Cell: (tableProps) => (
          <span className="text-xl capitalize">{tableProps.value}</span>
        ),
      },
      {
        Header: 'Rareté',
        accessor: 'rarity',
        sortType: useRarityOrder,
        Cell: (tableProps) => <RarityBadge rarity={tableProps.value} />,
      },
    ],
    []
  );

  return (
    <Index>
      <div className="flex flex-col items-center">
        <h1 className="m-12 mt-24 font-title text-5xl">
          Liste des vaisseaux Star Atlas
        </h1>
        <InnerSectionBlock bgColor={'from-primary-500/40'}>
          {isError && (
            <div className="font-title text-2xl">Erreur de chargement</div>
          )}
          {!isLoading && <Table columns={columns} data={data} />}
        </InnerSectionBlock>
      </div>
    </Index>
  );
};

export default ShipsList;
