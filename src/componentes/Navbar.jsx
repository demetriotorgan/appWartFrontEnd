import React from 'react'
import '../styles/Navbar.css'
import { useAuth } from '../context/authContext'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const {logOut} = useAuth();
  

  return (
    <div className='navbar'>
    <ul>
        <li><NavLink to='/dashboard' activeclassname='active'>Início</NavLink></li>
        <li><NavLink to='/jogadores' activeclassname='active'>Jogadores</NavLink></li>
        <li><NavLink to='/ranking' activeclassname='active'>Ranking</NavLink></li>
        <li><NavLink to='/jogos' activeclassname='active'>Jogos</NavLink></li>
        <li onClick={logOut}>Sair</li>
      </ul>
    </div>
  )
}

export default Navbar