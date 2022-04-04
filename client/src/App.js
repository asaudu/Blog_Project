import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Posts from './Pages/Posts';
import Contact from './Pages/Contact';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' exact element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/posts' element={<Posts/>} />
	</Routes>
	</Router>
);
}

export default App;

