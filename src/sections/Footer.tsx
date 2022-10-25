import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';

import { Logo } from '../components/Logo';
import { SocialButtons } from '../components/SocialButtons';
import { SolarButton } from '../components/SolarButton';
import { AppConfig } from '../utils/AppConfig';

const Footer = () => (
  <section className="mx-auto flex flex-col items-center justify-center space-y-12 bg-stone-50 px-6 py-16 text-center">
    <div className="my-16">
      <SolarButton
        url="https://discord.gg/vECEHD6GdJ"
        ext
        title="Discord QTT"
        item={
          <>
            <span className="mr-4 text-xl md:text-2xl lg:text-3xl">
              <FaDiscord />
            </span>
            Rejoignez-nous !
          </>
        }
      />
    </div>
    <Link href="#top" passHref>
      <a
        title="Retour en haut"
        className="duration-300 ease-in-out hover:-translate-y-1"
      >
        <Logo width="50" />
      </a>
    </Link>
    <ul className="flex justify-center space-x-5">
      <SocialButtons mobile={false} />
    </ul>
    <p>
      © Copyright 2022 <span className="text-primary-300">|</span>{' '}
      {AppConfig.title}
    </p>
  </section>
);

export { Footer };
