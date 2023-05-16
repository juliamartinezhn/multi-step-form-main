
import { useState } from 'react';

function Button({ btnType, text, changeStep }) {
    // currentStep = [numberStep, formFlexColumn]
    // const [currentStep, setCurrentStep] = useState(1);

    // const setStep = () => {
    //     (btnType === "next") ? manejarNext() : manejarBack();
    //     changeStep(currentStep);
    //     console.log("===============================")
    //     console.log(currentStep)
    //     console.log(newStep)
    // }

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

    // const manejarNext = () => {
    //     setCurrentStep(currentStep + 1);

    // }

    // const manejarBack = () => {
    //     setCurrentStep(currentStep - 1);
    // }
    // onClick={setStep}


    return (
        <button className={"form__btn form__btn--" + btnType}>
            {text}
        </button>
    );

}

export default Button;