import { useState } from "react";
import plan_arcade_img from "../assets/images/icon-arcade.svg";
import plan_advanced_img from "../assets/images/icon-advanced.svg";
import plan_pro_img from "../assets/images/icon-pro.svg";

import Step2FormPlan from "./Step2FormPlan.js";
import Slider from "./Slider.js";
import "../css/FormStep2.css";

function FormStep2({ plan, planType, updateForm }) {
    const [monthly, setMonthly] = useState(planType);

    const plans = [
        {
            id: 1,
            planName: "Arcade",
            src: plan_arcade_img,
            priceMonthly: "9",
            priceYearly: "90",
            checked: plan === "Arcade"
        },
        {
            id: 2,
            planName: "Advanced",
            src: plan_advanced_img,
            priceMonthly: "12",
            priceYearly: "120",
            checked: plan === "Advanced"
        },
        {
            id: 3,
            planName: "Pro",
            src: plan_pro_img,
            priceMonthly: "15",
            priceYearly: "150",
            checked: plan === "Pro"
        }
    ]

    const sliderChosenPlan = (monthly) => {
        setMonthly(!monthly);
        updateForm({ plan: plan, planType: !monthly });
    };

    return (
        <>
            <div className="form__plan-container">

                {plans.map(plan => (
                    <Step2FormPlan
                        key={plan.id}
                        {...plan}
                        price={monthly
                            ? "$" + plan.priceMonthly + "/mo"
                            : "$" + plan.priceYearly + "/yr"}
                        promotion={monthly ? "" : <p className="promotion">2 months free</p>}
                        onChange={(e) => updateForm({ plan: e.target.value, planType: monthly })}
                    />
                ))}

            </div>

            <div className="slider-container">
                <Slider initial={planType} sliderChosenPlan={sliderChosenPlan} />
            </div>
        </>
    );

};


export default FormStep2;
