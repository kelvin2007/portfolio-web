import React, {useState, useEffect} from 'react';
import { ReactComponent as IconMenu } from '../../assets/Design Logo.svg';
import './navbar.scss';
import NavItem from './NavItem';

function NavBar({open, setOpen}) {
    const items = ['Home', 'About', 'Projects', 'Contacts']
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 10){
            setColor(true);
        } else {
            setColor(false);
        }
        console.log(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor);
      }, []);

    return (
        <div className={"navbar  " + (color && "scrolled")}>
            <div className="wrapper">
                <div className="nav__logo">
                    <a href="#home">
                        <IconMenu className="logo" width='4rem' height='4rem'/>
                    </a>
                </div>
                <div className="nav__link">
                    <ul className = {"nav__items " + (open && "active")} onClick={() => setOpen(false)}>
                        {items.map((_item, index) => (
                                <NavItem 
                                    id={index}
                                    key={index}
                                    text={_item}
                                    linkRef={'#' + _item.toLowerCase()}
                                />
                                )
                            )
                        }
                    </ul>
                    <div className = {"hamburger " + (open && "active")} onClick={() => setOpen(!open)}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;