
import { useState } from 'react';

function Button({ btnType, text, currentStep, changeStep }) {
    // currentStep = [numberStep, formFlexColumn]
    // const [currentStep, setCurrentStep] = useState(1);

    const setStep = () => {
        (btnType === "next") ? manejarNext() : (btnType === "back") ? manejarBack() : console.log("CONFIRM");
        changeStep(currentStep);
        console.log("===============================")
        console.log(currentStep)

    }

    const manejarNext = () => {
        currentStep += 1;

    }

    const manejarBack = () => {
        currentStep -= 1;
    }



    return (
        <button className={"form__btn form__btn--" + btnType} onClick={setStep}>
            {text}
        </button>
    );

}

export default Button;