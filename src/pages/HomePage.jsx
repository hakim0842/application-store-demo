import { useLoaderData, useNavigate } from "react-router";
import Overview from "../components/Overview";
import Hero from "./../components/Hero";
import AppOverview from "../components/AppOverview";
import Button from "./../components/Button";
export default function HomePage() {
  const data = useLoaderData();
  console.log(data);
  const sortedData = data.sort((a, b) => b.ratingAvg - a.ratingAvg);
  const trendingApps = sortedData.slice(0, 12);
  console.log(trendingApps);

  const navigate = useNavigate();
  function navigateAppsPage() {
    navigate("/apps");
  }
  return (
    <div className='bg-gray-100'>
      <section className='p-10 lg:p-20'>
        <Hero />
      </section>
      <section className='-mt-10 lg:-mt-20'>
        <Overview />
      </section>

      <section className='mt-20 px-7 md:px-15 lg:px-20 text-center'>
        <h1 className='text-3xl md:text-5xl font-bold text-black'>
          Trending Apps
        </h1>
        <p className='md:text-xl text-sm mt-4 text-gray-400'>
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4'>
          {trendingApps.map((app) => (
            <AppOverview key={app.id} {...app} />
          ))}
        </div>
      </section>
      <div className='flex justify-center items-center py-10'>
        <Button
          onClick={() => {
            navigateAppsPage();
          }}
        >
          Show All
        </Button>
      </div>
    </div>
  );
}
