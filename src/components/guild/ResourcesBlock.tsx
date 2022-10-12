import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/future/image';
import { BiDownArrow } from 'react-icons/bi';

const ReactMarkdown = dynamic(() => import('react-markdown'), {
  ssr: false,
});

export const ResourcesBlock = ({ data }) => (
  <div className="relative flex h-full space-x-8">
    {data.map((mainItem, index) => (
      <>
        <motion.div
          initial={{
            translateX: -100,
            opacity: 0,
          }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ amount: 0.1, once: true }}
          className={`group relative flex w-1/2 flex-col justify-start ${
            index !== 0 ? 'text-left' : 'text-right'
          }`}
          key={mainItem.text}
        >
          <ReactMarkdown className="min-h-16 flex w-full items-end justify-center text-center font-title text-xl font-bold">
            {mainItem.text}
          </ReactMarkdown>
          <div className="relative mt-4 mb-10 h-44 w-full overflow-hidden group-hover:shadow-xl">
            <Image
              src={mainItem.picture}
              alt={mainItem.text}
              className="absolute rounded-xl object-cover duration-300 ease-in-out group-hover:object-halfbottom group-hover:shadow-xl"
              fill
            />
          </div>
          <motion.ul
            initial={{
              translateX:
                index % 2 === 0 ? -100 + index * 10 : 100 + index * 10,
              opacity: 0,
            }}
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ amount: 0.1, once: true }}
            className="flex flex-col space-y-4"
          >
            {mainItem.list.map((listItem) => (
              <li
                key={listItem}
                className={`flex items-center ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}
              >
                {index % 2 !== 0 && (
                  <BiDownArrow className="mr-4 -rotate-90 text-primary-500" />
                )}
                {listItem}
                {index % 2 === 0 && (
                  <BiDownArrow className="ml-4 rotate-90 text-primary-500" />
                )}
              </li>
            ))}
          </motion.ul>
        </motion.div>
        {index < data.length - 1 && (
          <div className="h-full w-[1px] bg-primary-300"></div>
        )}
      </>
    ))}
  </div>
);
