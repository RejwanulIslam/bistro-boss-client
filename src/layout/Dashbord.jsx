import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

export default function Dashbord() {
    const [data] = useCart()
    const [isAdmin] = useAdmin()
    // const isAdmin = true
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li><NavLink className='uppercase' to="/dashbord/adminhome">
                                <FaHome></FaHome>
                                Admin Home</NavLink></li>

                            <li><NavLink className='uppercase' to="/dashbord/additems">
                                <FaUtensils></FaUtensils>
                                Add Items</NavLink></li>

                            <li><NavLink className='uppercase' to="/dashbord/manageitems">
                                <FaShoppingCart></FaShoppingCart>
                                Manage Items</NavLink></li>

                            <li><NavLink className='uppercase' to="/dashbord/Managebookings">
                                <FaAd></FaAd>
                                Manage Bookings</NavLink></li>

                            <li><NavLink className='uppercase' to="/dashbord/allusers">
                                <FaUser></FaUser>
                                All Users</NavLink></li>

                            <div className="divider">Or</div>
                        </> :
                            <>
                                <li><NavLink className='uppercase' to="/dashbord/userhome">
                                    <FaHome></FaHome>
                                    User Home</NavLink></li>

                                <li><NavLink className='uppercase' to="/dashbord/reservation">
                                    <FaCalendar></FaCalendar>
                                    reservation</NavLink></li>

                                <li><NavLink className='uppercase' to="/dashbord/cart">
                                    <FaShoppingCart></FaShoppingCart>
                                    My Cart ({data?.length})</NavLink></li>

                                <li><NavLink className='uppercase' to="/dashbord/review">
                                    <FaAd></FaAd>
                                    Add a Review</NavLink></li>

                                <li><NavLink className='uppercase' to="/dashbord/booking">
                                    <FaList></FaList>
                                    My Booking</NavLink></li>
                            </>

                    }

                    {/* shared NavLink */}
                    <li><NavLink  className='uppercase' to="/">
                        <FaHome></FaHome>
                        Home</NavLink></li>

                    <li><NavLink className='uppercase' to="/order/salad">
                        <FaSearch></FaSearch>
                        Menu</NavLink></li>

                    <li><NavLink className='uppercase' to="/order/salad">
                        <FaSearch></FaSearch>
                        Shop</NavLink></li>

                    <li><NavLink className='uppercase' to="/order/contact">
                        <FaVoicemail></FaVoicemail>
                        Contact </NavLink></li>


                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

