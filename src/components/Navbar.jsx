import { NavLink } from 'react-router-dom';

const Navbar = () => {



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
                    <li>Attire</li>
                    <li>Beauty Products</li>
                    <li>Health Products</li>
                </ul>
            </li>
            <li className="Nav-hover">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'unactive')} to='/services'>Services</NavLink>
                <ul className="sub-menu">
                    <li>Exhibition Management</li>
                    <li>Medical Tourism</li>
                    <li>Translation</li>
                    <li>Hosting Event</li>
                </ul>
            </li>
            <li className="Nav-hover Nav-last">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'unactive')} to='/contact'>Contact Us</NavLink>
                <ul className="sub-menu">
                    <li>Company Location</li>
                    <li>Contact Us</li>
                </ul>
            </li>
        </ul>
    </nav>
}

export default Navbar