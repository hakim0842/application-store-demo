import { NavLink } from "react-router";

export default function NavLinks() {
  return (
    <ul className='flex flex-row gap-5 justify-center items-center'>
      <li>
        <NavLink
          className={`p-1.5 hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500 hover:rounded-sm`}
          to='/'
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`p-1.5 hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500 hover:rounded-sm`}
          to='/apps'
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`p-1.5 hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500 hover:rounded-sm`}
          to='/installation'
        >
          Installation
        </NavLink>
      </li>
    </ul>
  );
}
