import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/future/image';
import {
  BiDollarCircle,
  BiDownArrow,
  BiTargetLock,
  BiUserCheck,
} from 'react-icons/bi';
import { FiPackage } from 'react-icons/fi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdOutlineCollections } from 'react-icons/md';
import { RiServiceFill, RiSpaceShipLine, RiStarHalfLine } from 'react-icons/ri';
import { TbMilitaryRank } from 'react-icons/tb';
import { EffectCoverflow, Mousewheel, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import Index from '../..';
import { topHodlers } from '../../../../data/topHodlers';
import { Loader } from '../../../components/Loader';
import useNFT from '../../../hooks/useNFT';
import { useShipSize } from '../../../hooks/useShipSize';
import InnerSectionBlock from '../../../layout/InnerSectionBlock';
import Page from '../../../layout/Page';

interface StatContentProps {
  icon: JSX.Element;
  title: string;
  value: number | JSX.Element;
  sub?: string;
}

const Armada = () => {
  const [loading, setLoading] = useState(true);

  const {
    nft: ships,
    nftValue: shipsValue,
    nftLoading: shipsLoading,
  } = useNFT(topHodlers, 'ship');
  const {
    nft: structures,
    nftValue: structuresValue,
    nftLoading: structuresLoading,
  } = useNFT(topHodlers, 'structure');
  const {
    nft: collectibles,
    nftValue: collectiblesValue,
    nftLoading: collectiblesLoading,
  } = useNFT(topHodlers, 'collectible');
  const {
    nft: access,
    nftValue: accessValue,
    nftLoading: accessLoading,
  } = useNFT(topHodlers, 'access');

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

  const getTotalShipCount = () =>
    ships.reduce((acc, ship) => acc + ship.quantity, 0);

  const getShipCountBySpec = (spec: Array<string>) => {
    const filteredShips = ships.filter((ship: any) =>
      spec.includes(ship.data.galaxyData.attributes.spec)
    );
    const total = filteredShips.reduce(
      (acc: any, ship: any) => acc + ship.quantity,
      0
    );
    return total;
  };

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

  const pages = ['Flotte', 'Structures', 'Collection', 'Badges'];

  const customBullet = ({ index, className }) =>
    `<div class="${className}">
      ${pages[index]}
    </div>`;

  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return customBullet({ index, className });
    },
  };

  const StatContent = ({ icon, title, value, sub }: StatContentProps) => (
    <div className="stat z-10">
      <div className="text-primary stat-figure">{icon}</div>
      <div className="stat-title">{title}</div>
      <div className="text-primary stat-value">{value}</div>
      {sub && <div className="stat-desc">{sub}</div>}
    </div>
  );

  const getPercentage = (value, values) => {
    const sum = values.reduce((total, val) => total + val, 0);
    return (value / sum) * 100;
  };

  const capital = [shipsValue, structuresValue, collectiblesValue, accessValue];

  useEffect(() => {
    if (
      !shipsLoading &&
      !structuresLoading &&
      !collectiblesLoading &&
      !accessLoading
    ) {
      setLoading(false);
    }
  }, [collectiblesLoading, shipsLoading, structuresLoading, accessLoading]);
  // const getCroppedPublicKey = (publicKey: string) => `${publicKey.slice(0, 3)}`;
  return (
    <Index>
      <Page title="Armada" image="/assets/images/kiosk.webp">
        <div className="flex w-full flex-col items-center justify-center">
          <InnerSectionBlock bgColor={'from-primary-500/40'} fullscreen={true}>
            <div className="flex h-full w-full flex-col">
              <div className="min-h-[60vh]">
                {loading ? (
                  <div className="flex h-full w-full items-center justify-center">
                    <Loader />
                  </div>
                ) : (
                  <div className="h-full w-full">
                    <Swiper
                      spaceBetween={50}
                      pagination={pagination}
                      effect="creative"
                      modules={[Pagination]}
                      loop={true}
                    >
                      <SwiperSlide>
                        <SwiperContent nfts={ships} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <SwiperContent nfts={structures} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <SwiperContent nfts={collectibles} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <SwiperContent nfts={access} />
                      </SwiperSlide>
                    </Swiper>
                    <div className="flex flex-col items-center justify-center space-y-8 bg-stone-900/75 p-4 text-stone-50">
                      <a
                        href="#capital"
                        className="group flex w-full  items-center justify-evenly"
                      >
                        <BiDownArrow className="animate-bounce-slow text-4xl text-primary-700/50 duration-200 ease-in-out group-hover:text-primary-700" />
                        <h2 className="text-2xl">
                          <span className="font-hero">
                            Sol
                            <span className="text-primary-500">a</span>
                            ris
                          </span>
                          <span className="mx-4 text-primary-500">|</span>
                          Capital
                        </h2>
                        <BiDownArrow className="animate-bounce-slow text-4xl text-primary-700/50 duration-200 ease-in-out group-hover:text-primary-700" />
                      </a>
                      <div
                        id="capital"
                        className="flex w-full max-w-4xl scroll-mt-36 flex-col items-center justify-center space-y-24 p-8 pb-20"
                      >
                        <motion.div
                          initial={{
                            translateX: -200,
                            opacity: 0,
                          }}
                          whileInView={{ translateX: 0, opacity: 1 }}
                          viewport={{ amount: 0.1, once: true }}
                          className="flex flex-col -space-y-2"
                        >
                          <motion.h3
                            initial={{
                              opacity: 0,
                            }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ amount: 0.1, once: false }}
                            className="flex font-title text-3xl font-bold uppercase text-primary-500/50"
                          >
                            Résumé
                          </motion.h3>
                          <div className="stats relative overflow-x-visible bg-stone-300 shadow duration-300 ease-in-out hover:shadow-xl">
                            <div className="absolute top-0 right-0 z-0 h-full w-screen rounded-2xl bg-stone-300/25"></div>
                            <StatContent
                              icon={
                                <BiUserCheck className="text-4xl text-secondary-200" />
                              }
                              title="Solars incorporés"
                              value={topHodlers.length}
                            />
                            <StatContent
                              icon={
                                <BiDollarCircle className="text-4xl text-secondary-200" />
                              }
                              title="Capital Total"
                              value={
                                +capital
                                  .reduce((total, val) => total + val, 0)
                                  .toFixed(0)
                              }
                            />
                            <StatContent
                              icon={
                                <RiSpaceShipLine className="text-4xl text-secondary-200" />
                              }
                              title="Vaisseaux"
                              value={getTotalShipCount()}
                            />
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{
                            translateX: 200,
                            opacity: 0,
                          }}
                          whileInView={{ translateX: 0, opacity: 1 }}
                          viewport={{ amount: 0.1, once: true }}
                          className="flex flex-col -space-y-2"
                        >
                          <motion.h3
                            initial={{
                              opacity: 0,
                            }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ amount: 0.1, once: false }}
                            className="flex justify-end font-title text-3xl font-bold uppercase text-primary-500/50"
                          >
                            Répartition capitaux
                          </motion.h3>
                          <div className="stats relative self-end overflow-x-visible bg-stone-300 shadow duration-300 ease-in-out hover:shadow-xl">
                            <div className="absolute top-0 left-0 z-0 h-full w-screen rounded-2xl bg-stone-300/25"></div>
                            <StatContent
                              icon={
                                <RiSpaceShipLine className="text-4xl text-secondary-200" />
                              }
                              title="Flotte"
                              value={
                                <span className="flex items-center">
                                  {+shipsValue.toFixed(0)}
                                  <span className="opacity-20">$</span>
                                </span>
                              }
                              sub={`${getPercentage(
                                shipsValue,
                                capital
                              ).toFixed(0)}% du capital`}
                            />
                            <StatContent
                              icon={
                                <HiOutlineOfficeBuilding className="text-4xl text-secondary-200" />
                              }
                              title="Structures"
                              value={
                                <span className="flex items-center">
                                  {+structuresValue.toFixed(0)}
                                  <span className="opacity-20">$</span>
                                </span>
                              }
                              sub={`${getPercentage(
                                structuresValue,
                                capital
                              ).toFixed(0)}% du capital`}
                            />
                            <StatContent
                              icon={
                                <MdOutlineCollections className="text-4xl text-secondary-200" />
                              }
                              title="Collection"
                              value={
                                <span className="flex items-center">
                                  {+collectiblesValue.toFixed(0)}
                                  <span className="opacity-20">$</span>
                                </span>
                              }
                              sub={`${getPercentage(
                                collectiblesValue,
                                capital
                              ).toFixed(0)}% du capital`}
                            />
                            <StatContent
                              icon={
                                <TbMilitaryRank className="text-4xl text-secondary-200" />
                              }
                              title="Badges"
                              value={
                                <span className="flex items-center">
                                  {+accessValue.toFixed(0)}
                                  <span className="opacity-20">$</span>
                                </span>
                              }
                              sub={`${getPercentage(
                                accessValue,
                                capital
                              ).toFixed(0)}% du capital`}
                            />
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{
                            translateX: -200,
                            opacity: 0,
                          }}
                          whileInView={{ translateX: 0, opacity: 1 }}
                          viewport={{ amount: 0.1, once: true }}
                          className="flex flex-col -space-y-2"
                        >
                          <motion.h3
                            initial={{
                              opacity: 0,
                            }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ amount: 0.1, once: false }}
                            className="flex font-title text-3xl font-bold uppercase text-primary-500/50"
                          >
                            Répartition flotte
                          </motion.h3>
                          <div className="stats relative overflow-x-visible bg-stone-300 shadow duration-300 ease-in-out hover:shadow-xl">
                            <div className="absolute top-0 right-0 z-0 h-full w-screen rounded-2xl bg-stone-300/25"></div>
                            <StatContent
                              icon={
                                <BiTargetLock className="text-4xl text-secondary-200" />
                              }
                              title="Combat"
                              value={getShipCountBySpec(['fighter', 'bomber'])}
                              sub={`${(
                                (getShipCountBySpec(['fighter', 'bomber']) /
                                  getTotalShipCount()) *
                                100
                              ).toFixed(0)}% de la flotte`}
                            />
                            <StatContent
                              icon={
                                <FiPackage className="text-4xl text-secondary-200" />
                              }
                              title="Transport"
                              value={getShipCountBySpec([
                                'freight',
                                'transport',
                              ])}
                              sub={`${(
                                (getShipCountBySpec(['freight', 'transport']) /
                                  getTotalShipCount()) *
                                100
                              ).toFixed(0)}% de la flotte`}
                            />
                            <StatContent
                              icon={
                                <RiServiceFill className="text-4xl text-secondary-200" />
                              }
                              title="Service"
                              value={getShipCountBySpec([
                                'rescue',
                                'repair',
                                'refuel/repair',
                              ])}
                              sub={`${(
                                (getShipCountBySpec([
                                  'rescue',
                                  'repair',
                                  'refuel/repair',
                                ]) /
                                  getTotalShipCount()) *
                                100
                              ).toFixed(0)}% de la flotte`}
                            />
                            <StatContent
                              icon={
                                <RiStarHalfLine className="text-4xl text-secondary-200" />
                              }
                              title="Spé"
                              value={getShipCountBySpec([
                                'multi-role',
                                'bounty hunter',
                                'racer',
                                'data runner',
                              ])}
                              sub={`${(
                                (getShipCountBySpec([
                                  'multi-role',
                                  'bounty hunter',
                                  'racer',
                                  'data runner',
                                ]) /
                                  getTotalShipCount()) *
                                100
                              ).toFixed(0)}% de la flotte`}
                            />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <div className="h-10 w-full bg-primary-500"></div>
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

export default Armada;
