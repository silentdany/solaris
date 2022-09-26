import Link from 'next/link';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

import { Logo } from '../components/Logo';
import { AppConfig } from '../utils/AppConfig';

const Footer = () => (
  <section className="mx-auto flex flex-col items-center justify-center space-y-12 bg-gray-50 px-6 py-16 text-center">
    <Link href="/" passHref>
      <a
        title="Retour en haut"
        className="duration-300 ease-in-out hover:-translate-y-1"
      >
        <Logo width="50" />
      </a>
    </Link>
    <ul className="space-x-5">
      {AppConfig.discord && (
        <Link href={AppConfig.discord}>
          <a title="Discord QTT" target="_blank">
            <li className="btn btn-ghost btn-circle font-title text-2xl hover:text-primary-300 md:text-xl ">
              <FaDiscord />
            </li>
          </a>
        </Link>
      )}
      {AppConfig.instagram && (
        <Link href={AppConfig.instagram}>
          <a title="Instagram Solaris" target="_blank">
            <li className="btn btn-ghost btn-circle font-title text-2xl hover:text-primary-300 md:text-xl ">
              <FaInstagram />
            </li>
          </a>
        </Link>
      )}
      {AppConfig.twitter && (
        <Link href={AppConfig.twitter}>
          <a title="Twitter Solaris" target="_blank">
            <li className="btn btn-ghost btn-circle font-title text-2xl hover:text-primary-300 md:text-xl ">
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
