import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="Nav">
            <ul className="Nav-ul">
                <li className="Nav-hover">
                    <NavLink className={({ isActive }) => (isActive ? "active" : "unactive")} to="/home">
                        Home
                    </NavLink>
                </li>
                <li className="Nav-hover">
                    <NavLink className={({ isActive }) => (isActive ? "active" : "unactive")} to="/aboutus">
                        About Us
                    </NavLink>
                </li>
                <li className="Nav-hover">
                    <NavLink className={({ isActive }) => (isActive ? "active" : "unactive")} to="/products">
                        Products
                    </NavLink>
                    <ul className="sub-menu">
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? "submenu-active" : "submenu-unactive")}
                                to={{ pathname: "/products" }}
                                state={{ sub: "Beauty Products" }}
                            >
                                Beauty Products
                            </NavLink>


                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? "submenu-active" : "submenu-unactive")}
                                to={{ pathname: "/products" }}
                                state={{ sub: "Health Products" }}
                            >
                                Health Products
                            </NavLink>
                        </li>
                        <li>
                            {/* SENDING SUBMENU ITEM TO CORRESPONDING PAGE */}
                            <NavLink
                                className={({ isActive }) => (isActive ? "submenu-active" : "submenu-unactive")}
                                to={{ pathname: "/products" }}
                                state={{ sub: "Garments" }}
                            >
                                Garments
                            </NavLink>

                        </li>
                    </ul>
                </li>
                <li className="Nav-hover">
                    <NavLink className={({ isActive }) => (isActive ? "active" : "unactive")} to="/services">
                        Services
                    </NavLink>
                    <ul className="sub-menu">
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? "submenu-active" : "submenu-unactive")}
                                to={{ pathname: "/Services" }}
                                state={{ sub: "Exhibition Management" }}
                            >
                                Exhibition Management
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? "submenu-active" : "submenu-unactive")}
                                to={{ pathname: "/Services" }}
                                state={{ sub: "Medical Tourism" }}
                            >
                                Medical Tourism
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? "submenu-active" : "submenu-unactive")}
                                to={{ pathname: "/Services" }}
                                state={{ sub: "Translation" }}
                            >
                                Translation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? "submenu-active" : "submenu-unactive")}
                                to={{ pathname: "/Services" }}
                                state={{ sub: "Hosting Event" }}
                            >
                                Hosting Event
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="Nav-hover Nav-last">
                    <NavLink className={({ isActive }) => (isActive ? "active" : "unactive")} to="/contact">
                        Contact Us
                    </NavLink>
                    <ul className="sub-menu">
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? "submenu-active" : "submenu-unactive")}
                                to={{ pathname: "/contact" }}
                                state={{ sub: "Company Location" }}
                            >
                                Company Location
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? "submenu-active" : "submenu-unactive")}
                                to={{ pathname: "/contact" }}
                                state={{ sub: "contactus" }}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;