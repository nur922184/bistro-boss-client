import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { BsCartPlusFill } from 'react-icons/bs';
import useCart from '../../../Hooks/useCart';

const Navbar = () => {

    const { user, Logout } = useContext(AuthContext)
    const [cart] =useCart();

    const handleLogOut = () => {
        Logout()
            .then(() => {
                console.log('Logged out successfully');
            })
            .catch(error => console.error(error));
    }

    const NavOptions = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Oue Menu</NavLink></li>
        <li><NavLink to="/order/salad">Order food</NavLink></li>
        <li><NavLink to="/secret">Secret</NavLink></li>
        <li><NavLink to="/">
            <button className="btn">
                <BsCartPlusFill />
                <div className="badge badge-secondary">+ {cart.length}</div>
            </button>
        </NavLink></li>

        {
            user ? <>
                <button onClick={handleLogOut} className='btn btn-ghost '>Logout</button>
                {/* <span>{user?.displayName}</span> */}
            </> : <>
                <li><NavLink to="login">login now</NavLink></li></>
        }
    </>

    return (
        <div>
            <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-30 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content items-center bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {NavOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;