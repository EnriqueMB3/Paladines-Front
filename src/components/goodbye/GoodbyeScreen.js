import React from 'react';
import Group from '../../assets/group_nacion.png'


export const GoodbyeScreen = () => {

    return(

        <div className='__login_container'>
          
                <h1 className='px-20 align-center'>
                    Gracias. Ya has completado la encuesta 
                </h1>
           
                <img src={Group} height='60px' title='grupo Nacion' className='mt-50' alt="group"></img>




           
        </div>
    )

}