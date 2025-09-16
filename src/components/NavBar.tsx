import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        {/* Glass wrapper */}
        <nav
          className="
            relative flex items-center justify-between rounded-2xl px-4 py-3
            backdrop-blur-xl bg-white/10 dark:bg-black/30
            border border-white/15 ring-1 ring-white/10
            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
          "
          aria-label="Global"
        >
          {/* Hairline inferior */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Brand */}
          <div className="flex lg:flex-1 items-center gap-3">
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <img
                src="./media/navbarfoto.jpg"
                alt="Nicolás G photo"
                className="h-10 w-10 rounded-full ring-1 ring-white/20"
              />
              <span className="hidden sm:block text-white/90 font-semibold">Nicolás Galeano</span>
            </a>
          </div>

          {/* Mobile button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-white/90 hover:bg-white/10"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-[15px] font-medium text-white/90 hover:text-white
                  transition-colors
                "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-2">
            <a
              href="https://github.com/ArmyNicolasG"
              target="_blank"
                rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-xl px-3 py-2
                text-white hover:text-black
                bg-white/10 hover:bg-white
                border border-white/15
                backdrop-blur-xl transition-all
              "
            >
              <FaGithub aria-hidden="true" className="text-xl" />
              <span className="text-sm font-semibold">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/nicolás-galeano-r-089a142a9"
              target="_blank"
                rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-xl px-3 py-2
                text-white hover:text-black
                bg-white/10 hover:bg-white
                border border-white/15
                backdrop-blur-xl transition-all
              "
            >
              <FaLinkedin aria-hidden="true" className="text-xl" />
              <span className="text-sm font-semibold">LinkedIn</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile panel (glass) */}
      <Transition show={mobileMenuOpen}>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
          <Dialog.Panel
            className="
              fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm
              bg-white/10 dark:bg-black/60 backdrop-blur-xl
              border-l border-white/15 ring-1 ring-white/10
              px-6 py-6
            "
          >
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
                <img className="h-10 w-10 rounded-full ring-1 ring-white/20" src="./media/navbarfoto.jpg" alt="Nicolás G photo" />
                <span className="text-white/90 font-semibold">Nicolás Galeano</span>
              </a>
              <button
                type="button"
                className="rounded-md p-2.5 text-white/90 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="
                        -mx-3 block rounded-lg px-3 py-2
                        text-base font-medium text-white/90 hover:text-black
                        hover:bg-white
                        transition-colors
                      "
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="https://github.com/ArmyNicolasG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      -mx-3 flex items-center gap-3 rounded-lg px-3 py-2
                      text-xl text-white/90 hover:text-black hover:bg-white
                      transition-colors
                    "
                  >
                    <FaGithub aria-hidden="true" />
                    <span className="text-base font-semibold">GitHub</span>
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="https://linkedin.com/in/nicolás-galeano-r-089a142a9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      -mx-3 flex items-center gap-3 rounded-lg px-3 py-2
                      text-xl text-white/90 hover:text-black hover:bg-white
                      transition-colors
                    "
                  >
                    <FaLinkedin aria-hidden="true" />
                    <span className="text-base font-semibold">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </header>
  )
}
