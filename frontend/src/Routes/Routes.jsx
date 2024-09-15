import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import EditDraw from "../Pages/EditDraw/EditDraw";
import NotFoundPage from "../Pages/ErrorPage/NotFoundPage";
import HomePage from "../Pages/HomePage/HomePage";
import AllDraw from "../Pages/ListOFDraw/AllDraw";
import StartDraw from "../Pages/StartDraw/StartDraw";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/start-draw",
        element: <StartDraw />,
      },
      {
        path: "/edit-draw:id",
        element: <EditDraw />,
      },
      {
        path: "/all-draws",
        element: <AllDraw />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
