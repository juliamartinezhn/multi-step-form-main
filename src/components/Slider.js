import '../css/Slider.css';
import { useState } from 'react';

function Slider({ initial, sliderChosenPlan }) {
    const [isMonthly, setIsMonthly] = useState(initial);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
        sliderChosenPlan(isMonthly);

    };

    return (
        <div className="slider-container">
            <span className={`slider-option ${isMonthly ? 'active' : ''}`}>Monthly</span>
            <label className="switch">
                <input id='slider' name='slider' type="checkbox" checked={!isMonthly} onChange={handleToggle} />
                <span className="slider round"></span>
            </label>
            <span className={`slider-option ${!isMonthly ? 'active' : ''}`}>Yearly</span>
        </div>
    );
}

export default Slider;