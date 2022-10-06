import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/future/image';

import { dna } from '../../utils/AppConfig';
import { DividerTriangle } from '../DividerTriangle';

const ReactMarkdown = dynamic(() => import('react-markdown'), {
  ssr: false,
});

export const DNABlock = ({ data }) =>
  data.map((item, index) => (
    <>
      <div
        className="group card glass shadow-sm duration-300 ease-in-out hover:shadow-xl md:card-side md:h-80"
        key={index}
      >
        <div
          className={`figure relative h-48 overflow-hidden border-primary-700 from-stone-900/20 duration-300 ease-in-out group-hover:from-stone-900/40 md:h-auto md:w-2/5 ${
            index % 2 !== 0
              ? 'border-b-8 md:order-1 md:border-b-0 md:border-l-8'
              : 'border-b-8 md:border-b-0 md:border-r-8'
          }`}
        >
          <Image
            src={item.picture}
            alt={item.title}
            className="object-cover opacity-60 duration-300 ease-in-out group-hover:scale-105"
            fill
          />
          <h4
            className={`absolute bottom-0 text-4xl font-black uppercase text-primary-300 mix-blend-color-dodge duration-300 ease-in-out group-hover:mix-blend-normal ${
              index % 2 !== 0 ? 'left-4' : 'left-4 md:right-4 md:left-auto'
            }`}
          >
            {item.title}
          </h4>
        </div>
        <motion.div
          initial={{
            translateX: index % 2 === 0 ? 100 + index * 10 : -100 + index * 10,
            opacity: 0,
          }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ amount: 0.1, once: true }}
          className={`card-body flex h-full items-center justify-center p-4 md:w-3/5 md:p-8 ${
            index % 2 !== 0
              ? 'rounded-l-xl text-left md:pr-8 md:text-right'
              : 'rounded-r-xl text-left md:pl-8'
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
      <DividerTriangle data={dna} index={index} />
    </>
  ));
