import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { TiStar } from "react-icons/ti";
import { BiSolidLike } from "react-icons/bi";
import AppDetailsHeroOverviewImage from "./AppDetailsHeroOverviewImage";
import {
  getInstalledApps,
  installApp,
  uninstallApp,
} from "./../utils/localStorage.js";
export default function AppDetailsHero({
  id,
  image,
  title,
  companyName,
  size,
}) {
  const [data, setData] = useState(getInstalledApps());

  useEffect(() => {
    if (title) {
      document.title = `${title} | App Details`;
    } else {
      document.title = "App Not Found";
    }
    return () => (document.title = "App Store Demo");
  }, [title]);

  function handelClick(id, mode) {
    if (mode === "install") {
      const checked = installApp(id);
      toast(`${checked ? "Already" : ""} Installed ${title}!`);
      setData(getInstalledApps());
    }
    if (mode === "uninstall") {
      uninstallApp(id);
      toast(` Uninstalled ${title}!`);
      setData(getInstalledApps());
    }
  }

  const isInstalled = data.includes(id);

  return (
    <>
      <div className='flex flex-col sm:flex-row gap-4 md:gap-7 lg:gap-10 mt-20'>
        <img
          className='lg:w-80 lg:h-80 md:w-60  sm:w-1/2 sm:h-64 h-44 w-1/2 shadow-md'
          src={image}
          alt={title}
        />
        <div className='flex flex-col gap-2 lg:gap-7 w-full justify-between'>
          <div>
            <h1 className='font-bold text-2xl text-[#001931]'>{title}</h1>
            <p className='text-sm'>
              Developed by <span className='gradient-text'>{companyName}</span>
            </p>
          </div>
          <div className='flex flex-row gap-2 lg:gap-6'>
            <AppDetailsHeroOverviewImage
              icon={
                <FiDownload className={`text-green-400 text-2xl md:text-4xl`} />
              }
              text='Downloads'
              count={80}
            />

            <AppDetailsHeroOverviewImage
              icon={
                <TiStar className={`text-yellow-400 text-2xl md:text-4xl`} />
              }
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
            onClick={() =>
              handelClick(id, `${isInstalled ? "uninstall" : "install"}`)
            }
            className='btn text-sm lg:text-xl w-full md:w-1/2 xl:w-1/3 btn-ghost btn-primary text-white hover:text-black bg-green-400 border-0 btn-md lg:btn-lg'
          >
            {isInstalled ? "Uninstall" : `Install Now (${size} MB)}`}
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
