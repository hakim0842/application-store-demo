import { Outlet, useNavigation } from "react-router";
import NavBar from "../components/NavBar";
import Loader from "../components/Loader";

export default function MainLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <main className='max-w-[1440px] mx-auto'>
      <NavBar />
      {isLoading && <Loader />}
      <Outlet />
    </main>
  );
}
