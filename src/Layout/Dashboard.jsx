import React from 'react';
import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaThList, FaUser, FaUtensils, FaVoicemail } from 'react-icons/fa';
import { FaAlignRight, FaR } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart()

    const [isAdmin] = useAdmin();

    // ToDo : get isadimin

    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu">

                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItems"> <FaUtensils></FaUtensils> Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItems"><FaThList></FaThList> Manage Items </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings"><FaBook></FaBook> Manage Bookings </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users"><FaUser></FaUser> All Users</NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart ({cart.length}) </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review"><FaR></FaR> Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings"><FaList></FaList> My Bookings </NavLink>
                                </li>
                            </>
                    }

                    {/* shared nav link */}

                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"><FaAlignRight></FaAlignRight> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact"><FaEnvelope></FaEnvelope> Contact</NavLink>
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