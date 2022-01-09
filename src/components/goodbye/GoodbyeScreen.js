import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  startLogout } from '../../actions/auth';
import Group from '../../assets/group_nacion.png'


export const GoodbyeScreen = () => {

    const { uid } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const finish =() => {
        dispatch(startLogout(uid));
    }


    return(

        <div className='__login_container'>
          
                <h1 className='px-20 align-center'>
                    Gracias. Ya has completado la encuesta 
                </h1>
           
                <img src={Group} height='60px' title='grupo Nacion' className='mt-30 mb-20' alt="group"></img>

            <div className='__buttons_area '>

                <button className={`__button_primary` } onClick={finish}> Salir</button>
            </div>


           
        </div>
    )

}