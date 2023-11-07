import { useState } from "react";

const useNavigation = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (index: number) => {
    setActiveStep(index);
  };

  return { activeStep, handleNext, handleBack, handleChange };
};

export default useNavigation;
