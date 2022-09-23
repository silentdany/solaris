import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { ParallaxBanner } from 'react-scroll-parallax';

import { DividerTop } from '../components/DividerTop';
import { AppConfig } from '../utils/AppConfig';
import useMediaQuery from '../utils/useMediaQuery';

const Hero = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <header className="bg-black h-screen relative">
      <ParallaxBanner
        layers={[
          {
            image: '/assets/images/hero_bg.webp',
            speed: -50,
            style: {
              backgroundSize: isDesktop ? 'contain' : 'auto',
              backgroundPosition: isDesktop ? 'center' : 'right',
            },
          },
          {
            image: '/assets/images/hero_bg_plan_3.webp',
            speed: -40,
            style: {
              backgroundSize: isDesktop ? 'contain' : 'auto',
              backgroundPosition: isDesktop ? 'center' : 'right',
            },
          },
          {
            image: '/assets/images/hero_bg_plan_2.webp',
            speed: -30,
            style: {
              backgroundSize: isDesktop ? 'contain' : 'auto',
              backgroundPosition: isDesktop ? 'center' : 'right',
            },
          },
          {
            image: '/assets/images/commander.webp',
            disabled: !isDesktop,
            scale: [0, 1.5],
            rotate: [0, 40],
            style: {
              backgroundSize: isDesktop ? '100px' : 0,
              backgroundPosition: 'bottom 5% left 45%',
              backgroundRepeat: 'no-repeat',
            },
          },
          {
            image: '/assets/images/hero_bg_plan_1.webp',
            speed: -20,
            style: {
              backgroundSize: isDesktop ? 'contain' : 'auto',
              backgroundPosition: isDesktop ? 'center' : 'right',
            },
          },
          {
            opacity: [0, 1],
            expanded: false,
            shouldAlwaysCompleteAnimation: true,
            children: (
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50" />
            ),
          },
        ]}
        style={{ aspectRatio: '2 / 1' }}
        className="h-screen"
      >
        <div className="absolute bg-black/10 w-full h-full animate-pulse-slow" />
        <div className="hero min-h-screen bg-base-200">
          <h1 className="absolute bottom-8 left-8 text-5xl md:text-7xl lg:text-9xl font-hero font-extrabold mix-blend-overlay text-gray-50/10">
            Solaris
          </h1>
          <div className="hero-content text-center flex flex-col">
            <div className="max-w-4xl relative">
              <div className="text-6xl md:text-8xl font-black font-hero text-stone-100 mix-blend-screen tracking-wide relative mt-16">
                <Image
                  src="/assets/images/solaris_title_logo_color_white.webp"
                  alt="Solaris Logo"
                  width={600}
                  height={82}
                />
                <span className="text-lg md:text-2xl font-title tracking-tight opacity-75 absolute -bottom-2 -right-0 md:-right-12 lg:-bottom-1 lg:-right-20 mix-blend-screen">
                  <span className="text-primary-300">by</span>
                  <span
                    style={{ textShadow: '5px 5px #2F3557' }}
                    className="ml-2 font-qtt text-stone-100 text-3xl md:text-5xl"
                  >
                    {AppConfig.destructuredTitle[1]}
                  </span>
                </span>
              </div>
              <p className="py-6 text-stone-50 text-sm md:text-base">
                {AppConfig.description}
              </p>
            </div>
            <div>
              <a
                href=" https://discord.gg/vECEHD6GdJ"
                title="Discord QTT"
                target="_blank"
              >
                <button className="btn my-16 px-4 md:px-12 lg:px-18 h-12 lg:h-16 relative overflow-hidden transition-all bg-white rounded-xl hover:bg-white group border-0">
                  <span className="w-0 h-full -skew-x-[40deg] rounded bg-secondary-300 absolute top-0 -left-10 ease-out duration-500 transition-all group-hover:w-[150%] -z-1"></span>
                  <span className="w-0 h-full -skew-x-[40deg] rounded bg-primary-300 absolute top-0 -left-20 ease-out duration-500 transition-all group-hover:w-[150%] -z-1"></span>
                  <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10 flex justify-center items-center">
                    <span className="text-xl md:text-2xl lg:text-3xl mr-4">
                      <FaDiscord />
                    </span>
                    Rejoignez-nous !
                  </span>
                </button>
              </a>
            </div>
            <Link href="#start">
              <a className="btn btn-circle glass animate-bounce-slow transition text-primary-500">
                <HiChevronDoubleDown className="text-lg" />
              </a>
            </Link>
          </div>
        </div>
      </ParallaxBanner>
      <DividerTop />
    </header>
  );
};

export { Hero };
