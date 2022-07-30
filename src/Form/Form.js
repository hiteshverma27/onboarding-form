import { useState } from "react";
import { Header } from "../components";
import "./Form.css";
import { headerTitles } from "./StaticData";
import { StepFour, StepOne, StepThree, StepTwo } from "./Steps";
import { submitHandler } from "./Utils/SubmitHandler";

function Form() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
    userType: "",
  });

  const steps = Array.from({ length: 4 }, (_, index) => index + 1);

  // form steps

  let formSteps;
  switch (step) {
    case 1:
      formSteps = (
        <StepOne
          setFormData={setFormData}
          formData={formData}
          headerTitles={headerTitles[step]}
        />
      );
      break;
    case 2:
      formSteps = (
        <StepTwo
          setFormData={setFormData}
          formData={formData}
          headerTitles={headerTitles[step]}
        />
      );
      break;
    case 3:
      formSteps = (
        <StepThree
          setFormData={setFormData}
          formData={formData}
          headerTitles={headerTitles[step]}
        />
      );
      break;
    case 4:
      formSteps = (
        <StepFour
          userName={formData.fullName}
          headerTitles={headerTitles[step]}
        />
      );
      break;
    default:
      formSteps = <h1>Default step</h1>;
  }

  return (
    <div className="form-wrapper">
      <h1>Eden</h1>
      <div
        style={{ display: "flex", padding: "0" }}
        className="stepper-container"
      >
        {steps.map((item, idx) => (
          <div className="stepper-container" key={idx}>
            <span className={`stepper-span ${step >= item && "step-active"}`}>
              {item}
            </span>

            {step >= item && (
              <div
                className={`stepper-line ${
                  idx === 0 || steps.length - 1 === idx
                    ? "stepper-line-half"
                    : "stepper-line-full"
                } ${steps.length - 1 === idx && "stepper-line-left"}`}
              ></div>
            )}
          </div>
        ))}
      </div>
      <div className="main">
        <div className="test">
          {step !== 4 && <Header headerTitles={headerTitles} step={step} />}
          {formSteps}
          {error && <p>{error}</p>}
          {step === 4 ? (
            <button
              className="submit-button"
              onClick={() => {
                console.log(formData);
                alert("All UserData printed on console for further use!");
              }}
            >
              Launch Eden
            </button>
          ) : (
            <button
              className="submit-button"
              onClick={() => submitHandler(step, setStep, setError, formData)}
            >
              Create workspace
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export { Form };
