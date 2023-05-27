import "../css/FormStep3.css";
import Step3FormOption from "./Step3FormOption.js";
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
                <Step3FormOption key={option.isBoolean} checkMark={checkMark} {...option}
                    onChange={e => updateForm({ [option.isBoolean]: e.target.checked })}
                    price={planType
                        ? "+$" + option.priceMonthly + "/mo"
                        : "+$" + option.priceYearly + "/yr"} />
            ))}
        </>
    );
}

export default FormStep3;