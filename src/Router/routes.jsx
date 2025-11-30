import { createBrowserRouter } from "react-router";

import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";

import MainLayout from "../Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Auth/Login";

const router=createBrowserRouter([

    {
        path:'/',
        Component:MainLayout,
        children:[

            {
                path:'/',
                Component:Home
            },
            {
                path:'/Coverage',
                Component:Coverage,
                
            }
        ]
    },
    {
       path:'/',
       Component:AuthLayout,
       children:[
         {
            path:'Login',
            Component:Login
         }

       ]
    }
])

export default router;