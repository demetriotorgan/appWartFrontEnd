import React from 'react'
import taifeiro from '../assets/taifeiropng.png'
import '../styles/Patente.css'

const Patente = () => {
  return (
    <div className='patente'>
        <div className='patente-atual'>
        <h3>Sua Patente atual</h3>
        <img src={taifeiro} alt="" />        
        </div>
        <div className='dados-patente'>
        <ul>
            <li>Codinome: </li>
            <li>Total de Pontos: </li>
            <li>Total de Jogos: </li>
            <li>Total de Vitórias: </li>
            <li>Pontos para próxima patente: </li>
        </ul>
        </div>
    </div>
  )
}

export default Patente