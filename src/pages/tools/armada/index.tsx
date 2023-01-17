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
              <div className="bg-stone-900 p-8">
                {isError && <p>Erreur lors du chargement.</p>}
                {isLoading ? (
                  <p>Chargement ...</p>
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
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
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
                                  !isActive && 'translate-x-40 opacity-25'
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
                                className={`card glass relative z-10 w-1/3 shadow-lg duration-300 ease-in-out ${
                                  isActive && 'scale-110 '
                                } ${!isActive && 'opacity-60'} ${
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
                                  className="w-full object-cover opacity-60 duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-80"
                                  fill
                                  sizes="(min-width: 1024px) 1024px, 100vw"
                                />
                              </div>
                              <div
                                className={`w-1/3 duration-300 ease-in-out ${
                                  !isActive && '-translate-x-40 opacity-25'
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
                                  className="card glass z-10 mx-12 flex h-full flex-col items-center justify-center "
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
                                  <h3 className="text-xl font-bold text-white">
                                    Owners
                                  </h3>
                                  <ul>
                                    <li className="text-white">XlfT...LK7g</li>
                                    <li className="text-white">
                                      AdffT...KFF7g
                                    </li>
                                    <li className="text-white">
                                      DlfezT...SKFg
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
              <div className="h-24 w-full bg-gradient-to-b from-stone-900"></div>
            </div>
          </InnerSectionBlock>
        </div>
      </Page>
    </Index>
  );
};

export default Tools;
