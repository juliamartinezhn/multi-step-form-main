import "../css/StepsAsideBar.css";

function StepsAsideBar(props) {
    return (
        <aside className='container__steps-aside'>
            <StepElement number={"1"} description={"YOUR INFO"} />
            <StepElement number={"2"} description={"SELECT PLAN"} />
            <StepElement number={"3"} description={"ADD-ONS"} />
            <StepElement number={"4"} description={"SUMMARY"} />
        </aside>
    );
};

function StepElement({ number, description }) {
    return (
        <div className="step-item">
            <span>{number}</span>
            <p>STEP {number}</p>
            <p>{description}</p>
        </div>
    );
};

export default StepsAsideBar;