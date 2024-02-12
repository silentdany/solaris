import React from 'react';

import Index from '../../..';
import Page from '../../../../layout/Page';
import { Meta } from '../../../../sections/Meta';
import { AppConfig } from '../../../../utils/AppConfig';

const Tools = () => {
  return (
    <>
      <Meta
        title="Tokenomics"
        description={'Informez-vous sur les tokenomics de Star Atlas Labs.'}
        canonical={`${AppConfig.url}/tools/kiosque/tokenomics`}
      />
      <Index>
        <Page title="Tokenomics" image="/assets/images/kiosk.webp">
          <div className="flex w-full flex-col items-center justify-center">
            <iframe
              src="https://flipsidecrypto.xyz/Datarunner/tokenomics-tokenomics-A-gdfB"
              title="Tokenomics"
              className="h-screen w-full -translate-y-60"
            />
          </div>
        </Page>
      </Index>
    </>
  );
};

export default Tools;
