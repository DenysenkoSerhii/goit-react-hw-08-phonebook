import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { currents } from '../../redux/auth/auth-operations';

const AuthLayout = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currents())
    }, [dispatch]);

    return (
        <>{children}</>
    )
}

export default AuthLayout;