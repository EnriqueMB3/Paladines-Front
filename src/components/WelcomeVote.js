import React from 'react';
import {   Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const WelcomeVote = ({children}) => {

    const { hasVote } = useSelector(state => state.auth);
 

    return !!hasVote?   <Navigate to="/thanks"/> : children;
}

