import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {  endStartLoading, startLogout } from '../../actions/auth';
import { categoryStartLoading,  heroesStartLoading  } from '../../actions/question';
import { QuestionToken } from './QuestionToken';


export const QuestionBoard = () => {


    const {categoryId} = useParams();
 
    const { uid } = useSelector(state => state.auth);

    const  navigate = useNavigate(); 

    const dispatch = useDispatch();
    useEffect(() => {  dispatch(categoryStartLoading(categoryId, uid)) }, [categoryId, uid,dispatch])
    
    useEffect(() => {
        dispatch(heroesStartLoading());
    }, [dispatch])

    const {heroes, category, activeHero,active } = useSelector(state => state.question);

   

    const handleNextQuestion = () => {
        if (Number(categoryId)<23) {
            navigate(`/QuestionBoard/${Number(categoryId) + 1}`)
        }
    }
    const handlePreviousQuestion = () => {
        if (Number(categoryId)>1) {
            navigate(`/QuestionBoard/${Number(categoryId) - 1}`)
        }
    }

    const finish =() => {
        dispatch(endStartLoading(uid));
    }


  
  
    return (
        <div className='__board_extend'>
        <header className='__row __header_title'>
            <div  className='pt-30 pl-20 pb-20'>
            <h1>
           { (!!category && !! category.nameCategory) ? category.nameCategory : ''
                }
            </h1>
            <p className='pt-10'> { (!!category && !! category.Description) ? category.Description : '' }</p>
            </div>
            <hr></hr>
        </header>


        <section className='__row __section_heroes '>
            <div className='__board_heroes'>
            {
                heroes.map(hero=> <QuestionToken  key={hero._id} active={ activeHero? activeHero._id === hero._id : false } heroe={hero}></QuestionToken> )
            }
            </div>
        </section>
        <footer className='__footer_heroes'>
        <div className={`__buttons_area ` + (((Number(categoryId)>1) && (Number(categoryId)<23)) ? ' between': '')}>
            {
                (Number(categoryId)>1 && Number(categoryId)!==23 )&&
            <button className='__button_primary' onClick={handlePreviousQuestion}> Anterior</button>
            }
            {
                (Number(categoryId)!==23)&&
            <button  disabled={!active}  className={`__button_primary `} onClick={handleNextQuestion}> Siguiente</button>

            }
         
       {
            (Number(categoryId)===23)&&
            <button  disabled={!active} className={`__button_primary` } onClick={finish}> Finalizar</button>
       }
            
        </div>
           
        </footer>
    </div>
    )
}
