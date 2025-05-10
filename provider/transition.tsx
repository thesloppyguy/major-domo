import React, { createContext, useState } from "react";

const TransitionContext = createContext<TransitionContextType>({
  completed: false,
  toggleCompleted: () => {},
});

type TransitionContextType = {
  completed: boolean;
  toggleCompleted: (value: boolean) => void;
};

export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = (value: boolean) => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider
      value={{
        toggleCompleted,
        completed,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
