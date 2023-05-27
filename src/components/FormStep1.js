import Step1FormInput from "./Step1FormInput.js";
import "../css/FormStep1.css";

function FormStep1({ name, email, phone, updateForm }) {

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            label: "Name",
            placeholder: "e.g. Stephen King",
            errorMessage: "Letters only! e.g. Stephen King",
            pattern: "[A-Za-z ]{3,}",
            minLength: "3",
            required: true,
            autoFocus: true,
            autoComplete: "off",
        },
        {
            id: 2,
            name: "email",
            type: "email",
            label: "Email Address",
            placeholder: "e.g. stephenking@lorem.com",
            errorMessage: "Invalid email! e.g. stephenking@lorem.com",
            pattern: "^[a-zA-Z0-9_]{1,}[a-zA-Z0-9_.+-]{0,}@[a-zA-Z0-9_-]{2,}([.][a-zA-Z]{2,}|[.][a-zA-Z0-9_-]{2,}[.][a-zA-Z]{2,})$",
            required: true,
            autoComplete: "off",
        },
        {
            id: 3,
            name: "phone",
            type: "tel",
            label: "Phone Number",
            placeholder: "e.g. 9856-7890",
            errorMessage: "Invalid phone! number. e.g. 9856-7890",
            pattern: "[0-9]{4}-[0-9]{4}",
            minLength: "9",
            maxLength: "9",
            required: true,
            autoComplete: "off",
        }
    ]

    return (
        <>
            {inputs.map((input) => (
                <Step1FormInput
                    key={input.id}
                    {...input}
                    value={input.id === 1 ? name : input.id === 2 ? email : phone}
                    onChange={(e) => updateForm({ [input.name]: e.target.value })}
                />
            ))}
        </>
    );

};


export default FormStep1;