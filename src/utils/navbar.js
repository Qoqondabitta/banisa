// unique id:
import useUniqueId from "../hooks/useId";

// pages:
import Shifoxonalar from "../components/shifoxalar";
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";

export const navbar = [
  {
    id: useUniqueId,
    title: "Home",
    path: "/",
    element: <Home />,
    private: true,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Shifoxonalar",
    path: "/hospital",
    element: <Shifoxonalar />,
    private: true,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Biz haqimizda",
    path: "/about",
    element: <About />,
    private: true,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Aloqa",
    path: "/contact",
    element: <Contact />,
    private: true,
    hidden: false,
  },
];
