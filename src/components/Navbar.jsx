import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {

    // 다른 url 안에서 다른 카테고리의 서브메뉴를 클릭할 수 없음. hovering만 가능함
    // 12/29 목요일 할 일 - submenu에서 클릭 시에 onClick- programatic navigation 써서 
    // 비동기코드로 url 먼저 바꾸고, 이후에 스크롤바 움직이는 코드 해주면 순서대로 될듯?

    return <nav className="Nav">
        <ul className="Nav-ul">
            <li className="Nav-hover">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'unactive')} to='/home'>Home</NavLink>
            </li>
            <li className="Nav-hover">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'unactive')} to='/aboutus'>About Us</NavLink>
            </li>
            <li className="Nav-hover">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'unactive')} to='/products'>Products</NavLink>
                <ul className="sub-menu">
                    <li><Link to="Attire" spy={true} smooth={true} offset={-300} duration={500}>Attire</Link></li>
                    <li><Link to="Beauty Products" spy={true} smooth={true} offset={-300} duration={500}>Beauty Products</Link></li>
                    <li><Link to="Health Products" spy={true} smooth={true} offset={-300} duration={500}>Health Products</Link></li>
                </ul>
            </li>
            <li className="Nav-hover">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'unactive')} to='/services'>Services</NavLink>
                <ul className="sub-menu">
                    <li><Link to="Exhibition-Management" spy={true} smooth={true} offset={-300} duration={500}>Exhibition Management</Link></li>
                    <li><Link to="Medical-Tourism" spy={true} smooth={true} offset={-300} duration={500}>Medical Tourism</Link></li>
                    <li><Link to="Translation" spy={true} smooth={true} offset={-300} duration={500}>Translation</Link></li>
                    <li><Link to="Hosting-Event" spy={true} smooth={true} offset={-300} duration={500}>Hosting Event</Link></li>
                </ul>
            </li>
            <li className="Nav-hover Nav-last">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'unactive')} to='/contact'>Contact Us</NavLink>
                <ul className="sub-menu">
                    <li><Link to="map" spy={true} smooth={true} offset={-300} duration={500}>Company Location</Link></li>
                    <li><Link to="contactus" spy={true} smooth={true} offset={-300} duration={500}>Contact Us</Link></li>
                </ul>
            </li>
        </ul>
    </nav>
}

export default Navbar