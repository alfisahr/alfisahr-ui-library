import React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  ...rest
}) => {
  const buttonClass =
    variant === "primary"
      ? "bg-blue-500 hover:bg-blue-600 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-black";

  return (
    <button
      className={`px-4 py-2 rounded ${buttonClass}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
