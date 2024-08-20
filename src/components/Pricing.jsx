import {useState} from "react";
import { pricingItems } from "../constants"
import list_icon from "../assets/list-icon.svg"
import arrow_dark from "../assets/arrow_dark.svg"
import arrow_light from "../assets/arrow_light.svg"

import "../styles/components/Pricing.scss";

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const handleToggle = () => {
        setIsYearly(!isYearly);
    };

    return (
        <div className="pricing-conteiner">
            <div className="pricing-header" id="pricing">
                <h2>
                    <span>Pricing </span>& Plans
                </h2>
                <p>
                    With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                </p>
            </div>

            <div className="pricing-toggle">
                <p className={`monthly-tag ${isYearly ? "active" : ""}`}>Monthly</p>
                <label className="switch">
                    <input type="checkbox" checked={isYearly} onChange={handleToggle}/>
                    <span className="slider"></span>
                </label>
                <p className={`yearly-tag ${isYearly ? "active" : ""}`}>Yearly</p>
                <div className="discount-tag">
                    <p>Save 25%</p>
                </div>
            </div>

            <div className="pricing-boxes-conteiner">
                {pricingItems.map((item, index) => (
                    <div className={`pricing-box item-${index + 1}`}>
                        <div className="box-title">
                            <img src={item.icon} alt="icon"/>
                            <p>{item.plan}</p>
                        </div>
                        <div className="box-price">
                            <p> {item.price} </p>
                            {(index === 0 || index === 1) && <p className="tag">/ month</p>}
                        </div>
                        <div className="list">
                            {item.features.map((feature, index) => (
                                <p className="list-item" key={index}>
                                    <img src={ list_icon  } alt="icon"/>
                                    {feature}
                                </p>
                            ))}
                        </div>

                        <div className="box-btn">
                            <button>
                                <p>{ item.btnContent }</p>
                                <img src={ index === 1 ? arrow_dark : arrow_light }  alt="arrow"/>
                            </button>
                            <p className="note">{item.note}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing