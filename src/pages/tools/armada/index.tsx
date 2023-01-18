import React, { useMemo } from 'react';

import Image from 'next/future/image';
import { EffectCoverflow, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Index from '../..';
import useShips from '../../../hooks/useShips';
import InnerSectionBlock from '../../../layout/InnerSectionBlock';
import Page from '../../../layout/Page';

const Tools = () => {
  const { ships, isLoading, isError } = useShips();

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
  console.log('🚀 ~ file: index.tsx:35 ~ Tools ~ data', data);

  return (
    <Index>
      <Page title="Armada" image="/assets/images/kiosk.webp">
        <div className="flex w-full flex-col items-center justify-center">
          <InnerSectionBlock bgColor={'from-primary-500/40'} fullscreen={true}>
            <div className="flex h-full w-full flex-col">
              <div
                className="px-18 p-8"
                style={{
                  background:
                    'linear-gradient(180deg, rgb(0 0 0 / 0) 0%, rgb(28 25 23 / 0.25) 10%, rgb(28 25 23 / 0.75) 29%, rgb(28 25 23 / 0.75) 71%, rgb(28 25 23 / 0.25) 90%, rgb(0 0 0 / 0) 100%)',
                }}
              >
                {isError && <p>Erreur lors du chargement.</p>}
                {isLoading ? (
                  <p className="flex h-[60vh] w-full items-center justify-center">
                    Chargement ...
                  </p>
                ) : (
                  <div className="h-[60vh] w-full">
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
                      className="mySwiper h-full"
                    >
                      {data?.map((ship) => (
                        <SwiperSlide
                          key={ship.name}
                          className="group flex h-full"
                        >
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
                                  {/* <h3 className="text-2xl font-bold text-white">
                                    {ship.name}
                                  </h3>
                                  <p className="text-white">{ship.class}</p> */}
                                  <h3 className="flex w-full flex-col items-end">
                                    <span className="-mb-1 font-title text-gray-200 lg:-mb-3 lg:text-lg">
                                      {ship.attributes.make}
                                    </span>
                                    <span className="break-words text-sm font-bold leading-3 text-primary-500 lg:text-3xl lg:leading-normal">
                                      {ship.attributes.model}
                                    </span>
                                  </h3>
                                  <div className="flex w-full items-center justify-end text-2xl text-gray-400">
                                    x
                                    <span className="text-4xl text-primary-300">
                                      3
                                    </span>
                                  </div>
                                  <div className="flex w-full justify-end text-xl text-gray-400">
                                    32.500$
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`card relative z-10 w-1/3 shadow-lg duration-300 ease-in-out ${
                                  isActive && 'scale-110'
                                }
                                ${!isActive && 'opacity-30'} ${
                                  isActive &&
                                  ship.rarity === 'common' &&
                                  'shadow-common'
                                } ${
                                  isActive &&
                                  ship.rarity === 'uncommon' &&
                                  'shadow-uncommon'
                                } ${
                                  isActive &&
                                  ship.rarity === 'rare' &&
                                  'shadow-rare'
                                } ${
                                  isActive &&
                                  ship.rarity === 'epic' &&
                                  'shadow-epic'
                                } ${
                                  isActive &&
                                  ship.rarity === 'legendary' &&
                                  'shadow-legendary'
                                } ${
                                  isActive &&
                                  ship.rarity === 'anomaly' &&
                                  'shadow-anomaly'
                                }`}
                              >
                                <Image
                                  src={ship.image}
                                  alt={ship.name}
                                  className="w-full object-cover duration-300 ease-in-out"
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
                                  <h3 className="text-2xl font-bold text-primary-500">
                                    Pilotes
                                  </h3>
                                  <ul className="flex w-full flex-1 items-center justify-center space-x-2">
                                    <li className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-stone-700 bg-blue-500/25 font-extrabold text-stone-700 lg:h-10 lg:w-10">
                                      Xlt
                                    </li>
                                    <li className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-stone-700 bg-red-500/25 font-extrabold text-stone-700 lg:h-10 lg:w-10">
                                      Adf
                                    </li>
                                    <li className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-stone-700 bg-yellow-500/25 font-extrabold text-stone-700 lg:h-10 lg:w-10">
                                      Dlf
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </>
                          )}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
              </div>
            </div>
          </InnerSectionBlock>
        </div>
      </Page>
    </Index>
  );
};

export default Tools;
