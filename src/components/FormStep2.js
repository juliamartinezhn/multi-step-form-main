import { useState } from "react";
import plan_arcade_img from "../assets/images/icon-arcade.svg";
import plan_advanced_img from "../assets/images/icon-advanced.svg";
import plan_pro_img from "../assets/images/icon-pro.svg";

import Slider from "./Slider";
import "../css/FormStep2.css";


function FormStep2() {
    const [monthly, setMonthly] = useState(true)

    const plans = [
        {
            id: 1,
            planName: "Arcade",
            src: plan_arcade_img,
            priceMonthly: "$9/mo",
            priceYearly: "$90/yr",
        },
        {
            id: 2,
            planName: "Advanced",
            src: plan_advanced_img,
            priceMonthly: "$12/mo",
            priceYearly: "$120/yr",
        },
        {
            id: 3,
            planName: "Pro",
            src: plan_pro_img,
            priceMonthly: "$15/mo",
            priceYearly: "$150/yr",
        }
    ]

    const sendPlan = monthly => setMonthly(!monthly);

    return (
        <>
            <div className="form__plan-container">
                {plans.map(plan => (
                    <FormPlan
                        key={plan.id}
                        {...plan}
                        price={monthly ? plan.priceMonthly : plan.priceYearly}
                        promotion={monthly ? "" : <p className="promotion">2 months free</p>}
                    />
                ))}
            </div>

            <div className="slider-container">
                <Slider sendPlan={sendPlan} />
            </div>
        </>
    );

};

function FormPlan({ src, planName, price, promotion }) {
    return (
        <>
            <input type="radio" id={planName} name="form__plan" value={planName} />
            <label className="form__plan" htmlFor={planName}>
                <img className="plan__img" src={src} alt={"Plan " + planName} />
                <h5>{planName}</h5>
                <h6>{price}</h6>
                {promotion}
            </label >
        </>
    );
};

export default FormStep2;
