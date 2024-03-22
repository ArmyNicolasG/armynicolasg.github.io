import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
    <nav className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 flex-1">
        <div className="flex items-center flex-1">
            <h2>Nicolás Galeano</h2>
        </div>
        <div>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="https://github.com/ArmyNicolasG">
                    <li>Github</li>
                </Link>  
            </ul>
        </div>
    </nav>
  ) 
}