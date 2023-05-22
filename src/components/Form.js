import "../css/Form.css";
import FormStep1 from "./FormStep1.js";
import FormStep2 from "./FormStep2.js";
import Button from "./Button.js";
import useMultiForm from './useMultiForm';

function Form() {
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
        }
    ]

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
        goForwards();
    };

    const header = headersSteps.find(step => step.id === currentIndex + 1);

    return (
        <form className='container__form' onSubmit={manejarEnvio}>
            <div>
                <header>
                    <h2 className="form__title">{header.title}</h2>
                    <h6 className="form__description">{header.description}</h6>
                </header>

                <main className={"form__main"}>
                    {currentIndex === 0 && (
                        <FormStep1 />
                    )}
                    {currentIndex === 1 && (
                        <FormStep2 />
                    )}
                </main>
            </div>
            <footer className="form__footer">
                {!isFirstStep && (
                    <Button btnType={"back"} text={"Go Back"} onClick={goBackwards} />
                )}
                <span />
                <Button btnType={"next"} text={"Next Step"} />
            </footer>

        </form>
    );
};

export default Form;