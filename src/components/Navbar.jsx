import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
	const [ isMenuOpen, setIsMenuOpen ] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="sticky top-0 z-10 bg-white backdrop-blur-1xl bg-opacity-70 backdrop-filter firefox:bg-opacity-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between font-playfair h-20">
					{/* Logo */}
					<span className="text-2xl">Catur's Portfolio</span>

					{/* Desktop Menu */}
					<div className="hidden md:flex space-x-14">
						<a href="#" className="relative group hover:text-black transition-colors duration-300">
							Home
							<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
						</a>
						<a href="#/about" className="relative group hover:text-black transition-colors duration-300">
							About
							<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
						</a>
						<a href="#/projects" className="relative group hover:text-black transition-colors duration-300">
							Projects
							<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
						</a>
						<a
							href="mailto:caturputraramadani@gmail.com"
							className="relative group hover:text-black transition-all duration-300"
						>
							Contact
							<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
						</a>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden ">
						<button onClick={toggleMenu} className="hover:text-black focus:outline-none focus:text-black">
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="absolute px-4 pt-2 pb-4 space-y-3 font-playfair top-20 left-0 right-0 fixed backdrop-blur-md bg-white bg-opacity-90">
						<a
							href="#"
							className="block py-2 relative group hover:text-black transition-colors duration-300"
							onClick={toggleMenu}
						>
							<span className="relative z-10">Home</span>
							<span className="absolute left-0 bottom-0 w-full h-0.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</a>
						<a
							href="#/about"
							className="block py-2 relative group hover:text-black transition-colors duration-300"
							onClick={toggleMenu}
						>
							<span className="relative z-10">About</span>
							<span className="absolute left-0 bottom-0 w-full h-0.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</a>
						<a
							href="#"
							className="block py-2 relative group hover:text-black transition-colors duration-300"
							onClick={toggleMenu}
						>
							<span className="relative z-10">Projects</span>
							<span className="absolute left-0 bottom-0 w-full h-0.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</a>
						<a
							href="#"
							className="block py-2 relative group hover:text-black transition-colors duration-300"
							onClick={toggleMenu}
						>
							<span className="relative z-10">Contact</span>
							<span className="absolute left-0 bottom-0 w-full h-0.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</a>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
