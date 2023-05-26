import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/future/image';
import { BiDownArrow } from 'react-icons/bi';

const ReactMarkdown = dynamic<any>(() => import('react-markdown'), {
  ssr: false,
});

export const ResourcesBlock = ({ data }) => (
  <div className="relative flex h-full flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
    {data.map((mainItem, index) => (
      <>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.1, once: true }}
          className={`group relative flex flex-col justify-start lg:w-1/2 ${
            index !== 0 ? 'text-left' : 'text-right'
          }`}
          key={mainItem.text}
        >
          <div className="relative flex w-full flex-col items-center justify-start text-center lg:min-h-16">
            <ReactMarkdown className="font-title text-lg font-bold lg:text-xl">
              {mainItem.text}
            </ReactMarkdown>
            {mainItem.subText && (
              <>
                <ReactMarkdown className="text-sm">
                  {mainItem.subText[0]}
                </ReactMarkdown>
                <ReactMarkdown className="absolute -bottom-4 right-0 z-20 -rotate-3 font-bold lg:-bottom-1">
                  {mainItem.subText[1]}
                </ReactMarkdown>
              </>
            )}
          </div>
          <div className="relative mt-4 mb-10 h-44 w-full overflow-hidden group-hover:shadow-xl">
            <Image
              src={mainItem.picture}
              alt={mainItem.text}
              className="absolute rounded-xl object-cover duration-300 ease-in-out group-hover:object-halfbottom group-hover:shadow-xl"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <ul className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:flex lg:flex-col lg:space-y-4">
            {mainItem.list.map((listItem) => (
              <motion.li
                initial={{
                  translateX:
                    index % 2 === 0 ? -100 + index * 10 : 100 + index * 10,
                  opacity: 0,
                }}
                whileInView={{ translateX: 0, opacity: 1 }}
                viewport={{ amount: 0.1, once: true }}
                key={listItem}
                className={`flex items-center duration-200 ease-in-out ${
                  index % 2 === 0 ? 'lg:justify-end' : 'justify-start'
                }`}
              >
                <BiDownArrow
                  className={`mr-4 -rotate-90 text-primary-500 ${
                    index % 2 === 0 && 'lg:hidden'
                  }`}
                />
                {listItem}
                <BiDownArrow
                  className={`ml-4 rotate-90 text-primary-500 ${
                    index % 2 !== 0 ? 'hidden' : 'hidden lg:block'
                  }`}
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>
        {index < data.length - 1 && (
          <div className="h-full w-[1px] bg-primary-300"></div>
        )}
      </>
    ))}
  </div>
);
