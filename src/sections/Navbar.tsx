import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { FaDiscord } from 'react-icons/fa';

import { DiscordAvatar } from '../components/auth/DiscordAvatar';
import { SocialButtons } from '../components/SocialButtons';
import { DiscordUser } from '../utils/Auth';

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user as DiscordUser;
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
                  <DiscordAvatar user={user} />
                </div>
              </div>
            ) : (
              <div className="font-title text-2xl md:text-xl">
                <CgProfile />
              </div>
            )}
          </label>
          <ul className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-right shadow">
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
                {/* <div className="card">
                  <div className="flex flex-row items-center p-2 px-4">
                    {session.user?.name}
                    <span className="p-0 opacity-50">
                      #{session.user?.discriminator}
                    </span>
                  </div>
                </div> */}
                <div className="mb-4 flex flex-col rounded-xl bg-stone-200 p-2 shadow-xl">
                  <div className="flex justify-end text-right font-bold">
                    {user.name}
                    <span className="p-0 font-normal text-stone-400">
                      #{user.discriminator}
                    </span>
                  </div>
                  <div className="p-0 text-secondary-500/50">
                    {user.roles[0]?.name || 'Invité'}
                  </div>
                </div>
                <li>
                  <button
                    className="font-title text-lg hover:text-primary-300"
                    onClick={() => signOut()}
                  >
                    Déconnexion
                  </button>
                </li>
                {/* <li>
                  <button
                    className="font-title text-lg hover:text-primary-300"
                    onClick={() => signOut()}
                  >
                    Déconnexion
                  </button>
                </li> */}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
