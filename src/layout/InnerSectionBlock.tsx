type Props = {
  children: React.ReactNode;
  bgColor: string;
  topBorder?: boolean;
};

const InnerSectionBlock = (props: Props) => {
  const { children, bgColor, topBorder } = props;
  return (
    <div
      className={`relative flex w-full justify-center overflow-hidden bg-gradient-to-b to-transparent p-8 pb-16 md:p-16 md:pb-32 ${bgColor} ${
        topBorder && ' border-t-8 border-primary-700'
      }`}
    >
      <div className="absolute -top-10 left-0 z-0 h-full w-full bg-hero-diagonal-lines"></div>
      <div className="z-10 flex w-full justify-center pt-8 md:max-w-6xl md:pt-12">
        {children}
      </div>
    </div>
  );
};

export default InnerSectionBlock;
