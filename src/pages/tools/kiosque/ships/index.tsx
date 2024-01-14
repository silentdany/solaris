import React from 'react';

import Index from '../../..';
import Page from '../../../../layout/Page';
import { Meta } from '../../../../sections/Meta';
import { AppConfig } from '../../../../utils/AppConfig';

const Tools = () => {
  return (
    <>
      <Meta
        title="Vaisseaux"
        description={'Informez-vous sur les vaisseaux de Star Atlas Labs.'}
        canonical={`${AppConfig.url}/tools/kiosque/ships`}
      />
      <Index>
        <Page title="Vaisseaux" image="/assets/images/kiosk.webp">
          <div className="flex w-full flex-col items-center justify-center">
            <iframe
              src="https://flipsidecrypto.xyz/Datarunner/vaisseaux-vaisseaux-vUWA3x"
              title="Vaisseauxs"
              className="h-screen w-full -translate-y-60"
            />
          </div>
        </Page>
      </Index>
    </>
  );
};

export default Tools;
