import { useNavigate, useParams, useRouteLoaderData } from "react-router";
import RatingChart from "../components/RatingChart";
import { TiArrowBackOutline } from "react-icons/ti";
import AppDetailsHero from "../components/AppDetailsHero";
import Button from "../components/Button";
import AppDescription from "../components/AppDescription";

export default function AppDetailsPage() {
  const data = useRouteLoaderData("apps");
  const navigate = useNavigate();
  const { id } = useParams();
  const appInfo = data.find((e) => parseInt(e.id) == parseInt(id));

  if (!appInfo) {
    throw new Response("App not Found!");
  }
  function goBack() {
    navigate("/apps");
  }

  return (
    <div className='px-7 md:px-15 lg:px-20 bg-gray-100 relative pb-8'>
      <div className='absolute top-[.5%] left-[75%] sm:left-[80%]'>
        <Button onClick={() => goBack()}>
          <span>Back</span>
          <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            <TiArrowBackOutline />
          </span>
        </Button>
      </div>

      <div className='flex flex-col gap-10'>
        <AppDetailsHero {...appInfo} />
        <hr className='text-gray-300' />
        <RatingChart {...appInfo} />
        <hr className='text-gray-300' />
        <AppDescription {...appInfo} />
      </div>
    </div>
  );
}
