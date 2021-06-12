import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar">
            <img src="../logo.jpg" alt="damaymays logo" className="logo" />
            <Link to="/">Make a Confession</Link>
            <Link to="/memes" >Send a Meme</Link>
        </nav>
    )
}
export default Header;