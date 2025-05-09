import { ButtonHTMLAttributes } from "react";
import styles from "./style.module.css";
import { cn } from "@/utils/classNames";

export const Button = ({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
