import React from 'react';
import { ReactComponent as IconMenu } from '../../assets/Design Logo.svg';
import './navbar.scss';
import NavItem from './NavItem';

function NavBar({open, setOpen}) {
    const items = ['Home', 'About', 'Projects', 'Contacts']

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="nav__logo">
                    <a href="#home">
                        <IconMenu width='4rem' height='4rem'/>
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