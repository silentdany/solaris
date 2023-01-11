import React from 'react';

import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { useShipSize } from '../../../../hooks/useShipSize';

const SlotComponent = ({ slot, noSize = false }) => {
  const slotSize = useShipSize(slot.size);
  return (
    <div className="grid grid-cols-10 justify-items-center gap-4">
      <div className="col-span-1 justify-self-end text-sm text-secondary-500 lg:text-base">
        {slot.quantity}
      </div>
      {!noSize && (
        <div className="col-span-2 inline-flex h-5 w-5 min-w-min items-center justify-center rounded-full border-2 border-stone-600 px-1 text-xs font-bold uppercase">
          {slotSize}
        </div>
      )}
      <div className="col-span-7 justify-self-start text-left text-sm lg:text-base">
        {slot.type}
      </div>
    </div>
  );
};

export const Specs = ({ row }) => {
  return (
    <div className="flex flex-col p-4 md:flex-row">
      <div className="flex w-full flex-col px-4">
        <h4 className="mb-4 font-title text-lg font-bold lg:text-2xl">
          Equipage
        </h4>
        {row.original.crewSlots.map((crewSlot: any, index: number) => (
          <SlotComponent slot={crewSlot} noSize key={index} />
        ))}
      </div>
      <div className="divider md:divider-horizontal" />
      <div className="flex w-full flex-col px-4">
        <h4 className="mb-8 font-title text-lg font-bold lg:text-2xl">
          Composants
        </h4>
        {row.original.componentSlots.map(
          (componentSlot: any, index: number) => (
            <SlotComponent slot={componentSlot} key={index} />
          )
        )}
      </div>
      <div className="divider md:divider-horizontal" />
      <div className="flex w-full flex-col px-4">
        <h4 className="mb-8 font-title text-lg font-bold lg:text-2xl">
          Modules
        </h4>
        {row.original.moduleSlots.map((moduleSlot: any, index: number) => (
          <span key={index} className="text-left">
            <SlotComponent slot={moduleSlot} key={index} />
          </span>
        ))}
      </div>
    </div>
  );
};
