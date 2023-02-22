import { useEffect, useState } from 'react';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { signIn, signOut, useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { FaDiscord } from 'react-icons/fa';

import { supabase } from '../../lib/initSupabase';
import { DiscordAvatar } from '../components/auth/DiscordAvatar';
import { SocialButtons } from '../components/SocialButtons';
import useMediaQuery from '../hooks/useMediaQuery';
import { DiscordUser } from '../utils/Auth';

const Navbar = () => {
  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
  );

  const { data: session } = useSession();
  const user = session?.user as DiscordUser;

  const { publicKey } = useWallet();

  const [walletConnected, setWalletConnected] = useState(false);
  const [participateArmada, setParticipateArmada] = useState(false);

  const isMobile = useMediaQuery('(max-width: 767px)');

  const handleIncorportateTooltip = (
    mediaQuery: boolean,
    walletStatus: boolean
  ) => {
    if (!walletStatus) {
      return 'Connectez votre wallet';
    }
    if (mediaQuery) {
      return 'Intégrer Armada';
    }
    return "Intégrer sa flotte à l'Armada de guilde";
  };

  const fetchPubKeys = async () => {
    const { data: memberKeys, error } = await supabase
      .from('member_keys')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      console.log('error', error);
    }
    if (memberKeys) {
      const key = memberKeys.find((k) => k.pubkey === publicKey?.toBase58());
      if (key) {
        setParticipateArmada(true);
      }
    }
  };

  const handleIncorporate = async () => {
    if (publicKey) {
      if (!participateArmada) {
        const { status, error } = await supabase
          .from('member_keys')
          .insert([{ pubkey: publicKey.toBase58() }]);
        if (error) {
          console.log('error', error);
        }
        if (status === 201) {
          setParticipateArmada(true);
        }
      }
      if (participateArmada) {
        const { status, error } = await supabase
          .from('member_keys')
          .delete()
          .eq('pubkey', publicKey.toBase58());
        if (error) {
          console.log('error', error);
        }
        if (status === 204) {
          setParticipateArmada(false);
        }
      }
    }
  };

  useEffect(() => {
    fetchPubKeys();
  }, []);

  useEffect(() => {
    if (publicKey) {
      setWalletConnected(true);
    } else {
      setWalletConnected(false);
    }
  }, [publicKey]);

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
          <ul className="dropdown-content menu rounded-box menu-compact w-52 space-y-4 bg-base-100 p-2 text-right shadow">
            {!session ? (
              <>
                <WalletMultiButtonDynamic className="!flex !h-10 !w-full !items-center !justify-center !rounded-xl !bg-primary-500 hover:!bg-secondary-500" />
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
              </>
            ) : (
              <>
                <div className="flex flex-col space-y-2 rounded-xl bg-stone-200 p-2 shadow-xl">
                  <div className="flex justify-end text-right font-bold">
                    {user.name}
                    <span className="p-0 font-normal text-stone-400">
                      #{user.discriminator}
                    </span>
                  </div>
                  <div className="p-0 text-secondary-500/50">
                    {user.roles[0]?.name || 'Invité'}
                  </div>
                  <div className="divider my-1"></div>
                  <WalletMultiButton className="!flex !h-10 !w-full !items-center !justify-center !rounded-xl !bg-primary-500 hover:!bg-secondary-500" />
                  <div
                    className="tooltip tooltip-left"
                    data-tip={handleIncorportateTooltip(
                      isMobile,
                      walletConnected
                    )}
                  >
                    <div
                      className={`flex items-center justify-end p-0 ${
                        walletConnected && 'text-opacity-50'
                      }`}
                    >
                      Incorporation
                      <input
                        type="checkbox"
                        className="toggle toggle-primary toggle-xs ml-2"
                        disabled={!walletConnected}
                        checked={participateArmada}
                        onChange={() => handleIncorporate()}
                      />
                    </div>
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
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
