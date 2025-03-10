import React from "react";

const FrostedGlass = ({
  className,
  color,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div className="relative w-full max-w-md mx-auto" {...props}>
      <div
        className={`absolute inset-0 bg-gradient-to-br from-${
          color !== null ? color : "primary"
        } to-secondary opacity-50 blur-xl`}
      />
      <div className="relative z-10 bg-white/05 backdrop-blur-lg rounded-lg py-1 px-3 shadow-lg border-[1px]">
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};

export default FrostedGlass;
