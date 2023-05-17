import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'


createRoot(document.getElementById('root')).render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do aluno" 
            aluno="Pedro"
            nota={9.3} />
        <ComParametro 
            titulo="Situação do aluno" 
            aluno="Maria"
            nota={9.3} />
        <ComParametro 
            titulo="Situação do aluno" 
            aluno="Fabio"
            nota={6} />
    </div> 
)