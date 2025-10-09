import { Outlet, useLoaderData, useLocation, useParams } from "react-router";
import AppOverview from "../components/AppOverview";
import { useEffect, useRef, useState } from "react";

export default function AppPage() {
  const [queryData, setQueryData] = useState("");
  const data = useLoaderData();
  const searchInput = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    function handleKeyDown(e) {
      // check for Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInput.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(
    function () {
      if (pathname === "/apps") {
        document.title = "All Apps";
      }
      return () => (document.title = "App Store Demo");
    },
    [pathname]
  );

  const { id } = useParams();

  if (id) {
    return (
      <div className='flex-1'>
        <Outlet />
      </div>
    );
  }

  function filteredData() {
    if (!queryData) return data;
    return data.filter((item) =>
      item.title.toLowerCase().includes(queryData.toLowerCase())
    );
  }
  const totalAppsData = filteredData();
  const totalApps = totalAppsData.length;
  return (
    <div>
      <section className='mt-8 md:mt-14 lg:mt-20 px-7 md:px-15 lg:px-20 text-center bg-gray-100'>
        <h1 className='text-3xl md:text-5xl font-bold text-black'>
          Our All Applications
        </h1>
        <p className='text-xl mt-4 text-gray-400'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className='text-black flex flex-row justify-between items-center mt-5 md:mt-10'>
          <p className='text-sm md:text-xl lg:text-2xl font-semibold'>
            {totalApps} Apps Found
          </p>
          <label className='w-1/2 md:w-1/3 lg:w-1/4 input input-md	lg:input-lg	xl:input-xl bg-white'>
            <svg
              className='h-[1em] opacity-50'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <g
                strokeLinejoin='round'
                strokeLinecap='round'
                strokeWidth='2.5'
                fill='none'
                stroke='currentColor'
              >
                <circle cx='11' cy='11' r='8'></circle>
                <path d='m21 21-4.3-4.3'></path>
              </g>
            </svg>
            <input
              type='search'
              className='grow text-sm md:text-xl lg:text-2xl'
              placeholder='Search'
              onChange={(e) => setQueryData(e.target.value)}
              ref={searchInput}
            />
            <kbd className='kbd kbd-sm text-white bg-gray-600'>⌘</kbd>
            <kbd className='kbd kbd-sm text-white bg-gray-600'>K</kbd>
          </label>
        </div>
        <div className='mt-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4'>
          {totalAppsData.length > 0 ? (
            totalAppsData.map((app) => <AppOverview key={app.id} {...app} />)
          ) : (
            <p className='col-span-full text-3xl md:text-5xl font-bold text-gray-400 text-center mt-4'>
              Apps Not Found!
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
