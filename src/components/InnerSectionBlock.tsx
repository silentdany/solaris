const InnerSectionBlock = ({ children, bgColor }) => (
  <div
    className={`w-screen border-t-8 border-primary-700 bg-gradient-to-b ${bgColor} relative flex justify-center overflow-hidden to-transparent p-8 pb-16 md:p-16 md:pb-32`}
  >
    <div className="absolute -top-10 left-0 z-0 h-full w-full bg-hero-diagonal-lines"></div>
    <div className="z-10 flex w-full justify-center pt-8 md:max-w-6xl md:pt-12">
      {children}
    </div>
  </div>
);

export default InnerSectionBlock;
