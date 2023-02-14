import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/global.css';
import './_app.css';

const MyApp = ({ Component, pageProps }: AppProps<{ session: Session }>) => (
  <SessionProvider session={pageProps.session}>
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  </SessionProvider>
);

export default MyApp;
