import styleNavBar from './NavBar.module.css'

const NavBar = () =>{
    return(
        <div className={styleNavBar.nav}>
            <div>
                <a href="">Profile</a>
            </div>
            <div>
                <a href="">Massages</a>
            </div>
            <div>
                <a href="">Music</a>
            </div>
            <div>
                <a href="">Settings</a>
            </div>
            <div>
                <a href="">News</a>
            </div>
        </div>
    )
}

export default NavBar;