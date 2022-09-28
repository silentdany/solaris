import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/future/image';
import { BiDownArrow } from 'react-icons/bi';

import { DividerTriangle } from '../DividerTriangle';

const ReactMarkdown = dynamic(() => import('react-markdown'), {
  ssr: false,
});

export const ProfilesBlock = ({ data, isMobile }) =>
  data.map((item, index) => (
    <>
      <motion.div
        initial={{
          translateX: index % 2 === 0 ? -100 + index * 10 : 100 + index * 10,
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
      {isMobile && <DividerTriangle data index />}
    </>
  ));
