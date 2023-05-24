import "../css/FormStep3.css";
import checkMark from "../assets/images/icon-checkmark.svg";



function FormStep3({ planType, isOnlineService, isLargerStorage, isCustomizableProfile, updateForm }) {

    const addOnsOptions = [
        {
            id: 1,
            addOnName: "Online service",
            addOnDescription: "Access to multiplayer games",
            checked: isOnlineService,
            priceMonthly: 1,
            priceYearly: 10,
            isBoolean: "isOnlineService",
        }, {
            id: 2,
            addOnName: "Larger storage",
            addOnDescription: "Extra 1TB of cloud save",
            checked: isLargerStorage,
            priceMonthly: 2,
            priceYearly: 20,
            isBoolean: "isLargerStorage",
        }, {
            id: 3,
            addOnName: "Customizable profile",
            addOnDescription: "Custom theme on your profile",
            checked: isCustomizableProfile,
            priceMonthly: 2,
            priceYearly: 20,
            isBoolean: "isCustomizableProfile",
        }
    ]


    return (
        <>
            {addOnsOptions.map(option => (
                <FormOption key={option.id} {...option}
                    onChange={e => updateForm({ [option.isBoolean]: e.target.checked })}
                    price={planType
                        ? "+$" + option.priceMonthly + "/mo"
                        : "+$" + option.priceYearly + "/yr"} />
            ))}
        </>
    );
}


function FormOption({ id, addOnName, addOnDescription, checked, onChange, price }) {
    return (
        <label className={checked ? "form__option-container option-container--checked" : "form__option-container"} >
            <div className="form__option-info">
                <input id={id}
                    className="option__input"
                    type="checkbox"
                    name={addOnName}
                    value={addOnName}
                    checked={checked}
                    onChange={onChange}
                    style={{ backgroundImage: `url(${checkMark})` }}
                    autoComplete="off" />

                <div>
                    <p className="form__option-name" htmlFor={id} >{addOnName}</p>
                    <p className="form__option-description">{addOnDescription}</p>
                </div>
            </div>
            <span className="form__option-price">{price}</span>
        </label>
    );
}

export default FormStep3;