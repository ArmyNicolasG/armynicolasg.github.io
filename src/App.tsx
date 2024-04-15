import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import WelcomeMessage from './routes/Home/components/WelcomeMessage.tsx'
import Skills from './components/LanguageCarousel'
import NavBar from './components/NavBar'
import { Transition } from '@headlessui/react'
import './App.css'

function App() {

  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = (value) => setIsLoaded(value)

  return (
     <>
      <NavBar />
      <div className="mt-40 lg:mt-0 text-white h-screen">
        <WelcomeMessage
          loadHandler={ handleLoad }
        />
        {isLoaded && <p>handled!</p>}
        <Skills />
      </div>
     </>
  )
}

export default App
