import React, { useState, useRef, useEffect } from 'react';
import '@fontsource/playfair-display';
import '@fontsource/poppins';
import PhotoProfile from '../assets/Group.png';
import PhotoCard from '../assets/background.jpg';
import ilustration from '../assets/graphic.jpg';
import { motion } from 'framer-motion';

// gambar myskill
import Figmaicon from '../assets/techstack/figma.png';
import Reacticon from '../assets/techstack/react.png';
import tailwindicon from '../assets/techstack/tailwind.png';
import vueicon from '../assets/techstack/vue.png';
import nexticon from '../assets/techstack/next.png';
import laravelicon from '../assets/techstack/laravel.png';
import framericon from '../assets/techstack/framer.png';
import bootstrapicon from '../assets/techstack/bootstrap.png';
import wpicon from '../assets/techstack/wordpress.png';
import jsicon from '../assets/techstack/js.png';
import tsicon from '../assets/techstack/ts.png';
import githubicon from '../assets/techstack/github.png';

import '../App.css';

const About = () => {
	const [ cursorPosition, setCursorPosition ] = useState({ x: 0, y: 0 });
	const [ cursorVisible, setCursorVisible ] = useState(false);
	const [ cursorContent, setCursorContent ] = useState('');
	const [ currentIndex, setCurrentIndex ] = useState(0);
	const desktopCarouselRef = useRef(null);
	const techStackImages = [
		{ src: Reacticon, alt: 'React', name: 'React.js' },
		{ src: tailwindicon, alt: 'Tailwind CSS', name: 'Tailwind CSS' },
		{ src: vueicon, alt: 'Vue.js', name: 'Vue.js' },
		{ src: nexticon, alt: 'Next.js', name: 'Next.js' },
		{ src: laravelicon, alt: 'Laravel', name: 'Laravel' },
		{ src: framericon, alt: 'Framer Motion', name: 'Framer Motion' },
		{ src: Figmaicon, alt: 'Figma', name: 'Figma' },
		{ src: bootstrapicon, alt: 'Bootstrap', name: 'Bootstrap' },
		{ src: wpicon, alt: 'Wordpress', name: 'Wordpress' },
		{ src: jsicon, alt: 'Javascript', name: 'Javascript' },
		{ src: tsicon, alt: 'Typescript', name: 'Typescript' },
		{ src: githubicon, alt: 'Github', name: 'Github' }
	];

	const images = [
		{ src: PhotoCard, alt: 'Feature 1' },
		{ src: PhotoCard, alt: 'Feature 2' },
		{ src: PhotoCard, alt: 'Feature 3' },
		{ src: PhotoCard, alt: 'Feature 4' },
		{ src: PhotoCard, alt: 'Feature 5' },
		{ src: PhotoCard, alt: 'Feature 6' }
	];

	const values = [
		{ text: 'Problem Solving', x: -20, y: 20 },
		{ text: 'Attention to detail', x: 150, y: 90 },
		{ text: 'Collaboration', x: 30, y: 160 }
	];

	// Ref for the draggable container
	const dragContainerRef = useRef(null);

	const handleNavigation = (direction) => {
		// Mobile navigation
		if (window.innerWidth < 640) {
			if (direction === 'next') {
				setCurrentIndex((prev) => (prev + 1) % images.length);
			} else if (direction === 'prev') {
				setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
			}
		} else {
			// Desktop navigation
			const scrollAmount = 320; // Approximate width of one card
			if (desktopCarouselRef.current) {
				const newScrollLeft =
					direction === 'next'
						? desktopCarouselRef.current.scrollLeft + scrollAmount
						: desktopCarouselRef.current.scrollLeft - scrollAmount;

				desktopCarouselRef.current.scrollTo({
					left: newScrollLeft,
					behavior: 'smooth'
				});
			}
		}
	};
	
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Existing useEffect for mouse move
	useEffect(() => {
		const handleMouseMove = (e) => {
			setCursorPosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<div>
			{/* Section pertama */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 flex flex-col lg:flex-row items-center lg:justify-between">
				{/* <div className="font-playfair mb-8 lg:mb-0">
					<h1 className="text-4xl sm:text-4xl md:text-7xl lg:text-6xl mb-2">Hi There! I am Catur Putra R.</h1>
					<h1 className="text-4xl sm:text-4xl md:text-7xl lg:text-6xl mb-2">A Front-End Developer</h1>
				</div>
				<div className="flex-shrink-0">
					
					<img
						src={ilustration}
						alt="Catur Putra R."
						className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 lg:ml-8"
					/>
				</div> */}
			</div>

			{/* Section with border */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
				<div className="border border-black rounded-xl p-10">
					<h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-4xl mb-2 font-playfair mb-6 mt-4">
						Let's know more about me
					</h1>
					<p className="text-lg text-gray-800 leading-relaxed text-left font-poppins">
						<span className="text-black font-bold">Catur</span> is a Front-End Developer based in Bogor,
						Indonesia. He is a freshgraduate education in 2025, majoring in Software Development at SMK
						Wikrama Bogor. He has great passion for web development, eager to learn, and loves to explore
						new things.
						<br />
						<br />
						His latest project was developing the web application “Broker” using modern frameworks such as
						React.js. The application featured smooth animations and was integrated with a backend API.
						<span className="text-black font-bold">
							{' '}
							Catur is committed to contributing to innovative professional fields and aspires to build a
							successful career as a Front-End Developer.
						</span>
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
				<div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-6">
					{/* Section Tech Skill */}
					<div className="border border-black rounded-xl p-10 ">
						<h1 className="flex items-center text-3xl sm:text-2xl md:text-4xl lg:text-4xl mb-2 font-playfair mt-4">
							My tech stacks
						</h1>
						<p className="text-lg text-gray-800 leading-relaxed text-left font-playfair ">
							If you like using these tools too, we'll get along just fine.
						</p>
						<div className="max-w-7xl mx-auto sm:px-0 lg:px-0 mt-6 relative">
							{/* Custom Cursor */}
							<motion.div
								className="fixed pointer-events-none z-50 flex items-center justify-center bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg"
								style={{
									top: cursorPosition.y,
									left: cursorPosition.x,
									transform: 'translate(-50%, -50%)',
									opacity: cursorVisible ? 1 : 0
								}}
								initial={{ opacity: 0, scale: 1 }}
								animate={{
									opacity: cursorVisible ? 1 : 0,
									scale: cursorVisible ? 1.5 : 1 // Perbesar saat kursor muncul
								}}
								transition={{ duration: 0.2 }}
							>
								{cursorContent}
							</motion.div>

							{/* Layout for PC (flex) */}
							<div className="hidden sm:flex gap-2 justify-start flex-wrap">
								{techStackImages.map((tech, index) => (
									<motion.div
										key={index}
										className="relative w-16 h-16 bg-gray-200 p-2 rounded-lg"
										whileHover={{ scale: 1.1 }}
										transition={{ type: 'spring', stiffness: 300, damping: 20 }}
										onMouseEnter={() => {
											setCursorContent(tech.name);
											setCursorVisible(true);
										}}
										onMouseLeave={() => setCursorVisible(false)}
									>
										<img
											src={tech.src}
											alt={tech.alt}
											className="object-contain w-full h-full rounded-lg"
										/>
									</motion.div>
								))}
							</div>

							{/* Layout for mobile (grid with 3 items per row) */}
							<div className="grid grid-cols-3 sm:hidden gap-2 justify-start">
								{techStackImages.map((tech, index) => (
									<motion.div
										key={index}
										className="relative w-full h-16 bg-gray-200 p-2 rounded-lg"
										whileHover={{ scale: 1.1 }}
										transition={{ type: 'spring', stiffness: 300, damping: 20 }}
										onMouseEnter={() => {
											setCursorContent(tech.name);
											setCursorVisible(true);
										}}
										onMouseLeave={() => setCursorVisible(false)}
									>
										<img
											src={tech.src}
											alt={tech.alt}
											className="object-contain w-full h-full rounded-lg"
										/>
									</motion.div>
								))}
							</div>
						</div>
					</div>

					{/* Section Experiences */}
					<div className="border border-black rounded-xl p-10 lg:row-span-2 h-auto ">
						<h1 className="flex items-center text-3xl sm:text-2xl md:text-4xl lg:text-4xl mb-2 font-playfair mt-4">
							Basically, this is my journey
						</h1>
						<p className="text-lg text-gray-800 leading-relaxed text-left font-playfair">My Experiences</p>

						<div className="mt-6 font-poppins">
							<h2 className="text-xl font-semibold mb-2">
								Front End Developer - Digital Youth Technology
							</h2>
							<h2 className="text-lg mb-2  italic">Freelancer</h2>
							<ul className="text-lg text-gray-800 leading-relaxed list-disc pl-5 mb-4">
								<li>
									Developed a company profile application with an interactive and user-friendly
									interface, featuring smooth animations. This project was carried out in close
									collaboration with the UI/UX team to ensure an appealing design and an optimal user
									experience.
								</li>
							</ul>
						</div>

						<div className="mt-6 font-poppins">
							<h2 className="text-xl font-semibold mb-2">Full Stack Developer - Kejar Bahasa</h2>
							<h2 className="text-lg mb-2 italic">Freelancer</h2>
							<ul className="text-lg text-gray-800 leading-relaxed list-disc pl-5 mb-4">
								<li>
									Developed Point of Sales (POS) applications with multi-role features, ensuring the
									application is user-friendly and scalable. Integrated the Midtrans payment system,
									enabling secure and real-time transactions while supporting various payment methods.
									Worked collaboratively in a team for application development.
								</li>
							</ul>
						</div>

						<div className="mt-6 font-poppins">
							<h2 className="text-xl font-semibold mb-2">Front End Developer - PT Lifetech </h2>
							<h2 className="text-lg mb-2  italic">Intern</h2>
							<ul className="text-lg text-gray-800 leading-relaxed list-disc pl-5 mb-4">
								<li>
									Developed new features for the Point of Sale (POS) system, including a modern user
									interface to enhance usability and user experience. Ensured seamless backend API
									integration to support efficient and reliable system functionality.
								</li>
							</ul>
						</div>

						<a className="fancy" href="#" style={{ marginTop: '16px' }}>
							<span className="top-key" />
							<span className="text">Explore My Work</span>
							<span className="bottom-key-1" />
							<span className="bottom-key-2" />
						</a>
					</div>

					{/* Section values */}
					<div
						className="border border-black rounded-xl p-10 min-h-[450px] font-playfair"
						ref={dragContainerRef}
					>
						<h1 className="flex items-center text-3xl sm:text-2xl md:text-4xl lg:text-4xl mb-2 mt-4">
							Take a look at my values
						</h1>
						<p className="text-lg text-gray-800 leading-relaxed text-left">
							Through various projects, I've acquired valuable skills.
						</p>
						<div className="relative flex flex-wrap gap-4 mt-6">
							{values.map((value, index) => (
								<motion.div
									key={index}
									className="absolute bg-black border border-white text-white rounded-full px-6 py-3 shadow-md cursor-grab"
									drag
									dragConstraints={dragContainerRef}
									initial={{ x: value.x, y: value.y }}
									whileTap={{ cursor: 'grabbing' }}
								>
									{value.text}
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
