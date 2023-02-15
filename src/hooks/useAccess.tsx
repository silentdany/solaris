import { useSession } from 'next-auth/react';

import { discordRoles, DiscordUser } from '../utils/Auth';

export const useAccess = (accessLevel: string) => {
  const { data: session } = useSession();
  const user = session?.user as DiscordUser;
  const roles = discordRoles;
  return (
    // return true if user has accessLevel role and true for all higher roles by discordRole level
    user?.roles?.some(
      (role) =>
        role.slug === accessLevel &&
        roles
          .filter((r) => r.level >= role.level)
          .every((r) => user.roles.some((ur) => ur.slug === r.slug))
    ) || false
  );
};

export const getAccess = (accessLevel: string, user: DiscordUser | any) => {
  const roles = discordRoles;
  return (
    // return true if user has accessLevel role and true for all higher roles by discordRole level
    user?.roles?.some(
      (role) =>
        role.slug === accessLevel &&
        roles
          .filter((r) => r.level >= role.level)
          .every((r) => user.roles.some((ur) => ur.slug === r.slug))
    ) || false
  );
};
