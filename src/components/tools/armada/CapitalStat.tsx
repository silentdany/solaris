import React from 'react';

import { motion } from 'framer-motion';

interface CapitalStatProps {
  title: string;
  content: Array<StatContentProps>;
  index: number;
}

interface StatContentProps {
  icon: JSX.Element;
  title: string;
  value: number | JSX.Element;
  sub?: string;
}

const StatContent = ({ icon, title, value, sub }: StatContentProps) => (
  <div className="stat z-10">
    <div className="text-primary stat-figure">{icon}</div>
    <div className="stat-title">{title}</div>
    <div className="text-primary stat-value">{value}</div>
    {sub && <div className="stat-desc">{sub}</div>}
  </div>
);

export const CapitalStat = ({ title, content, index }: CapitalStatProps) => {
  return (
    <motion.div
      initial={{
        translateX: -200,
        opacity: 0,
      }}
      whileInView={{ translateX: 0, opacity: 1 }}
      viewport={{ amount: 0.1, once: true }}
      className="flex flex-col -space-y-2"
    >
      <motion.h3
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.1, once: false }}
        className={`flex font-title text-3xl font-bold uppercase text-primary-500/50 ${
          index % 2 !== 0 && 'justify-end'
        }`}
      >
        {title}
      </motion.h3>
      <div
        className={`stats relative overflow-x-visible bg-stone-300 shadow duration-300 ease-in-out hover:shadow-xl ${
          index % 2 !== 0 && 'self-end'
        }`}
      >
        <div
          className={`absolute top-0 right-0 z-0 h-full w-screen rounded-2xl bg-stone-300/25 ${
            index % 2 !== 0 ? 'left-0' : 'right-0'
          }`}
        ></div>
        {content.map((item) => (
          <StatContent
            icon={item.icon}
            title={item.title}
            value={item.value}
            key={item.title}
          />
        ))}
      </div>
    </motion.div>
  );
};
