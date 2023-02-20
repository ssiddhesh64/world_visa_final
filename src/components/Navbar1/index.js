import React, { useState } from 'react'
import {
    Img, Text
} from "components";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex absolute cursor-pointer items-center justify-center left-[0] top-[5%] w-[22%] z-10">
                <Img
                    src="images/img_image2.png"
                    className="h-[43px] sm:h-[auto] object-contain w-[100%] z-10"
                    alt="imageTwo"
                    onClick={() => navigate("/home")}
                />
            </div>
            <div className="absolute flex sm:hidden md:hidden flex-row font-manrope sm:gap-[20px] inset-x-[0] items-center justify-center mx-[auto] top-[7%] w-[36%] z-10">
                <div className="flex flex-col cursor-pointer h-[24px] md:h-[auto] sm:h-[auto] items-start justify-start w-[auto]">
                    <Text
                        className="cursor-pointer font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                        onClick={() => navigate("/home")}
                    >
                        Home
                    </Text>
                </div>
                <div className="flex flex-col h-[24px] md:h-[auto] sm:h-[auto] items-start justify-start sm:ml-[0] ml-[40px] w-[auto]">
                    <Text
                        className="cursor-pointer font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                        onClick={() => navigate("/immigration")}
                    >
                        Packages
                    </Text>
                </div>
                <div className="flex flex-row gap-[3px] items-center justify-start sm:ml-[0] ml-[39px] w-[auto]">
                    <div className="flex flex-col h-[24px] md:h-[auto] sm:h-[auto] items-start justify-start w-[auto]">
                        <Text
                            className="cursor-pointer font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body14"
                            onClick={() => setOpen(!open)}
                        >
                            Immigration
                        </Text>
                        <ul className={`pt-2 cursor-pointer outline-1 text-sm text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto] ${!open ? "hidden" : 'block'} z-10`}>
                            <li className='pt-1' onClick={() => navigate("/canada")}>Canada</li>
                            <li className='pt-1' onClick={() => navigate("/australia")}>Australia</li>
                        </ul>
                    </div>
                    <Img
                        src="images/img_arrowdown.svg"
                        className="cursor-pointer h-[16px] w-[16px]"
                        alt="arrowdown"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="flex flex-col h-[24px] md:h-[auto] sm:h-[auto] items-start justify-start sm:ml-[0] ml-[34px] w-[auto]">
                    <Text
                        className="cursor-pointer font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                        onClick={() => navigate("/teams")}
                    >
                        Team
                    </Text>
                </div>
                <div
                    className="cursor-pointer flex flex-col h-[24px] md:h-[auto] sm:h-[auto] items-start justify-start sm:ml-[0] ml-[40px] w-[auto]"
                    onClick={() => navigate("/blog")}
                >
                    <Text
                        className="font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                    >
                        Blog
                    </Text>
                </div>
                <div
                    className="common-pointer flex flex-col h-[24px] md:h-[auto] sm:h-[auto] items-start justify-start sm:ml-[0] ml-[34px] w-[auto]"
                    onClick={() => navigate("/contacts")}
                >
                    <Text
                        className="font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                    >
                        Contacts
                    </Text>
                </div>
            </div>
        </>
    )
}

export { Navbar }