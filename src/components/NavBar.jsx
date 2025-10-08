import Logo from "./Logo";
import MobileNav from "./MobileNav";
import NavButton from "./NavButton";
import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <nav className='flex justify-between items-center flex-row px-5 lg:px-20 my-auto shadow-sm'>
      <div className='flex flex-row justify-center items-center'>
        <MobileNav />
        <Logo />
      </div>
      <NavLinks />
      <NavButton />
    </nav>
  );
}
