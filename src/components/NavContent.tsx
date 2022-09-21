import Link from 'next/link';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const NavContent = () => (
  <div className="navbar h-full flex flex-col md:flex-row justify-between items-center px-6 md:text-2xl text-3xl text-stone-100 md:space-y-0 space-y-10 opacity-100">
    <div className="flex justify-center md:justify-between">
      <Link href="/" passHref={true}>
        <a className="flex items-center">
          <Logo width="50" />
        </a>
      </Link>
    </div>
    <ul className="navbar md:flex justify-between items-center lg:space-x-12 md:space-x-5 md:space-y-0 space-y-5 text-center">
      <li>
        <Link href="#collection">
          <a className="font-title text-3xl font-bold hover:text-primary-300 transition duration-300 ease-in-out">
            Collection
          </a>
        </Link>
      </li>
      <li>
        <Link href="#features">
          <a className="font-title text-3xl font-bold hover:text-primary-300 transition duration-300 ease-in-out">
            Features
          </a>
        </Link>
      </li>
      <li>
        <Link href="#roadmap">
          <a className="font-title text-3xl font-bold hover:text-primary-300 transition duration-300 ease-in-out">
            Roadmap
          </a>
        </Link>
      </li>
      {/* <li>
        <Link href="#team">
          <a className="font-title text-3xl font-bold hover:text-primary-300 transition duration-300 ease-in-out">
            Team
          </a>
        </Link>
      </li> */}
    </ul>
    <ul className="navbar flex justify-between items-center space-x-3 ">
      {AppConfig.discord && (
        <li className="flex justify-center">
          <Link href={AppConfig.discord}>
            <a
              className="font-title text-4xl md:text-3xl hover:text-primary-300 transition duration-300 ease-in-out"
              target="_blank"
            >
              <FaDiscord />
            </a>
          </Link>
        </li>
      )}
      {AppConfig.instagram && (
        <li className="flex justify-center">
          <Link href={AppConfig.instagram}>
            <a
              className="font-title text-4xl md:text-3xl hover:text-primary-300 transition duration-300 ease-in-out"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </Link>
        </li>
      )}
      {AppConfig.twitter && (
        <li className="flex justify-center">
          <Link href={AppConfig.twitter}>
            <a
              className="font-title text-4xl md:text-3xl hover:text-primary-300 transition duration-300 ease-in-out"
              target="_blank"
            >
              <FaTwitter />
            </a>
          </Link>
        </li>
      )}
    </ul>
  </div>
);

export { NavContent };
