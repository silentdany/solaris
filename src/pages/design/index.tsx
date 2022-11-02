import { BiDownArrow, BiDownload, BiLinkExternal } from 'react-icons/bi';

import Index from '..';
import { LogoCollapse } from '../../components/design/LogoCollapse';
import { DividerTriangle } from '../../components/DividerTriangle';
import InnerSectionBlock from '../../layout/InnerSectionBlock';
import Page from '../../layout/Page';

const colors = [
  {
    title: 'Primaire',
    textColor: 'text-stone-50',
    colorData: [
      { hex: '#ffd573', class: 'bg-primary-50' },
      { hex: '#f8cb69', class: 'bg-primary-100' },
      { hex: '#eec15f', class: 'bg-primary-200' },
      { hex: '#e4b755', class: 'bg-primary-300' },
      { hex: '#daad4b', class: 'bg-primary-400' },
      { hex: '#d0a341', class: 'bg-primary-500', base: true },
      { hex: '#c69937', class: 'bg-primary-600' },
      { hex: '#bc8f2d', class: 'bg-primary-700' },
      { hex: '#b28523', class: 'bg-primary-800' },
      { hex: '#a87b19', class: 'bg-primary-900' },
    ],
  },
  {
    title: 'Secondaire',
    textColor: 'text-stone-50',
    colorData: [
      { hex: '#708bb4', class: 'bg-secondary-50' },
      { hex: '#6681aa', class: 'bg-secondary-100' },
      { hex: '#5c77a0', class: 'bg-secondary-200' },
      { hex: '#526d96', class: 'bg-secondary-300' },
      { hex: '#48638c', class: 'bg-secondary-400' },
      { hex: '#3e5982', class: 'bg-secondary-500', base: true },
      { hex: '#344f78', class: 'bg-secondary-600' },
      { hex: '#2a456e', class: 'bg-secondary-700' },
      { hex: '#203b64', class: 'bg-secondary-800' },
      { hex: '#16315a', class: 'bg-secondary-900' },
    ],
  },
  {
    title: 'Gris',
    textColor: 'text-primary-300',
    colorData: [
      { hex: '#fafaf9', class: 'bg-stone-50' },
      { hex: '#f5f5f4', class: 'bg-stone-100' },
      { hex: '#e7e5e4', class: 'bg-stone-200' },
      { hex: '#d6d3d1', class: 'bg-stone-300' },
      { hex: '#a8a29e', class: 'bg-stone-400' },
      { hex: '#78716c', class: 'bg-stone-500', base: true },
      { hex: '#57534e', class: 'bg-stone-600' },
      { hex: '#44403c', class: 'bg-stone-700' },
      { hex: '#292524', class: 'bg-stone-800' },
      { hex: '#1c1917', class: 'bg-stone-900' },
    ],
  },
];

const fonts = [
  {
    title: 'Logo',
    fontClass: 'font-hero',
    fontText: 'Rigel Star',
    url: 'https://www.dafont.com/rigel-star.font',
  },
  {
    title: 'QTT',
    fontClass: 'font-qtt',
    fontText: 'Dash',
    url: 'https://www.dafont.com/dash.font',
  },
  {
    title: 'Titres',
    fontClass: 'font-title',
    fontText: 'Saira',
    url: 'https://fonts.google.com/specimen/Saira',
  },
  {
    title: 'Textes',
    fontClass: '',
    fontText: 'Poppins',
    url: 'https://fonts.google.com/specimen/Poppins',
  },
];

