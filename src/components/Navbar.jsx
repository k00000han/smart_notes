import {useEffect, useState} from "react";
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';
import logo_text from '../assets/logo_text.svg';
import arrow from '../assets/arrow_dark.svg';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';
import facebook from '../assets/facebook.svg';
import linked_in from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
import {navbarItems} from "../constants";

import "../styles/components/Navbar.scss";
import "../styles/_global.scss";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleMenuClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

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
                <AnimatePresence>
                { isOpen && (
                    <motion.div
                        className="dropdown-conteiner"
                        initial={{ x: 0, y: -10, opacity: 0, filter: 'blur(10px)' }}
                        animate={{ x: 0, y: 0, opacity: 1, filter: 'blur(0px)' }}
                        exit={{ x: 0, y: -10, opacity: 0, filter: 'blur(10px)' }}
                        transition={{ duration: 0.5 }}
                    >
                        <ul className="dropdown-menu">
                            {navbarItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} onClick={handleMenuClick}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="social_nets">
                            <div className="img_conteiner">
                                <img src={facebook} alt="fb"/>
                            </div>
                            <div className="img_conteiner">
                                <img src={linked_in} alt="in"/>
                            </div>
                            <div className="img_conteiner">
                                <img src={twitter} alt="tw"/>
                            </div>
                            <div className="img_conteiner">
                                <img src={youtube} alt="yt"/>
                            </div>
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Navbar;