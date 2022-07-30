import { UserTypeCard } from "../../components";
import { userTypeCardDetails } from "../StaticData";

function StepThree({ setFormData, formData }) {
  return (
    <div>
      <div className="usertpe-card-container">
        {userTypeCardDetails.map((item, idx) => (
          <UserTypeCard
            key={idx}
            formData={formData}
            setFormData={setFormData}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            userType={item.userType}
            onclick={() => setFormData({ ...formData, userType: item.userType })}
          />
        ))}
      </div>
    </div>
  );
}
export { StepThree };
