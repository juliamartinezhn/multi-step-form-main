import "../css/FormStep2.css"
import Button from "./Button";
import plan_arcade_img from "../assets/images/icon-arcade.svg";
import plan_advanced_img from "../assets/images/icon-advanced.svg";
import plan_pro_img from "../assets/images/icon-pro.svg";


function FormStep2({ }) {
    return (
        <>

            <FormPlan src={plan_arcade_img} planName={"Arcade"} price={"9"} />
            <FormPlan src={plan_advanced_img} planName={"Advanced"} price={"12"} />
            <FormPlan src={plan_pro_img} planName={"Pro"} price={"15"} />


        </>
    );

};

function FormPlan({ src, planName, price }) {
    return (
        <div className="form__plan">
            <img className="plan__img" src={src} alt={"Plan " + planName} />
            <h5>{planName}</h5>
            <h6>{`$${price}/mo`}</h6>
        </div>
    );

};

export default FormStep2;
