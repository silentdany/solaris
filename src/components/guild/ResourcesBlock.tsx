import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ReactMarkdown = dynamic(() => import('react-markdown'), {
  ssr: false,
});

export const ResourcesBlock = ({ data }) => (
  <div className="relative space-y-12">
    {data.map((mainItem) => (
      <motion.div
        initial={{
          translateX: -100,
          opacity: 0,
        }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ amount: 0.1, once: true }}
        className={'group'}
        key={mainItem.text}
      >
        <div className="relative overflow-hidden">
          <div className="flex flex-col justify-end space-y-8 p-8">
            <h3 className="flex font-title text-3xl font-bold">
              <ReactMarkdown>{mainItem.text}</ReactMarkdown>
            </h3>
            <ul className="space-y-2 md:space-y-4">
              {mainItem.list.map((listItem, index) => (
                <motion.div
                  initial={{
                    translateX:
                      index % 2 === 0 ? -100 + index * 10 : 100 + index * 10,
                    opacity: 0,
                  }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  viewport={{ amount: 0.1, once: true }}
                  className="relative flex overflow-x-hidden"
                  key={index}
                >
                  <li className="w-full animate-marquee items-center space-x-2 whitespace-nowrap">
                    {listItem.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </li>
                  <li className="w-full animate-marquee items-center space-x-2 whitespace-nowrap">
                    {listItem.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </li>
                </motion.div>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);
