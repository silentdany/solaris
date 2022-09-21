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
      className={`flex flex-col justify-center items-center ${bgColor} mx-auto  text-center relative overflow-hidden`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.7 }}
        className="flex justify-start w-full "
      >
        <div className="flex px-4 md:px-8">
          <h3 className="text-6xl md:text-7xl lg:text-9xl">{number}</h3>
          <div className="flex flex-col justify-center">
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl text-left font-title border-l-4 md:border-l-8 border-primary-700 pl-4 ml-4 md:pl-6 md:ml-6 lg:pl-8 lg:ml-8 ${
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
