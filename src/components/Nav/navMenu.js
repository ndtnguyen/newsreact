import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { MENU } from './../../constants/nav';
import './navMenu.css';

class NavMenu extends React.Component {

    render() {
        return (
            <div className="menu">
                <div className="navMenu">
                    <div>
                        <MenuIcon />
                    </div>
                    {MENU.map((x, index) =>
                        <div className="hidden" key={index}><strong>{x.name}</strong></div>
                    )}
                    <div className="hidden">
                        <SearchIcon />
                    </div>
                </div>
                <img src="/assets/breakline.png" alt="breakline" />
            </div>
        );
    }
}

export default NavMenu;
