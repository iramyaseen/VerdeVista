import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import SaveJobs from '../pages/Savejobs';
import Contact from '../pages/Contact';
import About from '../pages/About';
import DropShippling from '../pages/DropShipping';
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Checkout from '../pages/Checkout';
import AllUsers from "../AllUsers";
import DashboardLayout from "../dashboard/DashboardLayout/DashboardLayout";
import Overview from "../dashboard/Outlets/Overview/Overview";
import Packages from "../dashboard/Outlets/Packages/Packages";
import Products from "../dashboard/Outlets/Products/Products";
import Users from "../dashboard/Outlets/Users/Users";
import Orders from "../dashboard/Outlets/Orders/Orders";
import Payments from "../dashboard/Outlets/Payments/Payments";

export const publicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/savejobs",
        element: <SaveJobs />
    },
    {
        path: "/dropshipping",
        element: <DropShippling />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/checkout",
        element: <Checkout />
    },
    {
        path: "/getusers",
        element: <AllUsers />
    },
    {
        path: "*",
        element: <Navigate to='/' />
    },
    
]);


export const privateRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/savejobs",
        element: <SaveJobs />
    },
    {
        path: "/dropshipping",
        element: <DropShippling />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/checkout",
        element: <Checkout />
    },
    {
        path: "/getusers",
        element: <AllUsers />
    },
    {
        path: "*",
        element: <Navigate to='/' />
    }, 
    {     
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Overview />
            },
            {
                path: '/dashboard/packages',
                element: <Packages />
            },
            {
                path: '/dashboard/products',
                element: <Products />
            },
            {
                path: '/dashboard/users',
                element: <Users />
            },
            {
                path: '/dashboard/orders',
                element: <Orders />
            },
            {
                path: '/dashboard/payments',
                element: <Payments />
            },
        ]
    },
]);
