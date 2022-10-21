import Link from 'next/link';
import { useRouter } from 'next/router';

import { bcData } from '../utils/BreadcrumbsData';

export const Breadcrumbs = () => {
  const router = useRouter();
  const { pathname } = router;
  const pathArray = pathname.split('/').filter((item) => item !== '');
  const breadcrumbs = pathArray.map((_item, index) => {
    const path = `/${pathArray.slice(0, index + 1).join('/')}`;
    const { title }: string | any = bcData.find((bc) => bc.path === path);
    const render =
      pathArray.length - 1 === index ? (
        <li key={path}>{title}</li>
      ) : (
        <li key={path}>
          <Link href={path}>
            <a>{title}</a>
          </Link>
        </li>
      );
    return render;
  });

  return (
    <nav
      aria-label="breadcrumb"
      className="breadcrumbs w-full bg-primary-700 px-4 text-xs text-stone-50"
    >
      <ul>
        <li>
          <Link href="/guild">
            <a>Accueil</a>
          </Link>
        </li>
        {breadcrumbs}
      </ul>
    </nav>
  );
};
