import Link from 'next/link';
import { BiDownArrow } from 'react-icons/bi';

import Index from '..';
import { NavbarSpacer } from '../../components/NavbarSpacer';
import InnerSectionBlock from '../../layout/InnerSectionBlock';
import Page from '../../layout/Page';

const Tools = () => {
  return (
    <Index>
      <NavbarSpacer />
      <Page title="Outils" image="/assets/images/workshop.webp">
        <div className="flex w-full flex-col items-center justify-center">
          <InnerSectionBlock bgColor={'from-primary-500/40'}>
            <div className="max-w-4xl">
              <div className="flex w-full flex-col justify-center space-y-8">
                <Link href="/tools/infographics">
                  <a className="flex items-center text-xl font-semibold hover:text-primary-300">
                    Infographies
                    <BiDownArrow className="ml-4 -rotate-90" />
                  </a>
                </Link>
                <Link href="/tools/ships">
                  <a className="flex items-center text-xl font-semibold hover:text-primary-300">
                    Listing Vaisseaux
                    <BiDownArrow className="ml-4 -rotate-90" />
                  </a>
                </Link>
              </div>
            </div>
          </InnerSectionBlock>
        </div>
      </Page>
    </Index>
  );
};

export default Tools;
