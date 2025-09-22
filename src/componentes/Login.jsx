import React, { useState } from 'react'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';
import api from './util/api'
import { useAuth } from '../context/authContext';
import loading from '../assets/loading.gif'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro]= useState(null);
  
  const {login} = useAuth();
  const navigate = useNavigate();

  const handleLogin = async(e)=>{
    e.preventDefault();
    setCarregando(true);
    try {
      const res = await api.post('/login', {email, password});
      const token = res.data.token;
      login(token);
      navigate('/dashboard');
    } catch (error) {
      setErro('Verifique email e senha');
    }finally{
      setCarregando(false);
    }
  };
  return (
    <div className="login-container">
      <h2>Área Restrita</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="usuario">Usuário</label>
        <input 
        type="text" 
        id="usuario" 
        name="usuario" 
        placeholder="Digite seu codinome" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />

        <label htmlFor="senha">Senha</label>
        <input 
        type="password" 
        id="senha" 
        name="senha" 
        placeholder="Digite sua senha" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit" disabled={carregando}>
          {carregando ? <img src={loading} className='carregando-loading' /> : "Entrar"}
        </button>
      </form>
       {erro && <p className="erro">{erro}</p>}
    </div>
  )
}

export default Login
