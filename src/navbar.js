import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navPar">
            <div className="logo"><h1>Stanlo</h1></div>
            <div className="linkPar">
                <Link to="/">Home</Link>
                <Link to="/about_us">About Us</Link>
                <Link to="/new_blog">New blog</Link>
            </div>
        </div>
    );
}
 
export default Navbar;