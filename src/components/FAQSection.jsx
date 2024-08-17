import { FAQItems } from "../constants"
import arrow_light from "../assets/arrow_light.svg"
import arrow_straight from "../assets/arrow_straight.svg";

import "../styles/components/FAQSection.scss";
import {useState} from "react";


const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <div className="faq-conteiner">
            <div className="faq-header">
                <h2>
                    Frequently Asked <span>Questions</span>
                </h2>
                <p>
                    We've compiled a list of the most frequently asked questions about SmartNotes to help you get the
                    information you need. If you have any other questions, feel free to reach out to our support team.
                </p>
            </div>

            <div className="question-conteiner">
                {FAQItems.map((item, index) => (
                    <div className={`question-box ${activeIndex === index ? "active" : ""}`}
                         key={index}
                         onClick={() => toggleFAQ(index)}
                    >
                          <h6 className={`question-title ${activeIndex === index ? "expanded" : ""}`}>
                            {item.title}
                          </h6>

                        <button>
                            <img
                                src={activeIndex === index ? arrow_straight : arrow_light}
                                alt="arrow"
                            />
                        </button>

                        {activeIndex === index && (
                            <>
                                {/*<h6 className="inside-title">{item.title}</h6>*/}
                                <p className="faq-description">{item.description}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FAQSection;