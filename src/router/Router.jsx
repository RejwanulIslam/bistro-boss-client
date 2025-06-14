import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Manu from "../pages/manu/manu/Manu";
import Order from "../pages/order/order/Order";

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
              element:<Order></Order>
            },
        ]
    }
])

export default router;