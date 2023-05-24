
import "../css/Button.css"

function Button({ btnType, text, onClick }) {
    return (
        <button className={"form__btn form__btn--" + btnType} onClick={onClick} >
            {text}
        </button>
    );

}

export default Button;