import { useParams, useRouteLoaderData } from "react-router";
import RatingChart from "../components/RatingChart";
import AppDetailsHero from "../components/AppDetailsHero";

export default function AppDetailsPage() {
  const data = useRouteLoaderData("apps");
  const { id } = useParams();
  const appInfo = data.find((e) => parseInt(e.id) == parseInt(id));

  return (
    <div className='px-7 md:px-15 lg:px-20 bg-gray-100'>
      <AppDetailsHero {...appInfo} />
    </div>
  );
}
