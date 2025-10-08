import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

export default function MainLayout() {
  return (
    <main className='max-w-[1440px] mx-auto'>
      <NavBar />
      <Outlet />
    </main>
  );
}
