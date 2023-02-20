import { useSession } from 'next-auth/react';
import { BiXCircle } from 'react-icons/bi';

import { DiscordUser } from '../utils/Auth';

interface DefinedAccessOnlyProps {
  role: string;
  comp: JSX.Element | string | number;
  tooltipLeft?: boolean;
}

export const DefinedAccessOnly = ({
  role,
  comp,
  tooltipLeft,
}: DefinedAccessOnlyProps) => {
  const { data: session } = useSession();
  const user = session?.user as DiscordUser;
  const userRole = user?.roles[0]?.slug;

  if (userRole === role) {
    return <>{comp}</>;
  }
  return (
    <div
      className={`tooltip tooltip-warning ${
        tooltipLeft ? 'tooltip-left' : 'tooltip-right'
      }`}
      data-tip={`Réservé ${role}`}
    >
      <BiXCircle className="text-warning" />
    </div>
  );
};
