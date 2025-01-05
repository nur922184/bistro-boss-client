import React from 'react';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [ isAdmin, isAdminLoading] = useAdmin();

    const location =useLocation();
    if (loading || isAdminLoading ) {
        return <p className='text-center'>loading...</p>
    }
    if (user && isAdmin) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/" replace></Navigate>
    );
};

export default AdminRoute;