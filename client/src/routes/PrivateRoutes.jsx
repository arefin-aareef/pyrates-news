/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation()

    if(loading){
        return <Spinner animation="border" variant="primary" />

    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate> ;
};

export default PrivateRoutes;