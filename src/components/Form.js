import { useState } from 'react';
import "../css/Form.css";
import FormStep1 from "./FormStep1.js";
import FormStep2 from "./FormStep2.js";
import Button from "./Button";
import "../css/FormStep1.css";
import "../css/FormStep2.css";


function Form() {
    // const [currentStep, setCurrentStep] = useState(1);
    // const [formFlexColumn, setFormFlexColumn] = useState(true);

    // const changeStep = (newStep = 1) => {
    //     if (newStep === 1) {
    //         setCurrentStep(newStep);
    //         setFormFlexColumn(true);
    //         return <FormStep1 />

    //     } else if (newStep === 2) {
    //         setCurrentStep(newStep);
    //         setFormFlexColumn(false);
    //         return <FormStep2 />
    //     }
    // }
    // const changeStep = (newStep = 1) => {
    //     if (newStep === 1) return <FormStep1 />
    //     else if (newStep === 2) return <FormStep2 />

    // }



    const manejarEnvio = (e) => {
        e.preventDefault();

    }

    return (
        <form className='container__form' onSubmit={manejarEnvio} >

            <div>
                <header>
                    <FormHeader id={2} />
                </header>

                <main className={false ? "form__plans-container form__plans-container--column" : "form__plans-container"}>
                    {<FormStep2 />}
                </main>
            </div>

            <footer className="btn-container">
                <Button btnType={"back"} text={"Go Back"} />
                <Button btnType={"next"} text={"Next Step"} />
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