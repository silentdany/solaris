import { useEffect, useState } from 'react';

import { BiDownArrow } from 'react-icons/bi';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import Index from '../..';
import { topHodlers } from '../../../../data/topHodlers';
import { Loader } from '../../../components/Loader';
import { CapitalStat } from '../../../components/tools/armada/CapitalStat';
import SwiperContent from '../../../components/tools/armada/SwiperContent';
import useNFT from '../../../hooks/useNFT';
import InnerSectionBlock from '../../../layout/InnerSectionBlock';
import Page from '../../../layout/Page';
import {
  getCapitalRepartition,
  getFleetRepartition,
  getResume,
  pages,
} from '../../../utils/data/Armada';

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

  const capital = [shipsValue, structuresValue, collectiblesValue, accessValue];

  const customBullet = ({ index, className }) =>
    `<div class="${className}">
      ${pages[index]}
    </div>`;

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return customBullet({ index, className });
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

  return (
    <Index>
      <Page title="Armada" image="/assets/images/armada.webp">
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
                      className="px-24"
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
                        <BiDownArrow className="animate-bounce-slow text-xl text-primary-700/50 duration-200 ease-in-out group-hover:text-primary-700 md:text-4xl" />
                        <h2 className="text-lg md:text-2xl">
                          <span className="font-hero">
                            Sol
                            <span className="text-primary-500">a</span>
                            ris
                          </span>
                          <span className="mx-4 text-primary-500">|</span>
                          Capital
                        </h2>
                        <BiDownArrow className="animate-bounce-slow text-xl text-primary-700/50 duration-200 ease-in-out group-hover:text-primary-700 md:text-4xl" />
                      </a>
                      <div
                        id="capital"
                        className="flex w-full max-w-4xl scroll-mt-36 flex-col items-center justify-center space-y-24 p-8 pb-20"
                      >
                        <CapitalStat
                          title="Résumé"
                          content={getResume(capital, getTotalShipCount)}
                          index={0}
                        />
                        <CapitalStat
                          title="Répartition capitaux"
                          content={getCapitalRepartition(
                            capital,
                            shipsValue,
                            structuresValue,
                            collectiblesValue,
                            accessValue
                          )}
                          index={1}
                        />
                        <CapitalStat
                          title="Répartition flotte"
                          content={getFleetRepartition(
                            getShipCountBySpec,
                            getTotalShipCount
                          )}
                          index={2}
                        />
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
