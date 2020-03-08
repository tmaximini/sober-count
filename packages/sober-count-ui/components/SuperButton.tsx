import React, { ReactElement, useState } from "react";

import "./SuperButton.css";

interface Props {
  label: String;
  onClick: () => void;
}

export default function SuperButton({ label, onClick }: Props): ReactElement {
  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    console.log("press");
    setIsActive(true);
    setTimeout(() => setIsActive(false), 500);
    onClick();
  };

  const responsiveClasses = "min-w-full md:p-8 sm:min-w-full md:min-w-25";

  return (
    <button
      className={
        isActive
          ? `confetti-button animate ${responsiveClasses}`
          : `confetti-button ${responsiveClasses}`
      }
      onClick={handlePress}
    >
      {label}
    </button>
  );
}
