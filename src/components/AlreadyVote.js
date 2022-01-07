import React from 'react';

import {   Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const AlreadyVote = ({children}) => {

    const { hasVote } = useSelector(state => state.auth);
    

    return !!hasVote?  children : <Navigate to="/welcome"/> ;
}

