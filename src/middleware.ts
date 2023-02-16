import { withAuth } from 'next-auth/middleware';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  // function middleware(req) {
  //   console.log(req.nextauth.token.roles);
  // },
  {
    callbacks: {
      authorized: ({ token }: any) =>
        token?.roles
          .map((role: { slug: string }) => role.slug)
          .includes('staff'),
    },
  }
);

export const config = { matcher: ['/tools/armada'] };
