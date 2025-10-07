import { useNavigate } from "react-router";
import Button from "../components/Button";
import ErrorImage from "./../assets/error-404.png";
import { TiArrowBackOutline } from "react-icons/ti";

export default function ErrorPage() {
  const navigate = useNavigate();

  function goBack() {
    navigate("/");
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col justify-center items-center p-2'>
        <img src={ErrorImage} alt='Error image' />
        <h1 className='font-semibold text-2xl md:text-3xl xl:text-5xl lg:text-4xl mt-4'>
          Oops, page not found!
        </h1>
        <p className='text-sm md:text-lg lg:text-xl mt-2'>
          The page you are looking for is not available.
        </p>
        <Button onClick={() => goBack()}>
          <span>Go Back</span>
          <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            <TiArrowBackOutline />
          </span>
        </Button>
      </div>
    </div>
  );
}
