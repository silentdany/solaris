import React, { useState } from 'react';

import Image from 'next/future/image';
import { PortalWithState } from 'react-portal';
import SwiperCore, {
  Pagination,
  Lazy,
  FreeMode,
  Navigation,
  Thumbs,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { Modal } from '../../../../layout/Modal';

export const Visuals = ({ row }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <div className="p-4">
      <Swiper
        loop={true}
        navigation={true}
        pagination={{
          type: 'progressbar',
        }}
        lazy={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Lazy, Pagination, FreeMode, Navigation, Thumbs]}
        className="swiperMain relative h-96 overflow-hidden rounded-t-lg border-b-4 border-primary-500"
      >
        {row.original.media.map((image: string, index: number) => (
          <SwiperSlide key={`item${index + 1}`}>
            <PortalWithState closeOnOutsideClick closeOnEsc>
              {({ openPortal, closePortal, portal }) => (
                <React.Fragment>
                  <Image
                    src={image}
                    alt={`${row.original.name} picture n°${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 75vw, (min-width: 768px) 90vw, 100vw"
                    className="swiper-lazy object-cover transition-all duration-500 hover:scale-105 hover:cursor-pointer"
                    onClick={openPortal}
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                  {portal(
                    <Modal
                      item={
                        <Image
                          src={image}
                          alt={`${row.original.name} picture n°${index + 1}`}
                          width={1170}
                          height={600}
                          sizes="(min-width: 1024px) 75vw, (min-width: 768px) 90vw, 100vw"
                          className="flex justify-center rounded-xl object-cover shadow-xl"
                        />
                      }
                      closePortal={closePortal}
                    />
                  )}
                </React.Fragment>
              )}
            </PortalWithState>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        lazy={true}
        modules={[Lazy, FreeMode, Navigation, Thumbs]}
        className="swiperGallery h-24 cursor-pointer border-x-2 border-b-4 border-primary-500"
      >
        {row.original.media.map((image: string, index: number) => (
          <SwiperSlide
            key={`item${index + 1}`}
            className="border-x-2 border-primary-500 opacity-75"
          >
            <Image
              src={image}
              alt={`${row.original.name} picture n°${index + 1}`}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 75vw, (min-width: 768px) 90vw, 100vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
