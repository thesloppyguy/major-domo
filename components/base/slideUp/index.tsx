import React from "react";
import cn from "classnames";

const SlideUp = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("group relative flex flex-col overflow-hidden", className)}
    >
      <div className="slide-up-content transition-transform duration-400 group-hover:-translate-y-full">
        {children}
      </div>
      <div className="slide-up-content absolute top-0 transition-transform duration-400 group-hover:translate-y-0 translate-y-full">
        {children}
      </div>
    </div>
  );
};

export default SlideUp;
