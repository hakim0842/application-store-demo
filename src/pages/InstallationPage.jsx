import { useLoaderData } from "react-router";
import InstalledApps from "../components/InstalledApps";

export default function InstallationPage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <section className='mt-8 md:mt-14 lg:mt-20 px-7 md:px-15 lg:px-20 bg-gray-100'>
      <h1 className='text-3xl md:text-5xl font-bold text-black  text-center'>
        Your Installed Apps
      </h1>
      <p className='text-xl mt-4 text-gray-400  text-center'>
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className='text-black flex flex-row justify-between items-center mt-5 md:mt-10'>
        <p className='text-lg md:text-xl lg:text-2xl font-semibold'>
          1 Apps Found
        </p>
        <fieldset className='fieldset'>
          <legend className='fieldset-legend text-black text-start'>
            Filter
          </legend>
          <select defaultValue='Sort By Size' className='select bg-white'>
            <option disabled={true}>Sort By Size</option>
            <option>High - Low</option>
            <option>Low - high</option>
          </select>
        </fieldset>
      </div>
      <div>
        <InstalledApps />
        <InstalledApps />
        <InstalledApps />
        <InstalledApps />
        <InstalledApps />
        <InstalledApps />
        <InstalledApps />
        <InstalledApps />
        <InstalledApps />
        <InstalledApps />
        <InstalledApps />
      </div>
    </section>
  );
}
