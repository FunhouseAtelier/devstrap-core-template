// frontend/src/main.tsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App";
import ApiStatus, { loader as apiStatusLoader } from "@/routes/ApiStatus";
import "./index.css";
import CsrPage from "./routes/CsrPage";
import HybridPage from "./routes/HybridPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/api-status",
    element: <ApiStatus />,
    loader: apiStatusLoader,
  },
  {
    path: "/csr",
    element: <CsrPage />,
  },
  {
    path: "/hybrid",
    element: <HybridPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
