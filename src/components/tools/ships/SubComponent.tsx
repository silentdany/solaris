import React, { useState } from 'react';

import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { Economy } from './subComp/Economy';
import { Specs } from './subComp/Specs';
import { Visuals } from './subComp/Visuals';

export const SubComponent = ({ row }) => {
  const [render, setRender] = useState(<Specs row={row} />);
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
          childRender={<Specs row={row} />}
        />
        <MenuBtn
          title="Visuels"
          label="visuals"
          childRender={<Visuals row={row} />}
        />
        <MenuBtn title="Economie" label="economy" childRender={<Economy />} />
      </div>
      {render}
    </div>
  );
};
