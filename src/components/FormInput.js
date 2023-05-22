import { useState } from "react";
import "../css/FormInput.css";

function FormInput(props) {
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };


    return (
        <fieldset className="form__item">
            <label className="form__label" htmlFor={id} >{label}</label>

            <input
                className={"form__input"}
                id={id}
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <span className={"form__error"}>
                {errorMessage}
            </span>
        </fieldset>
    );
};

export default FormInput;