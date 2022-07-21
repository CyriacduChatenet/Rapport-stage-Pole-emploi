import "./button.css";
import { ButtonProp } from "./types/button";

export const Button = ({ label, color }: ButtonProp) => {
  return (
    <button
    className={color === 'transparent' ? "btn-transparent" : "btn-blue"}
    >
      {label}
    </button>
  );
};
