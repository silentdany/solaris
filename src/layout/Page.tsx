import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  title: string;
  image: string;
};

const Page = (props: Props) => {
  const { children, title, image } = props;

  return (
    <section
      id={title}
      className="relative mx-auto flex flex-col items-center justify-center  overflow-hidden bg-stone-50 text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.7 }}
        className="flex w-full justify-start"
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
