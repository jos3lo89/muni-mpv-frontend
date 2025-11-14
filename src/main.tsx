import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Mvp from "./Mvp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Mvp />
  </StrictMode>
);
