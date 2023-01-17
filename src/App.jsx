import React, { useState } from 'react';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './app.scss';

export default function App(){
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