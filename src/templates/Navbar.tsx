import Image from 'next/image';
import Link from 'next/link';
import { BiDownArrow } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

import { AppConfig } from '../utils/AppConfig';

const SocialLinks = ({ mobile }) => (
  <ul
    className={
      mobile ? 'flex justify-center md:hidden' : 'hidden md:flex justify-center'
    }
  >
    {AppConfig.discord && (
      <Link href={AppConfig.discord}>
        <a title="Discord QTT" target="_blank">
          <div className="btn btn-circle btn-ghost hover:text-primary-300 font-title text-2xl md:text-xl ">
            <FaDiscord />
          </div>
        </a>
      </Link>
    )}
    {AppConfig.instagram && (
      <Link href={AppConfig.instagram}>
        <a title="Instagram Solaris" target="_blank">
          <div className="btn btn-circle btn-ghost hover:text-primary-300 font-title text-2xl md:text-xl ">
            <FaInstagram />
          </div>
        </a>
      </Link>
    )}
    {AppConfig.twitter && (
      <Link href={AppConfig.twitter}>
        <a title="Twitter Solaris" target="_blank">
          <div className="btn btn-circle btn-ghost hover:text-primary-300 font-title text-2xl md:text-xl ">
            <FaTwitter />
          </div>
        </a>
      </Link>
    )}
  </ul>
);
const Navbar = () => (
  <div className="navbar bg-base-100 fixed z-50 shadow-xl">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
          <li>
            <Link href="#guilde">
              <a className="font-title text-lg hover:text-primary-300 flex justify-between">
                Guilde
                <BiDownArrow className="-rotate-90 text-right" />
              </a>
            </Link>
            <ul className="menu menu-compact p-2 shadow bg-base-100 rounded-box">
              <li>
                <Link href="#attributs">
                  <a className="font-title text-lg hover:text-primary-300">
                    Attributs
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#valeurs">
                  <a className="font-title text-lg hover:text-primary-300">
                    Valeurs
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#ambitions">
                  <a className="font-title text-lg hover:text-primary-300">
                    Ambitions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#profils">
                  <a className="font-title text-lg hover:text-primary-300">
                    Profils
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="disabled">
            <Link href="#guilde">
              <a className="font-title text-lg hover:text-primary-300 flex justify-between">
                News
                <BiDownArrow className="-rotate-90 text-right ml-8" />
              </a>
            </Link>
          </li>
          <li className="disabled">
            <Link href="#tools">
              <a className="font-title text-lg hover:text-primary-300 flex justify-between">
                Outils
                <BiDownArrow className="-rotate-90 text-right" />
              </a>
            </Link>
          </li>
          <div className="divider mt-2 mb-0 md:hidden"></div>
          <SocialLinks mobile />
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <Link href="/" passHref={true}>
        <a title="Accueil" className="relative flex flex-col items-center">
          <Image
            src="/assets/images/solaris_title_logo_color_black.webp"
            alt="Solaris Logo"
            width={150}
            height={20}
          />
        </a>
      </Link>
    </div>
    <div className="navbar-end">
      <SocialLinks mobile={false} />
      <div className="mx-4 hidden md:block">|</div>
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar btn-disabled"
        >
          <div className="font-title text-2xl md:text-xl">
            <CgProfile />
          </div>
        </label>
        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="font-title text-lg hover:text-primary-300">Profil</a>
          </li>
          <li>
            <a className="font-title text-lg hover:text-primary-300">
              Préférences
            </a>
          </li>
          <li>
            <a className="font-title text-lg hover:text-primary-300">
              Déconnexion
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export { Navbar };
