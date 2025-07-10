import React from "react";

export const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}: any) => {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";
  const sizes = {
    default: "h-10 px-4 text-sm",
    lg: "h-11 px-8 text-base",
  };
  const variants = {
    default: "bg-brand text-black hover:bg-yellow-500",
    outline: "border border-brand text-brand hover:bg-brand hover:text-black",
  };
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
