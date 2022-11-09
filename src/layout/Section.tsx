import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  title: string;
  number: string;
  bgColor: string;
  uppercase?: Boolean;
};

const Section = (props: Props) => {
  const { children, title, number, bgColor, uppercase } = props;

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
        <div className="flex px-4 md:px-8">
          <p className="text-6xl md:text-7xl lg:text-9xl">{number}</p>
          <div className="flex flex-col justify-center">
            <h2
              className={`ml-4 border-l-4 border-primary-700 pl-4 text-left font-title text-2xl md:ml-6 md:border-l-8 md:pl-6 md:text-3xl lg:ml-8 lg:pl-8 lg:text-4xl ${
                uppercase ? 'uppercase' : 'capitalize'
              }`}
            >
              {title}
            </h2>
          </div>
        </div>
      </motion.div>
      {children}
    </section>
  );
};

export default Section;
