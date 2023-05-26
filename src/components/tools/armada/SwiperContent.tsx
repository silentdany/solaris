import React from 'react';

import Image from 'next/future/image';
import { BiDollarCircle } from 'react-icons/bi';
import { EffectCoverflow, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import EmptySwiperContent from './EmptySwiperContent';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { NFT } from '../../../hooks/useNFT';
import { useShipSize } from '../../../hooks/useShipSize';
import { getValueWithSeparators } from '../../../utils/global';
import { DefinedAccessOnly } from '../../DefinedAccessOnly';

const ShipSize = (shipSize: string) => (
  <div className="flex items-center justify-center">
    <div className="flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-primary-300 text-[0.5rem] font-extrabold uppercase md:h-10 md:w-10 md:text-xs lg:h-12 lg:w-12 lg:text-sm">
      {useShipSize(shipSize.toLowerCase())}
    </div>
  </div>
);

const NftAttributes = ({ data }: any) => (
  <div className="flex w-full items-center justify-end space-x-1 break-words text-xs capitalize text-stone-300 md:space-x-2 md:text-xl">
    {data.attributes.category === 'ship' && data.attributes.spec}
    <span className="text-primary-300"></span>
    {data.attributes.category === 'ship'
      ? ShipSize(data.attributes.class)
      : data.attributes.class}
  </div>
);

const SwiperContent = ({ nfts }: any) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(max-width: 1023px)');

  if (nfts === undefined) return <EmptySwiperContent />;
  return (
    <Swiper
      key={Math.random()}
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
      style={{
        padding: isMobile ? '0 8px' : '0 64px',
        background:
          'linear-gradient(180deg, rgb(0 0 0 / 0) 0%, rgb(28 25 23 / 0.25) 10%, rgb(28 25 23 / 0.75) 29%, rgb(28 25 23 / 0.75) 71%, rgb(28 25 23 / 0.25) 90%, rgb(0 0 0 / 0) 100%)',
      }}
    >
      {nfts.map((nft: NFT) => {
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
                    className="card glass flex h-full flex-col items-center justify-between p-4 md:mr-4 lg:mx-12"
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
                          <span className="-mb-1 truncate text-right font-title text-gray-200 md:text-lg lg:-mb-3">
                            {data.attributes.make}
                          </span>
                          <span className="break-words text-right text-sm font-bold leading-3 text-primary-500 md:text-2xl md:leading-none lg:text-3xl lg:leading-normal">
                            {data.attributes.model}
                          </span>
                        </>
                      ) : (
                        <span className="break-words text-right font-bold leading-none text-primary-500 md:text-2xl lg:leading-normal">
                          {data.name}
                        </span>
                      )}
                    </h3>
                    <div className="flex w-full items-center justify-end text-gray-400 md:text-2xl">
                      x
                      <span className="text-xl text-primary-300 md:text-4xl">
                        <DefinedAccessOnly
                          role="staff"
                          comp={<span>{nft.quantity}</span>}
                          tooltipLeft
                        />
                      </span>
                    </div>
                    <NftAttributes data={data} />
                  </div>
                </div>
                <div
                  className={`card relative z-10 w-1/3 rounded-xl shadow-lg duration-300 ease-in-out ${
                    isActive && 'scale-110'
                  } ${!isActive && 'opacity-30'} ${
                    isActive &&
                    data.attributes.rarity === 'common' &&
                    'shadow-common'
                  } ${
                    isActive &&
                    data.attributes.rarity === 'uncommon' &&
                    'shadow-uncommon'
                  } ${
                    isActive &&
                    data.attributes.rarity === 'rare' &&
                    'shadow-rare'
                  } ${
                    isActive &&
                    data.attributes.rarity === 'epic' &&
                    'shadow-epic'
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
                    className="inset-0 w-full rounded-xl bg-stone-800 object-cover duration-300 ease-in-out"
                    priority={isActive}
                    fill
                    sizes="50vw"
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
                    className="md card glass z-10 flex h-full flex-col items-start justify-between p-4 md:ml-4 lg:mx-12 "
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
                    <div className="grid h-full w-full grid-cols-2 lg:grid-cols-3">
                      <div className="flex w-full items-center justify-center">
                        <BiDollarCircle className="text-xl text-yellow-500 md:text-3xl" />
                      </div>
                      <div className="flex w-full items-center justify-start font-title text-lg text-stone-300 md:text-xl">
                        Total
                      </div>
                      {!isTablet && !isMobile && (
                        <div className="flex w-full items-center justify-start font-title text-lg text-stone-300 md:text-xl">
                          Unité
                        </div>
                      )}
                      <div className="flex w-full items-center justify-start font-title text-xs text-stone-400 md:text-xl">
                        MSRP
                      </div>
                      <div className="flex w-full items-center justify-start text-stone-400 md:text-2xl">
                        <DefinedAccessOnly
                          role="staff"
                          comp={
                            data.tradeSettings.msrp
                              ? getValueWithSeparators(
                                  +data.tradeSettings.msrp.value.toFixed(0) *
                                    nft.quantity
                                )
                              : '??'
                          }
                        />
                      </div>
                      {!isTablet && !isMobile && (
                        <div className="flex w-full items-center justify-start text-xl text-stone-400 md:text-2xl">
                          {data.tradeSettings.msrp
                            ? getValueWithSeparators(
                                data.tradeSettings?.msrp?.value.toFixed(0)
                              )
                            : '??'}
                        </div>
                      )}
                      <div className="flex w-full items-center justify-start font-title text-xs text-stone-400 md:text-xl">
                        VWAP
                      </div>
                      <div className="flex w-full items-center justify-start text-stone-400 md:text-2xl">
                        <DefinedAccessOnly
                          role="staff"
                          comp={
                            data.tradeSettings.vwap
                              ? getValueWithSeparators(
                                  +data.tradeSettings.vwap.toFixed(0) *
                                    nft.quantity
                                )
                              : '??'
                          }
                        />
                      </div>
                      {!isTablet && !isMobile && (
                        <div className="flex w-full items-center justify-start text-xl text-stone-400 md:text-2xl">
                          {data.tradeSettings.vwap
                            ? getValueWithSeparators(
                                data.tradeSettings?.vwap.toFixed(0)
                              )
                            : '??'}
                        </div>
                      )}
                      <div className="flex w-full items-center justify-start font-title text-xs text-stone-300 md:text-xl">
                        Marché
                      </div>

                      <div className="flex w-full items-center justify-start text-primary-300 md:text-2xl">
                        <DefinedAccessOnly
                          role="staff"
                          comp={getValueWithSeparators(
                            parseInt(nft.value.toFixed(0), 10)
                          )}
                        />
                      </div>
                      {!isTablet && !isMobile && (
                        <div className="flex w-full items-center justify-start text-xl text-primary-300 md:text-2xl">
                          {getValueWithSeparators(
                            parseInt((nft.value / nft.quantity).toFixed(0), 10)
                          )}
                        </div>
                      )}
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
};

export default SwiperContent;
