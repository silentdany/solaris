import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/future/image';
import { BiDownArrow } from 'react-icons/bi';
import { ParallaxBanner } from 'react-scroll-parallax';

import InnerSectionBlock from '../components/InnerSectionBlock';
import Section from '../layout/Section';
import {
  values,
  position,
  attributs,
  ambitions,
  profils,
} from '../utils/AppConfig';
import useMediaQuery from '../utils/useMediaQuery';

const ReactMarkdown = dynamic(() => import('react-markdown'), {
  ssr: false,
});

const Guild = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <div id="start">
      <Section title="attributs" number="01" bgColor="bg-gray-50" uppercase>
        <div className="flex flex-col items-center justify-center">
          <InnerSectionBlock bgColor={'from-primary-500/40'}>
            <div className="flex flex-col w-full">
              <motion.div
                className="flex flex-col md:flex-row justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.7, once: true }}
              >
                {position.map((item, index) => (
                  <>
                    <motion.div
                      className="flex flex-col justify-center items-center relative group"
                      key={item.title}
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ amount: 0.7, once: true }}
                    >
                      <div className="glass w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-stone-600/40 ease-in-out duration-300 ring ring-primary-500/50 ring-offset-base-100/40 ring-offset-2 group-hover:bg-stone-600/30 group-hover:ring group-hover:ring-primary-500/50 group-hover:ring-offset-base-100/40 group-hover:ring-offset-2 md:text-5xl flex justify-center items-center  mx-10 z-10">
                        <item.icon className="text-5xl lg:text-6xl text-accent" />
                      </div>
                      <div className="relative flex justify-center">
                        <h5 className="text-4xl lg:text-5xl text-primary-700/50 uppercase z-20 tracking-tight font-extrabold">
                          {item.title}
                        </h5>
                        <p className="text-2xl lg:text-3xl text-stone-600 z-30 absolute -bottom-4 group-hover:translate-y-2 ease-in-out duration-300 whitespace-nowrap">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                    {position.length - 1 === index ? null : (
                      <div className="h-full flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ amount: 0.7, once: true }}
                          className="border-b-2 md:border-r-4 lg:border-r-8 w-1/2 md:h-24 border-primary-700 my-12 md:mx-10 lg:mx-24 flex"
                        ></motion.div>
                      </div>
                    )}
                  </>
                ))}
              </motion.div>
              <div className="flex justify-around text-3xl my-12 lg:m-16">
                <BiDownArrow className="text-primary-900/25" />
                <BiDownArrow className="text-primary-700/25" />
                <BiDownArrow className="text-primary-300/25" />
              </div>
              <motion.div
                className="flex flex-col md:flex-row justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.7, once: true }}
              >
                {attributs.map((item, index) => (
                  <>
                    <motion.div
                      className="flex flex-col justify-center items-center relative group"
                      key={item.title}
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ amount: 0.7, once: true }}
                    >
                      <div className="glass w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-stone-600/40 ease-in-out duration-300 ring ring-primary-500/50 ring-offset-base-100/40 ring-offset-2 group-hover:bg-stone-600/30 group-hover:ring group-hover:ring-primary-500/50 group-hover:ring-offset-base-100/40 group-hover:ring-offset-2 md:text-5xl flex justify-center items-center  mx-10 z-10">
                        <item.icon className="text-5xl lg:text-6xl text-accent" />
                      </div>
                      <div className="relative flex justify-center">
                        <h5 className="text-4xl lg:text-5xl text-primary-700/50 uppercase z-20 tracking-tight font-extrabold">
                          {item.title}
                        </h5>
                        <p className="text-2xl lg:text-3xl text-stone-600 z-30 absolute -bottom-4 group-hover:translate-y-2 ease-in-out duration-300 whitespace-nowrap">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                    {attributs.length - 1 === index ? null : (
                      <div className="h-full flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ amount: 0.7, once: true }}
                          className="border-b-2 md:border-r-4 lg:border-r-8 w-1/2 md:h-24 border-primary-700 my-12 md:mx-10 lg:mx-24 flex"
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
            className="h-64 lg:h-96 relative z-10"
          >
            <div className="bg-gradient-to-b from-gray-50 w-full h-64 lg:h-96 absolute top-0"></div>
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
                    className="group card md:card-side glass shadow-sm hover:shadow-xl ease-in-out duration-300 md:h-64"
                    key={index}
                  >
                    <div
                      className={`figure border-primary-700 from-stone-900/20 group-hover:from-stone-900/40 ease-in-out duration-300 md:w-2/5 items-stretch ${
                        index % 2 !== 0
                          ? 'md:order-1 border-b-8 md:border-b-0 bg-gradient-to-t md:border-l-8 md:bg-gradient-to-r'
                          : 'border-b-8 md:border-b-0 bg-gradient-to-t md:border-r-8 md:bg-gradient-to-l'
                      }`}
                    >
                      <div
                        className={`ease-in-out duration-300 text-secondary-500 text-6xl md:text-7xl lg:text-8xl h-full flex md:flex-col justify-center ${
                          index % 2 !== 0
                            ? 'text-left pt-4 md:pt-0 md:mt-0 md:ml-12 md:group-hover:translate-x-4 group-hover:-translate-y-2 md:group-hover:translate-y-0'
                            : 'text-right pt-4 md:pt-0 md:mt-0 md:mr-12 md:group-hover:-translate-x-4 group-hover:-translate-y-2 md:group-hover:translate-y-0'
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
                      className={`md:w-3/5 card-body flex justify-center items-center h-full p-4 md:p-8 ${
                        index % 2 !== 0
                          ? 'text-left md:text-right rounded-l-xl md:pr-12'
                          : 'text-left rounded-r-xl md:pl-12'
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
                    className={`flex justify-around text-3xl my-12 lg:m-16 ${
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
            className="h-64 lg:h-96 relative z-10"
          >
            <div className="bg-gradient-to-b from-gray-50 w-full h-64 lg:h-96 absolute top-0"></div>
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
                    className="card shadow-sm hover:shadow-xl lg:shadow-none lg:hover:shadow-none flex flex-col lg:flex-row justify-start group lg:h-80"
                    key={index}
                  >
                    <div
                      className={`w-full h-64 lg:h-auto border-primary-700 lg:w-3/5 overflow-hidden ${
                        index % 2 !== 0
                          ? 'lg:order-2 lg:border-l-8 lg:ml-12 '
                          : 'lg:border-r-8 lg:mr-12 '
                      }`}
                    >
                      <div
                        className={`relative w-full h-full group-hover:translate-x-0 overflow-hidden ease-in-out duration-300 ${
                          index % 2 !== 0
                            ? 'lg:-translate-x-24 lg:rounded-r-xl rounded-t-xl lg:rounded-tl-none'
                            : 'lg:translate-x-24 lg:rounded-l-xl rounded-t-xl lg:rounded-tr-none'
                        }`}
                      >
                        <Image
                          src={item.picture}
                          alt=""
                          width={800}
                          height={300}
                          className="absolute lg:-top-1/3 group-hover:scale-105 ease-in-out duration-300"
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
                      className="lg:w-2/5 flex justify-center items-center"
                    >
                      <div
                        className={`flex glass shadow-sm group-hover:shadow-xl w-full justify-center items-center p-4 lg:p-8 ${
                          index % 2 !== 0
                            ? 'lg:translate-x-48 lg:rounded-l-xl rounded-b-xl lg:rounded-br-none lg:group-hover:translate-x-24 ease-in-out duration-300'
                            : 'lg:-translate-x-48 lg:rounded-r-xl rounded-b-xl lg:rounded-bl-none lg:group-hover:-translate-x-24 ease-in-out duration-300'
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
                    className={`flex justify-around text-3xl my-12 lg:m-16 ${
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
            className="h-64 lg:h-96 relative z-10"
          >
            <div className="bg-gradient-to-b from-gray-50 w-full h-64 lg:h-96 absolute top-0"></div>
          </ParallaxBanner>
        </div>
      </Section>
      <Section title="profils" number="04" bgColor="bg-gray-50" uppercase>
        <div className="flex flex-col items-center justify-center">
          <InnerSectionBlock bgColor={'from-primary-500/40'}>
            <div className="max-w-4xl flex flex-col md:flex-row md:space-x-16">
              {profils.map((item, index) => (
                <>
                  <motion.div
                    initial={{
                      translateX:
                        index % 2 === 0 ? -100 + index * 10 : 100 + index * 10,
                      opacity: 0,
                    }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    viewport={{ amount: 0.1, once: true }}
                    className="flex flex-col group card glass shadow-sm hover:shadow-lg md:w-1/2"
                    key={index}
                  >
                    <figure className="overflow-hidden border-b-4 border-primary-500 h-64 md:h-auto">
                      <Image
                        src={item.picture}
                        alt=""
                        width={450}
                        height={300}
                        className="scale-105 group-hover:scale-110 ease-in-out duration-300"
                      />
                    </figure>
                    <div className="card-body">
                      <div className="relative">
                        <h3 className="text-3xl font-bold font-title pb-8 flex">
                          {item.type}
                        </h3>
                        <div className="relative h-2 w-0 group-hover:w-1/2">
                          <span className="w-0 h-full -skew-x-[40deg] bg-secondary-300 absolute bottom-6 -left-10 ease-out duration-200 transition-all group-hover:w-[150%] -z-1"></span>
                          <span className="w-0 h-full -skew-x-[40deg] bg-primary-300 absolute bottom-6 -left-20 ease-out duration-300 transition-all group-hover:w-[150%] -z-1"></span>
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
                            <BiDownArrow className="-rotate-90 mr-4 text-primary-500" />
                            <ReactMarkdown>{listItem}</ReactMarkdown>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                  {isMobile && (
                    <div
                      className={`flex justify-around text-3xl my-12 lg:m-16 ${
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
  );
};

export { Guild };
