import React from 'react';
import {Link} from "react-router-dom";
import {slide as Menu} from "react-burger-menu";

const OpenMenu = () => {
    return (
        <div>
            <Menu>
                <Link to="/mainPage">Home</Link>
                <Link to="/mainPage">Explore</Link>
                <Link to="/mainPage">Like</Link>
                <Link to="/mainPage">My Page</Link>
            </Menu>
        </div>
    );
};

export default OpenMenu;