import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import AppPage from "./pages/AppPage";
import InstallationPage from "./pages/InstallationPage";

export default function App() {
  const router = createBrowserRouter([
    { errorElement: <ErrorPage /> },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "apps", element: <AppPage /> },
        { path: "installation", element: <InstallationPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
