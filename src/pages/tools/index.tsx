import { useState } from 'react';

import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';

import Index from '..';
import { SolarButton } from '../../components/SolarButton';
import Page from '../../layout/Page';

const data = [
  {
    title: 'Infographies',
    text: 'Découvrez les infographies de la guilde préparées spécialement pour vous dans différents formats téléchargeables.',
    url: '/tools/infographics',
    color: 'border-primary-300',
    image: '/assets/images/nightcity.webp',
  },
  {
    title: 'Listing vaisseaux',
    text: 'Découvrez toutes les données des vaisseaux du jeu condensées en une application simple et intuitive.',
    url: '/tools/ships',
    color: 'border-secondary-300',
    image: '/assets/images/spaceship.webp',
  },
];

const Tools = () => {
  const [slideIndex, setSlideIndex] = useState<number | null>(null);

  const expandSlide = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <Index>
      <Page title="Outils" image="/assets/images/workshop.webp" screenHeight>
        <div className="flex h-full w-full max-w-6xl justify-center">
          {data.map(({ title, text, url, color, image }, index) => (
            <div
              className={`group relative flex h-full items-center justify-center border-2 duration-300 ease-in-out ${color} ${
                slideIndex === index ? 'w-full' : 'w-32'
              }`}
              style={{ background: `url(${image}) no-repeat center/cover` }}
              key={title}
              onClick={() => expandSlide(index)}
            >
              {slideIndex === index ? (
                <div className="flex h-full flex-col items-center justify-around">
                  <h4 className="flex items-center font-title text-5xl font-semibold text-stone-50">
                    {title}
                  </h4>
                  <div className="glass flex w-2/3 items-center justify-center space-x-8 rounded-xl p-8 shadow hover:shadow-xl">
                    <p className="text-sm">{text}</p>
                    <Link href={url} className="group">
                      <SolarButton
                        url={url}
                        title={title}
                        item={
                          <>
                            Accéder
                            <span className="ml-2 text-xl md:text-2xl lg:text-3xl">
                              <BiChevronRight />
                            </span>
                          </>
                        }
                      />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="absolute top-0 left-0 h-full w-full cursor-pointer bg-stone-900 opacity-75">
                  <h4
                    className="flex h-full w-full items-center justify-center font-title text-3xl font-semibold text-stone-50"
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    {title}
                  </h4>
                </div>
              )}
            </div>
          ))}
        </div>
      </Page>
    </Index>
  );
};

export default Tools;
