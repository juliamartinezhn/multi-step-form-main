import "../css/StepsAsideBar.css";

function StepsAsideBar() {
    const steps = [
        {
            number: 1,
            description: "YOUR INFO"
        }, {
            number: 2,
            description: "SELECT PLAN"
        }, {
            number: 3,
            description: "ADD-ONS"
        }, {
            number: 4,
            description: "SUMMARY"
        },
    ]
    //  className={step.id === currentStep ? ".span--active" : ""}
    return (
        <aside className='container__steps-aside'>
            {steps.map(step => (
                <div key={step.id + step.description} className="step-item">
                    <span>{step.number}</span>
                    <p>STEP {step.number}</p>
                    <p>{step.description}</p>
                </div>
            ))}
        </aside>
    );
};


export default StepsAsideBar;