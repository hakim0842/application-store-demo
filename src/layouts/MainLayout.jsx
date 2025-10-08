import { Outlet, useNavigation } from "react-router";
import NavBar from "../components/NavBar";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

export default function MainLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <main className='max-w-[1440px] mx-auto bg-gray-100 text-black h-screen'>
      <NavBar />
      {isLoading && <Loader />}
      <Outlet />
      <Footer />
    </main>
  );
}
