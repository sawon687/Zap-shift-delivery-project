import { createBrowserRouter } from "react-router";

import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";

import MainLayout from "../Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import SendParcel from "../pages/SendParcel/SendParcel";
import axios from "axios";

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
                
            },
            {
                path:'/SendParcel',
                Component:SendParcel,
                loader:()=>axios('warehouses.json').then(res=>res.data)
                
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
         },
         {
            path:'Register',
            Component:Register
         },

       ]
    }
])

export default router;