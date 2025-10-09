import { createBrowserRouter, RouterProvider } from "react-router";
import { homeLoader, appLoader, instillationLoader } from "./services/loader";
import MainLayout from "./layouts/MainLayout";
import Loader from "./components/Loader";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AppPage from "./pages/AppPage";
import AppDetailsPage from "./pages/AppDetailsPage";
import AppErrorPage from "./pages/AppErrorPage";
import InstallationPage from "./pages/InstallationPage";

export default function App() {
  const router = createBrowserRouter([
    {
      Component: MainLayout,
      errorElement: <ErrorPage />,
      HydrateFallback: () => <Loader />,
      children: [
        { index: true, Component: HomePage, loader: homeLoader },
        {
          path: "apps",
          Component: AppPage,
          loader: appLoader,
          children: [
            {
              path: ":id",
              Component: AppDetailsPage,
              errorElement: <AppErrorPage />,
            },
          ],
        },
        {
          path: "installation",
          Component: InstallationPage,
          loader: instillationLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
