import { useState } from "react";
import "../css/Form.css";
import FormStep1 from "./FormStep1.js";
import FormStep2 from "./FormStep2.js";
import FormStep3 from "./FormStep3.js";
import Button from "./Button.js";
import useMultiForm from './useMultiForm';

const headersSteps = [
    {
        id: 1,
        title: "Personal info",
        description: "Please provide your name, email address, and phone number."
    },
    {
        id: 2,
        title: "Select your plan",
        description: "You have the option of monthly or yearly billing."
    },
    {
        id: 3,
        title: "Pick add-ons",
        description: "Add-ons help enhance your gaming experience."
    }
];

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        plan: "Arcade",
        planType: true,
        isOnlineService: false,
        isLargerStorage: false,
        isCustomizableProfile: false,
    });

    const updateForm = (fieldToUpdate) => setFormData((prev) => ({ ...formData, ...fieldToUpdate }));

    const {
        currentIndex,
        goBackwards,
        goForwards,
        isFirstStep,
        isLastStep,
        goToSection,
        isConfirmation,
    } = useMultiForm(5);

    const manejarEnvio = e => {
        e.preventDefault();

        if (currentIndex === 1) goForwards();

    };

    const header = headersSteps.find(step => step.id === currentIndex);



    return (
        <form className='container__form' onSubmit={manejarEnvio}>
            <div>
                <header>
                    <h2 className="form__title">{header.title}</h2>
                    <h6 className="form__description">{header.description}</h6>
                </header>

                <main className={"form__main"}>
                    {/* {console.log(currentIndex)} */}
                    {currentIndex === 1 && (
                        <FormStep1 {...formData} updateForm={updateForm} />
                    )}
                    {currentIndex === 2 && (
                        <FormStep2 {...formData} updateForm={updateForm} />
                    )}
                    {currentIndex === 3 && (
                        <FormStep3 />
                    )}
                </main>
            </div>

            <footer className="form__footer">
                {!isFirstStep && (
                    <Button btnType={"back"} text={"Go Back"} onClick={goBackwards} />
                )}
                <span />
                <Button btnType={"next"} text={"Next Step"} onClick={currentIndex > 1 ? goForwards : () => ""} />
            </footer>

        </form>
    );
};

export default Form;