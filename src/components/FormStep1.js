
import "../css/FormStep1.css";
import "../css/Form.css"


function FormStep1({ }) {
    return (
        <>
            <FormInput htmlForId={"name"} type={"text"} text={"Name"} placeholder={"e.g. Stephen King"} />
            <FormInput htmlForId={"email"} type={"email"} text={"Email Address"} placeholder={"e.g. stephenking@lorem.com"} />
            <FormInput htmlForId={"phone"} type={"text"} text={"Phone Number"} placeholder={"e.g. +1 234 567 890"} />
        </>
    );

};

function FormInput({ htmlForId, type, text, placeholder }) {
    return (
        <div className="form__item">
            <label className="form__label" htmlFor={htmlForId} >{text}</label>
            <input className="form__input" id={htmlForId} type={type} placeholder={placeholder} required />
        </div>
    );
};

export default FormStep1;