import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { CiMenuBurger } from 'react-icons/ci'



export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false)
 
    const handleClick = () => setShowMenu(!showMenu)

    const mobile = <>
        <div className="lg:hidden block absolute top-14 w-full left-0 right-0 bg-black">
            <ul className="text-center text-xl p-20">
                <Link to="/">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
                </Link>
                <Link to="/projects">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>        
                </Link>
                <Link to="/skills">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Skills</li>
                </Link>
                <Link to="/certifications">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Certifications</li>
                </Link>
                <Link to="https://github.com/ArmyNicolasG">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">GitHub Profile</li>        
                </Link> 
            </ul>
        </div>
    </>

    return (
    <nav>
        <div  className="h-10vh flex justify-between z-50 text-white bg-black lg:py-5 px-20 py-4 flex-1">
            <div className="flex items-center flex-1">
                    <h1 className="font-size-20 font-bold">Nicolás Galeano</h1>
            </div>
            <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <Link to="/">
                            <li className="hover:text-teal-300 transition border-b-2 border-white hover:border-teal-300 cursor-pointer">Home</li>
                        </Link>
                        <Link to="/projects">
                            <li className="hover:text-teal-300 transition border-b-2 border-white hover:border-teal-300 cursor-pointer">Projects</li>        
                        </Link>
                        <Link to="/skills">
                            <li className="hover:text-teal-300 transition border-b-2 border-white hover:border-teal-300 cursor-pointer">Skills</li>
                        </Link>
                        <Link to="/certifications">
                            <li className="hover:text-teal-300 transition border-b-2 border-white hover:border-teal-300 cursor-pointer">Certifications</li>
                        </Link>
                        <Link to="https://github.com/ArmyNicolasG">
                            <li className="hover:text-teal-300 transition border-b-2 border-white hover:border-teal-300 cursor-pointer">GitHub Profile</li>        
                        </Link>
                    </ul>
                </div>   
            </div>

            <div>
                { showMenu && mobile }
            </div>
            <button className="block sm:hidden transition" onClick={ handleClick }>
                { showMenu ? <FaTimes /> : <CiMenuBurger />}
            </button>

        </div>
    </nav>
  ) 
}