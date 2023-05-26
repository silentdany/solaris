import React from 'react';

import Image from 'next/future/image';
import { BiDownArrow, BiDownload } from 'react-icons/bi';
import { PortalWithState } from 'react-portal';

import Index from '../..';
import InnerSectionBlock from '../../../layout/InnerSectionBlock';
import { Modal } from '../../../layout/Modal';
import Page from '../../../layout/Page';
import { Meta } from '../../../sections/Meta';
import { AppConfig } from '../../../utils/AppConfig';
import { Core } from '../../../utils/data/Core';
import { Infographics } from '../../../utils/data/Infographics';

interface Info {
  title: string;
  anchor: string;
  cardTitle?: Array<string>;
  thumbnails: any;
  webp: Array<string>;
  jpg: Array<string>;
}

const DownloadLink = ({ url, ext }) => (
  <div className="flex items-center duration-200 ease-in-out hover:translate-x-1">
    <BiDownArrow className="mr-4 -rotate-90" />
    <a
      href={url}
      download
      target={'_blank'}
      className="flex items-center hover:text-primary-500"
      rel="noreferrer"
    >
      Télécharger version
      <em className="mx-1 uppercase">{ext}</em>
      <BiDownload className="ml-2" />
    </a>
  </div>
);

const Tools = () => {
  return (
    <>
      <Meta
        title="Kiosque"
        description={
          'Découvrez les documents et autres supports préparés ou selectionnés spécialement pour vous dans différents formats téléchargeables.'
        }
        canonical={`${AppConfig.url}/tools/kiosque`}
      />
      <Index>
        <Page title="Kiosque" image="/assets/images/kiosk.webp">
          <div className="flex w-full flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'}>
              <div className="flex w-full flex-col items-center space-y-24">
                <h2 className="font-title text-3xl font-bold text-secondary-500 md:text-4xl lg:text-5xl">
                  Infographies
                </h2>
                {Infographics.map((info: Info, index) => (
                  <div
                    className="flex w-full scroll-mt-16 flex-col items-start justify-center"
                    key={info.title}
                    id={info.anchor}
                  >
                    <div className="flex w-full border-b-2 border-primary-500">
                      <div className="text-4xl md:text-5xl lg:text-6xl">
                        {`0${index + 1}`}
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="ml-2 border-l-2 border-primary-700 pl-2 text-left font-title text-2xl md:ml-4 md:border-l-4 md:pl-4 md:text-3xl lg:text-4xl">
                          {info.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
                      {info.webp.map((item, itemIndex) => (
                        <div
                          className="group card glass flex flex-col space-y-4 hover:shadow-xl"
                          key={`${info.title}-${itemIndex}`}
                        >
                          <PortalWithState closeOnOutsideClick closeOnEsc>
                            {({ openPortal, closePortal, portal }) => (
                              <React.Fragment>
                                <figure
                                  className="h-2/5 overflow-hidden hover:cursor-pointer"
                                  onClick={openPortal}
                                >
                                  <Image
                                    src={info.thumbnails[itemIndex]}
                                    alt={info.title}
                                    className="object-cover object-top duration-300 ease-in-out group-hover:scale-105"
                                    width={400}
                                    height={300}
                                  />
                                </figure>
                                {portal(
                                  <Modal
                                    item={
                                      <Image
                                        src={item}
                                        alt={info.title}
                                        width={1000}
                                        height={600}
                                        className="flex justify-center rounded-xl bg-stone-900/50 object-cover shadow-xl"
                                        placeholder="blur"
                                        blurDataURL={item}
                                      />
                                    }
                                    closePortal={closePortal}
                                  />
                                )}
                              </React.Fragment>
                            )}
                          </PortalWithState>
                          <div className="card-body flex flex-col space-y-2 text-sm">
                            {info.cardTitle && (
                              <h4 className="card-title text-lg">
                                {info.cardTitle[itemIndex]}
                              </h4>
                            )}
                            <DownloadLink
                              url={info.webp[itemIndex]}
                              ext="webp"
                            />
                            <DownloadLink url={info.jpg[itemIndex]} ext="jpg" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <h2 className="font-title text-3xl font-bold text-secondary-500 md:text-4xl lg:text-5xl">
                  Histoire
                </h2>
                <div className="flex w-full flex-col items-start justify-center">
                  <div className="flex w-full border-b-2 border-primary-500">
                    <div className="text-4xl md:text-5xl lg:text-6xl">01</div>
                    <div className="flex flex-col justify-center">
                      <h3 className="ml-2 border-l-2 border-primary-700 pl-2 text-left font-title text-2xl md:ml-4 md:border-l-4 md:pl-4 md:text-3xl lg:text-4xl">
                        CORE
                      </h3>
                    </div>
                  </div>
                  <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {Core.map((core, coreIndex) => (
                      <div
                        className="group card glass flex max-h-96 scroll-mt-48 flex-col space-y-4 hover:shadow-xl"
                        key={`${core.title}-${coreIndex}`}
                        id={core.anchor}
                      >
                        <PortalWithState closeOnOutsideClick closeOnEsc>
                          {({ openPortal, closePortal, portal }) => (
                            <React.Fragment>
                              <figure
                                className="h-2/3 overflow-hidden hover:cursor-pointer"
                                onClick={openPortal}
                              >
                                <Image
                                  src={core.image}
                                  alt={core.title}
                                  className="duration-300 ease-in-out group-hover:scale-105"
                                  width={400}
                                  height={800}
                                />
                              </figure>
                              {portal(
                                <Modal
                                  item={
                                    <Image
                                      src={core.image}
                                      alt={core.title}
                                      width={600}
                                      height={1000}
                                      className="flex justify-center rounded-xl bg-stone-900/50 object-cover shadow-xl"
                                    />
                                  }
                                  closePortal={closePortal}
                                />
                              )}
                            </React.Fragment>
                          )}
                        </PortalWithState>
                        <div className="card-body flex flex-col space-y-2 text-sm">
                          <h4 className="card-title text-lg">{core.title}</h4>
                          <DownloadLink url={core.pdf} ext="pdf" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <div className="flex items-center duration-200 ease-in-out">
                <SiMicrosoftexcel className="mr-4 text-xl text-success" />
                <a
                  href="/assets/infos/ships.xlsx"
                  download
                  className="flex items-center hover:text-primary-500"
                >
                  Télécharger tableur général
                  <BiDownload className="ml-2" />
                </a>
              </div> */}
              </div>
            </InnerSectionBlock>
          </div>
        </Page>
      </Index>
    </>
  );
};

export default Tools;
