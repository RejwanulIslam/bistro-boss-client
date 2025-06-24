import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Manu from "../pages/manu/manu/Manu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/SignUp";
import PrivectRoute from "./PrivectRoute";
import Secret from "../compoment/Secret";

const router= createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
       children:[
            {
              path:"/",
              element:<Home></Home>
            },
            {
              path:"/menu",
              element:<Manu></Manu>
            },
            {
              path:"/order/:category",
              element:<PrivectRoute> <Order></Order></PrivectRoute>
            },
            {
              path:"/login",
              element:<Login></Login>
            },
            {
              path:"/signup",
              element:<SignUp></SignUp>
            },
            {
              path:"/secret",
              element:<PrivectRoute> <Secret></Secret></PrivectRoute>
            },
        ]
    }
])

export default router;