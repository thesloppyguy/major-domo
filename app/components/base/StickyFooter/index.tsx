import { ContainerProps } from "@/types";
import React, { FC } from "react";

export type StickyFooterProps = {
  height?: string;
} & ContainerProps;

const StickyFooter: FC<StickyFooterProps> = ({
  children,
  className,
  height,
}) => {
  return (
    <div
      className={`relative h-[500px]`}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className={`fixed bottom-0 h-[500px] w-full`}>{children}</div>
    </div>
  );
};

export default StickyFooter;
