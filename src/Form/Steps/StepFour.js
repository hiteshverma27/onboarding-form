import Check from "../../assets/check-solid (1)";

function StepFour({ userName }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <Check />
      </div>
      <h1>Congratulations, {userName.split(" ")[0]}!</h1>
      <p>You have completed onboarding, you can start using the Eden!</p>
    </div>
  );
}

export { StepFour };
