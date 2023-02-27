type Props = {
  children: React.ReactNode;
  bgColor: string;
  topBorder?: boolean;
  fullscreen?: boolean;
};

const InnerSectionBlock = (props: Props) => {
  const { children, bgColor, topBorder, fullscreen } = props;
  return (
    <div
      className={`relative flex w-full justify-center overflow-hidden bg-gradient-to-b to-transparent  ${bgColor} ${
        topBorder && ' border-t-8 border-primary-700'
      } ${fullscreen ? 'm-0 p-0' : 'p-8 pb-16 md:p-16 md:pb-32'}`}
    >
      <div className="absolute -top-10 left-0 z-0 h-full w-full bg-hero-diagonal-lines"></div>
      <div
        className={`z-10 flex w-full justify-center  ${
          !fullscreen && 'pt-8 md:max-w-6xl md:pt-12'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default InnerSectionBlock;
