import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navPar">
            <div className="logo"><h1>Stanlo</h1></div>
            <div className="linkPar">
                <Link to="/">Home</Link>
                <a href="/about_us">About Us</a>
                <a href="/new_blog">New blog</a>
            </div>
        </div>
    );
}
 
export default Navbar;