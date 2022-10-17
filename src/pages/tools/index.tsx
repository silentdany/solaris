import Link from 'next/link';
import { BiDownArrow } from 'react-icons/bi';

import Index from '..';
import InnerSectionBlock from '../../layout/InnerSectionBlock';
import Page from '../../layout/Page';

const Spacer = () => <div className="h-20 w-full"></div>;

const Tools = () => {
  return (
    <Index>
      <Spacer />
      <Page title="Outils" bgColor="bg-stone-50" uppercase>
        <div className="flex w-full flex-col items-center justify-center">
          <InnerSectionBlock bgColor={'from-primary-500/40'}>
            <div className="max-w-4xl">
              <div className="flex w-full flex-col justify-center space-y-8">
                <Link href="/tools/infographics">
                  <a className="flex items-center text-xl font-semibold hover:text-primary-300">
                    Infographies Vaisseaux
                    <BiDownArrow className="ml-4 -rotate-90" />
                  </a>
                </Link>
                <Link href="/tools/ships">
                  <Link href="/tools/infographics">
                    <a className="flex items-center text-xl font-semibold hover:text-primary-300">
                      Listing Vaisseaux
                      <BiDownArrow className="ml-4 -rotate-90" />
                    </a>
                  </Link>
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
