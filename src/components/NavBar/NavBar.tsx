import styleNavBar from './NavBar.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={styleNavBar.nav}>
            <div className={styleNavBar.container_bar}>
                <div className={styleNavBar.link}>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className={styleNavBar.link}>
                    <NavLink to="/dialog">Dialog</NavLink>
                </div>
                <div className={styleNavBar.link}>
                    <NavLink to="/music">Music</NavLink>
                </div>
                <div className={styleNavBar.link}>
                    <NavLink to="/settings">Settings</NavLink>
                </div>
                <div className={styleNavBar.link}>
                    <NavLink to="/news">News</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;