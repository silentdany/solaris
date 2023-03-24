import Head from 'next/head';
import { useRouter } from 'next/router';
// eslint-disable-next-line import/order
import { NextSeo } from 'next-seo';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          type: 'website',
          locale: AppConfig.locale,
          url: props.canonical,
          title: props.title,
          description: props.description,
          siteName: `${AppConfig.site_name} Guilde française sur Star Atlas`,
          images: [
            {
              url: `${router.basePath}/assets/logos/ban_720p.webp`,
              width: 1280,
              height: 720,
              alt: 'Solaris by QTT',
            },
            {
              url: `${router.basePath}/assets/promo/armada.webp`,
              width: 707,
              height: 1000,
              alt: 'Armada tool by Solaris',
            },
            {
              url: `${router.basePath}/assets/promo/dock.webp`,
              width: 707,
              height: 1000,
              alt: 'Dock tool by Solaris',
            },
            {
              url: `${router.basePath}/assets/promo/kiosk.webp`,
              width: 707,
              height: 1000,
              alt: 'Kiosk tool by Solaris',
            },
          ],
        }}
        twitter={{
          handle: '@SOLARIS_byQtt',
          site: '@SOLARIS_byQtt',
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
};

export { Meta };
