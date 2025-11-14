import { ModeToggle } from "@/components/mode-toggle";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <h1>Main Layout</h1>
      <ModeToggle />
      <Outlet />
    </>
  );
};
export default MainLayout;
