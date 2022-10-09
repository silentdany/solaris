import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ReactMarkdown = dynamic(() => import('react-markdown'), {
  ssr: false,
});

export const ResourcesBlock = ({ data }) => (
  <div className="space-y-12">
    {data.map((mainItem) => (
      <motion.div
        initial={{
          translateX: -100,
          opacity: 0,
        }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ amount: 0.1, once: true }}
        className="group"
        key={mainItem.text}
      >
        <div className="relative overflow-hidden">
          <div className="absolute h-full w-2">
            <span className="-z-1 absolute -top-[10%] h-[109%] w-2 -skew-y-[40deg] bg-secondary-300 transition-all duration-200 ease-out"></span>
            <span className="-z-1 absolute -top-10 h-0 w-2 -skew-y-[40deg] bg-primary-300 transition-all duration-300 ease-out group-hover:h-[75%]"></span>
          </div>
          <div className="relative px-8">
            <h3 className="flex pb-8 text-left font-title text-3xl font-bold">
              <ReactMarkdown>{mainItem.text}</ReactMarkdown>
            </h3>
            <ul className="space-y-2 md:space-y-4">
              {mainItem.list.map((item, index) => (
                <motion.div
                  initial={{
                    translateX:
                      index % 2 === 0 ? -100 + index * 10 : 100 + index * 10,
                    opacity: 0,
                  }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  viewport={{ amount: 0.1, once: true }}
                  className="flex flex-col items-start"
                  key={index}
                >
                  <li>
                    <ReactMarkdown>{item}</ReactMarkdown>
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
