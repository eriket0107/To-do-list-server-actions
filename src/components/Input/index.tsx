import { InputHTMLAttributes } from "react";
import styles from "./style.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasBorder?: boolean;
}

export const Input = ({ hasBorder = true, ...props }: InputProps) => {
  const inputType = () => {
    switch (props.type) {
      case "checkbox":
        return styles.inputCheckbox;
      default:
        return styles.inputDefault;
    }
  };

  return (
    <input
      {...props}
      className={`${inputType()} ${
        hasBorder ? styles.border : styles.noBorder
      }`}
    />
  );
};
