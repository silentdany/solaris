import React from 'react';

import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';

import { DiscordUser } from '../../../utils/Auth';

interface CapitalStatProps {
  title: string;
  content: Array<StatContentProps>;
  index: number;
}

interface StatContentProps {
  icon: JSX.Element;
  title: string;
  value: number | string | JSX.Element;
  sub?: string | boolean;
}

const StatContent = ({ icon, title, value, sub }: StatContentProps) => (
  <div className="stat z-10 py-2 px-4 md:py-4 md:px-6">
    <div className="text-primary stat-figure">{icon}</div>
    <div className="stat-title text-sm">{title}</div>
    <div className="text-primary stat-value text-2xl">{value}</div>
    {sub && <div className="stat-desc">{sub}</div>}
  </div>
);

export const CapitalStat = ({ title, content, index }: CapitalStatProps) => {
  const { data: session } = useSession();
  const user = session?.user as DiscordUser;
  const userRole = user?.roles[0]?.slug;
  return (
    <motion.div
      initial={{
        translateX: -200,
        opacity: 0,
      }}
      whileInView={{ translateX: 0, opacity: 1 }}
      viewport={{ amount: 0.1, once: true }}
      className="flex flex-col md:-space-y-2"
    >
      <motion.h3
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.1, once: false }}
        className={`flex font-title text-2xl font-bold uppercase text-primary-500/50 md:text-3xl ${
          index % 2 !== 0 && 'lg:justify-end'
        }`}
      >
        {title}
      </motion.h3>
      <div
        className={`flex ${index % 2 !== 0 ? 'justify-start' : 'justify-end'}`}
      >
        <div
          className={`stats stats-vertical relative !overflow-visible bg-stone-300 shadow duration-300 ease-in-out lg:stats-horizontal hover:shadow-xl ${
            index % 2 !== 0 && 'lg:self-end'
          }`}
        >
          <div
            className={`absolute top-0 z-0 h-full w-screen rounded-2xl bg-stone-300/25 ${
              index % 2 !== 0 ? 'left-0' : 'right-0'
            }`}
          ></div>
          {content.map((item) => (
            <StatContent
              icon={item.icon}
              title={item.title}
              value={item.value}
              sub={userRole === 'staff' && item.sub}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
