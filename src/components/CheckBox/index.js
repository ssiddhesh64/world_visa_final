import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const sizes = {
  sm: "pl-[4px] py-[4px]",
  md: "pt-[6px]",
  lg: "pl-[6px] py-[6px]",
};

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName}   ${sizes[size] || ""}`}
            ref={ref}
            type="checkbox"
            checked={true}
            name={name}
            {...restProps}
          />
          {label}
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
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  size: "md",
};

export { CheckBox };
