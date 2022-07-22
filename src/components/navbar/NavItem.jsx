import React from 'react';
import './navbar.scss';

function NavItem(props) {
    return (
      <a href={props.linkRef}>
        <div className="nav__link__div">
          <li>{props.text}</li>
        </div>
      </a>
    );
}

export default NavItem;