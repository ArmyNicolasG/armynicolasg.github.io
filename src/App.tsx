import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
     <>
      <div className="mt-20 sm:mt-0 text-white h-screen">
        <Outlet />
      </div>
     </>
  )
}

export default App
