import Logo from "./../assets/logo.png";
export default function Loader() {
  return (
    <div className='md:text-9xl text-5xl font-extrabold animated-gradient h-full col-span-full'>
      <span className='flex flex-row justify-center items-center gap-1 md:gap-3'>
        <span>L</span>
        <img className='md:h-20 md:w-20 h-8 w-8 loader' src={Logo} alt='logo' />
        <span>ading</span>
      </span>
    </div>
  );
}
