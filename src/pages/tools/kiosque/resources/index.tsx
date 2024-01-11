import React from 'react';

import Index from '../../..';
import Page from '../../../../layout/Page';
import { Meta } from '../../../../sections/Meta';
import { AppConfig } from '../../../../utils/AppConfig';

const Tools = () => {
  return (
    <>
      <Meta
        title="Ressources"
        description={'Informez-vous sur les ressources de Star Atlas Labs.'}
        canonical={`${AppConfig.url}/tools/kiosque/resources`}
      />
      <Index>
        <Page title="Ressources" image="/assets/images/kiosk.webp">
          <div className="flex w-full flex-col items-center justify-center">
            <iframe
              src="https://flipsidecrypto.xyz/Datarunner/ressources-ressources-A-gK6X"
              title="Ressources"
              className="h-screen w-full -translate-y-60"
            />
          </div>
        </Page>
      </Index>
    </>
  );
};

export default Tools;
