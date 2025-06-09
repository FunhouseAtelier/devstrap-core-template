// @/frontend/src/main.tsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App";
import ApiStatus, { loader as apiStatusLoader } from "@/routes/ApiStatus";
import "./index.css";

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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
