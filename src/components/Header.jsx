import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
    return <header id="header" className="div-Header">
        <NavLink to="/">
            <img className="rotamiya_logo" src="images/Rotamiya_Logo.png" alt="Rotamiya Logo" />
        </NavLink>
        <video
            className='video1'
            src='images/video1.mp4' type='video/mp4' autoPlay="autoplay" muted loop>
        </video>
        {/* <p className="Header-text">Welcome to Rotamiya!</p> */}
        <Navbar />
    </header>
}

export default Header;