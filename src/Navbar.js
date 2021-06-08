import {Link, Route} from "react-router-dom";

function Navbar (props) {
    return (
        <div>
        <nav>
            <ul id="nav">
                <li>
                    <Link to="/" className="title">MISTRESS KAT</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="contact">Contact Me</Link>
                </li>
                <li>
                    <Link to="/gallery" className="gallery">Gallery</Link>
                </li>
            </ul>
        
        </nav>
        </div>
        );
}

export default Navbar;