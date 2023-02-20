import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[70px]",
  h2: "font-bold md:text-[48px] sm:text-[48px] text-[64px]",
  h3: "font-bold sm:text-[40px] md:text-[46px] text-[50px]",
  h4: "font-extrabold sm:text-[36px] md:text-[42px] text-[46px]",
  
  
  h5: "sm:text-[36px] md:text-[38px] text-[40px]",
  h6: "font-extrabold sm:text-[34px] md:text-[36px] text-[38px]",
  h7: "font-normal text-[9px]",
  h8: "font-bold md:text-[48px] sm:text-[48px] text-[64px]",
  h9: "font-bold sm:text-[24px] md:text-[26px] text-[28px]",
  h10: "font-bold sm:text-[20px] md:text-[22px] text-[24px]",
  h11: "font-bold sm:text-[17px] md:text-[19px] text-[21px]",
  h12: "font-medium text-[18px]",
  h13: "font-extrabold sm:text-[34px] md:text-[36px] text-[38px]",
  h14: "text-[20px]",
  h15: "font-bold sm:text-[18px] md:text-[20px] text-[22px]",
  h16: "font-bold sm:text-[34px] md:text-[36px] text-[38px]",

  body1: "font-normal sm:text-[32px] md:text-[34px] text-[36px]",
  body2: "font-semibold sm:text-[28px] md:text-[30px] text-[32px]",
  body3: "font-extrabold sm:text-[26px] md:text-[28px] text-[30px]",
  body4: "sm:text-[24px] md:text-[26px] text-[28px]",
  body5: "font-bold sm:text-[21px] md:text-[23px] text-[25px]",
  body6: "sm:text-[20px] md:text-[22px] text-[24px]",
  body7: "sm:text-[18px] md:text-[20px] text-[22px]",
  body8: "font-bold sm:text-[17px] md:text-[19px] text-[21px]",
  body9: "text-[20px]",
  body10: "text-[18px]",
  body11: "font-medium text-[17px]",
  body12: "text-[16px]",
  body13: "font-medium text-[15px]",
  body14: "text-[14px]",
  body15: "text-[13px]",
  body16: "text-[12px]",
  body17: "font-normal text-[11px]",
  body18: "font-normal text-[16px]",
  body19: "text-[14px]",
  body20: "font-medium text-[13px]",
  body21: "font-semibold text-[12px]"
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
