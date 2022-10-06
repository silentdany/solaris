import { motion } from 'framer-motion';

export const DataBlock = ({ data }) => (
  <motion.div
    className="flex flex-col justify-center md:flex-row"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ amount: 0.7, once: true }}
  >
    {data.map((item, index) => (
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
        {data.length - 1 === index ? null : (
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
);
