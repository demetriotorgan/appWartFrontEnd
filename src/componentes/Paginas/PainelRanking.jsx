import React from 'react'
import './PainelRanking.css'
import taifeiropng from '../../assets/taifeiropng.png'

const PainelRanking = () => {
  return (
    <div className='painel-ranking'>
      <h2>Ranking</h2>
      <div className='card-resultado'>
      <ul>
        <li>Posição: 1</li>
        <li>Patente: <img src={taifeiropng} /></li>
        <li>Codinome:</li>
        <li>Partidas:</li>
        <li>Vitórias: </li>
        <li>Detorras:</li>
        <li>Pontos: </li>
      </ul>            
      </div>
      <div className='card-resultado'>
      <ul>
        <li>Posição: 1</li>
        <li>Patente: <img src={taifeiropng} /></li>
        <li>Codinome:</li>
        <li>Partidas:</li>
        <li>Vitórias: </li>
        <li>Detorras:</li>
        <li>Pontos: </li>
      </ul>            
      </div>
      
    </div>
  )
}

export default PainelRanking