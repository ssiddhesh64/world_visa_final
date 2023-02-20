import React from 'react'
import { Navigate } from 'react-router-dom';
import { Img } from "../Img";
import { Text } from '../Text'
import { useNavigate } from "react-router-dom";



const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col font-poppins items-center justify-start max-w-[1053px] mt-[50px] md:ml-[0] sm:ml-[0] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[79px] items-center justify-start w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                    <div className="flex flex-col gap-[26px] justify-start md:w-[100%] sm:w-[100%] w-[29%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                            <Img
                                src="images/img_image2.png"
                                className="cursor-pointer object-contain h-[43px] sm:h-[auto] w-[100%]"
                                alt="imageTwo One"
                                onClick={() => navigate("/home")}
                            />
                        </div>
                        <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[7px] text-bluegray_601 text-left w-[auto]"
                            variant="body15"
                        >
                            Your partners in immigration success
                        </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:w-[100%] sm:w-[100%] w-[54%]">
                        <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[21%]">
                            <Text
                                className="text-black_903 text-left w-[auto]"
                                variant="body8"
                            >
                                Company
                            </Text>
                            <Text
                                className="cursor-pointer font-medium mt-[34px] text-bluegray_601 text-left w-[auto]"
                                variant="body10"
                            >
                                About
                            </Text>
                            <Text
                                className="cursor-pointer font-medium mt-[12px] text-bluegray_601 text-left w-[auto]"
                                variant="body10"
                            >
                                Careers
                            </Text>
                            <Text
                                className="cursor-pointer font-medium mt-[13px] text-bluegray_601 text-left w-[auto]"
                                variant="body10"
                            >
                                Mobile
                            </Text>
                        </div>
                        <div className="flex flex-col gap-[32px] items-center justify-start md:w-[100%] sm:w-[100%] w-[17%]">
                            <Text
                                className="text-black_903 text-left w-[auto]"
                                variant="body8"
                            >
                                Contact
                            </Text>
                            <Text
                                className="cursor-pointer font-medium text-bluegray_601 text-left w-[auto]"
                                variant="body10"
                                onClick={() => navigate("/faq")}
                            >
                                Help/FAQ
                            </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[38%]">
                            <Text
                                className="text-black_903 text-left w-[auto]"
                                variant="body8"
                            >
                                More
                            </Text>
                            <Text
                                className="cursor-pointer font-medium mt-[34px] text-bluegray_601 text-left w-[auto]"
                                variant="body10"
                                onClick={() => navigate("/immigration")}
                            >
                                Immigration packages
                            </Text>
                            <Text
                                className="cursor-pointer font-medium mt-[14px] text-bluegray_601 text-left w-[auto]"
                                variant="body10"
                                onClick={() => navigate("/australia")}
                            >
                                Migrate to Australia
                            </Text>
                            <Text
                                className="cursor-pointer font-medium mt-[16px] text-bluegray_601 text-left w-[auto]"
                                variant="body10"
                                onClick={() => navigate("/canada")}
                            >
                                Migrate to Canada
                            </Text>
                            <Text
                                className="cursor-pointer font-medium mt-[16px] text-bluegray_601 text-left w-[auto]"
                                variant="body10"
                                onClick={() => navigate("/assessment")}
                            >
                                Free Assessment
                            </Text>
                        </div>
                    </div>
                </div>
                <Text
                    className="font-medium text-bluegray_601 text-left w-[auto]"
                    variant="body14"
                >
                    All rights reserved@worldvisa.in
                </Text>
            </div>
        </div>
    )
}

export { Footer }