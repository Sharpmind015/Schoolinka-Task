import { HTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  icon?: ReactNode;
  children: ReactNode;
}
