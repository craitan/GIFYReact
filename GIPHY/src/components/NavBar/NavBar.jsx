import { NavLink } from 'react-router-dom';
import "./NavBar.css"


const NavBar = () => {
    return (
        <div className='nav-link'>

            <NavLink to="/">Trending</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
            <NavLink to="/myuploads">My Uploads</NavLink>
            <NavLink to="/upload">Upload</NavLink>
            
            
        </div>
    )
}

export default NavBar;
