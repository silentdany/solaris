import React, { useMemo } from 'react';

import { BiDownArrow } from 'react-icons/bi';

import Index from '../..';
import { RarityBadge } from '../../../components/tools/ships/RarityBadge';
import { Table } from '../../../components/tools/ships/Table';
import TableFilter from '../../../components/tools/ships/TableFilter';
import { useBreakWord } from '../../../hooks/useBreakWords';
import useFetchNFTs from '../../../hooks/useFetchNFTs';
import { useTableRarityOrder } from '../../../hooks/useRarityOrder';
import { useShipSize } from '../../../hooks/useShipSize';
import { useShipSizeOrder } from '../../../hooks/useShipSizeOrder';
import InnerSectionBlock from '../../../layout/InnerSectionBlock';
import Page from '../../../layout/Page';

const ShipsList = () => {
  const { NFTs, NFTsLoading, NFTsError } = useFetchNFTs();

  const ships = NFTs?.filter((ship) => ship.attributes.category === 'ship');
  const data = useMemo(
    () =>
      ships?.map((ship) => ({
        image: ship.image,
        name: ship.name,
        class: ship.attributes.class.toLowerCase(),
        spec: ship.attributes.spec,
        rarity: ship.attributes.rarity,
        attributes: ship.attributes,
        crewSlots: ship.slots.crewSlots,
        componentSlots: ship.slots.componentSlots,
        moduleSlots: ship.slots.moduleSlots,
        media: ship.media.gallery,
      })),
    [ships]
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Modèle',
        accessor: 'name',
        // sortType: useInsensitiveSort,
        Cell: (tableProps) => (
          <div className="flex h-full flex-col justify-center text-right">
            <a
              className="group glass absolute left-1 bottom-1 flex h-8 w-8 items-center justify-center rounded-full lg:bottom-2 lg:left-2 lg:h-12 lg:w-12"
              {...tableProps.row.getToggleRowExpandedProps()}
            >
              {tableProps.row.isExpanded ? (
                <BiDownArrow className="w-full text-sm text-primary-300 duration-100 ease-in-out group-hover:text-primary-500" />
              ) : (
                <BiDownArrow className="w-full -rotate-90 text-sm text-primary-300 duration-100 ease-in-out group-hover:text-primary-500" />
              )}
            </a>
            <div className="flex h-full flex-col p-2 lg:p-0">
              <span className="-mb-1 font-title lg:-mb-3 lg:text-lg">
                {tableProps.row.original.attributes.make}
              </span>
              <span className="break-words text-sm font-bold leading-3 text-secondary-300 lg:text-3xl lg:leading-normal">
                {tableProps.row.original.attributes.model}
              </span>
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
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-stone-600 font-extrabold uppercase lg:h-14 lg:w-14 lg:text-lg">
              {useShipSize(tableProps.value)}
            </div>
          </div>
        ),
      },
      {
        Header: 'Type',
        accessor: 'spec',
        Cell: (tableProps) => (
          <span className="mr-2 break-words capitalize lg:m-0 lg:text-xl">
            {useBreakWord(tableProps.value)}
          </span>
        ),
      },
      {
        Header: 'Rareté',
        accessor: 'rarity',
        sortType: useTableRarityOrder,
        Cell: (tableProps) => <RarityBadge rarity={tableProps.value} />,
      },
    ],
    []
  );

  return (
    <Index>
      <Page title="Dock" image="/assets/images/dock.webp">
        <InnerSectionBlock bgColor={'from-primary-500/40'}>
          {NFTsError && (
            <div className="font-title text-2xl">Erreur de chargement</div>
          )}
          {!NFTsLoading && (
            <div className="flex flex-col space-y-8">
              <Table columns={columns} data={data} header={TableFilter} />
            </div>
          )}
        </InnerSectionBlock>
      </Page>
    </Index>
  );
};

export default ShipsList;
