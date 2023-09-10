import { FC } from "react";
import { IButtonProps } from "./Button.types";

const Button: FC<IButtonProps> = ({
  variant,
  icon,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${className} w-full flex justify-center items-center h-10 gap-2 text-sm leading-5 font-workSans font-semibold border-[1px] rounded-lg ${
        variant === "primary" ? "text-white" : "text-gray-700"
      } ${variant === "primary" ? "bg-blue-one" : "bg-white"} ${
        variant === "primary" ? "border-blue-one" : "border-gray-300"
      } ${variant === "primary" ? "border-blue-one" : "border-gray-300"}`}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
