import { useState, useEffect } from 'react'
import { FaGithub } from "react-icons/fa";
import NavBar from '../../../components/NavBar'
import { Transition } from '@headlessui/react'

export default function WelcomeMessage () {

  const [beam, setBeam] = useState(" ")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    const newTitle = '>  console.log("It\'s me.");';
    const newDesc = " Full-Stack Developer who loves coding and learning how computers and electronics work under the hood.";
  
    let indexTitle = 0;
    const titleInterval = setInterval(() => {
      if (indexTitle < newTitle.length - 1) {
        if(indexTitle == newTitle.length - 2) setTitle(newTitle)
        else setTitle(prevTitle => prevTitle.replace(/.$/, '') + `${newTitle[indexTitle]}|`)
        indexTitle++;
      } else {
        clearInterval(titleInterval);
  
        let indexDesc = 0;
        const descInterval = setInterval(() => {
          if (indexDesc < newDesc.length - 1) {
            setDesc(prevDesc => `${prevDesc}${newDesc[indexDesc]}`);
            indexDesc++;
          } else {
            clearInterval(descInterval);
            setShowInfo(true)
            const beamInterval = setInterval(() => {
                setBeam(prevBeam => (prevBeam === "|" ? " " : "|"));
              }, 500);
            return () => clearInterval(beamInterval);
          }
        }, 7);
        return () => clearInterval(descInterval);
      }
    }, 50);
    return () => clearInterval(titleInterval);
  }, []);



  const infoContent = 
    <>
        <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
            href="https://github.com/ArmyNicolasG/"
            className="transition-all ease duration-200 rounded-md px-3.5 py-2.5 text-5xl font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
            <span className="sr-only">Github Profile</span><FaGithub />
        </a>
        
        </div>
        <button className="mt-12 text-xl text-white font-semibold hover:scale-105 transition-all ease-in-out duration-200">
            More about me <span aria-hidden="true">↓</span>
        </button>
    </>;

  return (
    <div> 
        {
          showInfo &&
          <Transition
            appear={true}
            show={ showInfo }
            enter="transition-all duration-700 ease-in-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <NavBar/>
          </Transition>        
          }
      <div className="relative select-none isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-24 lg:py-56">
          <div className="text-center">
            <h1 className="break-normal text-2xl font-bold tracking-tight text-green-400 sm:text-5xl">
             { title }{ beam }
            </h1>
            <p className="mt-6 text-lg leading-8 text-white font-semibold">
              { desc }
            </p>
            
            { showInfo &&
            <Transition
              appear={ true }
              show={ showInfo }
              enter="transition-all duration-700 ease-in-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              { infoContent } 
            </Transition>
            }

          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
      </div>
    </div>
  )
}
