import Button from "./Button";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

import { FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className='flex justify-between flex-row px-20'>
      <Logo />
      <NavLinks />
      <Button>
        <a
          className='flex flex-row h-full w-full gap-2 justify-center items-center'
          href='https://github.com/devpolas/application-store-demo'
          target='_blank'
        >
          <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            <FaGithub />
          </span>
          <span>Contribute</span>
        </a>
      </Button>
    </nav>
  );
}
