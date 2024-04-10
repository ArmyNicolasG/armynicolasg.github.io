import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
     <div className="from-purple-600 to-blue-600">
      <NavBar />
      <Outlet />
     </div>
  )
}

export default App
