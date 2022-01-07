import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { DashboardRoutes } from "../components/DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch])

    if (checking) {
        return (<h5 >Cargando...</h5>)
    }

    return (
        <BrowserRouter>
     
                <Routes history={hashHistory}>

                    <Route path='/login' element={
                        <PublicRoute>
                            <LoginScreen/>
                        </PublicRoute>
                    }
                    />
                    <Route path="/*" element={
                        <PrivateRoute>
                            <DashboardRoutes/>
                        </PrivateRoute>
                    }>
                    </Route>
              
                
                </Routes>
     
      </BrowserRouter>
    )
}
