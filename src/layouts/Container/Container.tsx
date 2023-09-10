import { FC } from "react";
import { IContainerProps } from "./Container.types";

const Container: FC<IContainerProps> = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={`container px-4 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
