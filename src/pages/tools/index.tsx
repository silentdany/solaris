import { useState } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';

import Index from '..';
import { SolarButton } from '../../components/SolarButton';
import Page from '../../layout/Page';
import { Meta } from '../../sections/Meta';
import { AppConfig } from '../../utils/AppConfig';

const data = [
  {
    title: 'Kiosque',
    text: 'Découvrez les documents et autres supports préparés ou selectionnés spécialement pour vous dans différents formats téléchargeables.',
    accentText:
      'Infographies, traductions des tomes CORE et bien plus à venir.',
    url: '/tools/kiosque',
    color: 'border-stone-600',
    image: '/assets/images/kiosk.webp',
  },
  {
    title: 'Dock',
    text: 'Découvrez toutes les données des vaisseaux du jeu condensées en une application simple et intuitive.',
    accentText:
      'Consultez tous les modules, les visuels et bientôt les données de marché.',
    url: '/tools/dock',
    color: 'border-stone-700',
    image: '/assets/images/dock.webp',
  },
  {
    title: 'Armada',
    text: 'Visualisez de manière inédite notre flotte de guerre et découvrez la puissance économique de Solaris !',
    accentText:
      "Profitez-en pour admirer votre flotte ou n'importe laquelle via votre wallet ou une clé publique.",

    url: '/tools/armada',
    color: 'border-stone-800',
    image: '/assets/images/armada.webp',
  },
];

const Tools = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const expandSlide = (index: number) => {
    setSlideIndex(index);
  };
  return (
    <>
      <Meta
        title="Outils"
        description={
          'Découvrez les outils de gestion et de visualisation pour Star Atlas, développés par Solaris.'
        }
        canonical={`${AppConfig.url}/tools`}
      />
      <Index>
        <Page title="Outils" image="/assets/images/tools.webp" screenHeight>
          <div className="flex h-full w-full max-w-6xl justify-center">
            {data.map(
              ({ title, text, accentText, url, color, image }, index) => (
                <div
                  className={`group relative flex h-full items-center justify-center border-2 duration-300 ease-in-out hover:border-primary-500 ${color} ${
                    slideIndex === index ? 'w-full' : 'w-12 md:w-16 lg:w-32'
                  }`}
                  style={{
                    background: `url(${image}) no-repeat center/cover`,
                  }}
                  key={title}
                  onClick={() => expandSlide(index)}
                >
                  {slideIndex === index ? (
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.75 }}
                      className="flex h-full flex-col items-center justify-around"
                    >
                      <h2 className="flex items-center font-title text-4xl font-semibold text-primary-500 md:text-5xl ">
                        {title}
                      </h2>
                      <motion.div
                        initial={{
                          opacity: 0,
                        }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.75 }}
                        className="glass flex w-2/3 flex-col items-center justify-center space-y-4 rounded-xl bg-stone-800/60 p-4 shadow hover:bg-stone-800/60 hover:shadow-xl md:space-x-8 md:p-8 lg:flex-row"
                      >
                        <div className="flex flex-col space-y-2">
                          <p className="text-xs text-stone-50 md:text-sm">
                            {text}
                          </p>
                          <h3 className="text-xs text-primary-300 md:text-sm">
                            {accentText}
                          </h3>
                        </div>
                        <Link href={url} className="group">
                          <SolarButton
                            small
                            url={url}
                            title={title}
                            item={
                              <div className="flex items-center text-xs md:text-sm">
                                Acceder
                                <span className="ml-2 md:text-lg lg:text-xl">
                                  <BiChevronRight />
                                </span>
                              </div>
                            }
                          />
                        </Link>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <div className="absolute top-0 left-0 h-full w-full cursor-pointer bg-stone-900 opacity-75 duration-300 ease-in-out hover:opacity-60">
                      <h2
                        className="flex h-full w-full items-center justify-center font-title text-2xl font-semibold uppercase tracking-[-0.35em] text-stone-50 duration-300 ease-in-out hover:text-primary-300 md:text-3xl"
                        style={{
                          writingMode: 'vertical-rl',
                          textOrientation: 'upright',
                        }}
                      >
                        {title}
                      </h2>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </Page>
      </Index>
    </>
  );
};

export default Tools;
