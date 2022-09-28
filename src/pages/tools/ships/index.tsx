import { useMemo } from 'react';

import Image from 'next/future/image';

import Index from '../..';
import { Table } from '../../../components/tools/ships/Table';
import useShips from '../../../hooks/useShips';

const ShipsList = () => {
  const { ships, isLoading, isError } = useShips();

  console.log({ ships, isLoading, isError });

  const data = useMemo(
    () =>
      ships?.map((ship) => ({
        image: ship.media.thumbnailUrl,
        name: ship.name,
        class: ship.attributes.class,
        spec: ship.attributes.spec,
        rarity: ship.attributes.rarity,
      })),
    [ships]
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Image',
        accessor: 'image',
        Cell: (tableProps) => (
          <Image
            src={tableProps.row.original.image}
            width={60}
            height={60}
            alt={tableProps.row.original.name}
            quality={50}
          />
        ),
      },
      {
        Header: 'Nom',
        accessor: 'name',
      },
      {
        Header: 'Taille',
        accessor: 'class',
      },
      {
        Header: 'Type',
        accessor: 'spec',
      },
      {
        Header: 'Rareté',
        accessor: 'rarity',
      },
    ],
    []
  );

  return (
    <Index>
      <div className="flex w-full justify-center pt-32">
        {!isLoading && <Table columns={columns} data={data} />}
      </div>
    </Index>
  );
};

export default ShipsList;
