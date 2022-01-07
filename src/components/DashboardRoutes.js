import {  Route, Routes } from "react-router-dom"
import { AlreadyVote } from "./AlreadyVote"
import { GoodbyeScreen } from "./goodbye/GoodbyeScreen"
import { RoutesVoting } from "./RoutesVoting"

import { WelcomeVote } from "./WelcomeVote"

export const DashboardRoutes = () => {

    return(

        <>
      <Routes>
     

      <Route path="/*" element={
        
        <WelcomeVote>
          <RoutesVoting/>
        </WelcomeVote>
      }>

      </Route>
        


      
      <Route path="/thanks" element={
        <AlreadyVote>
                            <GoodbyeScreen/>
                        </AlreadyVote>
                    }>
      </Route>
                      </Routes>
    
    </>
        )

}