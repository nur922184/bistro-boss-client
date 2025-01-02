import React from 'react';
import { FaCalendar, FaHome, FaList, FaShoppingCart } from 'react-icons/fa';
import { FaR } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu">

                    <li>
                        <NavLink to="dashboard/userHome"><FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart ({cart.length}) </NavLink>
                    </li>
                    <li>
                        <NavLink to="dashboard/review"><FaR></FaR> Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="dashboard/bookings"><FaList></FaList> My Bookings </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome> Home</NavLink>
                    </li>
                </ul>

            </div>
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;