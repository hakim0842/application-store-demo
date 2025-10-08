import PlayStoreImage from "./../assets/play-store.svg";
import AppStoreImage from "./../assets/app-store.svg";
import HeroImage from "./../assets/hero.png";
import HeroButton from "./HeroButton";

const googlePlayLink = "https://play.google.com";
const appStoreLink = "https://www.apple.com/app-store";
export default function Hero() {
  return (
    <div className='text-center'>
      <h1 className='font-bold text-3xl md:text-7xl'>
        <span>We Build</span>
        <br />
        <span>
          <span className=''>Productive</span>
          Apps
        </span>
      </h1>
      <p className='text-sm md:text-xl mt-4 w-full lg:max-w-[960px] mx-auto'>
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className='flex flex-row gap-4 justify-center my-10'>
        <HeroButton link={googlePlayLink} image={PlayStoreImage}>
          Play Store
        </HeroButton>
        <HeroButton link={appStoreLink} image={AppStoreImage}>
          App Store
        </HeroButton>
      </div>
      <div className='h-full w-full flex justify-center items-center'>
        <img className='h-fit w-fit' src={HeroImage} alt='hero image' />
      </div>
    </div>
  );
}
