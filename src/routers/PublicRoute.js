import React from 'react';

import {  Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const PublicRoute = ({children}) => {

    const { uid } = useSelector(state => state.auth);
    

    return !!uid?  <Navigate to="/"/>: children
}

