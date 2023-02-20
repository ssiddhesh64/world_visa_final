import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineDeeppurpleA20059: "border border-deep_purple_A200_59 border-solid",
  Outline: "bg-gradient  outline outline-[1px]",
  OutlineIndigo50: "border border-gray-300 border-solid",
  srcOutlineIndigo50: "border border-gray-300 border-solid",
};
const shapes = {
  CircleBorder24: "rounded-radius24",
  RoundedBorder12: "rounded-radius12",
  RoundedBorder4: "rounded-radius4",
  srcRoundedBorder4: "rounded-radius4",
};
const sizes = {
  sm: "pl-[10px] py-[10px]",
  md: "p-[16px]",
  lg: "pb-[23px] pl-[20px] pr-[12px] pt-[20px]",
  smSrc: "pr-[10px] py-[10px]",
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
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
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
  shape: PropTypes.oneOf([
    "CircleBorder24",
    "RoundedBorder12",
    "RoundedBorder4",
    "srcRoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "OutlineDeeppurpleA20059",
    "Outline",
    "OutlineIndigo50",
    "srcOutlineIndigo50",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "CircleBorder24",
  variant: "OutlineDeeppurpleA20059",
  size: "md",
};

export { Input };
