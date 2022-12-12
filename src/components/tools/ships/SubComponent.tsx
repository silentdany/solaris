import React, { useState } from 'react';

import Image from 'next/future/image';

import { useShipSize } from '../../../hooks/useShipSize';

const SlotComponent = ({ slot, noSize = false }) => {
  const slotSize = useShipSize(slot.size);
  return (
    <div className="grid grid-cols-10 justify-items-center gap-4">
      <div className="col-span-1 justify-self-end text-secondary-500">
        {slot.quantity}
      </div>
      {!noSize && (
        <div className="col-span-2 inline-flex h-5 w-5 min-w-min items-center justify-center rounded-full border-2 border-stone-600 px-1 text-xs font-bold uppercase">
          {slotSize}
        </div>
      )}
      <div className="col-span-7 justify-self-start">{slot.type}</div>
    </div>
  );
};
const renderSpecs = (row) => {
  return (
    <div className="flex p-4">
      <div className="flex w-full flex-col px-4">
        <h4 className="mb-8 font-title text-2xl font-bold">Equipage</h4>
        {row.original.crewSlots.map((crewSlot: any, index: number) => (
          <SlotComponent slot={crewSlot} noSize key={index} />
        ))}
      </div>
      <div className="divider divider-horizontal" />
      <div className="flex w-full flex-col px-4">
        <h4 className="mb-8 font-title text-2xl font-bold">Composants</h4>
        {row.original.componentSlots.map(
          (componentSlot: any, index: number) => (
            <SlotComponent slot={componentSlot} key={index} />
          )
        )}
      </div>
      <div className="divider divider-horizontal" />
      <div className="flex w-full flex-col px-4">
        <h4 className="mb-8 font-title text-2xl font-bold">Modules</h4>
        {row.original.moduleSlots.map((moduleSlot: any, index: number) => (
          <span key={index} className="text-left">
            <SlotComponent slot={moduleSlot} key={index} />
          </span>
        ))}
      </div>
    </div>
  );
};

const renderVisuals = (row) => (
  <div className="columns-3 gap-4 p-4">
    {row.original.media.map((image: string, index: number) => (
      <div key={`item${index + 1}`} className="mb-4 w-full">
        <Image
          src={image}
          className="w-full"
          width={500}
          height={500}
          alt={`${row.original.name} picture n°${index + 1}`}
        />
      </div>
    ))}
  </div>
);

const renderEconomy = () => <div className="flex p-4">ECONOMIE</div>;

export const SubComponent = ({ row }) => {
  const [render, setRender] = useState(renderSpecs(row));
  const [activeRender, setActiveRender] = useState('specs');

  const handleRender = (childRender, label) => {
    setRender(childRender);
    setActiveRender(label);
  };

  const MenuBtn = ({ title, label, childRender }) => (
    <div
      className={`w-1/3 cursor-pointer border-b-4 p-4 text-center font-bold ${
        activeRender === label ? 'border-secondary-500' : 'border-primary-300'
      }`}
      onClick={() => handleRender(childRender, label)}
    >
      {title}
    </div>
  );

  return (
    <div className="flex flex-col">
      <div className="flex">
        <MenuBtn
          title="Spécifications"
          label="specs"
          childRender={renderSpecs(row)}
        />
        <MenuBtn
          title="Visuels"
          label="visuals"
          childRender={renderVisuals(row)}
        />
        <MenuBtn
          title="Economie"
          label="economy"
          childRender={renderEconomy()}
        />
      </div>
      {render}
    </div>
  );
};
