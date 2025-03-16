import { ContainerProps } from "@/types";
import cn from "classnames";
import React, { FC } from "react";

type TextTransitionProps = {
  text: string;
} & ContainerProps;

const TextTransition: FC<TextTransitionProps> = ({ text, className }) => {
  return <span className={cn("", className)}>{text}</span>;
};

export default TextTransition;
