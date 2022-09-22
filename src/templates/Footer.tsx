import Link from 'next/link';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

import { Logo } from '../components/Logo';
import { AppConfig } from '../utils/AppConfig';

const Footer = () => (
  <section className="flex flex-col justify-center items-center bg-gray-50 mx-auto px-6 py-16 text-center space-y-12">
    <Link href="/" passHref>
      <a
        title="Retour en haut"
        className="hover:-translate-y-1 ease-in-out duration-300"
      >
        <Logo width="50" />
      </a>
    </Link>
    <ul className="space-x-5">
      {AppConfig.discord && (
        <Link href={AppConfig.discord}>
          <a title="Discord QTT" target="_blank">
            <li className="btn btn-circle btn-ghost hover:text-primary-300 font-title text-2xl md:text-xl ">
              <FaDiscord />
            </li>
          </a>
        </Link>
      )}
      {AppConfig.instagram && (
        <Link href={AppConfig.instagram}>
          <a title="Instagram Solaris" target="_blank">
            <li className="btn btn-circle btn-ghost hover:text-primary-300 font-title text-2xl md:text-xl ">
              <FaInstagram />
            </li>
          </a>
        </Link>
      )}
      {AppConfig.twitter && (
        <Link href={AppConfig.twitter}>
          <a title="Twitter Solaris" target="_blank">
            <li className="btn btn-circle btn-ghost hover:text-primary-300 font-title text-2xl md:text-xl ">
              <FaTwitter />
            </li>
          </a>
        </Link>
      )}
    </ul>
    <p>
      © Copyright 2022 <span className="text-primary-300">|</span>{' '}
      {AppConfig.title}
    </p>
  </section>
);

export { Footer };
