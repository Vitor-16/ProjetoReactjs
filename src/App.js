import logo from './logo.svg';
import './App.css';
import pinguin from '../src/assets/pinguin.png'
import { useState } from 'react';

function App() {
  const [texto, setTexto] = useState('Aula de Retomada React');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>
          (texto)
        </h3>
        <button onClick={()=>setTexto('Título Alterado')}>
          ALTERAR TEXTO
        </button>
        <img src={pinguin} className="Imagem"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
