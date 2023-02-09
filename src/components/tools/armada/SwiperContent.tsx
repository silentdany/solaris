import React from 'react';

import Image from 'next/future/image';
import { BiDollarCircle } from 'react-icons/bi';
import { EffectCoverflow, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useShipSize } from '../../../hooks/useShipSize';

const getValueWithSeparators = (x: any) => {
  if (x === 0 || Number.isNaN(x)) return '??';
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const ShipSize = (shipSize: string) => (
  <div className="flex items-center justify-center">
    <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-primary-300 text-sm font-extrabold uppercase lg:h-12 lg:w-12">
      {useShipSize(shipSize.toLowerCase())}
    </div>
  </div>
);

const NftAttributes = ({ data }: any) => (
  <div className="flex w-full items-center justify-end space-x-2 text-xl capitalize text-stone-300">
    {data.attributes.category === 'ship' && data.attributes.spec}
    <span className="text-primary-300"></span>
    {data.attributes.category === 'ship'
      ? ShipSize(data.attributes.class)
      : data.attributes.class}
  </div>
);

const SwiperContent = ({ nfts }: any) => (
  <Swiper
    effect={'coverflow'}
    loop={true}
    mousewheel={true}
    direction={'vertical'}
    centeredSlides={true}
    slidesPerView={3}
    coverflowEffect={{
      rotate: 45,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
      scale: 0.9,
    }}
    modules={[EffectCoverflow, Mousewheel]}
    className="h-[63vh]"
    style={{
      padding: '0 96px',
      background:
        'linear-gradient(180deg, rgb(0 0 0 / 0) 0%, rgb(28 25 23 / 0.25) 10%, rgb(28 25 23 / 0.75) 29%, rgb(28 25 23 / 0.75) 71%, rgb(28 25 23 / 0.25) 90%, rgb(0 0 0 / 0) 100%)',
    }}
  >
    {nfts.map((nft) => {
      const data = nft.data.galaxyData;
      const { category } = data.attributes;

      return (
        <SwiperSlide key={data.name} className="group flex h-full">
          {({ isActive }) => (
            <>
              <div
                className={`w-1/3 duration-300 ease-in-out ${
                  !isActive && 'translate-x-full opacity-0'
                }`}
                style={
                  isActive
                    ? {
                        perspective: '300px',
                        transformStyle: 'preserve-3d',
                      }
                    : {}
                }
              >
                <div
                  className="card glass mx-12 flex h-full flex-col items-center justify-between p-4"
                  style={
                    isActive
                      ? {
                          perspective: '300px',
                          transformStyle: 'preserve-3d',
                          transform: 'rotateY(5deg)',
                        }
                      : {}
                  }
                >
                  <h3 className="flex w-full flex-col items-end">
                    {category === 'ship' ? (
                      <>
                        <span className="-mb-1 font-title text-gray-200 lg:-mb-3 lg:text-lg">
                          {data.attributes.make}
                        </span>
                        <span className="break-words text-sm font-bold leading-3 text-primary-500 lg:text-3xl lg:leading-normal">
                          {data.attributes.model}
                        </span>
                      </>
                    ) : (
                      <span className="break-words text-xl font-bold leading-3 text-primary-500 lg:text-2xl lg:leading-normal">
                        {data.name}
                      </span>
                    )}
                  </h3>
                  <div className="flex w-full items-center justify-end text-2xl text-gray-400">
                    x
                    <span className="text-4xl text-primary-300">
                      {nft.quantity}
                    </span>
                  </div>
                  <NftAttributes data={data} />
                </div>
              </div>
              <div
                className={`card relative z-10 w-1/3 shadow-lg duration-300 ease-in-out ${
                  isActive && 'scale-110'
                }
                                ${!isActive && 'opacity-30'} ${
                  isActive &&
                  data.attributes.rarity === 'common' &&
                  'shadow-common'
                } ${
                  isActive &&
                  data.attributes.rarity === 'uncommon' &&
                  'shadow-uncommon'
                } ${
                  isActive && data.attributes.rarity === 'rare' && 'shadow-rare'
                } ${
                  isActive && data.attributes.rarity === 'epic' && 'shadow-epic'
                } ${
                  isActive &&
                  data.attributes.rarity === 'legendary' &&
                  'shadow-legendary'
                } ${
                  isActive &&
                  data.attributes.rarity === 'anomaly' &&
                  'shadow-anomaly'
                }`}
              >
                <Image
                  src={data.image}
                  alt={data.name}
                  className="inset-0 w-full bg-stone-800 object-cover duration-300 ease-in-out"
                  priority={isActive}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                />
              </div>
              <div
                className={`w-1/3 duration-300 ease-in-out ${
                  !isActive && '-translate-x-full opacity-0'
                }`}
                style={
                  isActive
                    ? {
                        perspective: '300px',
                        transformStyle: 'preserve-3d',
                      }
                    : {}
                }
              >
                <div
                  className="card glass z-10 mx-12 flex h-full flex-col items-start justify-between p-4 "
                  style={
                    isActive
                      ? {
                          perspective: '300px',
                          transformStyle: 'preserve-3d',
                          transform: 'rotateY(-5deg)',
                        }
                      : {}
                  }
                >
                  <div className="grid h-full w-full grid-cols-3">
                    <div className="flex w-full items-center justify-center">
                      <BiDollarCircle className="text-3xl text-yellow-500" />
                    </div>
                    <div className="flex w-full items-center justify-start font-title text-xl text-stone-300">
                      Total
                    </div>
                    <div className="flex w-full items-center justify-start font-title text-xl text-stone-300">
                      Unité
                    </div>
                    <div className="flex w-full items-center justify-start font-title text-xl text-stone-400">
                      MSRP
                    </div>
                    <div className="flex w-full items-center justify-start text-2xl text-stone-400">
                      {getValueWithSeparators(
                        parseInt(data.tradeSettings?.msrp?.value, 10) *
                          nft.quantity
                      )}
                    </div>
                    <div className="flex w-full items-center justify-start text-2xl text-stone-400">
                      {getValueWithSeparators(
                        parseInt(data.tradeSettings?.msrp?.value, 10)
                      )}
                    </div>
                    <div className="flex w-full items-center justify-start font-title text-xl text-stone-400">
                      VWAP
                    </div>
                    <div className="flex w-full items-center justify-start text-2xl text-stone-400">
                      {getValueWithSeparators(
                        parseInt(data.tradeSettings?.vwap, 10) * nft.quantity
                      )}
                    </div>
                    <div className="flex w-full items-center justify-start text-2xl text-stone-400">
                      {getValueWithSeparators(
                        parseInt(data.tradeSettings?.vwap, 10)
                      )}
                    </div>
                    <div className="flex w-full items-center justify-start font-title text-xl text-stone-300">
                      Marché
                    </div>
                    <div className="flex w-full items-center justify-start text-2xl text-primary-300">
                      {getValueWithSeparators(
                        parseInt(nft.value.toFixed(0), 10)
                      )}
                    </div>
                    <div className="flex w-full items-center justify-start text-2xl text-primary-300">
                      {getValueWithSeparators(
                        parseInt((nft.value / nft.quantity).toFixed(0), 10)
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </SwiperSlide>
      );
    })}
  </Swiper>
);

export default SwiperContent;
