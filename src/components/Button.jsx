import React from "react";
import { cva } from "class-variance-authority";

const classes = cva(
  "text-center flex items-center border border-white h-12 rounded-full px-6 font-medium",
  {
    variants: {
      variant: {
        primary: "bg-lime-400 text-neutral-950 border-lime-400",
        secondary: " border-white text-white bg-transparent",
      },
      size: {
        sm: "h-10",
      },
    },
  }
);

const Button = ({ children, ...props }) => {
  const { variant, className, size } = props;

  return (
    <buttonv
      className={classes({
        variant: variant,
        className: className,
        size: size,
      })}>
      {children}
    </buttonv>
  );
};

export default Button;
