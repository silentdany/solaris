import { createContext, useState } from 'react';

export const FetchOriginContext = createContext<string>('guild');

// create a context with a useState hook
export const ParticipateArmadaContext = createContext({
  participateArmada: false,
  setParticipateArmada: (_value: boolean) => {},
});

// create a provider component
export const ParticipateArmadaProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [participateArmada, setParticipateArmada] = useState(false);

  return (
    <ParticipateArmadaContext.Provider
      value={{ participateArmada, setParticipateArmada }}
    >
      {children}
    </ParticipateArmadaContext.Provider>
  );
};
