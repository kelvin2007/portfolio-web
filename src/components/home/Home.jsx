import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import './home.scss'
import homePic from '../../assets/picture.png';

function Home(){
    const typeRef = useRef();

    useEffect(()=>{
        init(typeRef.current, {
            showCursor: true,
            backDelay: 1000,
            backSpeed: 60,
            strings: ['Data Science', 'Data Analytics', 'Web Development', 'Flutter Development']
        })
    }, [])

    return (
        <div className='home' id="home">
            <div className='left'>
                <p className='home-p'>Hello, I'm</p>
                <p className='home-span'><p className='home-span__text'><span>Kelvin Erlangga</span></p></p>
                <p className='home-sub'>Highly Interested in <span ref={typeRef}></span></p>
            </div>
            <div className='right'>
                <div className='pic__container'>
                    <img src={homePic} alt='Profile Pic'></img>
                </div>
            </div>
        </div>
    );
}

export default Home;