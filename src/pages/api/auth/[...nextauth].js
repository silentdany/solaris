/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import { checkUserRoles } from '../../../utils/Auth.tsx';

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'identify guilds.members.read',
        },
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        const roles = await checkUserRoles(
          account.access_token,
          '867971389641097327'
        );
        token.roles = roles;
        token.id = profile.id;
        token.discriminator = profile.discriminator;
        token.locale = profile.locale;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.roles = token.roles;
      session.user.id = token.id;
      session.user.discriminator = token.discriminator;
      session.user.locale = token.locale;

      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
});
