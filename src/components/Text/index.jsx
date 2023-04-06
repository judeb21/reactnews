import React from "react";

const variantClasses = {
  h1: "font-semibold text-5xl sm:text-[38px] md:text-[44px]",
  h2: "text-4xl sm:text-[32px] md:text-[34px]",
  h3: "font-normal sm:text-2xl md:text-[26px] text-[28px]",
  h4: "font-semibold text-2xl md:text-[22px] sm:text-xl",
  h5: "font-semibold text-xl",
  h6: "text-lg",
  body1: "font-normal text-[17px]",
  body2: "text-base",
  body3: "font-normal text-[15px]",
  body4: "text-sm",
  body5: "text-xs",
  body6: "text-[10px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
