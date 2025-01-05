
import { Navigate,  useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location =useLocation();
    if (loading) {
        return <p>loading...</p>
    }
    if (user && user?.email) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to={'/login'} replace></Navigate>
    );
};

export default PrivateRoute;