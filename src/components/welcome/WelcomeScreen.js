import React from 'react';
import Paladin from '../../assets/Paladin_cut.png';
import Group from '../../assets/group_nacion.png'
import { Link } from 'react-router-dom';


export const WelcomeScreen = () => {

    return(

        <div className='__board_extend'>
            <header className='__row __header_title'>
                <h1 className='px-40'>
                    Hola ¡Bienvendio a los Paladines 2021!
                </h1>
                <hr></hr>
            </header>


            <section className='__row __section_heroes px-40'>
                <div className='__section_welcome'>
                    <img src={Paladin} height='600px' title='Paladin'></img>
                   <div className='__section_welcome_message' >

                    <p>Hola a continuación se te harán una serie de preguntas y tendrás que seleccionar a la persona que se adecue más según tu criterio (En realidad también puede ser al azar si no tienes idea en algunas preguntas)</p>
                    <img src={Group} height='80px' title='grupo Nacion' className='mt-50'></img>
                    <div className='__button_flex'>
                    <Link to={`/QuestionBoard/${1}`}>
                        <button className='__button_primary mt-20'>¡Empezar!</button>
                     </Link>
                   
                    </div>
                   </div>
                </div>
            </section>

            <footer className='__row __footer_welcome'>
               
            </footer>
        </div>
    )

}