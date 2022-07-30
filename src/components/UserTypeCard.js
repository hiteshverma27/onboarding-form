import React from "react";

const UserTypeCard = ({
  formData,
  title,
  subtitle,
  icon,
  userType,
  onclick,
}) => {
  return (
    <div
      className={`usertype-card ${
        formData.userType === userType && "usertype-card-active"
      }`}
      onClick={onclick}
    >
      <img src={icon} className="usertype-icon" alt={userType}/>
      <p className="usertype-title">{title}</p>
      <p> {subtitle}</p>
    </div>
  );
};
export { UserTypeCard };
