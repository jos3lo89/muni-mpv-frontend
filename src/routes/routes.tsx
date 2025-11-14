import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
