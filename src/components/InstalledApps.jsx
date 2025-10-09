import { FiDownload } from "react-icons/fi";
import { TiStar } from "react-icons/ti";
import ReactIconWithText from "./ReactIconWithText";
export default function InstalledApps() {
  return (
    <div className='flex flex-row justify-between mt-4 bg-white p-4 items-center'>
      <div className='flex flex-row gap-5'>
        <img className='h-20 w-20' src='./../assets/hero.png' alt='' />
        <div className='flex flex-col justify-between'>
          <h1>title</h1>
          <div className='flex flex-row gap-5'>
            <p className='text-green-500'>
              <ReactIconWithText icon={<FiDownload />} text={1000} />
            </p>
            <p className='text-orange-500'>
              <ReactIconWithText icon={<TiStar />} text={3.9} />
            </p>
            <h1>250MB</h1>
          </div>
        </div>
      </div>
      <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary flex items-center justify-center border-0 hover:text-white hover:btn-error transition-all duration-150 hover:-translate-y-0.5 active:translate-0 hover:shadow-lg active:shadow-sm'>
        Uninstall
      </button>
    </div>
  );
}
