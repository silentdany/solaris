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
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        const roles = await checkUserRoles(
          account.access_token,
          '867971389641097327'
        );
        token.roles = roles;
        token.id = profile.id;
      }

      return token;
    },
    async session({ session, token }) {
      session.roles = token.roles;
      session.user.id = token.id;

      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});
