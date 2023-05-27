

function Step3FormOption({ id, addOnName, addOnDescription, checked, onChange, price, checkMark }) {
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

export default Step3FormOption;