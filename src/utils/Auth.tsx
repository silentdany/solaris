export interface DiscordSession {
  accessToken: string;
  expires: string;
  user: DiscordUser;
}

export interface DiscordUser {
  id: string;
  name: string;
  discriminator: string;
  image: string;
  locale: string;
  email: string;
  roles: DiscordRole[];
}

interface DiscordRole {
  id: string;
  name: string;
  slug: string;
}

const discordRoles = [
  {
    id: '992464344564646089',
    name: 'Staff',
    slug: 'staff',
  },
  {
    id: '995944390876991589',
    name: 'Solar',
    slug: 'solar',
  },
];

export async function checkUserRoles(accessToken: string, guildId: string) {
  const response = await fetch(
    `https://discord.com/api/users/@me/guilds/${guildId}/member`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (response.ok) {
    const data = await response.json();
    if (data.roles) {
      return discordRoles.map(
        (role) =>
          data.roles.includes(role.id) && { name: role.name, slug: role.slug }
      );
    }
  }
  throw new Error('Echec de la récupération des rôles Discord');
}
