import React from 'react';

import Image from 'next/image';

export const DiscordAvatar = ({ user }: any) => {
  return <Image src={user.image} alt={user.name} width={32} height={32} />;
};
