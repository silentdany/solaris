import React, { useMemo, useState } from 'react';

import { BiDownArrow } from 'react-icons/bi';

import Index from '../..';
import { RarityBadge } from '../../../components/tools/ships/RarityBadge';
import { Table } from '../../../components/tools/ships/Table';
import TableFilter from '../../../components/tools/ships/TableFilter';
import { useInsensitiveSort } from '../../../hooks/useInsensitiveSort';
import { useRarityOrder } from '../../../hooks/useRarityOrder';
import useShips from '../../../hooks/useShips';
import { useShipSize } from '../../../hooks/useShipSize';
import { useShipSizeOrder } from '../../../hooks/useShipSizeOrder';
import InnerSectionBlock from '../../../layout/InnerSectionBlock';
import Page from '../../../layout/Page';

const ShipsList = () => {
  const { ships, isLoading, isError } = useShips();
  const [subRow, setSubRow] = useState('');

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
        componentSlots: ship.slots.componentSlots,
        moduleSlots: ship.slots.moduleSlots,
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
          <div
            className="flex h-24 flex-col justify-center text-right"
            onClick={() => setSubRow('infos')}
          >
            <div className="flex justify-between">
              <a
                className="group btn btn-primary glass flex h-12 w-12 items-center justify-center rounded-full"
                {...tableProps.row.getToggleRowExpandedProps()}
              >
                {tableProps.row.isExpanded ? (
                  <BiDownArrow className="w-full text-primary-300 duration-100 ease-in-out group-hover:text-primary-500" />
                ) : (
                  <BiDownArrow className="w-full -rotate-90 text-primary-300 duration-100 ease-in-out group-hover:text-primary-500" />
                )}
              </a>
              <div className="flex flex-col">
                <span className="-mb-3 align-bottom font-title text-lg">
                  {tableProps.row.original.attributes.make}
                </span>
                <span className="text-3xl font-bold text-secondary-300">
                  {tableProps.value}
                </span>
              </div>
            </div>
          </div>
        ),
        filter: 'fuzzyText',
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
    ],
    []
  );

  return (
    <Index>
      <Page title="Dock" image="/assets/images/dock.webp">
        <InnerSectionBlock bgColor={'from-primary-500/40'}>
          {isError && (
            <div className="font-title text-2xl">Erreur de chargement</div>
          )}
          {!isLoading && (
            <div className="flex flex-col space-y-8">
              <Table
                columns={columns}
                data={data}
                subRow={subRow}
                header={TableFilter}
              />
            </div>
          )}
        </InnerSectionBlock>
      </Page>
    </Index>
  );
};

export default ShipsList;
