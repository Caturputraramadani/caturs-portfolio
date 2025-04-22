import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import { ScrollLinked } from './components/ScrollLinked'; // Impor bernama
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
// import Contact from './pages/Contact';
import CustomCursor from './components/Cursor';
import Footer from './components/Footer';
import "@fontsource/caveat"; 

const AppContent = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/projects" element={<Project />} />
			{/* <Route path="/contact" element={<Contact />} /> */}
		</Routes>
	);
};

const App = () => {
	return (
		<ThemeProvider>
			<CustomCursor />
			<HashRouter>
				<Navbar />
				<ScrollLinked />
				<AppContent />
				<Footer />
			</HashRouter>
		</ThemeProvider>
	);
};

export default App;
