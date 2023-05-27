function Step2FormPlan({ src, planName, price, promotion, onChange, checked }) {
    return (
        <>
            <input type="radio" id={planName} name="form__plan" value={planName} autoComplete="off"
                onChange={onChange} checked={checked} />
            <label className="form__plan" htmlFor={planName}>
                <img className="plan__img" src={src} alt={"Plan " + planName} />
                <h5>{planName}</h5>
                <h6>{price}</h6>
                {promotion}
            </label >
        </>
    );
};


export default Step2FormPlan;