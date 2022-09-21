const InnerSectionBlock = ({ children, bgColor }) => (
  <div
    className={`w-screen border-t-8 border-primary-700 bg-gradient-to-b ${bgColor} to-transparent p-8 md:p-16 pb-16 md:pb-32 flex justify-center overflow-hidden relative`}
  >
    <div className="w-full h-full bg-hero-diagonal-lines absolute -top-10 left-0 z-0"></div>
    <div className="md:max-w-6xl w-full flex justify-center pt-8 md:pt-12 z-10">
      {children}
    </div>
  </div>
);

export default InnerSectionBlock;
