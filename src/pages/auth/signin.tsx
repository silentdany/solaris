import type { GetServerSidePropsContext } from 'next';
import Image from 'next/future/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { getProviders, signIn } from 'next-auth/react';
import { FaDiscord } from 'react-icons/fa';

import { SolarButtonCore } from '../../components/SolarButton';
import { authOptions } from '../api/auth/[...nextauth]';

export default function SignIn() {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center space-y-12 overflow-hidden bg-primary-500/50 bg-gradient-to-b to-transparent p-8">
      <div className="absolute left-0 z-0 h-full w-full bg-hero-diagonal-lines"></div>
      <Link href="/guild" passHref>
        <a title="Retour au site" className="z-10">
          <Image
            src="/assets/images/solaris_title_logo_color_white.webp"
            alt="Solaris Logo"
            width={600}
            height={82}
          />
        </a>
      </Link>
      <SolarButtonCore
        action={() => signIn('discord')}
        item={
          <>
            Connexion
            <span className="ml-1 text-2xl">
              <FaDiscord />
            </span>
          </>
        }
      />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: '/' } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
