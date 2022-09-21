import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';

import '../styles/global.css';
import './_app.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ParallaxProvider>
    <Component {...pageProps} />
  </ParallaxProvider>
);

export default MyApp;
