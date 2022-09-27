import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/future/image';
import { BiDownArrow } from 'react-icons/bi';
import { ParallaxBanner } from 'react-scroll-parallax';

import Index from '..';
import useMediaQuery from '../../hooks/useMediaQuery';
import InnerSectionBlock from '../../layout/InnerSectionBlock';
import Section from '../../layout/Section';
import { Hero } from '../../sections/Hero';
import {
  values,
  position,
  attributs,
  ambitions,
  profils,
} from '../../utils/AppConfig';

const ReactMarkdown = dynamic(() => import('react-markdown'), {
  ssr: false,
});

const Guild = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <Index>
      <Hero />
      <div id="start">
        <Section title="attributs" number="01" bgColor="bg-gray-50" uppercase>
          <div className="flex flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'}>
              <div className="flex w-full flex-col">
                <motion.div
                  className="flex flex-col justify-center md:flex-row"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.7, once: true }}
                >
                  {position.map((item, index) => (
                    <>
                      <motion.div
                        className="group relative flex flex-col items-center justify-center"
                        key={item.title}
                        initial={{
                          opacity: 0,
                        }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ amount: 0.7, once: true }}
                      >
                        <div className="glass z-10 mx-10 flex h-16 w-16 items-center justify-center rounded-full bg-stone-600/40 ring ring-primary-500/50 ring-offset-2 ring-offset-base-100/40 duration-300 ease-in-out group-hover:bg-stone-600/30 group-hover:ring group-hover:ring-primary-500/50 group-hover:ring-offset-2 group-hover:ring-offset-base-100/40 md:text-5xl  lg:h-24 lg:w-24">
                          <item.icon className="text-5xl text-accent lg:text-6xl" />
                        </div>
                        <div className="relative flex justify-center">
                          <h5 className="z-20 text-4xl font-extrabold uppercase tracking-tight text-primary-700/50 lg:text-5xl">
                            {item.title}
                          </h5>
                          <p className="absolute -bottom-4 z-30 whitespace-nowrap text-2xl text-stone-600 duration-300 ease-in-out group-hover:translate-y-2 lg:text-3xl">
                            {item.value}
                          </p>
                        </div>
                      </motion.div>
                      {position.length - 1 === index ? null : (
                        <div className="flex h-full items-center justify-center">
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ amount: 0.7, once: true }}
                            className="my-12 flex w-1/2 border-b-2 border-primary-700 md:mx-10 md:h-24 md:border-r-4 lg:mx-24 lg:border-r-8"
                          ></motion.div>
                        </div>
                      )}
                    </>
                  ))}
                </motion.div>
                <div className="my-12 flex justify-around text-3xl lg:m-16">
                  <BiDownArrow className="text-primary-900/25" />
                  <BiDownArrow className="text-primary-700/25" />
                  <BiDownArrow className="text-primary-300/25" />
                </div>
                <motion.div
                  className="flex flex-col justify-center md:flex-row"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.7, once: true }}
                >
                  {attributs.map((item, index) => (
                    <>
                      <motion.div
                        className="group relative flex flex-col items-center justify-center"
                        key={item.title}
                        initial={{
                          opacity: 0,
                        }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ amount: 0.7, once: true }}
                      >
                        <div className="glass z-10 mx-10 flex h-16 w-16 items-center justify-center rounded-full bg-stone-600/40 ring ring-primary-500/50 ring-offset-2 ring-offset-base-100/40 duration-300 ease-in-out group-hover:bg-stone-600/30 group-hover:ring group-hover:ring-primary-500/50 group-hover:ring-offset-2 group-hover:ring-offset-base-100/40 md:text-5xl  lg:h-24 lg:w-24">
                          <item.icon className="text-5xl text-accent lg:text-6xl" />
                        </div>
                        <div className="relative flex justify-center">
                          <h5 className="z-20 text-4xl font-extrabold uppercase tracking-tight text-primary-700/50 lg:text-5xl">
                            {item.title}
                          </h5>
                          <p className="absolute -bottom-4 z-30 whitespace-nowrap text-2xl text-stone-600 duration-300 ease-in-out group-hover:translate-y-2 lg:text-3xl">
                            {item.value}
                          </p>
                        </div>
                      </motion.div>
                      {attributs.length - 1 === index ? null : (
                        <div className="flex h-full items-center justify-center">
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ amount: 0.7, once: true }}
                            className="my-12 flex w-1/2 border-b-2 border-primary-700 md:mx-10 md:h-24 md:border-r-4 lg:mx-24 lg:border-r-8"
                          ></motion.div>
                        </div>
                      )}
                    </>
                  ))}
                </motion.div>
              </div>
            </InnerSectionBlock>
            <ParallaxBanner
              layers={[
                {
                  image: '/assets/images/cloud_city.webp',
                  speed: -25,
                  style: {
                    backgroundSize: 'cover',
                    filter: 'contrast(0.8) hue-rotate(-5deg)',
                  },
                },
              ]}
              className="relative z-10 h-64 lg:h-96"
            >
              <div className="absolute top-0 h-64 w-full bg-gradient-to-b from-gray-50 lg:h-96"></div>
            </ParallaxBanner>
          </div>
        </Section>
        <Section title="valeurs" number="02" bgColor="bg-gray-50" uppercase>
          <div className="flex flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'}>
              <div className="md:max-w-4xl">
                {values.map((item, index) => (
                  <>
                    <div
                      className="group card glass shadow-sm duration-300 ease-in-out hover:shadow-xl md:card-side md:h-64"
                      key={index}
                    >
                      <div
                        className={`figure items-stretch border-primary-700 from-stone-900/20 duration-300 ease-in-out group-hover:from-stone-900/40 md:w-2/5 ${
                          index % 2 !== 0
                            ? 'border-b-8 bg-gradient-to-t md:order-1 md:border-b-0 md:border-l-8 md:bg-gradient-to-r'
                            : 'border-b-8 bg-gradient-to-t md:border-b-0 md:border-r-8 md:bg-gradient-to-l'
                        }`}
                      >
                        <div
                          className={`flex h-full justify-center text-6xl text-secondary-500 duration-300 ease-in-out md:flex-col md:text-7xl lg:text-8xl ${
                            index % 2 !== 0
                              ? 'pt-4 text-left group-hover:-translate-y-2 md:mt-0 md:ml-12 md:pt-0 md:group-hover:translate-x-4 md:group-hover:translate-y-0'
                              : 'pt-4 text-right group-hover:-translate-y-2 md:mt-0 md:mr-12 md:pt-0 md:group-hover:-translate-x-4 md:group-hover:translate-y-0'
                          }`}
                        >
                          {item.number}
                        </div>
                      </div>
                      <motion.div
                        initial={{
                          translateX:
                            index % 2 === 0
                              ? 100 + index * 10
                              : -100 + index * 10,
                          opacity: 0,
                        }}
                        whileInView={{ translateX: 0, opacity: 1 }}
                        viewport={{ amount: 0.1, once: true }}
                        className={`card-body flex h-full items-center justify-center p-4 md:w-3/5 md:p-8 ${
                          index % 2 !== 0
                            ? 'rounded-l-xl text-left md:pr-12 md:text-right'
                            : 'rounded-r-xl text-left md:pl-12'
                        }`}
                      >
                        <div className="space-y-4">
                          {item.text.map((line, i) => (
                            <p key={i}>
                              <ReactMarkdown>{line}</ReactMarkdown>
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    <div
                      className={`my-12 flex justify-around text-3xl lg:m-16 ${
                        values.length - 1 === index && 'hidden'
                      }`}
                    >
                      <BiDownArrow
                        className={`${
                          index % 2 === 0
                            ? 'text-primary-300/25'
                            : 'text-primary-900/25'
                        }`}
                      />
                      <BiDownArrow className="text-primary-700/25" />
                      <BiDownArrow
                        className={`${
                          index % 2 === 0
                            ? 'text-primary-900/25'
                            : 'text-primary-300/25'
                        }`}
                      />
                    </div>
                  </>
                ))}
              </div>
            </InnerSectionBlock>
            <ParallaxBanner
              layers={[
                {
                  image: '/assets/images/city_park.webp',
                  speed: -25,
                  style: {
                    backgroundSize: 'cover',
                    filter: 'contrast(0.8) hue-rotate(-5deg)',
                  },
                },
              ]}
              className="relative z-10 h-64 lg:h-96"
            >
              <div className="absolute top-0 h-64 w-full bg-gradient-to-b from-gray-50 lg:h-96"></div>
            </ParallaxBanner>
          </div>
        </Section>
        <Section title="ambitions" number="03" bgColor="bg-gray-50" uppercase>
          <div className="flex flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'}>
              <div className="md:max-w-md lg:max-w-6xl">
                {ambitions.map((item, index) => (
                  <>
                    <div
                      className="group card flex flex-col justify-start shadow-sm hover:shadow-xl lg:h-80 lg:flex-row lg:shadow-none lg:hover:shadow-none"
                      key={index}
                    >
                      <div
                        className={`z-10 h-64 w-full overflow-hidden border-primary-700 lg:h-auto lg:w-3/5 ${
                          index % 2 !== 0
                            ? 'lg:order-2 lg:ml-12 lg:border-l-8 '
                            : 'lg:mr-12 lg:border-r-8 '
                        }`}
                      >
                        <div
                          className={`relative h-full w-full overflow-hidden duration-300 ease-in-out group-hover:translate-x-0 ${
                            index % 2 !== 0
                              ? 'rounded-t-xl lg:-translate-x-24 lg:rounded-r-xl lg:rounded-tl-none'
                              : 'rounded-t-xl lg:translate-x-24 lg:rounded-l-xl lg:rounded-tr-none'
                          }`}
                        >
                          <Image
                            src={item.picture}
                            alt=""
                            width={800}
                            height={300}
                            className="absolute duration-300 ease-in-out group-hover:scale-105 lg:-top-1/3"
                          />
                        </div>
                      </div>
                      <motion.div
                        initial={{
                          translateX:
                            index % 2 === 0
                              ? 200 + index * 10
                              : -200 + index * 10,
                          opacity: 0,
                        }}
                        whileInView={{ translateX: 0, opacity: 1 }}
                        viewport={{ amount: 0.1, once: true }}
                        className="z-20 flex items-center justify-center lg:w-2/5"
                      >
                        <div
                          className={`glass flex w-full items-center justify-center p-4 shadow-sm group-hover:shadow-xl lg:p-8 ${
                            index % 2 !== 0
                              ? 'rounded-b-xl duration-300 ease-in-out lg:translate-x-48 lg:rounded-l-xl lg:rounded-br-none lg:group-hover:translate-x-24'
                              : 'rounded-b-xl duration-300 ease-in-out lg:-translate-x-48 lg:rounded-r-xl lg:rounded-bl-none lg:group-hover:-translate-x-24'
                          }`}
                        >
                          <div
                            className={
                              index % 2 !== 0
                                ? 'text-left lg:text-right'
                                : 'text-left'
                            }
                          >
                            <ReactMarkdown>{item.text}</ReactMarkdown>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div
                      className={`my-12 flex justify-around text-3xl lg:m-16 ${
                        ambitions.length - 1 === index && 'hidden'
                      }`}
                    >
                      <BiDownArrow
                        className={`${
                          index % 2 === 0
                            ? 'text-primary-300/25'
                            : 'text-primary-900/25'
                        }`}
                      />
                      <BiDownArrow className="text-primary-700/25" />
                      <BiDownArrow
                        className={`${
                          index % 2 === 0
                            ? 'text-primary-900/25'
                            : 'text-primary-300/25'
                        }`}
                      />
                    </div>
                  </>
                ))}
              </div>
            </InnerSectionBlock>
            <ParallaxBanner
              layers={[
                {
                  image: '/assets/images/spaceship.webp',
                  speed: -25,
                  style: {
                    backgroundSize: 'cover',
                    filter: 'contrast(0.8) hue-rotate(-5deg)',
                  },
                },
              ]}
              className="relative z-10 h-64 lg:h-96"
            >
              <div className="absolute top-0 h-64 w-full bg-gradient-to-b from-gray-50 lg:h-96"></div>
            </ParallaxBanner>
          </div>
        </Section>
        <Section title="profils" number="04" bgColor="bg-gray-50" uppercase>
          <div className="flex flex-col items-center justify-center">
            <InnerSectionBlock bgColor={'from-primary-500/40'}>
              <div className="flex max-w-4xl flex-col md:flex-row md:space-x-16">
                {profils.map((item, index) => (
                  <>
                    <motion.div
                      initial={{
                        translateX:
                          index % 2 === 0
                            ? -100 + index * 10
                            : 100 + index * 10,
                        opacity: 0,
                      }}
                      whileInView={{ translateX: 0, opacity: 1 }}
                      viewport={{ amount: 0.1, once: true }}
                      className="group card glass flex flex-col shadow-sm hover:shadow-lg md:w-1/2"
                      key={index}
                    >
                      <figure className="h-64 overflow-hidden border-b-4 border-primary-500 md:h-auto">
                        <Image
                          src={item.picture}
                          alt=""
                          width={450}
                          height={300}
                          className="scale-105 duration-300 ease-in-out group-hover:scale-110"
                        />
                      </figure>
                      <div className="card-body">
                        <div className="relative">
                          <h3 className="flex pb-8 font-title text-3xl font-bold">
                            {item.type}
                          </h3>
                          <div className="relative h-2 w-0 group-hover:w-1/2">
                            <span className="-z-1 absolute bottom-6 -left-10 h-full w-0 -skew-x-[40deg] bg-secondary-300 transition-all duration-200 ease-out group-hover:w-[150%]"></span>
                            <span className="-z-1 absolute bottom-6 -left-20 h-full w-0 -skew-x-[40deg] bg-primary-300 transition-all duration-300 ease-out group-hover:w-[150%]"></span>
                          </div>
                        </div>
                        <ul className="card-actions space-y-2 md:space-y-4">
                          {item.list.map((listItem, listIndex) => (
                            <motion.li
                              initial={{
                                translateY: -100,
                                opacity: 0,
                              }}
                              whileInView={{ translateY: 0, opacity: 1 }}
                              viewport={{ amount: 0.5, once: true }}
                              key={listIndex}
                              className="flex items-center text-left"
                            >
                              <BiDownArrow className="mr-4 -rotate-90 text-primary-500" />
                              <ReactMarkdown>{listItem}</ReactMarkdown>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                    {isMobile && (
                      <div
                        className={`my-12 flex justify-around text-3xl lg:m-16 ${
                          profils.length - 1 === index && 'hidden'
                        }`}
                      >
                        <BiDownArrow className="text-primary-900/25" />
                        <BiDownArrow className="text-primary-700/25" />
                        <BiDownArrow className="text-primary-300/25" />
                      </div>
                    )}
                  </>
                ))}
              </div>
            </InnerSectionBlock>
          </div>
        </Section>
      </div>
    </Index>
  );
};

export default Guild;
