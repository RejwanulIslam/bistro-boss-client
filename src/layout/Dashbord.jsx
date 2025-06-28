import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

export default function Dashbord() {
    const [data]=useCart()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li><NavLink to="/dashbord/userhome">
                        <FaHome></FaHome>
                        User Home</NavLink></li>

                    <li><NavLink to="/dashbord/reservation">
                        <FaCalendar></FaCalendar>
                        reservation</NavLink></li>

                    <li><NavLink to="/dashbord/cart">
                        <FaShoppingCart></FaShoppingCart>
                        My Cart ({data?.length})</NavLink></li>

                    <li><NavLink to="/dashbord/review">
                        <FaAd></FaAd>
                        Add a Review</NavLink></li>

                    <li><NavLink to="/dashbord/booking">
                        <FaList></FaList>
                        My Booking</NavLink></li>

                    <div className="divider">Or</div>

                    <li><NavLink to="/">
                        <FaHome></FaHome>
                        User Home</NavLink></li>

                    <li><NavLink to="/order/salad">
                        <FaSearch></FaSearch>
                        Menu</NavLink></li>

                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

