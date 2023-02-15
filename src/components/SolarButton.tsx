import Link from 'next/link';

type Props = {
  url: string | URL;
  ext?: boolean;
  small?: boolean;
  title: string;
  item: React.ReactNode;
};

export const SolarButton = (props: Props) => {
  const { url, ext, small, title, item } = props;

  return (
    <div>
      <Link href={url} passHref>
        <a title={title} target={ext ? '_blank' : '_self'} rel="noreferrer">
          <button
            className={`lg:px-18 group-solar-btn btn relative min-w-max overflow-hidden rounded-xl border-0 bg-white px-4 shadow-xl transition-all hover:bg-white md:px-12 ${
              small ? 'h-8 w-32' : 'h-12 w-52 lg:h-16'
            }`}
          >
            <span className="-z-1 absolute top-0 -left-10 h-full w-0 -skew-x-[40deg] rounded bg-secondary-300 transition-all duration-500 ease-out group-solar-btn-hover:w-[150%]"></span>
            <span className="-z-1 absolute top-0 -left-20 h-full w-0 -skew-x-[40deg] rounded bg-primary-300 transition-all duration-500 ease-out group-solar-btn-hover:w-[150%]"></span>
            <span className="z-10 flex w-full items-center justify-center text-black transition-colors duration-300 ease-in-out group-solar-btn-hover:text-white">
              {item}
            </span>
          </button>
        </a>
      </Link>
    </div>
  );
};
