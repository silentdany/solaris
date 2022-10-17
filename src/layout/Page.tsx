import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  title: string;
  bgColor: string;
  uppercase?: Boolean;
};

const Page = (props: Props) => {
  const { children, title, bgColor, uppercase } = props;

  return (
    <section
      id={title}
      className={`flex flex-col items-center justify-center ${bgColor} relative  mx-auto overflow-hidden text-center`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.7 }}
        className="flex w-full justify-start "
      >
        <div className="flex p-4 md:p-8">
          <div className="flex flex-col justify-center">
            <h1
              className={`ml-4 border-l-4 border-primary-700 pl-4 text-left font-title text-3xl md:ml-6 md:border-l-8 md:pl-6 md:text-4xl lg:ml-8 lg:pl-8 lg:text-5xl ${
                uppercase ? 'uppercase' : 'capitalize'
              }`}
            >
              {title}
            </h1>
          </div>
        </div>
      </motion.div>
      {children}
    </section>
  );
};

export default Page;
