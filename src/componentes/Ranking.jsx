import React from 'react'
import '../styles/Ranking.css'
import patente from '../assets/taifeiropng.png'

const Ranking = () => {
  return (
    <div className='painel-ranking'>
      <h3>Ranking de Jogadores</h3>
      <ul>
        <li>
          <div className='jogador'>
            <img src={patente} alt="Patente" />
            <span className="nome">Demetrio Torgan</span>
            <span className="pontos">100 pts</span>
          </div>
        </li>
        <li>
          <div className='jogador'>
            <img src={patente} alt="Patente" />
            <span className="nome">Matheus</span>
            <span className="pontos">290 pts</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Ranking
