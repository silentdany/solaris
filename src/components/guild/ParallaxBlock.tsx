import { ParallaxBanner } from 'react-scroll-parallax';

export const ParallaxBlock = ({ image, speed }) => (
  <ParallaxBanner
    layers={[
      {
        image,
        speed,
        style: {
          backgroundSize: 'cover',
        },
      },
    ]}
    className="relative z-10 h-64 lg:h-96"
  >
    <div className="absolute top-0 h-64 w-full bg-gradient-to-b from-stone-50 lg:h-96"></div>
  </ParallaxBanner>
);
