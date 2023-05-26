import { useState } from 'react';
import './App.css';
import "./css/StepsAsideBar.css";
import "./css/Form.css";
import FormStep1 from "./components/FormStep1.js";
import FormStep2 from "./components/FormStep2.js";
import FormStep3 from "./components/FormStep3.js";
import FormStep4 from "./components/FormStep4.js";
import Button from "./components/Button.js";
import useMultiForm from './components/useMultiForm';

const dataSteps = [
  {
    number: 1,
    asideInfo: "YOUR INFO",
    title: "Personal info",
    description: "Please provide your name, email address, and phone number."
  },
  {
    number: 2,
    asideInfo: "SELECT PLAN",
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing."
  },
  {
    number: 3,
    asideInfo: "ADD-ONS",
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience."
  },
  {
    number: 4,
    asideInfo: "SUMMARY",
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming."
  },
  {
    number: 5,
    title: "",
    description: ""
  }
];

function App() {


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

  const header = dataSteps.find(step => step.number === currentIndex);

  return (
    <div className="App">
      <div className='App__container'>

        <aside className='container__steps-aside'>
          {dataSteps.map(step => (
            (step.number !== 5) ?
              <div key={step.number} className="step-item">
                <span className={step.number === currentIndex ? "step__number-circle circle--active" : "step__number-circle"}>
                  {step.number}
                </span>
                <p>STEP {step.number}</p>
                <p>{step.asideInfo}</p>
              </div>
              : ""
          ))}
        </aside>

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
                <FormStep4 formData={formData} goToSection={goToSection} />
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


      </div>
    </div>
  );
};

export default App;
