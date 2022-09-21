import Link from 'next/link';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

import { Logo } from '../components/Logo';
import { AppConfig } from '../utils/AppConfig';

const Footer = () => (
  <section className="flex flex-col justify-center items-center bg-gray-50 mx-auto px-6 py-16 text-center space-y-12">
    <Link href="/" passHref>
      <a className="hover:-translate-y-1 ease-in-out duration-300">
        <Logo width="50" />
      </a>
    </Link>
    <ul className="space-x-5">
      {AppConfig.discord && (
        <li className="btn btn-circle btn-ghost hover:text-primary-300">
          <Link href={AppConfig.discord}>
            <a className="font-title text-2xl md:text-xl" target="_blank">
              <FaDiscord />
            </a>
          </Link>
        </li>
      )}
      {AppConfig.instagram && (
        <li className="btn btn-circle btn-ghost hover:text-primary-300">
          <Link href={AppConfig.instagram}>
            <a className="font-title text-2xl md:text-xl" target="_blank">
              <FaInstagram />
            </a>
          </Link>
        </li>
      )}
      {AppConfig.twitter && (
        <li className="btn btn-circle btn-ghost hover:text-primary-300">
          <Link href={AppConfig.twitter}>
            <a className="font-title text-2xl md:text-xl" target="_blank">
              <FaTwitter />
            </a>
          </Link>
        </li>
      )}
    </ul>
    <p>
      © Copyright 2022 <span className="text-primary-300">|</span>{' '}
      {AppConfig.title}
    </p>
  </section>
);

export { Footer };
