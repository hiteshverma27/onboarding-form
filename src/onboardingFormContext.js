import { createContext, useContext, useState } from "react";

const OnboardingFormContext = createContext();

const OnboardingFormProvider = ({ children }) => {
  const [firstName, setFisrtName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceURL, setWorkspaceURL] = useState("");
  const [userType, setUserType] = useState(null);

  return (
    <OnboardingFormContext.Provider
      value={{
        firstName,
        setFisrtName,
        displayName,
        setDisplayName,
        workspaceName,
        setWorkspaceName,
        workspaceURL,
        setWorkspaceURL,
        userType,
        setUserType,
      }}
    >
      {children}
    </OnboardingFormContext.Provider>
  );
};

const useOnboardingForm = () => useContext(OnboardingFormContext);
export { OnboardingFormProvider, useOnboardingForm };
