import { Link } from "react-router";
import LogoImage from "./../assets/logo.png";
export default function Logo() {
  return (
    <Link to='/' className='flex gap-2 flex-row justify-center items-center'>
      <img className='w-10 h-10' src={LogoImage} alt='LogoImage' />
      <h1 className='font-bold text-sm md:text-lg lg:text-xl'>HERO.IO</h1>
    </Link>
  );
}
