import React from 'react';
import { Route, Routes } from "react-router-dom"
import { QuestionBoard } from "./questionBoard/QuestionBoard"
import { WelcomeScreen } from "./welcome/WelcomeScreen"

export const RoutesVoting = () => {

   return(
       <>
       <Routes>

          <Route path="/" element={ <WelcomeScreen /> } />
        <Route path="/welcome" element={ <WelcomeScreen /> } />
        <Route path="/questionBoard/:categoryId" element={<QuestionBoard/>}/>
       </Routes>
       
       </>
   )
}

