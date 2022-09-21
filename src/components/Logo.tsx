import Image from 'next/image';

const Logo = ({ width }) => (
  <Image
    src="/assets/images/solaris_logo_color.webp"
    alt="Solaris Logo"
    width={width}
    height={width}
  />
);

export { Logo };
