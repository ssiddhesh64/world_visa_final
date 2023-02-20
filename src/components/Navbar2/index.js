import { useState } from 'react';
import { close, worldVisaLogo, menu } from '../../assets';
import { navLinks } from '../../constants'
import {
    Img, Text
} from "components";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full absolute flex py-6 justify-between items-center">
            <nav className="w-full flex py-6 justify-between items-center navbar z-10">
                <img src={worldVisaLogo} alt="worldVisaLogo" />
                {/* <ul className="list-none sm:hidden md:hidden flex justify-center items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-black" : "text-gray_500"
                                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                            onClick={(e) => { setActive(nav.title); console.log(e) }}
                        >
                            <a >{nav.title}</a>
                        </li>
                    ))}
            </ul> */}
                <div className="list-none sm:hidden md:hidden gap-[30px] flex justify-center items-center flex-1">
                    {/* <div className="flex flex-col cursor-pointer h-[24px] md:h-[auto] sm:h-[auto] items-start justify-start w-[auto]"> */}
                    <Text
                        className="cursor-pointer text-gray_500"
                        variant="body14"
                        onClick={() => navigate("/home")}
                    >
                        Home
                    </Text>
                    {/* </div> */}
                    {/* <div className="flex flex-col h-[24px] md:h-[auto] sm:h-[auto] items-start justify-start sm:ml-[0] ml-[40px] w-[auto]"> */}
                    <Text
                        className="cursor-pointer text-gray_500"
                        variant="body14"
                        onClick={() => navigate("/immigration")}
                    >
                        Packages
                    </Text>
                    {/* </div> */}
                    {/* <div className="flex flex-row gap-[3px] items-center justify-start sm:ml-[0] ml-[39px] w-[auto]"> */}
                    <div className="flex flex-col h-[24px] md:h-[auto] sm:h-[auto] items-end justify-start">
                        <div className='flex items-center justify-center gap-[5px]'>
                            <Text
                                className="cursor-pointer text-gray_500"
                                variant="body14"
                                onClick={() => setOpen(!open)}
                            >
                                Immigration
                            </Text>
                            <Img
                                src="images/img_arrowdown.svg"
                                className="cursor-pointer h-[16px] w-[16px]"
                                alt="arrowdown"
                                onClick={() => setOpen(!open)}
                            />
                        </div>
                        <ul className={`pt-2 cursor-pointer outline-1 text-sm text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto] ${!open ? "hidden" : 'block'} z-10`}>
                            <li className='pt-1' onClick={() => navigate("/canada")}>Canada</li>
                            <li className='pt-1' onClick={() => navigate("/australia")}>Australia</li>
                        </ul>
                    </div>

                    {/* </div> */}
                    {/* <div className="flex flex-col h-[24px] md:h-[auto] sm:h-[auto] items-start justify-start sm:ml-[0] ml-[34px] w-[auto]"> */}
                    <Text
                        className="cursor-pointer text-gray_500"
                        variant="body14"
                        onClick={() => navigate("/teams")}
                    >
                        Team
                    </Text>
                    {/* </div> */}
                    {/* <div
                    className="cursor-pointer flex flex-col h-[24px] md:h-[auto] sm:h-[auto] items-start justify-start sm:ml-[0] ml-[40px] w-[auto]"
                    onClick={() => navigate("/blog")}
                > */}
                    <Text
                        className="cursor-pointer text-gray_500"
                        variant="body14"
                        onClick={() => navigate("/blog")}
                    >
                        Blog
                    </Text>
                    {/* </div> */}
                    {/* <div
                    className="common-pointer flex flex-col h-[24px] md:h-[auto] sm:h-[auto] items-start justify-start sm:ml-[0] ml-[34px] w-[auto]"
                    onClick={() => navigate("/contacts")}
                > */}
                    <Text
                        className="cursor-pointer text-gray_500"
                        variant="body14"
                        onClick={() => navigate("/contacts")}
                    >
                        Contacts
                    </Text>
                    {/* </div> */}
                </div>

                <div className="sm:flex md:flex hidden flex-1 justify-end items-center z-10">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                    >
                        {/* <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-black" : "text-gray_500"
                                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={(e) => { setActive(nav.title); console.log(e) }}
                            >
                                <a >{nav.title}</a>
                            </li>
                        ))}
                    </ul> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}
