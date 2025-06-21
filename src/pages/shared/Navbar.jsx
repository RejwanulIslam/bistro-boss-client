import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { authContex } from '../../contex/authprovider/Authprovider'

export default function Navbar() {
    const {passwordSignOut,user}=useContext(authContex)
    
    const navOption=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/menu'>Our Menu</NavLink></li>
    <li><NavLink to='/order/salad'>Order Food</NavLink></li>
    
    {
        user?<li><button onClick={()=>passwordSignOut()}>SignOut</button></li>:
        <li><NavLink to='/login'>Login</NavLink></li>
    }
    <li><NavLink to='/signup'>signup</NavLink></li>

    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    )
}
