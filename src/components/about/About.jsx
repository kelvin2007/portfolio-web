import React from "react";
import './about.scss'
import aboutPic from '../../assets/photos-about.png';
import resumePdf from '../../assets/CV_Kelvin.pdf';
import { AiFillFilePdf } from 'react-icons/ai';
import { IconContext } from "react-icons";

const Emoji = props => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  )

function About(){
    return (
        <div id='about' className='about'>
            <h5 className="about__subtitle">Get to Know More</h5>
            <h1 className="about__title">About Me!</h1>
            
            <div className="about__container">
                <div className="about__img">
                    <div className="about__img__wrapper__1">
                        <div className="about__img__wrapper__2">
                            <img src={aboutPic} alt='About Pic' />
                        </div>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__p">
                        <p>
                            Hello! I'm Kelvin Erlangga, a technology enthusiast. I'm a highly self-motivated 3rd year Information System Student from University of Indonesia skilled with web development, android development with flutter, and data science. I'm excellent in working with others and I'm also looking forward to be working with you, Readers <Emoji label="smile" symbol="😀"/>
                        </p>
                    </div>
                    <div className="about__button">
                        <a href={resumePdf} without rel="noopener noreferrer" target="_blank" className='about__a'>
                            <button label="CV" className='about__btn'>
                                <IconContext.Provider value={{ className: 'about__icn' }}>
                                    <AiFillFilePdf />
                                </IconContext.Provider><span> Get CV</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;