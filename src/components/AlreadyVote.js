import React from 'react';

import {   Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const AlreadyVote = ({children}) => {

    const { hasVote, admin } = useSelector(state => state.auth);
    


    return !!hasVote && !!admin? <Navigate to="/welcome"/> : children; 
}

