/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext)

    const location = useLocation()

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate> ;
};

export default PrivateRoutes;