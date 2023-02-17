import React,{useState} from 'react';
import './App.css';
import {Link, useNavigate} from 'react-router-dom';

const TelaInicial = ()=>{
    const [text, setText] = useState('Texto Inicial');
    return(
        <div className={"App"}>
            <h3>Tela Inicial</h3>
            <p>Aula de gerenciamento de estado</p>
            <p>{text}</p>
            <button onClick={()=>{setText('texto alterado')}} >
                CLIQUE AQUI
            </button>
        </div>
    )
};

export default TelaInicial;