import { useLoaderData } from "react-router";
import AppOverview from "../components/AppOverview";

export default function AppPage() {
  const data = useLoaderData();
  return (
    <section className='mt-20 px-7 md:px-15 lg:px-20 text-center bg-gray-100'>
      <h1 className='text-3xl md:text-5xl font-bold text-black'>
        Our All Applications
      </h1>
      <p className='text-xl mt-4 text-gray-400'>
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className='mt-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4'>
        {data.map((app) => (
          <AppOverview key={app.id} {...app} />
        ))}
      </div>
    </section>
  );
}
