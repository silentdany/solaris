import { useEffect, useState } from 'react';

import Image from 'next/future/image';
import { BiDollarCircle, BiDownArrow, BiUserCheck } from 'react-icons/bi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdOutlineCollections } from 'react-icons/md';
import { RiSpaceShipLine } from 'react-icons/ri';
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
import InnerSectionBlock from '../../../layout/InnerSectionBlock';
import Page from '../../../layout/Page';

interface StatContentProps {
  icon: JSX.Element;
  title: string;
  value: number;
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

  const getValueWithSeparators = (x: any) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

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
                    <div className="flex w-full justify-end text-xl text-gray-400">
                      {getValueWithSeparators(nft.value.toFixed(0))}
                      <BiDollarCircle className="ml-1 text-2xl text-yellow-500" />
                    </div>
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
                    className="w-full bg-stone-800 object-cover duration-300 ease-in-out"
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
    <div className="stat">
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
                        className="group flex w-full items-center justify-evenly"
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
                        className="flex w-full max-w-4xl flex-col items-start justify-between space-y-24 p-8 "
                      >
                        <div className="stats bg-stone-300 shadow">
                          <StatContent
                            icon={
                              <BiUserCheck className="text-4xl text-primary-500" />
                            }
                            title="Solars incorporés"
                            value={topHodlers.length}
                          />
                          <StatContent
                            icon={
                              <BiDollarCircle className="text-4xl text-primary-500" />
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
                              <BiUserCheck className="text-4xl text-primary-500" />
                            }
                            title="Vaisseaux"
                            value={ships.reduce(
                              (acc, ship) => acc + ship.quantity,
                              0
                            )}
                          />
                        </div>
                        <div className="stats self-end bg-stone-300 shadow">
                          <StatContent
                            icon={
                              <RiSpaceShipLine className="text-4xl text-primary-500" />
                            }
                            title="Flotte"
                            value={+shipsValue.toFixed(0)}
                            sub={`${getPercentage(shipsValue, capital).toFixed(
                              0
                            )}% du capital`}
                          />
                          <StatContent
                            icon={
                              <HiOutlineOfficeBuilding className="text-4xl text-primary-500" />
                            }
                            title="Structures"
                            value={+structuresValue.toFixed(0)}
                            sub={`${getPercentage(
                              structuresValue,
                              capital
                            ).toFixed(0)}% du capital`}
                          />
                          <StatContent
                            icon={
                              <MdOutlineCollections className="text-4xl text-primary-500" />
                            }
                            title="Collection"
                            value={+collectiblesValue.toFixed(0)}
                            sub={`${getPercentage(
                              collectiblesValue,
                              capital
                            ).toFixed(0)}% du capital`}
                          />
                          <StatContent
                            icon={
                              <TbMilitaryRank className="text-4xl text-primary-500" />
                            }
                            title="Badges"
                            value={+accessValue.toFixed(0)}
                            sub={`${getPercentage(accessValue, capital).toFixed(
                              0
                            )}% du capital`}
                          />
                        </div>
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
