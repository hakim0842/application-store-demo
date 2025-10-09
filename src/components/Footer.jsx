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
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex flex-col text-center items-center flex-2'>
          <Logo />
          <p className='font-bold'>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div className='flex flex-row justify-around  flex-2'>
          <nav className='flex flex-col mt-8 md:mt-0'>
            <h6 className='footer-title'>Services</h6>
            <a className='link link-hover'>Branding</a>
            <a className='link link-hover'>Design</a>
            <a className='link link-hover'>Marketing</a>
            <a className='link link-hover'>Advertisement</a>
          </nav>
          <nav className='flex flex-col mt-8 md:mt-0'>
            <h6 className='footer-title'>Company</h6>
            <a className='link link-hover'>About us</a>
            <a className='link link-hover'>Contact</a>
            <a className='link link-hover'>Jobs</a>
            <a className='link link-hover'>Press kit</a>
          </nav>
        </div>

        <div className='flex-1 text-center mt-10 md:mt-0'>
          <h1 className='text-xl font-medium mb-4'>Social Links</h1>
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
      <p className='text-center text-sm mt-8'>
        Copyright Hero.io &copy; {date.getFullYear()} - All right reserved
      </p>
    </footer>
  );
}
