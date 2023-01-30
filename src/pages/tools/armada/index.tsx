import { useEffect, useState } from 'react';

import Image from 'next/future/image';
import { BiDollarCircle } from 'react-icons/bi';
import { EffectCoverflow, Mousewheel, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import Index from '../..';
import { topHodlers } from '../../../../data/topHodlers';
import { DividerTriangle } from '../../../components/DividerTriangle';
import { Loader } from '../../../components/Loader';
import useNFT from '../../../hooks/useNFT';
import InnerSectionBlock from '../../../layout/InnerSectionBlock';
import Page from '../../../layout/Page';

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
      className="h-[500px]"
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
        );
      })}
    </Swiper>
  );

  const SummarySubBlock = ({ title, value }) => (
    <div className="flex flex-col">
      <h2 className="text-2xl text-primary-500">{title}</h2>
      <div className="flex flex-col items-center justify-between p-8">
        <div className="flex items-center space-x-1">
          <span className="text-3xl font-bold">{value.toFixed(0)}</span>
          <BiDollarCircle className="text-4xl text-primary-500" />
        </div>
      </div>
    </div>
  );

  const pages = ['Flotte', 'Structures', 'Collection', 'Badges'];

  const pagination = {
    clickable: true,
    renderBullet(index, className) {
      return `<span class="${className}">${pages[index]}</span>`;
    },
  };

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
              <div className="min-h-[60]">
                {loading ? (
                  <div className="flex h-[60vh] w-full items-center justify-center">
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
                    <div className="card flex flex-col items-center justify-center bg-stone-900/75 px-12 text-stone-50">
                      <DividerTriangle index={1} />
                      <h2 className="text-2xl text-primary-500">
                        Patrimoine total
                      </h2>
                      <div className="flex flex-col items-center justify-between p-8">
                        <div className="flex items-center space-x-1">
                          <span className="text-3xl font-bold">
                            {(
                              shipsValue +
                              structuresValue +
                              collectiblesValue +
                              accessValue
                            ).toFixed(0)}
                          </span>
                          <BiDollarCircle className="text-4xl text-primary-500" />
                        </div>
                      </div>
                      <DividerTriangle index={1} />
                      <div className="grid grid-cols-4 gap-2">
                        <SummarySubBlock
                          title="Valeur de la flotte"
                          value={shipsValue}
                        />
                        <SummarySubBlock
                          title="Valeur des emprises"
                          value={structuresValue}
                        />
                        <SummarySubBlock
                          title="Valeur de la collection"
                          value={collectiblesValue}
                        />
                        <SummarySubBlock
                          title="Valeur des insignes"
                          value={accessValue}
                        />
                      </div>
                    </div>
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
