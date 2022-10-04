import { useEffect, useState } from 'react';

import Image from 'next/future/image';
import { BiDownload, BiChevronDown } from 'react-icons/bi';

export const LogoCollapse = ({ logos, variant }) => {
  const [logoType, setLogoType] = useState(logos.title);
  useEffect(() => {
    if (variant === 'simple') {
      setLogoType(logos.simple);
    }
  }, [logos, variant]);
  return (
    <div>
      <h3 className="text-center text-3xl">
        {variant === 'title' ? 'Complet' : 'Simple'}
      </h3>
      <div className="group collapse">
        <input type="checkbox" />
        <div className="collapse-title flex flex-col items-center pr-4">
          <div className="relative">
            <Image
              key={logoType.main.title}
              src={logoType.main.url}
              alt={logoType.main.title}
              width={variant === 'title' ? 1060 : 166}
              height={143}
              className={`rounded-xl ${logoType.main.bgColor} p-8 shadow-sm hover:shadow-lg`}
            />
            <a
              href={logoType.main.url}
              download
              className="btn btn-ghost btn-circle absolute bottom-0 right-0 z-50 text-xl text-white hover:text-primary-500"
            >
              <BiDownload />
            </a>
            <BiChevronDown className="absolute bottom-0 left-0 text-4xl text-primary-500 transition-all duration-200 group-hover:translate-y-1" />
          </div>
        </div>
        <div className="collapse-content flex flex-col items-center space-y-4">
          {logoType.secondary.map((logo) => (
            <div key={logo.title} className="relative">
              <Image
                src={logo.url}
                alt={logo.title}
                width={variant === 'title' ? 1060 : 166}
                height={143}
                className={`rounded-xl ${logo.bgColor} p-8 shadow-sm hover:shadow-lg`}
              />
              <a
                href={logo.url}
                download
                className="btn btn-ghost btn-circle absolute bottom-0 right-0 z-50 text-xl text-white hover:text-primary-500"
              >
                <BiDownload />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
