import { AiOutlineLoading } from 'react-icons/ai';

const Loader = () => (
  <div className="relative flex items-center justify-center">
    <AiOutlineLoading className="absolute z-10 animate-spin-slow text-5xl text-primary-500" />
    <AiOutlineLoading className="absolute animate-spin text-5xl text-secondary-500" />
    <AiOutlineLoading className="absolute animate-spin-slow text-3xl text-secondary-500" />
    <AiOutlineLoading className="absolute z-10 animate-spin-slower text-3xl text-primary-500" />
  </div>
);

export { Loader };
