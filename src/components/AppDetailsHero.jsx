import { useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { TiStar } from "react-icons/ti";
import { BiSolidLike } from "react-icons/bi";
import AppDetailsHeroOverviewImage from "./AppDetailsHeroOverviewImage";
import { installApp } from "./../utils/localStorage.js";
export default function AppDetailsHero({
  id,
  image,
  title,
  companyName,
  size,
}) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | App Details`;
    } else {
      document.title = "App Not Found";
    }
    return () => (document.title = "App Store Demo");
  }, [title]);

  function onInstall(id) {
    installApp(id);
  }

  return (
    <div className='flex flex-col lg:flex-row gap-5 md:gap-10 w-full mt-20'>
      <img className='w-80 h-80' src={image} alt={title} />
      <div className='flex flex-col gap-7 w-full justify-between'>
        <div>
          <h1 className='font-bold text-2xl text-[#001931]'>{title}</h1>
          <p className='text-sm'>
            Developed by <span className='gradient-text'>{companyName}</span>
          </p>
        </div>
        <div className='flex flex-row gap-6'>
          <AppDetailsHeroOverviewImage
            icon={
              <FiDownload className={`text-green-400 text-2xl md:text-4xl`} />
            }
            text='Downloads'
            count={80}
          />

          <AppDetailsHeroOverviewImage
            icon={<TiStar className={`text-yellow-400 text-2xl md:text-4xl`} />}
            text='Average Ratings'
            count={80}
          />

          <AppDetailsHeroOverviewImage
            icon={
              <BiSolidLike className={`text-red-400 text-2xl md:text-4xl`} />
            }
            text='Total Reviews'
            count={80}
          />
        </div>
        <button
          onClick={() => onInstall(id)}
          className='btn text-xl w-1/2 btn-ghost btn-primary text-white hover:text-black bg-green-400 border-0 btn-xs sm:btn-sm md:btn-md lg:btn-lg'
        >
          Install Now {`(${size})`}
        </button>
      </div>
    </div>
  );
}
