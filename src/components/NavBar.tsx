import { Link } from 'react-router-dom'

export default function NavBar() {

    const mobile = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
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
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>        
                </Link> 
            </ul>
        </div>
    </>

    return (
    <nav>
        <div  className="h-10vh flex justify-between z-50 text-white bg-black lg:py-5 px-20 py-4 flex-1">
            <div className="flex items-center flex-1">
                    <span className="text-3x1 font-bold">Nicolás Galeano</span>
            </div>
            <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <Link to="/">
                            <li className="hover:text-teal-300 transition border-b-2 border-slate cursor-pointer">Home</li>
                        </Link>
                        <Link to="/projects">
                            <li className="hover:text-teal-300 transition border-b-2 border-slate cursor-pointer">Projects</li>        
                        </Link>
                        <Link to="/skills">
                            <li className="hover:text-teal-300 transition border-b-2 border-slate cursor-pointer">Skills</li>
                        </Link>
                        <Link to="/certifications">
                            <li className="hover:text-teal-300 transition border-b-2 border-slate cursor-pointer">Certifications</li>
                        </Link>
                        <Link to="https://github.com/ArmyNicolasG">
                            <li className="hover:text-teal-300 transition border-b-2 border-slate cursor-pointer">Contact</li>        
                        </Link>
                    </ul>
                </div>   
            </div>
        </div>
    </nav>
  ) 
}