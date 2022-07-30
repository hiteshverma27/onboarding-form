import Check from "../../assets/Check-icon";

function StepFour({ userName }) {
  return (
    <div>
      <div className="complete-icon">
        <Check />
      </div>
      <h1>Congratulations, {userName.split(" ")[0]}!</h1>
      <p>You have completed onboarding, you can start using the Eden!</p>
    </div>
  );
}

export { StepFour };
