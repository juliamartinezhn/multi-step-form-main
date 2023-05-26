import "../css/FormStep4.css";


function FormStep4({ formData, goToSection }) {
    let total = 0;

    const plans = [
        {
            planName: "Arcade",
            type: formData.planType ? "(Monthly)" : "(Yearly)",
            label: formData.planType ? "/mo" : "/yr",
            price: formData.planType ? 9 : 90
        },
        {
            planName: "Advanced",
            type: formData.planType ? "(Monthly)" : "(Yearly)",
            label: formData.planType ? "/mo" : "/yr",
            price: formData.planType ? 12 : 120
        },
        {
            planName: "Pro",
            type: formData.planType ? "(Monthly)" : "(Yearly)",
            label: formData.planType ? "/mo" : "/yr",
            price: formData.planType ? 15 : 150
        }
    ]

    const addOns = [
        {
            addOnName: "Online service",
            price: formData.planType ? 1 : 10,
            exists: formData.isOnlineService
        },
        {
            addOnName: "Larger storage",
            price: formData.planType ? 2 : 20,
            exists: formData.isLargerStorage
        },
        {
            addOnName: "Customizable profile",
            price: formData.planType ? 2 : 20,
            exists: formData.isCustomizableProfile
        }
    ]

    const plan = plans.find(plan => formData.plan === plan.planName);
    total += plan.price;

    addOns.forEach(addOn => { if (addOn.exists) total += addOn.price });
    return (
        <>
            <div className="form__summary-costs">
                <div className="costs__plan summary_divider">
                    <div>
                        <p className="costs__plan-name">{plan.planName} {plan.type}</p>
                        <span className="costs__change-step text" onClick={() => goToSection(2)}>Change</span>
                    </div>
                    <span className="costs__plan-price">${plan.price}{plan.label}</span>
                </div>

                {addOns.map(addOn => (
                    addOn.exists
                        ?
                        (<div key={addOn.addOnName} className="costs__addOn summary_divider">
                            <p className="costs__addOn-name text">{addOn.addOnName}</p>
                            <span className="costs__addOn-price">+${addOn.price}{plan.label}</span>
                        </div>)
                        : ""
                ))}


            </div>
            <div className="form__summary-total summary_divider ">
                <p className="text">Total (per {formData.planType ? "month)" : "year)"}</p>
                <span className="total-price">+${total}{plan.label}</span>
            </div>
        </>
    );

}

export default FormStep4;