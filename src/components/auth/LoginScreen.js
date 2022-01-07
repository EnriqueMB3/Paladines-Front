import React from 'react';
import Title from '../../assets/title.png';
import Group from '../../assets/group_nacion.png'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
// import Swal from "sweetalert2";

export const LoginScreen = () => {

    const [formLoginValues, handleLoginInputChange] = useForm({
		username: '',
		password: '',
	});


    const {username, password} = formLoginValues;
    
    const dispatch = useDispatch();
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        dispatch(startLogin(username, password));
    }

    return(
        <div className=' __login_container m-5'>
            <img  src={Title} title='Title' height={90} className='ml-10 mr-10' />
            <img  src={Group} title='Grupo' className='mt-10' height={70}/>
            
<form onSubmit={handleOnSubmit}>

            <div className='__login_square'>
                <div className='__login_form'>
                    <div className='__login_form_row'>
                        <label className='__label_form'>USUARIO</label>
                        <input className='__input_form mt-10' type='text' name="username"
								value={username} onChange={ handleLoginInputChange}/>
                    </div>
                    <div className='__login_form_row mt-15'>
                        <label className='__label_form'>PASSWORD</label> 
                        <input className='__input_form mt-10' type='password' name="password"
								value={password}  onChange={ handleLoginInputChange}/>
                    </div>
                    <div className='__login_form_row mt-25'>
                        <input className='__button_primary' type='submit' value='Entrar' />
                    </div>
                </div>
            </div>
</form>
        </div>
    )

}