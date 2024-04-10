import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
     <>
      <div className="mt-20 text-white h-screen bg-gradient-to-b from-black to-gray-700">
        <Outlet />
      </div>
     </>
  )
}

export default App
