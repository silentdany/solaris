import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

const Content = ({ network }) => (
  <Link href={network.link}>
    <a title={network.title} target="_blank">
      <div className="btn btn-ghost btn-circle font-title text-2xl hover:text-primary-300 md:text-xl">
        {network.icon}
      </div>
    </a>
  </Link>
);
const SocialButtons = ({ mobile }) => (
  <>
    {AppConfig.social.map((network) =>
      mobile ? (
        <div key={network.title}>
          <Content network={network} />
        </div>
      ) : (
        <li key={network.title}>
          <Content network={network} />
        </li>
      )
    )}
  </>
);

export { SocialButtons };
