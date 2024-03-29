import { useContext, useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { useWallet } from '@solana/wallet-adapter-react';
import dynamic from 'next/dynamic';
import { BiDownArrow } from 'react-icons/bi';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Index from '../..';
import { supabase } from '../../../../lib/initSupabase';
import { Loader } from '../../../components/Loader';
import { CapitalStat } from '../../../components/tools/armada/CapitalStat';
import SwiperContent from '../../../components/tools/armada/SwiperContent';
import {
  FetchOriginContext,
  ParticipateArmadaContext,
} from '../../../contexts';
import useNFT from '../../../hooks/useNFT';
import InnerSectionBlock from '../../../layout/InnerSectionBlock';
import Page from '../../../layout/Page';
import { Meta } from '../../../sections/Meta';
import { AppConfig } from '../../../utils/AppConfig';
import {
  getCapitalRepartition,
  getFleetRepartition,
  getResume,
  pages,
} from '../../../utils/data/Armada';
import { debounce } from '../../../utils/global';

const Armada = () => {
  const { publicKey } = useWallet();
  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
  );

  const { participateArmada } = useContext(ParticipateArmadaContext);

  const [loading, setLoading] = useState(true);
  const [pubKeys, setPubKeys] = useState<string[]>([]);

  const [fetchOrigin, setFetchOrigin] = useState<string[]>([]);
  const [fetchOriginSelect, setFetchOriginSelect] = useState('guild');

  const [pubKeyInput, setPubKeyInput] = useState<string>('');
  const [pubKeyInputError, setPubKeyInputError] = useState<boolean>(false);

  const handlePubKeyInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pubKeyInput) {
      setFetchOrigin([pubKeyInput]);
      setPubKeyInputError(false);
    }
    if (pubKeyInput.length < 32 || pubKeyInput.length > 44 || !pubKeyInput) {
      setPubKeyInputError(true);
    }
  };

  const fetchPubKeys = async () => {
    const { data: memberKeys, error } = await supabase
      .from('member_keys')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      console.log('error', error);
    }
    if (memberKeys) {
      const membersPubKeys = memberKeys.map((key) => {
        return key.pubkey;
      });
      setPubKeys(membersPubKeys);
      setFetchOrigin(membersPubKeys);
    } else {
      setPubKeys([]);
    }
  };

  const {
    nftData: ships,
    isLoading: shipsLoading,
    totalNFTValue: shipsNFTValue,
    totalNFTValueByMSRP: shipsNFTValueByMSRP,
    totalNFTValueByVWAP: shipsNFTValueByVWAP,
  } = useNFT(fetchOrigin, 'ship');
  const {
    nftData: structures,
    isLoading: structuresLoading,
    totalNFTValue: structuresNFTValue,
    totalNFTValueByMSRP: structuresNFTValueByMSRP,
    totalNFTValueByVWAP: structuresNFTValueByVWAP,
  } = useNFT(fetchOrigin, 'structure');
  const {
    nftData: collectibles,
    isLoading: collectiblesLoading,
    totalNFTValue: collectiblesNFTValue,
    totalNFTValueByMSRP: collectiblesNFTValueByMSRP,
    totalNFTValueByVWAP: collectiblesNFTValueByVWAP,
  } = useNFT(fetchOrigin, 'collectible');
  const {
    nftData: access,
    isLoading: accessLoading,
    totalNFTValue: accessNFTValue,
    totalNFTValueByMSRP: accessNFTValueByMSRP,
    totalNFTValueByVWAP: accessNFTValueByVWAP,
  } = useNFT(fetchOrigin, 'access');

  const getTotalShipCount: any = () =>
    ships ? ships.reduce((acc, ship: any) => acc + ship.quantity, 0) : 0;

  const getShipCountBySpec: any = (spec: Array<string>) => {
    if (!ships) return 0;
    const filteredShips = ships.filter((ship: any) =>
      spec.includes(ship.data.galaxyData.attributes.spec)
    );
    const total = filteredShips.reduce(
      (acc: any, ship: any) => acc + ship.quantity,
      0
    );
    return total;
  };

  const capital: number[] = [
    shipsNFTValue,
    structuresNFTValue,
    collectiblesNFTValue,
    accessNFTValue,
  ];
  const capitalByMSRP = [
    shipsNFTValueByMSRP,
    structuresNFTValueByMSRP,
    collectiblesNFTValueByMSRP,
    accessNFTValueByMSRP,
  ];
  const capitalByVWAP = [
    shipsNFTValueByVWAP,
    structuresNFTValueByVWAP,
    collectiblesNFTValueByVWAP,
    accessNFTValueByVWAP,
  ];

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
    fetchPubKeys();
  }, [participateArmada]);

  useEffect(() => {
    if (
      [
        shipsLoading,
        structuresLoading,
        collectiblesLoading,
        accessLoading,
      ].includes(true)
    ) {
      setLoading(true);
    }
    if (
      !shipsLoading &&
      !structuresLoading &&
      !collectiblesLoading &&
      !accessLoading
    ) {
      setLoading(false);
    }
  }, [
    collectiblesLoading,
    shipsLoading,
    structuresLoading,
    accessLoading,
    fetchOrigin,
    participateArmada,
  ]);

  useEffect(() => {
    if (!publicKey) {
      setFetchOrigin(pubKeys);
      setFetchOriginSelect('guild');
    }
  }, [publicKey, participateArmada]);

  return (
    <>
      <Meta
        title="Armada"
        description={
          'Visualisez de manière inédite notre flotte de guerre et découvrez la puissance économique de Solaris !'
        }
        canonical={`${AppConfig.url}/tools/armada`}
      />
      <Index>
        <FetchOriginContext.Provider value={fetchOriginSelect}>
          <Page title="Armada" image="/assets/images/armada.webp">
            <div className="flex w-full flex-col items-center justify-center">
              <InnerSectionBlock
                bgColor={'from-primary-500/40'}
                fullscreen={true}
              >
                <div className="flex h-full w-full flex-col">
                  <div className="flex h-8 w-full cursor-pointer place-items-center bg-stone-700 font-title md:h-10 md:text-xl">
                    <div
                      className={`flex h-full w-1/3 items-center justify-center border-b-4 duration-100 ease-in-out hover:border-secondary-500 ${
                        fetchOriginSelect === 'guild'
                          ? 'border-primary-500 text-stone-300'
                          : 'border-stone-700 text-stone-300/50'
                      }`}
                      onClick={() => {
                        setLoading(true);
                        setFetchOrigin(pubKeys);
                        setFetchOriginSelect('guild');
                        setPubKeyInputError(false);
                      }}
                    >
                      Guilde
                    </div>
                    <div
                      className={`flex h-full w-1/3 items-center justify-center border-b-4 duration-100 ease-in-out hover:border-secondary-500 ${
                        fetchOriginSelect === 'own'
                          ? 'border-primary-500 text-stone-300'
                          : 'border-stone-700 text-stone-300/50'
                      }`}
                    >
                      {publicKey ? (
                        <div
                          className="w-full"
                          onClick={() => {
                            setLoading(true);
                            setFetchOrigin([publicKey.toBase58()]);
                            setFetchOriginSelect('own');
                            setPubKeyInputError(false);
                          }}
                        >
                          Personnel
                        </div>
                      ) : (
                        <WalletMultiButtonDynamic className="!flex !h-7 !w-full !items-center !justify-center !rounded-none !p-0 !text-sm !leading-normal hover:!bg-primary-500/40 md:!h-9 md:!text-base" />
                      )}
                    </div>
                    <div
                      className={`flex h-full w-1/3 items-center justify-center border-b-4 duration-100 ease-in-out ${
                        pubKeyInputError
                          ? 'border-error focus-within:border-error hover:border-error'
                          : 'focus-within:border-secondary-500 hover:border-secondary-500'
                      } ${
                        fetchOriginSelect === 'pubkey'
                          ? 'border-primary-500 text-stone-300'
                          : 'border-stone-700 text-stone-300/50'
                      } `}
                    >
                      <form
                        className="group-search-box relative h-full w-full"
                        onSubmit={handlePubKeyInputSubmit}
                      >
                        <input
                          onChange={debounce((e) => {
                            setLoading(true);
                            setPubKeyInput(e.target.value);
                            setFetchOriginSelect('pubkey');
                          }, 500)}
                          placeholder="Clé publique"
                          className="h-full w-full bg-stone-700 px-4 text-center text-sm placeholder:text-stone-300/75 focus:bg-primary-500/10 focus:outline-none"
                        />

                        {pubKeyInputError && (
                          <div
                            className={`tooltip tooltip-bottom tooltip-error absolute -bottom-1 left-0 h-1 w-full`}
                            data-tip="Mauvais format"
                          />
                        )}
                        <input type="submit" className="hidden" />
                      </form>
                    </div>
                  </div>

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
                              {fetchOriginSelect === 'guild' && (
                                <span className="font-hero">
                                  Sol
                                  <span className="text-primary-500">a</span>
                                  ris
                                </span>
                              )}
                              {fetchOriginSelect === 'own' && 'Personnel'}
                              {fetchOriginSelect === 'pubkey' && 'Clé publique'}
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
                              content={getResume(
                                capital,
                                pubKeys,
                                getTotalShipCount,
                                capitalByMSRP,
                                capitalByVWAP,
                                fetchOriginSelect
                              )}
                              index={0}
                            />
                            <CapitalStat
                              title="Répartition capitaux"
                              content={getCapitalRepartition(
                                capital,
                                shipsNFTValue,
                                structuresNFTValue,
                                collectiblesNFTValue,
                                accessNFTValue
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
        </FetchOriginContext.Provider>
      </Index>
    </>
  );
};

export default Armada;
