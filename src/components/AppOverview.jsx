import { FiDownload } from "react-icons/fi";
import { TiStar } from "react-icons/ti";
import ReactIconWithText from "./ReactIconWithText";
import { Link } from "react-router";

export default function AppOverview({
  id,
  image,
  title,
  downloads,
  ratingAvg,
}) {
  return (
    <Link to={`/apps/${id}`}>
      <div className='shadow-sm bg-white p-4 flex flex-col gap-4 hover:cursor-pointer ease-in-out transition-all duration-300 hover:-translate-y-1.5 odd:hover:translate-x-0.5 even:hover:-translate-x-0.5 active:translate-0 hover:shadow-lg active:shadow-sm'>
        <img className='h-fit w-full' src={image} alt={title} />
        <h1 className='text-start font-semibold'>{title}</h1>
        <div className='flex flex-row justify-between'>
          <p className='text-green-500'>
            <ReactIconWithText icon={<FiDownload />} text={downloads} />
          </p>
          <p className='text-orange-500'>
            <ReactIconWithText icon={<TiStar />} text={ratingAvg} />
          </p>
        </div>
      </div>
    </Link>
  );
}
