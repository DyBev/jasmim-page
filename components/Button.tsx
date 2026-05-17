import clsx from "clsx";
import style from "./Button.module.scss";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children: ReactNode
};

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={clsx(style.button, className)} {...props}>{children}</button>
  );

}
