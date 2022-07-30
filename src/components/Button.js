import React from "react";

const Button = ({ buttonText, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
};
export { Button };
