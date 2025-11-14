import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { ThemeProvider } from "./components/ThemeProvider";

const Mvp = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="mvp-theme">
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default Mvp;
