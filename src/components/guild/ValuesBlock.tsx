import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { values } from '../../utils/AppConfig';
import { DividerTriangle } from '../DividerTriangle';

const ReactMarkdown = dynamic(() => import('react-markdown'), {
  ssr: false,
});

export const ValuesBlock = ({ data }) =>
  data.map((item, index) => (
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
            translateX: index % 2 === 0 ? 100 + index * 10 : -100 + index * 10,
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
      <DividerTriangle data={values} index={index} />
    </>
  ));
