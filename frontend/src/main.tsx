// frontend/src/main.tsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App";
import ApiStatus, { loader as apiStatusLoader } from "@/routes/ApiStatus";
import "./index.css";
import CsrPage from "./routes/CsrPage";
import HybridPage from "./routes/HybridPage";
import { API_BASE_URL } from "@/utils/api";

// console.log("React is working!");
// console.log("API_BASE_URL:", API_BASE_URL);

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
