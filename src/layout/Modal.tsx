export const Modal = ({ item, closePortal }) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-stone-900/50 hover:cursor-pointer"
      onClick={closePortal}
    >
      <div className="flex h-full w-full items-center justify-center">
        {item}
      </div>
    </div>
  );
};
