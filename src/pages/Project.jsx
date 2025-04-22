import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSpring } from 'framer-motion';
import '@fontsource/playfair-display';
import '../App.css';

// Porto image
import blogWeb from '../assets/portoimage/blogweb.webp';
import modernWeb from '../assets/portoimage/modrenweb.png';
import beetWeb from '../assets/portoimage/beetpos.png';
import dinsosWeb from '../assets/portoimage/dinsosimg.png';
import officeWeb from '../assets/portoimage/backoffice.png';
import cafeWeb from '../assets/portoimage/vancafe.png';

import brokerWeb from '../assets/portoimage/broker.png';
import konecWeb from '../assets/portoimage/konec.png';

const ScrollPinningGallery = () => {
	const ref = useRef(null);
	const [windowWidth, setWindowWidth] = useState(0);
	const [hoveredCard, setHoveredCard] = useState(null);


	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end end']
	});

	const handleMouseEnter = (cardId) => {
		setHoveredCard(cardId);
	};

	const handleMouseLeave = () => {
		setHoveredCard(null);
	};

	const rawTranslateX = useTransform(scrollYProgress, [0, 1], [0, -windowWidth * 2]); 

	const translateX = useSpring(rawTranslateX, {
		stiffness: 50, 
		damping: 20 
	});

	const photocards = [{ id: 'Broker Website', image: brokerWeb }, { id: 'Koneckin Website', image: konecWeb }];


	return (
		<div>
			{/* Title section - aligned with navbar */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
				<div className="font-playfair mb-8 lg:mb-0 mt-12">
					<h1 className="text-4xl sm:text-4xl md:text-7xl lg:text-6xl mb-2 text-center">My Latest Works</h1>
				</div>
			</div>

			{/* Scroll Pinning Section */}
			<div ref={ref} className="w-full relative font-poppins" style={{ height: '300vh' }}>
				<div className="sticky top-0 h-screen overflow-hidden">
					<motion.div
						style={{
							display: 'flex',
							translateX
						}}
						className="flex"
						transition={{ type: 'spring', stiffness: 50, damping: 20 }}
					>
						{photocards.map((card) => (
							<div
								key={card.id}
								className="flex-shrink-0 w-screen h-screen flex items-center justify-center flex-col"
							>
								<img
									src={card.image}
									alt={`Photocard ${card.id}`}
									className="w-[90vw] h-[50vh] sm:w-[80vw] sm:h-[45vh] md:w-[70vw] md:h-[50vh] lg:w-[60vw] lg:h-[55vh] object-cover"
								/>

								<h3 className="mt-4 text-[5vw] sm:text-[4vw] md:text-[3vw] font-bold tracking-tighter">
									{card.id}
								</h3>
							</div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Cards section - aligned with navbar */}
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 gap-4 font-poppins">
				{/* Cards 1 and 2 */}
				<div className="flex flex-wrap justify-between gap-4 sm:gap-8">
					{/* Card 1 */}
					<article className="relative isolate flex flex-col justify-end overflow-hidden rounded px-4 sm:px-8 pb-4 sm:pb-8 pt-32 sm:pt-48 w-full sm:w-full lg:w-[40%]">
						<img
							src={modernWeb}
							alt="Feature 1"
							className="absolute inset-0 h-full w-full object-cover scale-150 sm:scale-125"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
						<h3 className="z-10 mt-3 text-xl sm:text-2xl font-bold text-white">
							Profile Company 'Lifetech'
						</h3>
						<div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
							React Js, Taillwind CSS, & Framer Motion
						</div>
					</article>

					{/* Card 2 */}
					<motion.article
						className="relative isolate flex flex-col justify-end overflow-hidden rounded px-4 sm:px-8 pb-4 sm:pb-8 pt-32 sm:pt-48 w-full sm:w-full lg:w-[57%] cursor-pointer"
						onMouseEnter={() => handleMouseEnter(2)}
						onMouseLeave={handleMouseLeave}
					>
						<img
							src={dinsosWeb}
							alt="Feature 2"
							className="absolute inset-0 h-full w-full object-cover object-[50%_70%] sm:object-[50%_70%] transition-all duration-300"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
						<motion.div
							className="absolute inset-0 bg-black/70 transition-opacity duration-300"
							animate={{ opacity: hoveredCard === 2 ? 1 : 0 }}
						/>
						<motion.h3
							className="z-10 mt-3 text-xl sm:text-2xl font-bold text-white"
						>
							<a
								href="https://dinsoskotabekasi.creators.co.id/ "
								target="_blank"
								rel="noopener noreferrer"
								className="relative text-white hover:underline"
							>
								CMS Website 'Dinsos Kota Bekasi'
							</a>
						</motion.h3>
						<div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
							Laravel, Blade, & CSS
						</div>
					</motion.article>
				</div>

				{/* Cards 3 and 4 */}
				<div className="flex flex-wrap justify-between gap-4 sm:gap-8 mt-4 sm:mt-8">
					{/* Card 3 */}
					<article className="relative isolate flex flex-col justify-end overflow-hidden rounded px-4 sm:px-8 pb-4 sm:pb-8 pt-32 sm:pt-48 w-full sm:w-full lg:w-[57%]">
						<img
							src={beetWeb}
							alt="Feature 3"
							className="absolute inset-0 h-full w-full object-cover scale-150 sm:scale-125"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
						<h3 className="z-10 mt-3 text-xl sm:text-2xl font-bold text-white">beetPOS Website</h3>
						<div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
							Wordpress
						</div>
					</article>

					{/* Card 4 */}
					<motion.article
						className="relative isolate flex flex-col justify-end overflow-hidden rounded px-4 sm:px-8 pb-4 sm:pb-8 pt-32 sm:pt-48 w-full sm:w-full lg:w-[40%] cursor-pointer"
						onMouseEnter={() => handleMouseEnter(5)}
						onMouseLeave={handleMouseLeave}
					>
						<img
							src={officeWeb}
							alt="Feature 4"
							className="absolute inset-0 h-full w-full  object-cover object-left"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
						<motion.div
							className="absolute inset-0 bg-black/70 transition-opacity duration-300"
							animate={{ opacity: hoveredCard === 5 ? 1 : 0 }}
						/>
						<motion.h3 className="z-10 mt-3 text-xl sm:text-2xl font-bold text-white">
							<a
								href="https://backoffice.beetpos.com"
								target="_blank"
								rel="noopener noreferrer"
								className="relative text-white hover:underline"
							>
								POS admin website 'Backoffice'
							</a>
						</motion.h3>
						<div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
							React Js, Taillwind CSS, & Expres Js
						</div>
					</motion.article>
				</div>

				{/* Cards 5 and 6 */}
				<div className="flex flex-wrap justify-between gap-4 sm:gap-8 mt-4 sm:mt-8">
					{/* Card 5 */}
					<article className="relative isolate flex flex-col justify-end overflow-hidden rounded px-4 sm:px-8 pb-4 sm:pb-8 pt-32 sm:pt-48 w-full sm:w-full lg:w-[40%]">
						<img
							src={brokerWeb}
							alt="Feature 1"
							className="absolute inset-0 h-full w-full object-cover transform scale-110 left-[3%]"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
						<h3 className="z-10 mt-3 text-xl sm:text-2xl font-bold text-white">
							POS Website 'Broker'
						</h3>
						<div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
							React Js, Taillwind Css, & Laravel
						</div>
					</article>

					{/* Card 6 */}
					<motion.article
						className="relative isolate flex flex-col justify-end overflow-hidden rounded px-4 sm:px-8 pb-4 sm:pb-8 pt-32 sm:pt-48 w-full sm:w-full lg:w-[57%] cursor-pointer"
						onMouseEnter={() => handleMouseEnter(3)}
						onMouseLeave={handleMouseLeave}
					>
						<img
							src={blogWeb}
							alt="Feature 2"
							className="absolute inset-0 h-full w-full object-cover object-[50%_70%] sm:object-[50%_70%] scale-150 sm:scale-200"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
						<motion.div
							className="absolute inset-0 bg-black/70 transition-opacity duration-300"
							animate={{ opacity: hoveredCard === 3 ? 1 : 0 }}
						/>
						<motion.h3 className="z-10 mt-3 text-xl sm:text-2xl font-bold text-white">
							<a
								href="https://github.com/Caturputraramadani/Simple-Web-Blog.git"
								target="_blank"
								rel="noopener noreferrer"
								className="relative text-white hover:underline"
							>
								Blog Website 'Journalify'
							</a>
						</motion.h3>
						<div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
							Laravel & Bootstrap
						</div>
					</motion.article>

				</div>

				{/* Cards 7 and 8 */}
				<div className="flex flex-wrap justify-between gap-4 sm:gap-8 mt-4 sm:mt-8 mb-4 sm:mb-8">
					{/* Card 7 */}
					<article className="relative isolate flex flex-col justify-end overflow-hidden rounded px-4 sm:px-8 pb-4 sm:pb-8 pt-32 sm:pt-48 w-full sm:w-full lg:w-[57%]">
						<img
							src={konecWeb}
							alt="Feature 3"
							className="absolute inset-0 h-full w-full object-cover scale-150 sm:scale-125"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
						<h3 className="z-10 mt-3 text-xl sm:text-2xl font-bold text-white">Company Profile 'Konneckin'</h3>
						<div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
							React Js, Taillwind CSS, & Framer Motion
						</div>
					</article>

					{/* Card 8 */}
					<motion.article
						className="relative isolate flex flex-col justify-end overflow-hidden rounded px-4 sm:px-8 pb-4 sm:pb-8 pt-32 sm:pt-48 w-full sm:w-full lg:w-[40%] cursor-pointer"
						onMouseEnter={() => handleMouseEnter(4)}
						onMouseLeave={handleMouseLeave}
					>
						<img
							src={cafeWeb}
							alt="Feature 4"
							className="absolute inset-0 h-full w-full object-cover transition-all duration-300"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
						<motion.div
							className="absolute inset-0 bg-black/70 transition-opacity duration-300"
							animate={{ opacity: hoveredCard === 4 ? 1 : 0 }}
						/>
						<motion.h3 className="z-10 mt-3 text-xl sm:text-2xl font-bold text-white">
							<a
								href="https://vancafe-bycatur.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="relative text-white hover:underline"
							>
								Simple Website 'Cafe' (My first styling website)
							</a>
						</motion.h3>
						<div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
							Alpine Js, HTML, & CSS
						</div>
					</motion.article>

				</div>
			</div>
		</div>
	);
};

export default ScrollPinningGallery;
