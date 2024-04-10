import { useState, useEffect } from 'react'

export default function Home () {

  const [beam, setBeam] = useState(" ")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  useEffect(() => {
    const newTitle = 'c onsole.log("It\'s me.")';
    const newDesc = " I am a Full-Stack Developer who loves coding and learning how computers and electronics work under the hood.";
  
    let indexTitle = 0;
    const titleInterval = setInterval(() => {
      if (indexTitle < newTitle.length - 1) {
        setTitle(prevTitle => `${prevTitle}${newTitle[indexTitle]}`);
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
          }
        }, 38);
  
        // Clear the descInterval when unmounting
        return () => clearInterval(descInterval);
      }
    }, 150);
  
    // Clear the titleInterval when unmounting
    return () => clearInterval(titleInterval);
  }, []);

  useEffect(() => {
    // Blinking Beam
    const beamInterval = setInterval(() => {
      setBeam(prevBeam => (prevBeam === " " ? "|" : " "));
    }, 700);

    return () => clearInterval(beamInterval);
  }, []);

  return (
    <div>
      <div className="relative bg-black isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-green-400 sm:text-6xl">
             { title }{ beam }
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              { desc }
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-green-400">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
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
