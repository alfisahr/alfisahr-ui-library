import React from "react";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    children: string;
    variant?: "primary" | "secondary";
    onClick?: () => void;
}
export declare const Button: React.FC<ButtonProps>;
