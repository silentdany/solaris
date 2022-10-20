import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  title: string;
  image: string;
  screenHeight?: boolean;
};

const Page = (props: Props) => {
  const { children, title, image, screenHeight } = props;

  return (
    <section
      id={title}
      className={`relative mx-auto flex flex-col items-center justify-start overflow-hidden text-center ${
        screenHeight &&
        'h-screen border-b-8 border-primary-700 bg-gradient-to-r from-primary-50/50 via-stone-900 to-primary-50/50'
      }`}
    >
      <div className={`${screenHeight ? 'h-20' : 'h-16'} w-full`}></div>
      {screenHeight && (
        <div className="absolute top-0 left-0 z-0 h-full w-full bg-hero-diagonal-lines"></div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.7 }}
        className={`z-10 flex w-full justify-start ${
          screenHeight && 'border-b-8 border-primary-700'
        }`}
        style={{
          background: `linear-gradient(to right, transparent, #fafaf9 33%), no-repeat left/33% url(${image})`,
        }}
      >
        <div className="flex w-full justify-center p-4 md:p-8">
          <h1 className="text-left font-title text-2xl md:text-3xl lg:text-5xl">
            {title}
          </h1>
        </div>
      </motion.div>
      {children}
    </section>
  );
};

export default Page;
