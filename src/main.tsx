import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/blog",
        element: <div>This is for Blog Element</div>,
      },
      {
        path: "/about",
        element: <div>This is for About Element</div>,
      },
      {
        path: "/contact",
        element: <div>This is for Contact Element</div>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
