import React from "react";
import "./index.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "primary" | "default";
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  const className = type === "primary" ? "btn-primary" : "";
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
