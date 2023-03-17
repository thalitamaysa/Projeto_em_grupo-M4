import { useState } from 'react'
import './App.css'
import Background from './components/Background/Background'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path=''></Route>
      </Routes>
      </Router>
    </div>
  )
}
export default App
