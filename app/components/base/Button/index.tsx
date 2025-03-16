import { ContainerProps } from "@/types";
import cn from "classnames";
import React, { FC } from "react";

type ButtonProps = {
  onClick: () => {};
} & ContainerProps;

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={cn("flex p-4 rounded-lg", className)}>
      {children}
    </div>
  );
};

export default Button;
