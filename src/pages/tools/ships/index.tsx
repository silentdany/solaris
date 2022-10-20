import React, { useMemo } from 'react';

import Index from '../..';
import { RarityBadge } from '../../../components/tools/ships/RarityBadge';
import { Table } from '../../../components/tools/ships/Table';
import { useInsensitiveSort } from '../../../hooks/useInsensitiveSort';
import { useRarityOrder } from '../../../hooks/useRarityOrder';
import useShips from '../../../hooks/useShips';
import { useShipSize } from '../../../hooks/useShipSize';
import { useShipSizeOrder } from '../../../hooks/useShipSizeOrder';
import InnerSectionBlock from '../../../layout/InnerSectionBlock';
import Page from '../../../layout/Page';

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
        crewSlots: ship.slots.crewSlots,
      })),
    [ships]
  );

  // const getCrewSlotType = (shipsData) => {
  //   const crewSlotsArray: Array<string> = shipsData
  //     .map((ship: { crewSlots: any[] }) =>
  //       ship.crewSlots.map((slot) => slot.type)
  //     )
  //     .flat();
  //   const crewSlotsFilteredArray = [...new Set(crewSlotsArray)];
  //   return crewSlotsFilteredArray;
  // };

  // const buildCrewSlotsColumns = () => {
  //   const crewSlots = getCrewSlotType(data);
  //   return crewSlots.map((slot) => ({
  //     Header: slot,
  //     accessor: slot.toLowerCase(),
  //     Cell: ({ row }) => {
  //       const crewSlot = row.original.crewSlots.find(
  //         (crew: { type: string }) => crew.type === slot
  //       );
  //       return crewSlot && `${crewSlot.quantity} ${crewSlot.type}`;
  //     },
  //   }));
  // };

  // console.log(getCrewSlotType(data));

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
            <span className="text-3xl font-bold text-secondary-300">
              {tableProps.value}
            </span>
          </div>
        ),
      },
      {
        Header: 'Taille',
        accessor: 'class',
        sortType: useShipSizeOrder,
        Cell: (tableProps) => (
          <div className="flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-stone-600 text-lg font-extrabold uppercase">
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
      {
        Header: 'Actions',
        id: 'expander',
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        ),
      },
      // {
      //   Header: 'Equipage',
      //   accessor: 'crewSlots',
      //   title: "Nombre de places d'équipage",
      //   Cell: (tableProps) => (
      //     <div className="flex w-full flex-col">
      //       {tableProps.value.map((slot) => (
      //         <span className="capitalize" key={slot.type}>
      //           {slot.quantity} {slot.type}
      //         </span>
      //       ))}
      //     </div>
      //   ),
      // },
      // ...buildCrewSlotsColumns(),
    ],
    []
  );

  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <pre
        style={{
          fontSize: '10px',
        }}
      >
        <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
      </pre>
    ),
    []
  );

  return (
    <Index>
      <Page title="Listing vaisseaux" image="/assets/images/spaceship.webp">
        <InnerSectionBlock bgColor={'from-primary-500/40'}>
          {isError && (
            <div className="font-title text-2xl">Erreur de chargement</div>
          )}
          {!isLoading && (
            <Table
              columns={columns}
              data={data}
              renderRowSubComponent={renderRowSubComponent}
            />
          )}
        </InnerSectionBlock>
      </Page>
    </Index>
  );
};

export default ShipsList;
