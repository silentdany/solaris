import React from 'react';

import { EffectCoverflow, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import useMediaQuery from '../../../hooks/useMediaQuery';

const EmptySwiperContent = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
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
      style={{
        padding: isMobile ? '0 8px' : '0 64px',
        background:
          'linear-gradient(180deg, rgb(0 0 0 / 0) 0%, rgb(28 25 23 / 0.25) 10%, rgb(28 25 23 / 0.75) 29%, rgb(28 25 23 / 0.75) 71%, rgb(28 25 23 / 0.25) 90%, rgb(0 0 0 / 0) 100%)',
      }}
    >
      <SwiperSlide className="group flex h-full">
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
                <p className="flex h-full w-full items-center justify-center text-stone-300">
                  Pas de données
                </p>
              </div>
            </div>
            <div
              className={`card glass relative z-10 w-1/3 rounded-xl shadow-lg shadow-common duration-300 ease-in-out hover:shadow-lg hover:shadow-common ${
                isActive && 'scale-110'
              } `}
            >
              <p className="flex h-full w-full items-center justify-center text-stone-300">
                Pas de données
              </p>
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
                <p className="flex h-full w-full items-center justify-center text-stone-300">
                  Pas de données
                </p>
              </div>
            </div>
          </>
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default EmptySwiperContent;
