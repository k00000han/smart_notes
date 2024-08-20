import { featuresItems } from "../constants"

import "../styles/components/Feature.scss";

const Feature = () => {
    return(
        <div className="feature-conteiner" id="features">
            <div className="feature-text-conteiner">
                <h2>
                    Discover the Power of <span>SmartNotes</span>
                </h2>
                <p>
                    SmartNotes is packed with innovative features
                    designed to revolutionize the way you take notes,
                    collaborate with others, and stay organized.
                </p>
            </div>
            <div className="feature-boxes-conteiner">
                {featuresItems.map((item, index) => (
                    <div className={`feature-box item-${index + 1}`} key={index}>
                        <img
                            src={ item.img } alt="icon"
                        />
                        <div className="text-feature-box">
                            <h6>
                                { item.title }
                            </h6>
                            <p>
                                { item.text }
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feature;