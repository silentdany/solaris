import { useEffect, useState } from 'react';

import CookieConsent from 'react-cookie-consent';

// eslint-disable-next-line import/no-cycle
import { GuildContent } from './guild';
import { Footer } from '../sections/Footer';
import { Navbar } from '../sections/Navbar';

const Index = ({ children }) => {
  const [childrenState, setChildrenState] = useState(<GuildContent />);
  useEffect(() => {
    if (children) {
      setChildrenState(children);
    }
  }, [children]);

  return (
    <>
      <div className="text-stone-600 antialiased">
        <div id="page-wrap" className="w-full">
          <Navbar />
          {childrenState}
          <Footer />
        </div>
      </div>
      <CookieConsent
        location="bottom"
        buttonText="J'accepte"
        cookieName="acceptCookie"
        disableStyles
        containerClasses="bg-primary-500 w-full left-0 flex justify-between fixed place-items-center p-4 space-x-4 text-sm"
        buttonClasses="bg-stone-50 hover:bg-stone-50/80 text-stone-900 rounded p-2 text-sm ease-in-out duration-100"
        expires={365}
        overlay
        overlayClasses="fixed top-0 left-0 w-screen h-screen bg-stone-50/75 z-50"
      >
        Ce site utilise des cookies pour améliorer l&apos;expérience
        utilisateur.
      </CookieConsent>
    </>
  );
};

export default Index;
