import logo from '../assets/logo.svg';
import arrow from '../assets/arrow_dark.svg';
import {navbarItems} from "../constants";

import "../styles/components/Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={ logo } alt="logo"/>
                <h2>SmartNotes</h2>
            </div>
            <ul>
                {navbarItems.map((item, index) => (
                    <li key={ index }>
                        <a href={ item.href }>{ item.label }</a>
                    </li>
                ))}
            </ul>
            <div className="btn">
                <button>
                    <p>Get Started</p>
                    <img src={ arrow } alt="arrow"/>
                </button>
            </div>
        </div>
    )
}

export default Navbar;