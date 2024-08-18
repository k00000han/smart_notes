import logo from "../assets/logo.svg";
import logo_text from "../assets/logo_text.svg";
import arrow_light from "../assets/arrow_light.svg"
import facebook from "../assets/fb_alt_icon.svg"
import linked_in from "../assets/in_alt_icon.svg"
import twitter from "../assets/twitter_alt_icon.svg"
import youtube from "../assets/yt_alt_icon.svg"
import { productLinks, companyLinks, resourcesLinks, legalLinks } from "../constants"

import "../styles/components/Footer.scss";



const Footer = () => {
    return (
        <footer className="footer-conteiner">
            <div className="footer-logo">
                <img className="logotype" src={ logo } alt="logo"/>
                <img className="logo_text" src={ logo_text } alt="logo"/>
            </div>
            <div className="email-button">
                <button>
                    <p>email@smartnote.io</p>
                    <img src={ arrow_light } alt="icon"/>
                </button>
            </div>

            <div className="footer-links">
                <div className="products-conteiner">
                    <h3>Product</h3>
                    {productLinks.map((link, index) => (
                        <li key={ index }>
                            <a href={ link.href }>
                                { link.text }
                            </a>
                        </li>
                    ))}
                </div>
                <div className="company-conteiner">
                    <h3>Company</h3>
                    {companyLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </div>
                <div className="resources-conteiner">
                    <h3>Resources</h3>
                    {resourcesLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </div>
                <div className="legal-conteiner">
                    <h3>Legal</h3>
                    {legalLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                <p>@2024 SmartNotesI. All Rights Reserved. @iamhervewabo</p>
                <div className="social_nets-conteiner">
                    <button>
                        <a href="https://www.facebook.com/">
                            <img src={facebook} alt="fb"/>
                        </a>
                    </button>
                    <button>
                        <a href="https://www.linkedin.com">
                            <img src={linked_in} alt="in"/>
                        </a>
                    </button>
                    <button>
                        <a href="https://x.com">
                            <img src={twitter} alt="tw"/>
                        </a>
                    </button>
                    <button>
                        <a href="https://www.youtube.com">
                            <img src={youtube} alt="yt"/>
                        </a>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer