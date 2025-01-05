import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsrs from "../Pages/Dashboard/AllUsers/AllUsrs";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <Menu></Menu>,
            },
            {
                path: "/order/:category",
                element: <Order></Order>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/secret",
                element: <PrivateRoute> <Secret></Secret></PrivateRoute>,
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard>,</PrivateRoute>,
        children: [
            // normal user route
            {
                path: "cart",
                element: <Cart></Cart>
            },

            // admin related
            {
                path: "users",
                element:<AdminRoute> <AllUsrs></AllUsrs></AdminRoute>
            },
            {
                path: "manageItems",
                element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
            },
            {
                path: "addItems",
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: "updateItem/:id",
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>, 
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
        ]
    }
]);