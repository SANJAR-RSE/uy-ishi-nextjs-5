import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Contact from "../page/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
