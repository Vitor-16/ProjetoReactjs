import React from 'react';
import './App.css';
import {Link, useNavigate} from 'react-router-dom';

const Login = ()=>{

    let navigate = useNavigate();
    const entrada = ()=>{
        navigate("/initial");
        window.location.reload();
    };
    return(
        <div className={"App"}>
            <h3>Tela de Login</h3>
            <input type ={'text'}
                placeholder={'login'}/>
            <input type ={'text'}
                placeholder={'senha'}/>
            <input type ={'button'}
                placeholder={'entrar'}/>
        </div>
    )
};

export default Login;
