import { NavLink } from 'react-router-dom';

const Navbar = () => {



    return <div className="Nav">
        <ul className="Nav-ul">
            <li className="Nav-hover">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'unactive')} to='/home'>Home</NavLink>
            </li>
            <li className="Nav-hover">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'unactive')} to='/aboutus'>About Us</NavLink>
            </li>
            <li className="Nav-hover">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'unactive')} to='/products'>Products</NavLink>
            </li>
            <li className="Nav-hover">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'unactive')} to='/services'>Services</NavLink>
            </li>
            <li className="Nav-hover Nav-last">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'unactive')} to='/contact'>Contact Us</NavLink>
            </li>
        </ul>
    </div>
}

export default Navbar