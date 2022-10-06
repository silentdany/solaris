import { FaDiscord } from 'react-icons/fa';

export const JoinButton = () => (
  <div>
    <a
      href=" https://discord.gg/vECEHD6GdJ"
      title="Discord QTT"
      target="_blank"
    >
      <button className="lg:px-18 group btn relative my-16 h-12 overflow-hidden rounded-xl border-0 bg-white px-4 shadow-xl transition-all hover:bg-white md:px-12 lg:h-16">
        <span className="-z-1 absolute top-0 -left-10 h-full w-0 -skew-x-[40deg] rounded bg-secondary-300 transition-all duration-500 ease-out group-hover:w-[150%]"></span>
        <span className="-z-1 absolute top-0 -left-20 h-full w-0 -skew-x-[40deg] rounded bg-primary-300 transition-all duration-500 ease-out group-hover:w-[150%]"></span>
        <span className="z-10 flex w-full items-center justify-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
          <span className="mr-4 text-xl md:text-2xl lg:text-3xl">
            <FaDiscord />
          </span>
          Rejoignez-nous !
        </span>
      </button>
    </a>
  </div>
);
