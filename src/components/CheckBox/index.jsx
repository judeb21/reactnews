import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineBlack900: "border-[1.5px] border-black_900 border-solid",
};
const shapes = { RoundedBorder4: "rounded" };
const sizes = { sm: "pl-[3px] py-[3px]" };

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      shape,
      variant,
      size,
      id = "checkbox_id",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ""} ${
              (size && sizes[size]) || ""
            } ${(variant && variants[variant]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf(["OutlineBlack900"]),
  size: PropTypes.oneOf(["sm"]),
};

CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  shape: "",
  variant: "",
  size: "",
};

export { CheckBox };
