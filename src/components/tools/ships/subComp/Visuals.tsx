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

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#3e5982" offset="20%" />
      <stop stop-color="#526d96" offset="50%" />
      <stop stop-color="#3e5982" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#ffd5733e" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

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
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
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
                          placeholder="blur"
                          blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(700, 475)
                          )}`}
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
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
