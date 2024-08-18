import arrow_dark from "../assets/arrow_dark.svg"
import CTA_illustration from "../assets/CTA_illustration.svg";

import "../styles/components/CallToAction.scss";

const CallToAction = () => {
    return (
        <div className="cta-conteiner">
            <div className="cta-header">
                <h2>Unlock the Full Potential of <span>SmartNotes</span></h2>
                <p>
                    Ready to streamline your workflow and boost your productivity?
                    Start your free trial of SmartNotes today and experience the power
                    of smart note-taking.
                </p>
                <button>
                    Sign Up for Free
                    <img src={arrow_dark} alt="arrow"/>
                </button>
            </div>
            <img src={ CTA_illustration } className="illustration" alt="img"/>
        </div>
    )
}

export default CallToAction;