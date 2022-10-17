import Image from 'next/future/image';
import { BiDownArrow, BiDownload } from 'react-icons/bi';

import Index from '../..';
import InnerSectionBlock from '../../../layout/InnerSectionBlock';
import Page from '../../../layout/Page';
import { Infographics } from '../../../utils/data/Infographics';

const Spacer = () => <div className="h-20 w-full"></div>;

const DownloadLink = ({ url, ext }) => (
  <div className="flex items-center duration-200 ease-in-out hover:translate-x-1">
    <BiDownArrow className="mr-4 -rotate-90" />
    <a href={url} download className="flex items-center hover:text-primary-500">
      Télécharger version
      <em className="mx-1 uppercase">{ext}</em>
      <BiDownload className="ml-2" />
    </a>
  </div>
);

const Tools = () => {
  return (
    <Index>
      <Spacer />
      <Page title="Infographies" bgColor="bg-stone-50" uppercase>
        <div className="flex w-full flex-col items-center justify-center">
          <InnerSectionBlock bgColor={'from-primary-500/40'}>
            <div className="flex w-full flex-col items-start space-y-24">
              {Infographics.map((info, index) => (
                <div
                  className="flex w-full flex-col items-start justify-center"
                  key={info.title}
                >
                  <div className="flex w-full border-b-2 border-primary-500">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl">
                      {`0${index + 1}`}
                    </h3>
                    <div className="flex flex-col justify-center">
                      <h2 className="ml-2 border-l-2 border-primary-700 pl-2 text-left font-title text-2xl md:ml-4 md:border-l-4 md:pl-4 md:text-3xl lg:text-4xl">
                        {info.title}
                      </h2>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col space-x-0 space-y-16 lg:flex-row lg:space-x-8 lg:space-y-0">
                    {info.webp.map((item, itemIndex) => (
                      <div
                        className="group flex flex-col space-y-4"
                        key={`${info.title}-${itemIndex}`}
                      >
                        <div className="flex justify-start overflow-hidden rounded-xl shadow group-hover:shadow-xl">
                          <Image
                            src={item}
                            alt={info.title}
                            className="rounded-xl object-cover object-top shadow duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl"
                            width={400}
                            height={300}
                          />
                        </div>
                        <div className="flex flex-col space-y-2 text-sm">
                          <DownloadLink url={info.webp[itemIndex]} ext="webp" />
                          <DownloadLink url={info.png[itemIndex]} ext="png" />
                          <DownloadLink url={info.xls[itemIndex]} ext="xls" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </InnerSectionBlock>
        </div>
      </Page>
    </Index>
  );
};

export default Tools;
