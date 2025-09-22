import './App.css'
import Banner from './componentes/Banner'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './componentes/ProtectedRoute'
import ProtectedLayout from './componentes/ProtectedLayout'
import Jogos from './componentes/Paginas/Jogos'
import Jogadores from './componentes/Paginas/Jogadores'
import PainelRanking from './componentes/Paginas/PainelRanking'
import Login from './componentes/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './componentes/Dashboard'

function App() {
  return (
    <div className="app-layout">
      <header className="app-header"><Banner /></header>
      <main className="app-main">        
        <AuthProvider>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route element={
              <ProtectedRoute>
                <ProtectedLayout/>
              </ProtectedRoute>
            }>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/jogos' element={<Jogos/>}/>
              <Route path='/jogadores' element={<Jogadores />}/>
              <Route path='/ranking' element={<PainelRanking/>}/>              
            </Route>
          </Routes>
          </BrowserRouter>
        </AuthProvider>
      </main>
      <footer className="app-footer">© 2025 War Game</footer>
    </div>
  )
}

export default App
