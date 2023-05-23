import { useState } from "react";

const useMultiForm = (formStep) => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const goBackwards = () => {
        if (currentIndex === 1) return;
        setCurrentIndex((prev) => prev - 1);
    };

    const goForwards = () => {
        if (currentIndex === formStep - 1) return;
        setCurrentIndex((prev) => prev + 1);
    };

    // go to section
    const goToSection = (item) => {
        setCurrentIndex(item);
    };

    return {
        currentIndex,
        goForwards,
        goBackwards,
        goToSection,
        isFirstStep: currentIndex === 1,
        isLastStep: currentIndex === formStep - 2,
        isConfirmation: currentIndex === formStep - 1,
    };
};

export default useMultiForm;