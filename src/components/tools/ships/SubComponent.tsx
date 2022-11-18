import React, { useState } from 'react';

import Image from 'next/future/image';

const renderSpecs = (row) => (
  <div className="flex p-4">
    <div className="flex w-full flex-col">
      <h4 className="mb-8 font-title text-2xl">Equipage</h4>
      {row.original.crewSlots.map((crewSlot: any, index: number) => (
        <span key={index} className="text-left">
          {crewSlot.quantity} {crewSlot.type}
        </span>
      ))}
    </div>
    <div className="divider divider-horizontal" />
    <div className="flex w-full flex-col">
      <h4 className="mb-8 font-title text-2xl">Composants</h4>
      {row.original.componentSlots.map((componentSlot: any, index: number) => (
        <span key={index} className="text-left">
          {componentSlot.quantity} {componentSlot.type}
        </span>
      ))}
    </div>
    <div className="divider divider-horizontal" />
    <div className="flex w-full flex-col">
      <h4 className="mb-8 font-title text-2xl">Modules</h4>
      {row.original.moduleSlots.map((moduleSlot: any, index: number) => (
        <span key={index} className="text-left">
          {moduleSlot.quantity} {moduleSlot.type}
        </span>
      ))}
    </div>
  </div>
);

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
