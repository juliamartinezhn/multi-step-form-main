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
    },
    {
        id: 4,
        title: "Finishing up",
        description: "Double-check everything looks OK before confirming."
    }
    ,
    {
        id: 5,
        title: "",
        description: ""
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
        goToSection,
        isFirstStep,
        isConfirmation,
        isThankYou,
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

                    {currentIndex === 1 && (
                        <FormStep1 {...formData} updateForm={updateForm} />
                    )}
                    {currentIndex === 2 && (
                        <FormStep2 {...formData} updateForm={updateForm} />
                    )}
                    {currentIndex === 3 && (
                        <FormStep3 {...formData} updateForm={updateForm} />
                    )}
                    {currentIndex === 4 && (
                        console.log("paso 4")
                    )}
                    {currentIndex === 5 && (
                        console.log("paso 5")
                    )}
                </main>
            </div>

            <footer className="form__footer">
                {!isFirstStep && !isThankYou
                    ? <Button btnType={"back"} text={"Go Back"} onClick={goBackwards} /> : ""
                }
                <span />
                {!isConfirmation && !isThankYou
                    ? <Button btnType={"next"} text={"Next Step"} onClick={currentIndex > 1 ? goForwards : () => ""} />
                    : !isThankYou
                        ? <Button btnType={"confirm"} text={"Confirm"} onClick={currentIndex > 1 ? goForwards : () => ""} />
                        : ""
                }

            </footer>

        </form>
    );
};

export default Form;