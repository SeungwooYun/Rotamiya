import Navbar from "./Navbar";

const Header = () => {
    return <header className="div-Header">
        <img className="rotate_logo" src="images/Rotamiya_Logo_1_cropped.png" alt="Rotamiya Logo" />
        <video
            className='video1'
            src='images/video1.mp4' type='video/mp4' autoplay="autoplay" muted loop>
        </video>
        <p className="Header-text">Lorem ipsum dolor sit amet</p>
        <Navbar />
    </header>
}

export default Header;