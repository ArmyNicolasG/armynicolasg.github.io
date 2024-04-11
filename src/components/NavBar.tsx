import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaGithub } from "react-icons/fa";
import { Transition } from '@headlessui/react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Skills', href: '#' },
  { name: 'Certifications', href: '#' },
  { name: 'Skills', href: '#' },
]

export default function NavBar() {
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
      <header className="select-none bg-black fixed left-1/2 transform -translate-x-1/2 w-full z-50 top-0">
        <nav className="flex items-center justify-between p-6 lg:px-6" aria-label="Global">
                  <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only text-white">Nicolás Galeano Portfolio.</span>
              <img src="./media/navbarfoto.jpg" className="w-14 h-auto rounded-full"/>
             </a>
          </div>
                   <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-xl font-semibold leading-6 hover:text-green-400 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://github.com/ArmyNicolasG" className="hidden text-2xl font-semibold leading-6 text-green-400">
              GitHub Profile<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Nicolás Galeano Portfolio.</span>
                <img
                  className="w-16 h-auto rounded-full"
                  src="./media/navbarfoto.jpg"
                  alt="Nicolas G photo."
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            <Transition
                appear={ true }
                show={ mobileMenuOpen }
                enter="transition-all duration-300 ease"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-all duration-300 ease-in-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
            <div className="mt-6 flow-root">
              
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg font-semibold px-3 py-2 leading-7 text-white hover:bg-white hover:text-black"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="https://github.com/ArmyNicolasG"
                      className="-mx-3 text-l block text-4xl rounded-lg px-3 py-2.5 leading-7 text-white hover:text-black hover:bg-white"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              
            </div>
            </Transition>
          </Dialog.Panel>
        </Dialog>
      </header>
    ) 

}
