import React from 'react';
import { RiArrowRightUpLine, RiDownloadLine } from 'react-icons/ri';

import '@fontsource/playfair-display';
import '@fontsource/caveat';
import Photo from '../assets/photo.png';
import CustomCursorApp from '../components/Cursor.jsx';
import MarqueeText from '../components/MarqueeText.jsx';
import Arrow from '../assets/arrow.svg';
import Arrow2 from '../assets/arrow2.svg';
import Arrowwave from '../assets/arrowwave.svg';
import { motion } from 'framer-motion';
import '../App.css';

const Home = () => {
	return (
		<div className="relative flex flex-col min-h-screen">
			{/* Konten utama */}
			<div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-playfair">
				<div className="flex flex-col items-start">
					<p className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl mt-16 sm:mt-16 font-poppins">
						Hi! I am Catur
					</p>
					<h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 ">
						An excited frontend developer creating exceptional web experiences and inspiring tech growth.
					</h1>
					{/* Tombol "Let's Talk" rata kiri */}
					<a className="fancy text-left block mt-4" href="#">
						<span className="top-key" />
						<span className="text">Let's Talk</span>
						<span className="bottom-key-1" />
						<span className="bottom-key-2" />
					</a>
				</div>

				{/* Teks dengan tanda panah */}
				<div className="relative mt-8 flex items-center font-poppins">
					{/* Teks */}
					<p className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl">
						Experienced in building <br />
						responsive interfaces with React.js <br />
						and Tailwind CSS.
					</p>

					{/* Arrow SVG dan teks tambahan */}
					<div className="relative hidden sm:block ml-6">
						{/* Arrow animation with slower effect */}
						<motion.img
							src={Arrow}
							alt="Arrow"
							className="w-24 sm:w-32 md:w-40 lg:w-48 rotate-50"
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ type: 'spring', stiffness: 30, duration: 2 }}
						/>
						{/* Additional text animation with slower effect */}
						<motion.p
							className="absolute text-2xl sm:text-3xl -right-28 top-28 font-caveat"
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ type: 'spring', stiffness: 30, duration: 2, delay: 0.3 }}
						>
							Honestly, I'm still <br /> learning too.
						</motion.p>
					</div>
				</div>

				{/* Marquee Text */}
				<div className="mt-12 sm:mt-6 lg:mt-32 w-full mb-32">
					<MarqueeText />
				</div>
			</div>

			{/* Gelombang SVG */}
			<div id="section-2">

				<div className="relative bg-black text-white ref={section2Ref}">
					{/* Section 2 */}
					<div className="max-w-[1210px] mx-auto py-32 min-h-[400px] flex flex-col sm:flex-row items-center sm:items-start justify-start">
						{/* Foto */}

						<div className="relative mb-2 sm:mb-0 mx-auto sm:self-start sm:-ml-0">
							<div className="relative">
								{/* Arrow2 SVG di atas gambar */}
								<img
									src={Arrow2}
									alt="Arrow2"
									className="w-24 sm:w-48 h-auto absolute top-[-20px] sm:top-[-40px] right-[-60px] sm:right-[-120px] rotate-[50deg] hidden sm:block"
								/>

								{/* Teks di bawah panah */}
								<div className="absolute top-[30px] sm:top-[80px] right-[-60px] sm:right-[-150px] rotate-[20deg] text-white text-xl sm:text-4xl font-caveat hidden sm:block">
									That's me!
								</div>

								{/* Foto */}
								<img
									src={Photo}
									alt="Descriptive Alt Text"
									className="w-full sm:w-auto sm:max-w-xs rounded-lg shadow-lg mx-auto scale-75 sm:scale-100"
								/>

								{/* Arrowwave SVG di bawah gambar */}
								<img
									src={Arrowwave}
									alt="Arrowwave"
									className="w-16 sm:w-28 h-auto absolute bottom-[30px] sm:bottom-[-20px] right-[50px] sm:right-[10px]"
								/>
							</div>
						</div>


						{/* Teks link */}
						<div className="relative flex flex-col justify-start items-center text-center sm:items-start sm:text-left mt-2 sm:mt-0 w-full sm:w-auto px-6 sm:px-0 font-poppins">
							<div className="w-full max-w-xs sm:max-w-3xl space-y-6 sm:space-y-12">
								{/* Garis Atas */}
								<div className="border-t-[1.5px] sm:border-t-2 border-neutral-500 w-full mb-1 sm:mb-4 mt-4 sm:mt-8" />

								{/* Item 1 */}
								<a href="#/about" className="relative group cursor-pointer block">
									<div className="flex flex-row justify-between items-center text-left text-2xl sm:text-5xl gap-4 sm:gap-6">
										<span className="relative transition-transform duration-200 group-hover:scale-105 group-hover:-translate-y-1 active:scale-95">
											Discover more about me
										</span>
										<RiArrowRightUpLine className="text-3xl sm:text-4xl" />
									</div>
								</a>

								{/* Garis Tengah */}
								<div className="border-t-[1.5px] sm:border-t-2 border-neutral-500 w-full mb-1 sm:mb-4" />

								{/* Item 2 */}
								<a href="#/projects" className="relative group cursor-pointer block">
									<div className="flex flex-row justify-between items-center text-left text-2xl sm:text-5xl gap-4 sm:gap-6">
										<span className="relative transition-transform duration-200 group-hover:scale-105 group-hover:-translate-y-1 active:scale-95">
											Explore My Projects
										</span>
										<RiArrowRightUpLine className="text-3xl sm:text-4xl" />
									</div>
								</a>

								{/* Garis Bawah */}
								<div className="border-t-[1.5px] sm:border-t-2 border-neutral-500 w-full mt-1 sm:mt-4" />
							</div>

							{/* Tombol di bawah teks link */}
							<div className="w-full flex justify-center sm:justify-start mt-12">
								<a href="https://drive.google.com/drive/folders/1ud4TuFY7L8M_Ym7QF55WBOTS4G_E_zpG?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-6 py-3 border border-white text-white rounded-full text-lg sm:text-xl font-medium transition hover:bg-white hover:text-black">
									<span className="font-semibold">Download my CV</span>
									<RiDownloadLine className="text-xl sm:text-2xl" />
								</a>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
