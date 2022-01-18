import {  Route, Routes } from "react-router-dom"
import { AdminRoutes } from "./AdminRoutes"
import { AlreadyVote } from "./AlreadyVote"
import { GoodbyeScreen } from "./goodbye/GoodbyeScreen"
import { IsAdminRoute } from "./IsAdminRoute"
import { PageNotFound } from "./PageNotFound"
import { RoutesVoting } from "./RoutesVoting"

import { WelcomeVote } from "./WelcomeVote"

export const DashboardRoutes = () => {

    return(

        <>
      <Routes>
     
      <Route exact path="/results/*" element={
        <IsAdminRoute>
                            <AdminRoutes/>
                        </IsAdminRoute>
                    }>
      </Route>

      <Route exact path="/*" element={
        
        <WelcomeVote>
          <RoutesVoting/>
        </WelcomeVote>
      }>

      </Route>
        

      
      <Route exact path="/thanks" element={
        <AlreadyVote>
                            <GoodbyeScreen/>
                        </AlreadyVote>
                    }>
      </Route>

      <Route element={<PageNotFound/>}>
      </Route>
                      </Routes>
    
    </>
        )

}