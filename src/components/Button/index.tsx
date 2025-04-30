import { ButtonHTMLAttributes } from "react";
import styles from "./style.module.css";

export const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
