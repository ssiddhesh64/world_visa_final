import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  CircleBorder27: "rounded-radius27",
  RoundedBorder10: "rounded-radius10",
  CircleBorder24: "rounded-radius24",
  RoundedBorder31: "rounded-radius31",
  icbRoundedBorder20: "rounded-radius20",
  icbCircleBorder26: "rounded-radius26",
  icbRoundedBorder16: "rounded-radius16",
  icbRoundedBorder13: "rounded-radius13",
  icbRoundedBorder10: "rounded-radius10",
};
const variants = {
  OutlineBluegray901:
    "border border-bluegray_901 border-solid text-bluegray_901",
  FillGray300: "bg-gray_300 text-black_900",
  FillIndigoA200: "bg-indigo_A200 text-white_A700",
  OutlineAmber70026: "bg-amber_700 shadow-bs3 text-white_A700",
  OutlineAmber70026_1: "bg-light_blue_A700 shadow-bs3 text-white_A700",
  OutlineBlueA400: "outline outline-[0.5px] outline-blue_A400 text-black_900",
  OutlineGray100: "border border-gray_100 border-solid text-blue_A700",
  FillBlueA700: "bg-blue_A700 text-white_A700",
  OutlineBlueA7002d: "bg-blue_A700 shadow-bs text-white_A700",
  OutlineDeeppurpleA20059:
    "border border-deep_purple_A200_59 border-solid text-black_900",
  FillWhiteA700: "bg-white_A700 text-bluegray_900",
  GradientAmber900DeeporangeA400: "bg-gradient  text-white_A700",
  FillDeeppurple700: "bg-purple-800 text-gray-100",
  OutlineIndigoA20019: "bg-gray_901 shadow-bs4 text-white_A700",
  icbOutlineBlack90019: "bg-white_A700 shadow-bs2",
  icbOutlineRed4004c: "bg-red_400 shadow-bs1",
  icbFillOrange300: "bg-orange_300",
  icbFillYellow700: "bg-yellow_700",
  icbFillDeeporange600: "bg-deep_orange_600",
  icbFillCyan900: "bg-cyan_900",
  icbOutlineBlack90019_1: "bg-gradient1  shadow-bs2",
  icbFillPurple50: "bg-purple_50",
  icbFillIndigoA200: "bg-indigo_A200",
};
const sizes = {
  sm: "p-[5px]",
  md: "p-[9px]",
  lg: "p-[13px]",
  xl: "pr-[13px] py-[15px]",
  "2xl": "p-[17px]",
  "3xl": "p-[21px] sm:px-[20px]",
  smIcn: "p-[4px]",
  mdIcn: "p-[12px]",
  lgIcn: "p-[17px]",
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
      className={`${className} ${shapes[shape] || ""} ${variants[variant] || ""
        } ${sizes[size] || ""} `}
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
    "RoundedBorder5",
    "CircleBorder27",
    "RoundedBorder10",
    "CircleBorder24",
    "RoundedBorder31",
    "icbRoundedBorder20",
    "icbCircleBorder26",
    "icbRoundedBorder16",
    "icbRoundedBorder13",
    "icbRoundedBorder10",
  ]),
  variant: PropTypes.oneOf([
    "OutlineBluegray901",
    "FillGray300",
    "FillIndigoA200",
    "OutlineAmber70026",
    "OutlineAmber70026_1",
    "OutlineBlueA400",
    "OutlineGray100",
    "FillBlueA700",
    "OutlineBlueA7002d",
    "OutlineDeeppurpleA20059",
    "FillWhiteA700",
    "GradientAmber900DeeporangeA400",
    "FillDeeppurple700",
    "OutlineIndigoA20019",
    "icbOutlineBlack90019",
    "icbOutlineRed4004c",
    "icbFillOrange300",
    "icbFillYellow700",
    "icbFillDeeporange600",
    "icbFillCyan900",
    "icbOutlineBlack90019_1",
    "icbFillPurple50",
    "icbFillIndigoA200",
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
    "lgIcn",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "icbOutlineBlack90019",
  size: "mdIcn",
};

export { Button };
