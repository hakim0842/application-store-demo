import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import AppPage from "./pages/AppPage";
import HomePage from "./pages/HomePage";
import InstallationPage from "./pages/InstallationPage";
import Loader from "./components/Loader";
import { homeLoader } from "./services/loader";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <ErrorPage />,

      children: [
        { index: true, element: <HomePage />, loader: homeLoader },
        { path: "apps", element: <AppPage /> },
        { path: "installation", element: <InstallationPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
