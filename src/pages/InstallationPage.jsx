import { useLoaderData, useLocation, useNavigate } from "react-router";
import InstalledApps from "../components/InstalledApps";
import { useEffect, useState } from "react";
import { getInstalledApps, uninstallApp } from "../utils/localStorage";
import Button from "../components/Button";

export default function InstallationPage() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [installedApp, setInstalledApp] = useState(getInstalledApps());
  const [allApps, setAllApps] = useState(null);

  useEffect(
    function () {
      if (pathname === "/installation") {
        document.title = "All Installed Apps";
      }
      return () => (document.title = "App Store Demo");
    },
    [pathname]
  );

  function onUninstall(id) {
    uninstallApp(id);
    setInstalledApp(getInstalledApps);
  }

  const allInstallApp = data.filter((item) => installedApp.includes(item.id));

  function sortBySize(sortBy) {
    if (sortBy === "decs") {
      const decsBySize = [...allInstallApp].sort((a, b) => b.size - a.size);
      setAllApps(decsBySize);
    }
    if (sortBy === "aces") {
      const acesBySize = [...allInstallApp].sort((a, b) => a.size - b.size);
      setAllApps(acesBySize);
    }
  }

  function navigateAppsPage() {
    navigate("/apps");
  }

  const totalInstalledApps = allApps ? allApps.length : allInstallApp.length;
  const installedData = allApps ? allApps : allInstallApp;
  console.log(installedData);

  return (
    <section className='my-8 md:mt-14 lg:mt-20 px-7 md:px-15 lg:px-20 bg-gray-100'>
      <h1 className='text-3xl md:text-5xl font-bold text-black  text-center'>
        Your Installed Apps
      </h1>
      <p className='text-xl mt-4 text-gray-400  text-center'>
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className='text-black flex flex-row justify-between items-center mt-5 md:mt-10'>
        <p className='text-lg md:text-xl lg:text-2xl font-semibold'>
          {totalInstalledApps} Apps Found
        </p>
        <fieldset className='fieldset'>
          <legend className='fieldset-legend text-black text-start'>
            Filter
          </legend>
          <select
            onChange={(e) => sortBySize(e.target.value)}
            defaultValue='Sort By Size'
            className='select bg-white'
          >
            <option disabled={true}>Sort By Size</option>
            <option value='decs'>High - Low</option>
            <option value='aces'>Low - high</option>
          </select>
        </fieldset>
      </div>
      <div>
        {installedData.length > 0 ? (
          installedData.map((app) => (
            <InstalledApps onUninstall={onUninstall} key={app.id} {...app} />
          ))
        ) : (
          <div className='flex flex-col justify-center items-center gap-5'>
            <p className='col-span-full text-3xl md:text-5xl font-bold text-gray-400 text-center mt-5'>
              Currently no App Installed, Please Install a App
            </p>
            <Button
              onClick={() => {
                navigateAppsPage();
              }}
            >
              Show All Apps
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