const logos = {
  title: {
    main: {
      title: 'Logo complet couleur',
      url: '/assets/logos/solaris_title_logo.webp',
      bgColor: 'bg-stone-700',
    },
    secondary: [
      {
        title: 'Logo complet blanc',
        url: '/assets/logos/solaris_title_logo_white.webp',
        bgColor: 'bg-stone-600',
      },
      {
        title: 'Logo complet blanc & noir',
        url: '/assets/logos/solaris_title_logo_wb.webp',
        bgColor: 'bg-stone-500',
      },
      {
        title: 'Logo complet noir & blanc',
        url: '/assets/logos/solaris_title_logo_bw.webp',
        bgColor: 'bg-stone-400',
      },
      {
        title: 'Logo complet noir',
        url: '/assets/logos/solaris_title_logo_black.webp',
        bgColor: 'bg-stone-300',
      },
    ],
  },
  simple: {
    main: {
      title: 'Logo simple couleur',
      url: '/assets/logos/solaris_logo_color.webp',
      bgColor: 'bg-stone-700',
    },
    secondary: [
      {
        title: 'Logo simple blanc',
        url: '/assets/logos/solaris_logo_white.webp',
        bgColor: 'bg-stone-500',
      },
      {
        title: 'Logo simple blanc & noir',
        url: '/assets/logos/solaris_logo_black.webp',
        bgColor: 'bg-stone-300',
      },
    ],
  },
};
const DesignPage = () => {
  return (
    <Index>
      <Page title="Design" image="/assets/images/network.webp">
        <InnerSectionBlock bgColor={'from-primary-500/40'}>
          <div className="flex w-full max-w-4xl flex-col items-center justify-center space-y-8">
            <div className="flex items-center self-start">
              <BiDownArrow className="mr-6 -rotate-90 text-right text-3xl text-primary-500" />
              <h2 className="font-title text-5xl font-bold">Couleurs</h2>
            </div>
            <div className="flex w-full flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
              {colors.map((color) => (
                <div className="w-full flex-col" key={color.title}>
                  <h3 className="text-center text-3xl">{color.title}</h3>
                  {color.colorData.map((data) => (
                    <div
                      key={data.hex}
                      className={`flex h-16 w-full items-center justify-start p-4 text-2xl font-bold ${color.textColor} ${data.class} hover:cursor-copy`}
                      onClick={() => {
                        navigator.clipboard.writeText(data.hex);
                      }}
                    >
                      {data.hex}
                      {data.base && (
                        <span className="ml-4 text-red-500">Base</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="m-8 w-full">
              <DividerTriangle data={null} index={null} />
            </div>
            <div className="flex items-center self-start">
              <BiDownArrow className="mr-6 -rotate-90 text-right text-3xl text-primary-500" />
              <h2 className="font-title text-5xl font-bold">Polices</h2>
            </div>
            <div className="flex w-full max-w-lg flex-col justify-center space-y-12">
              {fonts.map((font) => (
                <div
                  className="flex flex-col items-center justify-around md:flex-row"
                  key={font.title}
                >
                  <h3
                    className={`${font.fontClass} w-48 text-center text-4xl md:text-right`}
                  >
                    {font.title}
                  </h3>
                  <div className="m-2 h-1 w-full bg-primary-500 md:h-full md:w-1"></div>
                  <h4 className="flex w-48 justify-center text-2xl md:justify-start">
                    <a
                      href={font.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-primary-500 "
                    >
                      {font.fontText}
                      <BiLinkExternal className="ml-2 text-lg" />
                    </a>
                  </h4>
                </div>
              ))}
            </div>
            <div className="m-8 w-full">
              <DividerTriangle data={null} index={null} />
            </div>
            <div className="flex items-center self-start">
              <BiDownArrow className="mr-6 -rotate-90 text-right text-3xl text-primary-500" />
              <h2 className="font-title text-5xl font-bold">Logos</h2>
            </div>
            <a
              href="/assets/logos/solaris_logo_pack.zip"
              download
              className="sol-btn"
            >
              Pack
              <BiDownload className="ml-4" />
            </a>
            <div className="divider"></div>
            <div className="flex w-full flex-col space-y-8">
              <LogoCollapse logos={logos} variant="title" />
              <div className="divider"></div>
              <LogoCollapse logos={logos} variant="simple" />
            </div>
          </div>
        </InnerSectionBlock>
      </Page>
    </Index>
  );
};
export default DesignPage;
