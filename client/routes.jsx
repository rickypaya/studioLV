import { createBrowserRouter } from "react-router-dom";

import Home from "./home.jsx";
import About from "./about.jsx";
import Teaching from "./teaching.jsx";
import Connect from "./connect.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/teaching",
    element: <Teaching />,
  },
  {
    path: "/connect",
    element: <Connect />,
  },
]);

export default router;
