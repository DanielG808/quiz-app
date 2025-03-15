import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-primary/45 text-background rounded-md px-4 py-2 hover:cursor-pointer hover:bg-primary/85 hover:text-white transition-all duration-200"
    >
      {children}
    </button>
  );
}
