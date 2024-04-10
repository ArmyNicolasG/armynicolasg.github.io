import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
     <div className="h-screen bg-gradient-to-b from-black to-gray-800">
      <NavBar />
      <Outlet />
     </div>
  )
}

export default App
