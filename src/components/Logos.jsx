import logo_1 from '../assets/logo_1.svg';
import logo_2 from '../assets/logo_2.svg';
import logo_3 from '../assets/logo_3.svg';
import logo_4 from '../assets/logo_4.svg';

import "../styles/components/Logos.scss";

const Logos = () => {
    return (
        <div className="logos-conteiner">
            <div className="logos-slide">
                <img src={logo_1} alt="logo"/>
                <img src={logo_2} alt="logo"/>
                <img src={logo_3} alt="logo"/>
                <img src={logo_4} alt="logo"/>
                <img src={logo_1} alt="logo"/>
                <img src={logo_2} alt="logo"/>
                <img src={logo_3} alt="logo"/>
                <img src={logo_4} alt="logo"/>
                <img src={logo_1} alt="logo"/>
                <img src={logo_2} alt="logo"/>
                <img src={logo_1} alt="logo"/>
                <img src={logo_2} alt="logo"/>
                <img src={logo_3} alt="logo"/>
                <img src={logo_4} alt="logo"/>
                <img src={logo_1} alt="logo"/>
                <img src={logo_2} alt="logo"/>
                <img src={logo_3} alt="logo"/>
                <img src={logo_4} alt="logo"/>
                <img src={logo_1} alt="logo"/>
                <img src={logo_2} alt="logo"/>
            </div>
        </div>
    )
};

export default Logos;