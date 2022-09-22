import CookieConsent from 'react-cookie-consent';

import { Base } from '../templates/Base';

const Index = () => (
  <>
    <Base />
    <CookieConsent
      location="bottom"
      buttonText="J'accepte"
      cookieName="acceptCookie"
      disableStyles
      containerClasses="bg-primary-500 w-full left-0 flex justify-between fixed place-items-center p-4 space-x-4 text-sm"
      buttonClasses="bg-gray-50 hover:bg-gray-50/80 text-stone-900 rounded p-2 text-sm ease-in-out duration-100"
      expires={365}
      overlay
      overlayClasses="fixed top-0 left-0 w-screen h-screen bg-gray-50/75 z-50"
    >
      Ce site utilise des cookies pouyr améliorer l&apos;expérience utilisateur.
    </CookieConsent>
  </>
);

export default Index;
