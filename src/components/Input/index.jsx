import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  FillDeeppurpleA700: "bg-deep_purple_A700",
  FillGray50: "bg-gray_50",
  OutlineBlack900: "border border-black_900 border-solid",
};
const shapes = { RoundedBorder10: "rounded-[10px]" };
const sizes = {
  sm: "p-1.5",
  md: "pb-[19px] pt-[13px] px-[13px]",
  lg: "pb-[18px] pt-[23px] px-[17px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,

      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf([
    "FillDeeppurpleA700",
    "FillGray50",
    "OutlineBlack900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
