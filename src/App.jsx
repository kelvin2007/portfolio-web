import React, { useState } from 'react';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './app.scss';

// gsap.registerPlugin(ScrollTrigger);

export default function App(){
    // useEffect(() => {
    // }, [])
    const [open, setOpen] = useState(false);

    return (
        <div className='app'>
            <NavBar open={open} setOpen={setOpen} />
            <div className="contents">
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}