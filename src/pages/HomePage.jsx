import { useLoaderData } from "react-router";
import Overview from "../components/Overview";
import Hero from "./../components/Hero";
export default function HomePage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <section className='p-10 lg:p-20'>
        <Hero />
      </section>
      <section className='-mt-10 lg:-mt-20'>
        <Overview />
      </section>
    </div>
  );
}
