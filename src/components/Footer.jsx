import { Link } from 'react-scroll';

const Footer = () => {
    const d = new Date()
    const fullYear = d.getFullYear()

    return <footer>

        <Link to="header" spy={true} smooth={true} offset={-300} duration={500}><button className='myButton'>Top</button></Link>

        Copyright © {fullYear} Rotamiya Corporation


    </footer>
}

export default Footer;