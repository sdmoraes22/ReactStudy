import React from "react";
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default () =>
    <div id="App">
        <h1>Fundamentos React (Arrow)</h1>
        <Fragmento />
        <ComParametro
            titulo="Situação do aluno"
            aluno="Pedro"
            nota={9.3} />
        <Primeiro />
    </div>