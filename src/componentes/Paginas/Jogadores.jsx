import React, { useState } from 'react'
import './Jogadores.css'

const Jogadores = () => {
  const [nome, setNome] = useState('');
  const [codinome, setCodinome] = useState('');

  const handleForm = (e)=>{
    e.preventDefault();

  }

  return (
    <div className="form-novo-jogador">
      <h2>Novo Recruta</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="nome">Nome</label>
        <input 
        type="text" 
        id="nome" 
        name="nome" 
        placeholder="Digite seu nome" 
        value={nome}
        onChange={(e)=>setNome(e.target.value)}
        />

        <label htmlFor="codinome">Codinome</label>
        <input 
        type="text" 
        id="codinome" 
        name="codinome" 
        placeholder="Escolha seu codinome" 
        value={codinome}
        onChange={(e)=>setCodinome(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}

export default Jogadores
