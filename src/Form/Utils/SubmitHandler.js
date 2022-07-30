import { errorMessages, requiredFields, validationRules } from "../StaticData";

const submitHandler = (step, setStep, setError, formData) => {
  let iserror = false;
  requiredFields[step].forEach((field) => {
    if (!validationRules[field](formData[field])) {
      iserror = true;
      setError(errorMessages[step]);
    }
  });
  if (!iserror) {
    setError(null);
    setStep((prev) => prev + 1);
  }
};
export { submitHandler };
