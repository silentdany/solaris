import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { FaDiscord } from 'react-icons/fa';

import { SocialButtons } from '../components/SocialButtons';

const DiscordAvatar = ({ user }) => {
  return <Image src={user?.image} alt={user?.name} width={32} height={32} />;
};
const Navbar = () => {
  const { data: session } = useSession();
  console.log('🚀 ~ file: Navbar.tsx:14 ~ Navbar ~ session', session);
  return (
    <div className="navbar fixed z-30 bg-base-100 shadow-xl" id="top">
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
          <ul className="dropdown-content menu rounded-box menu-compact mt-3 w-32 bg-base-100 p-2 shadow md:w-48">
            <li tabIndex={1}>
              <Link href="/guild">
                <a className="flex justify-between font-title text-lg hover:text-primary-300">
                  Guilde
                </a>
              </Link>
            </li>
            {/* <li className="disabled" tabIndex={1}>
            <Link
              href="#"
              // "/news"
            >
              <a className="flex justify-between font-title text-lg hover:text-primary-300">
                News
                <BiDownArrow className="ml-8 -rotate-90 text-right" />
              </a>
            </Link>
          </li> */}
            <li tabIndex={2}>
              <Link href="/tools">
                <a className="flex justify-between font-title text-lg hover:text-primary-300">
                  Outils
                </a>
              </Link>
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
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            {session ? (
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <DiscordAvatar user={session.user} />
                </div>
              </div>
            ) : (
              <div className="font-title text-2xl md:text-xl">
                <CgProfile />
              </div>
            )}
          </label>
          <ul className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
            {!session ? (
              <li>
                <button
                  className="flex items-center font-title text-lg hover:text-primary-300"
                  onClick={() => signIn('discord')}
                >
                  Connexion
                  <span className="ml-1 text-2xl">
                    <FaDiscord />
                  </span>
                </button>
              </li>
            ) : (
              <>
                <li>
                  <a className="font-title text-lg hover:text-primary-300">
                    Profil
                  </a>
                </li>
                <li>
                  <a className="font-title text-lg hover:text-primary-300">
                    Préférences
                  </a>
                </li>
                <li>
                  <button
                    className="font-title text-lg hover:text-primary-300"
                    onClick={() => signOut()}
                  >
                    Déconnexion
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
