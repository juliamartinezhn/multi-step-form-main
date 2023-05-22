
import "../css/Button.css"

function Button({ btnType, text, onClick }) {
    // currentStep = [numberStep, formFlexColumn]
    // const [currentStep, setCurrentStep] = useState(1);

    // const setStep = () => {
    //     (btnType === "next") ? goPextButton() : (btnType === "back") ? goPrevButton() : console.log("CONFIRM");
    //     changeStep(currentStep);
    //     // console.log("===============================")
    //     // console.log(currentStep)

    // }

    // const goPextButton = () => {
    //     currentStep += 1;

    // }

    // const goPrevButton = () => {
    //     currentStep -= 1;
    // }

    return (
        <button className={"form__btn form__btn--" + btnType} onClick={onClick} >
            {text}
        </button>
    );

}

export default Button;