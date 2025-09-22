import React from 'react'
import '../styles/Jogoscarrosel.css'
import soldado from '../assets/soldado.png'


const CardJogo = () => {
  return (
    <div className="painel-jogos">        
    <div className='proximos-jogos'>
      <h2>Próximos Jogos</h2> 
      <small>Faltam: 12 dias</small>     
      </div>
      <div className='cards'>
        <div className='card'>
            <div className='titulo-card'>
            <img src={soldado}/>
           <h3>Missão:</h3>           
           </div>
           <ul>
                <li>Data: </li>
                <li>Horário: </li>
                <li>Premio: </li>
           </ul>
        </div>        
      </div>
    </div>
  )
}

export default CardJogo
