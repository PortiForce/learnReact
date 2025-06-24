import React from "react";
import cl from "./DefaultModal.module.css";

const DefaultModal = ({ children, isVisible, setVisible }) => {
  const rootClasses = [cl.defModal];

  if (isVisible === true) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.defModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default DefaultModal;
