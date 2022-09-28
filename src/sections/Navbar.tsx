import Image from 'next/image';
import Link from 'next/link';
import { BiDownArrow } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

import { SocialButtons } from '../components/SocialButtons';

const Navbar = () => (
  <div className="navbar fixed z-50 bg-base-100 shadow-xl" id="top">
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
        <ul className="dropdown-content menu rounded-box menu-compact mt-3 bg-base-100 p-2 shadow">
          <li>
            <span className="flex justify-between font-title text-lg hover:text-primary-300">
              Guilde
              <BiDownArrow className="-rotate-90 text-right" />
            </span>
            <ul className="menu rounded-box menu-compact bg-base-100 p-2 shadow">
              <li>
                <Link href="/guild/#attributs">
                  <a className="font-title text-lg hover:text-primary-300">
                    Attributs
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/guild/#valeurs">
                  <a className="font-title text-lg hover:text-primary-300">
                    Valeurs
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/guild/#ambitions">
                  <a className="font-title text-lg hover:text-primary-300">
                    Ambitions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/guild/#profils">
                  <a className="font-title text-lg hover:text-primary-300">
                    Profils
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="disabled">
            <Link href="/news">
              <a className="flex justify-between font-title text-lg hover:text-primary-300">
                News
                <BiDownArrow className="ml-8 -rotate-90 text-right" />
              </a>
            </Link>
          </li>
          <li>
            <span className="flex justify-between font-title text-lg hover:text-primary-300">
              Outils
              <BiDownArrow className="-rotate-90 text-right" />
            </span>
            <ul className="menu rounded-box menu-compact bg-base-100 p-2 shadow">
              <li>
                <Link href="/tools">
                  <a className="font-title text-lg hover:text-primary-300">
                    Tous
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tools/ships">
                  <a className="font-title text-lg hover:text-primary-300">
                    Liste vaisseaux
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <div className="divider mt-2 mb-0 md:hidden"></div>
          <div className="flex justify-around md:hidden">
            <SocialButtons mobile />
          </div>
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <Link href="/guild" passHref={true}>
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
      <ul className="hidden justify-center md:flex">
        <SocialButtons mobile={false} />
      </ul>
      <div className="mx-4 hidden md:block">|</div>
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="avatar btn btn-disabled btn-ghost btn-circle"
        >
          <div className="font-title text-2xl md:text-xl">
            <CgProfile />
          </div>
        </label>
        <ul className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
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
