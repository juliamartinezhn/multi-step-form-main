import { useState } from 'react';
import "../css/Form.css";
import FormStep1 from "./FormStep1.js";
import FormStep2 from "./FormStep2.js";
import Button from "./Button";
import "../css/FormStep1.css";
import "../css/FormStep2.css";


function Form() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formFlexColumn, setFormFlexColumn] = useState(true);

    const changeStep = (newStep = 1) => {
        setCurrentStep(newStep);

        switch (newStep) {
            case 1:
                setFormFlexColumn(true);
                break;
            case 2:
                setFormFlexColumn(false);
                break;
            default:
                setFormFlexColumn(true);
                break;
        }
    };


    const manejarEnvio = (e) => {
        e.preventDefault();
    };
    // console.log(4 === 1 ? "FormStep1" : 4 === 2 ? "FormStep2" : 4 === 3 ? "FormStep3" : "FormStep4");


    return (
        <form className='container__form' onSubmit={manejarEnvio}>

            <div>
                <header>
                    <FormHeader id={currentStep} />
                </header>

                <main className={formFlexColumn ? "form__plans-container form__plans-container--column" : "form__plans-container"}>
                    {currentStep === 1 ? <FormStep1 /> : <FormStep2 />}
                </main>
            </div>
            <footer className="btn-container">
                <Button btnType={"back"} text={"Go Back"} currentStep={currentStep} changeStep={changeStep} />
                <Button btnType={"next"} text={"Next Step"} currentStep={currentStep} changeStep={changeStep} />
            </footer>

        </form>
    );
};
// changeStep={changeStep} 

function FormHeader({ id = 1 }) {

    const jsonData = [
        {
            "id": 1,
            "title": "Personal info",
            "description": "Please provide your name, email address, and phone number."
        },
        {
            "id": 2,
            "title": "Select your plan",
            "description": "You have the option of monthly or yearly billing."
        }
    ]

    let header = jsonData.find(step => step.id === id);

    return (
        <>
            <h2 className="form__title">{header.title}</h2>
            <h6 className="form__description">{header.description}</h6>
        </>
    );


}

export default Form;