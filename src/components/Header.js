import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full flex justify-between px-5 py-2 bg-secondary shadow-md z-50 backdrop-blur-sm bg-opacity-90">
            <a href="#" className="font-bold text-black">
                S Nitisri
            </a>
            <nav className="hidden md:block">
                <ul className="flex space-x-6 text-black">
                    <li>
                        <a href="#home" className="hover:text-gray-700 transition duration-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-gray-700 transition duration-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-gray-700 transition duration-300">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#resume" className="hover:text-gray-700 transition duration-300">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-gray-700 transition duration-300">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            {toggleMenu && (
                <nav className="block md:hidden absolute top-12 right-5 bg-secondary rounded-lg shadow-lg p-5 z-50" onClick={() => setToggleMenu(false)}>
                    <ul className="flex flex-col space-y-4 text-black">
                        <li>
                            <a href="#home" className="hover:text-gray-700 transition duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-gray-700 transition duration-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-gray-700 transition duration-300">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#resume" className="hover:text-gray-700 transition duration-300">
                                Resume
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-700 transition duration-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
            <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
                <Bars3Icon className="text-black h-8 w-8" />
            </button>
        </header>
    );
}
