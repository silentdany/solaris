import React, { useState } from 'react';

import Image from 'next/future/image';
import { BsConeStriped } from 'react-icons/bs';
import { PortalWithState } from 'react-portal';
import { Pagination, Lazy, FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { useShipSize } from '../../../hooks/useShipSize';
import { Modal } from '../../../layout/Modal';

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

const renderVisuals = (row, thumbsSwiper, setThumbsSwiper) => {
  return (
    <div className="p-4">
      <Swiper
        loop={true}
        navigation={true}
        pagination={{
          type: 'progressbar',
        }}
        lazy={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Lazy, Pagination, FreeMode, Navigation, Thumbs]}
        className="swiperMain relative h-96 overflow-hidden rounded-t-lg border-b-4 border-primary-500"
      >
        {row.original.media.map((image: string, index: number) => (
          <SwiperSlide key={`item${index + 1}`}>
            <PortalWithState closeOnOutsideClick closeOnEsc>
              {({ openPortal, closePortal, portal }) => (
                <React.Fragment>
                  <Image
                    src={image}
                    alt={`${row.original.name} picture n°${index + 1}`}
                    className="swiper-lazy object-cover transition-all duration-500 hover:scale-105 hover:cursor-pointer"
                    fill
                    onClick={openPortal}
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                  {portal(
                    <Modal
                      item={
                        <Image
                          src={image}
                          alt={`${row.original.name} picture n°${index + 1}`}
                          width={1170}
                          height={600}
                          className="flex justify-center rounded-xl object-cover shadow-xl"
                        />
                      }
                      closePortal={closePortal}
                    />
                  )}
                </React.Fragment>
              )}
            </PortalWithState>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiperGallery h-24 cursor-grab border-x-2 border-b-4 border-primary-500"
      >
        {row.original.media.map((image: string, index: number) => (
          <SwiperSlide
            key={`item${index + 1}`}
            className="border-x-2 border-primary-500"
          >
            <Image
              src={image}
              alt={`${row.original.name} picture n°${index + 1}`}
              className="object-cover"
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const renderEconomy = () => (
  <div className="relative flex h-80 items-center justify-center p-4 text-2xl font-extrabold tracking-widest">
    Bientôt
    <BsConeStriped className="absolute text-9xl opacity-25" />
  </div>
);

export const SubComponent = ({ row }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
          childRender={renderVisuals(row, thumbsSwiper, setThumbsSwiper)}
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
