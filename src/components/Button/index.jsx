import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-lg",
  CircleBorder26: "rounded-[26px]",
  RoundedBorder5: "rounded-[5px]",
  icbCircleBorder30: "rounded-[30px]",
  icbRoundedBorder5: "rounded-[5px]",
};
const variants = {
  FillBlack900: "bg-black_900 text-white_A700",
  FillBluegray900: "bg-bluegray_900 text-white_A700",
  FillDeeporangeA400: "bg-deep_orange_A400 text-white_A700",
  OutlineWhiteA700: "border border-solid border-white_A700 text-white_A700",
  FillRed900: "bg-red_900 text-white_A700",
  FillGreen700: "bg-green_700 text-white_A700",
  FillPurple500: "bg-purple_500 text-white_A700",
  FillOrangeA700: "bg-orange_A700 text-white_A700",
  OutlineBluegray900:
    "bg-white_A700 border border-bluegray_900 border-solid text-bluegray_900",
  FillGray50: "bg-gray_50 text-black_900",
  OutlineBluegray900_1:
    "border border-bluegray_900 border-solid text-bluegray_900",
  FillGray100: "bg-gray_100 text-black_900",
  icbOutlineWhiteA700: "bg-white_A700 border-2 border-solid border-white_A700",
  icbFillGray100: "bg-gray_100",
};
const sizes = {
  sm: "p-[5px]",
  md: "p-2",
  lg: "pl-[11px] py-[11px]",
  xl: "p-3",
  "2xl": "p-[15px]",
  "3xl": "p-[18px]",
  smIcn: "p-[7px]",
  mdIcn: "p-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "CircleBorder26",
    "RoundedBorder5",
    "icbCircleBorder30",
    "icbRoundedBorder5",
  ]),
  variant: PropTypes.oneOf([
    "FillBlack900",
    "FillBluegray900",
    "FillDeeporangeA400",
    "OutlineWhiteA700",
    "FillRed900",
    "FillGreen700",
    "FillPurple500",
    "FillOrangeA700",
    "OutlineBluegray900",
    "FillGray50",
    "OutlineBluegray900_1",
    "FillGray100",
    "icbOutlineWhiteA700",
    "icbFillGray100",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "smIcn",
    "mdIcn",
  ]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
