import { useState, useEffect } from 'react'
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Transition } from '@headlessui/react'

export default function WelcomeMessage () {
  const NEW_DESC = " Full-Stack Developer with .NET, Node.js, React, and AWS/Linux. Skilled in REST APIs, architecture, DevOps, and fluent English for global teamwork.";
  const NEW_TITLE = '>  console.log("It\'s me.");';

  const [beam, setBeam] = useState(" ");
  const [title, setTitle] = useState("");
  const [desc] = useState(NEW_DESC); 
  const [showInfo, setShowInfo] = useState(false);

  
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < NEW_TITLE.length - 1) {
        
        setTitle(prev => prev.replace(/\|?$/, '') + NEW_TITLE[i] + '|');
        i++;
      } else {
        
        setTitle(NEW_TITLE);
        setShowInfo(true);
        clearInterval(id);
      }
    }, 50);

    return () => clearInterval(id);
  }, [NEW_TITLE]);

  useEffect(() => {
    if (!showInfo) return;
    const blink = setInterval(() => {
      setBeam(prev => (prev === "|" ? " " : "|"));
    }, 500);
    return () => clearInterval(blink);
  }, [showInfo]);

  const infoContent =
    <>
      <div className="my-10 flex items-center justify-center gap-x-6">
        <a
          href="https://github.com/ArmyNicolasG/"
          target="_blank"
            rel="noopener noreferrer"
          className="transition-all ease duration-200 rounded-md px-3.5 py-2.5 text-5xl font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
          <span className="sr-only">Github Profile</span><FaGithub />
        </a>

        <a
            href="mailto:megabyte.code.official@gmail.com"
            className="transition-all ease duration-200 rounded-md px-3.5 py-2.5 text-5xl font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            target="_top"
        >
            <span className="sr-only">Email</span><FaEnvelope />
        </a>

        <a
            href="https://linkedin.com/in/nicolás-galeano-r-089a142a9"
            className="transition-all ease duration-200 rounded-md px-3.5 py-2.5 text-5xl font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            target="_top"
        >
            <span className="sr-only">Linked-in</span><FaLinkedin />
        </a>
      </div>
      <a href="#skills" className="text-xl text-white font-semibold hover:scale-105 transition-all ease-in-out duration-200">
        More about me <span aria-hidden="true">↓</span>
      </a>
    </>;

  return (
    <div>
      <div className="relative select-none isolate px-6 pt-18 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true" />
        <div className="mx-auto max-w-2xl py-24 sm:py-24 lg:py-56">
          <div className="text-center">
            <h1 className="break-normal text-2xl font-bold tracking-tight text-green-400 sm:text-5xl">
              {title}{beam}
            </h1>

            {showInfo &&
              <Transition
                appear={true}
                show={showInfo}
                enter="transition-all duration-700 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
              >
                <p className="mt-6 text-lg leading-8 text-white font-semibold">
                  {desc}
                </p>
                {infoContent}
              </Transition>
            }
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
