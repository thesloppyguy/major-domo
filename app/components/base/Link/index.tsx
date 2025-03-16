import { ContainerProps } from "@/types";
import cn from "classnames";
import React, { FC } from "react";

type LinkProps = {
  href: string;
} & ContainerProps;

const Link: FC<LinkProps> = ({ children, className, href }) => {
  return (
    <a href={href} className={cn("flex p-4 rounded-lg", className)}>
      {children}
    </a>
  );
};

export default Link;
