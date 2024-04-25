import WelcomeMessage from './routes/Home/components/WelcomeMessage.tsx'
import Skills from './components/LanguageCarousel'
import './App.css'
// import { useState } from 'react';

function App() {

  // const [isLoaded, setIsLoaded] = useState(false)

  return (
     <>
      <div className="mt-40 lg:mt-0 text-white h-screen">
        <WelcomeMessage />
        <Skills />
      </div>
     </>
  )
}

export default App
