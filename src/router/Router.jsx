import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Manu from "../pages/manu/manu/Manu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/SignUp";
import PrivectRoute from "./PrivectRoute";
import Secret from "../compoment/Secret";
import Dashbord from "../layout/Dashbord";
import Cart from "../dashbord/cart/Cart";
import Allusers from "../pages/login/allusers/Allusers";

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
              element: <Order></Order>
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
    },
    {
      path:'/dashbord',
      element:<PrivectRoute><Dashbord></Dashbord></PrivectRoute>,
      children:[
        {
         path:"/dashbord/cart",
         element:<Cart></Cart>
        },

        //admin rotes
        {
         path:"/dashbord/allusers",
         element:<Allusers></Allusers>
        },
      ]

    }
])

export default router;