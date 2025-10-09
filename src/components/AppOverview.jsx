import { FiDownload } from "react-icons/fi";
import { TiStar } from "react-icons/ti";
import ReactIconWithText from "./ReactIconWithText";

export default function AppOverview({ image, title, downloads, ratingAvg }) {
  return (
    <div className='shadow-sm bg-white p-4 flex flex-col gap-4 hover:cursor-pointer ease-in-out transition-all duration-300 hover:-translate-y-1 active:translate-0 hover:shadow-lg active:shadow-sm'>
      <img className='h-fit w-full' src={image} alt={title} />
      <h1 className='text-start'>{title}</h1>
      <div className='flex flex-row justify-between'>
        <p className='text-green-500'>
          <ReactIconWithText icon={<FiDownload />} text={downloads} />
        </p>
        <p className='text-orange-500'>
          <ReactIconWithText icon={<TiStar />} text={ratingAvg} />
        </p>
      </div>
    </div>
  );
}
