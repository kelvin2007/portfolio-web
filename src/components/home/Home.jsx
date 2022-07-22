import React from 'react';
import { ReactComponent as ProfilePic } from '../../assets/Picture.svg';
import './home.scss';

function Home(){
    return (
        <div className='home' id="home">
            {/* <div className='greetings'>
                <p className='home-p'>Hello,</p>
                <p className='home-p'>I'm <span>Kelvin Erlangga</span></p>
                <p className='home-sub'>Highly Interested in Data Science and Web Development</p>
            </div>
            <ProfilePic width='25rem' height='25rem'/> */}
        </div>
    );
}

export default Home;