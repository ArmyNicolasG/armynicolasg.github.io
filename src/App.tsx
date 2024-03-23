import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
     <div className="bg-black text-white">
      <NavBar />
      <Outlet />
     </div>
  )
}

export default App
