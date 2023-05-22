import '../css/Slider.css';
import { useState } from 'react';

function Slider({ sendPlan }) {
    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
        sendPlan(isMonthly);

    };

    return (
        <div className="slider-container">
            <span className={`slider-option ${isMonthly ? 'active' : ''}`}>Monthly</span>
            <label className="switch">
                <input type="checkbox" checked={!isMonthly} onChange={handleToggle} />
                <span className="slider round"></span>
            </label>
            <span className={`slider-option ${!isMonthly ? 'active' : ''}`}>Yearly</span>
        </div>
    );
}

export default Slider;