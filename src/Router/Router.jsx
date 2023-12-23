import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";
import Error from "../Pages/Error/Error";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/service/details/:id',
        element: <ServicesDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/loans/${params.id}`)
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  },
]);

export default router;