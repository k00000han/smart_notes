import {useState} from "react";
import arrow from '../assets/arrow_dark.svg';
import hero from '../assets/hero_illustration.svg';

import "../styles/components/Hero.scss";

const Hero = () => {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };
    return (
        <div className="hero-conteiner">
            <div className="text-conteiner">
                <h2>
                    <span>Intelligent</span> cloud based<br/>
                    <span>note-taking</span> and<br/>
                    collaboration tool
                </h2>
                <p>Experience the power of smart note-taking and transform the way you work today.</p>
            </div>

            <div className="form-conteiner">
                <form>
                    <input
                        type="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">
                        <p>Sign up</p>
                        <img src={ arrow } alt="arrow"/>
                    </button>
                </form>
            </div>
            <div className="hero-img-conteiner">
                <img src={ hero } alt="img"/>
            </div>
        </div>
    )
}

export default Hero;