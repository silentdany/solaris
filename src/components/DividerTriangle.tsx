import { BiDownArrow } from 'react-icons/bi';

interface Props {
  data?: any;
  index: number;
}

export const DividerTriangle = ({ data, index }: Props) => (
  <div
    className={`my-12 flex w-full justify-around text-3xl lg:m-16 ${
      data && data.length - 1 === index && 'hidden'
    }`}
  >
    <BiDownArrow
      className={`${
        index % 2 === 0 ? 'text-primary-300/25' : 'text-primary-900/25'
      }`}
    />
    <BiDownArrow className="text-primary-700/25" />
    <BiDownArrow
      className={`${
        index % 2 === 0 ? 'text-primary-900/25' : 'text-primary-300/25'
      }`}
    />
  </div>
);
