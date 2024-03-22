import { createHashRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './routes/Home'
import './App.css'


const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  }
])

function App() {
  return (
     <>
      <NavBar />
      <RouterProvider router={ router } />
     </>
  )
}

export default App
