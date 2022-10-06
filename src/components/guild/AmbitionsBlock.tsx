import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/future/image';

import { project } from '../../utils/AppConfig';
import { DividerTriangle } from '../DividerTriangle';

const ReactMarkdown = dynamic(() => import('react-markdown'), {
  ssr: false,
});

export const ProjectBlock = ({ data }) =>
  data.map((item, index) => (
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
            translateX: index % 2 === 0 ? 200 + index * 10 : -200 + index * 10,
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
                index % 2 !== 0 ? 'text-left lg:text-right' : 'text-left'
              }
            >
              <ReactMarkdown>{item.text}</ReactMarkdown>
            </div>
          </div>
        </motion.div>
      </div>
      <DividerTriangle data={project} index={index} />
    </>
  ));
