import {useState} from "react";
import logo from '../assets/logo.svg';
import logo_text from '../assets/logo_text.svg';
import arrow from '../assets/arrow_dark.svg';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';
import facebook from '../assets/facebook.svg';
import linked_in from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import you_tube from '../assets/youtube.svg';
import {navbarItems} from "../constants";

import "../styles/components/Navbar.scss";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav>
            <div className="navbar-conteiner">
                <div className="logo">
                    <img className="logotype" src={ logo } alt="logo"/>
                    <img className="logo_text" src={ logo_text } alt="logo"/>
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

                <div className="menu-btn">
                    <button onClick={ toggleOpen }>
                        { isOpen ? (
                            <img src={ menu_close } alt="close"/>
                        ): (
                            <img src={ menu_open } alt="open"/>
                        )}
                    </button>
                </div>
                { isOpen && (
                    <div className="dropdown-conteiner">
                        <ul className="dropdown-menu">
                            {navbarItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="social_nets">
                            <div className="img_conteiner">
                                <img src={ facebook } alt="fb"/>
                            </div>
                            <div className="img_conteiner">
                                <img src={ linked_in } alt="in"/>
                            </div>
                            <div className="img_conteiner">
                                <img src={ twitter } alt="tw"/>
                            </div>
                            <div className="img_conteiner">
                                <img src={ you_tube } alt="yt"/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;