import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Inicio from './pages/Inicio/Inicio'
import Musica from './pages/Musica/Musica'
import Filme from './pages/Filme/Filme'
import Serie from './pages/Serie/Serie'
import Cadastro from './pages/Cadastro/Cadastro'
import PlaylistMusic from './pages/PlaylistMusica/PlaylistMusic'
import 'bootstrap/dist/css/bootstrap.css';


export default function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/login' element={<Login />} />
          <Route path='/musica' element={<Musica />} />
          <Route path='/filme' element={<Filme />} />
          <Route path='/serie' element={<Serie />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/playlistMusic' element={<PlaylistMusic />} />
        </Routes>
      </Router>
    </div>
  )
}
