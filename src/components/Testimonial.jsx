import quote from "../assets/quote.svg"

import "../styles/components/Testimonial.scss";

const Testimonial = ({ customClass }) => {
    return (
        <div className={`testimonial-conteiner ${customClass}`}>
            <div className="testimonial-text-conteiner">
                <img src={ quote } alt="quote"/>
                <h5>
                    The real-time synchronization and AI-
                    powered organization have made our
                    workflow more efficient than ever.
                </h5>
                <p>
                    Sarah Johnson &nbsp;&nbsp;&nbsp;
                    <span>TechSavvy Solutions</span>
                </p>
            </div>
        </div>
    )
}

export default Testimonial