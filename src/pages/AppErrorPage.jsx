import { useNavigate } from "react-router";
import Button from "../components/Button";
import AppErrorImage from "./../assets/App-Error.png";
import { TiArrowBackOutline } from "react-icons/ti";

export default function AppErrorPage() {
  const navigate = useNavigate();

  function goBack() {
    navigate("/apps");
  }
  return (
    <div className='bg-white text-black max-w-[1440px] mx-auto flex flex-col h-screen'>
      <div className='flex justify-center items-center flex-1 bg-gray-100'>
        <div className='flex flex-col justify-center items-center p-2'>
          <img src={AppErrorImage} alt='App Error Image' />
          <h1 className='font-semibold text-2xl md:text-3xl xl:text-5xl lg:text-4xl mt-4'>
            Oops, App not found!
          </h1>
          <p className='text-sm md:text-lg lg:text-xl mt-2 mb-8'>
            The App you are looking for is not available.
          </p>
          <Button onClick={() => goBack()}>
            <span>Go Back</span>
            <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
              <TiArrowBackOutline />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
