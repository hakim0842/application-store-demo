import Logo from "./Logo";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  const date = new Date();
  return (
    <footer className='bg-[#001931] px-10 py-5 text-white'>
      <div className='flex flex-row justify-between items-center'>
        <Logo />
        <div>
          <h1 className='text-xl font-medium mb-4 text-center'>Social Links</h1>
          <div className='flex flex-row gap-3.5 justify-center items-center font-extrabold'>
            <a target='_blank' href='https://mail.google.com'>
              <TfiEmail className='hover:cursor-pointer' />
            </a>
            <a target='_blank' href='https://www.github.com'>
              <FaGithub className='hover:cursor-pointer' />
            </a>
            <a target='_blank' href='https://www.linkedin.com'>
              <FaLinkedinIn className='hover:cursor-pointer' />
            </a>
            <a target='_blank' href='https://www.x.com'>
              <FaXTwitter className='hover:cursor-pointer' />
            </a>
            <a target='_blank' href='https://www.facebook.com/'>
              <FaFacebookF className='hover:cursor-pointer' />
            </a>
          </div>
        </div>
      </div>
      <p className='text-center text-sm mt-4'>
        Copyright Hero.io &copy; {date.getFullYear()} - All right reserved
      </p>
    </footer>
  );
}
