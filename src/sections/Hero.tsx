import Image from 'next/image';
import Link from 'next/link';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { ParallaxBanner } from 'react-scroll-parallax';

import { DividerTop } from '../components/DividerTop';
import { JoinButton } from '../components/JoinButton';
import useMediaQuery from '../hooks/useMediaQuery';
import { AppConfig } from '../utils/AppConfig';

const Hero = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <header className="relative h-screen bg-black">
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
              backgroundPosition: 'bottom 10% left 50%',
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
              <div className="absolute inset-0 bg-gradient-to-t from-stone-50" />
            ),
          },
        ]}
        style={{ aspectRatio: '2 / 1' }}
        className="h-screen"
      >
        <div className="absolute h-full w-full animate-pulse-slow bg-black/10" />
        <div className="hero min-h-screen bg-base-200">
          <h1 className="absolute bottom-8 left-8 font-hero text-5xl font-extrabold text-stone-50/10 mix-blend-overlay md:text-7xl lg:text-9xl">
            Solaris
          </h1>
          <div className="hero-content flex flex-col text-center">
            <div className="relative max-w-4xl">
              <div className="relative mt-16 font-hero text-6xl font-black tracking-wide text-stone-100 mix-blend-screen md:text-8xl">
                <Image
                  src="/assets/images/solaris_title_logo_color_white.webp"
                  alt="Solaris Logo"
                  width={600}
                  height={82}
                />
                <span className="absolute -bottom-2 -right-0 font-title text-lg tracking-tight opacity-75 mix-blend-screen md:-right-12 md:text-2xl lg:-bottom-1 lg:-right-20">
                  <span className="text-primary-300">by</span>
                  <span
                    style={{ textShadow: '5px 5px #2F3557' }}
                    className="ml-2 font-qtt text-3xl text-stone-100 md:text-5xl"
                  >
                    {AppConfig.destructuredTitle[1]}
                  </span>
                </span>
              </div>
              <p className="py-6 text-sm text-stone-50 md:text-base">
                {AppConfig.description}
              </p>
            </div>
            <JoinButton />
            <Link href="#start">
              <a className="btn glass btn-circle animate-bounce-slow text-primary-500 transition">
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
