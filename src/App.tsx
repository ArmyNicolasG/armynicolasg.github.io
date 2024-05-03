import WelcomeMessage from './components/WelcomeMessage.tsx'
import Skills from './components/Skills.tsx'
import NavBar from './components/NavBar.tsx';
import './App.css'
import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react'

function App() {

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {

    setTimeout(() => {
      setIsLoaded(true)
    }, 2000)

  }, [])

  return (
     <>
      <div className="mt-40 lg:mt-0 text-white h-screen mb-40">

      { isLoaded &&
          <Transition
            appear={true}
            show={ isLoaded }
            enter="transition-all duration-700 ease-in-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <NavBar/>
          </Transition>        
      }

        <WelcomeMessage />
      { isLoaded &&
          <Transition
            appear={true}
            show={ isLoaded }
            enter="transition-all duration-700 ease-in-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <Skills />
          </Transition>        
      }

      </div>
     </>
  )
}

export default App
