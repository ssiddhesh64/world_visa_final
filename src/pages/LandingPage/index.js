import React from "react";

import {
    Navbar,
    Stack,
    Img,
    Text,
    Button,
    List,
    Line,
    PagerIndicator,
    Footer
} from "components";
import { useNavigate } from "react-router-dom";


const LandingPagePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-white_A700 flex flex-col font-poppins justify-start mx-[auto] pb-[13px] pl-[13px] w-[100%]">
                <div className="flex flex-col items-center max-w-[1427px] mx-[auto] md:pl-[20px] sm:px-[20px] md:pr-[20px] w-[100%]">
                    <Navbar />
                    <Img
                        src="images/img_decore.png"
                        className="absolute h-[800px] inset-y-[0] my-[auto] object-cover right-[0] w-[auto]"
                        alt="Decore"
                    />

                    {/* girl Image */}
                    <Img
                        src="images/img_untitleddesign.png"
                        className="absolute bottom-[3%] h-[629px] object-cover right-[0] w-[52%]"
                        alt="Untitleddesign"
                    />
                    <Stack className="flex flex-col h-[800px] relative w-[100%]">
                        <Stack className="absolute h-[800px] inset-y-[0] my-[auto] right-[0] md:w-[100%] sm:w-[100%] w-[96%]">
                            <Stack className="font-poppins h-[800px] m-[auto] w-[100%]">
                                <Text
                                    className="absolute font-bold font-poppins left-[0] text-left text-red_400 top-[28%] uppercase w-[auto]"
                                    variant="body9"
                                >
                                    Immigration process made simple. just for you.
                                </Text>
                                <Text
                                    className="absolute font-inter leading-[89.00px] md:leading-[normal] sm:leading-[normal] left-[0] sm:mx-[0] text-bluegray_902 text-left top-[31%] sm:tracking-ls2 tracking-ls28000000000000003 md:tracking-ls3 sm:w-[100%] w-[50%]"
                                    as="h1"
                                    variant="h1"
                                >
                                    Introducing world’s first ‘Personalised’ Immigration Toolkits
                                </Text>
                                <div className="absolute bottom-[14%] flex flex-col gap-[12px] justify-start left-[0] w-[41%]">
                                    <Text
                                        className="font-medium leading-[30.00px] md:leading-[normal] sm:leading-[normal] md:ml-[0] ml-[8px] sm:mx-[0] text-bluegray_601 text-left sm:w-[100%] w-[99%]"
                                        variant="body12"
                                    >
                                        All-in-one DIY Immigration toolkits, personalised to meet
                                        your Immigration goals and help you take charge of your own
                                        application, at each and every step.
                                    </Text>
                                    <div className="flex sm:flex-col flex-row gap-[44px] items-center justify-start md:w-[100%] sm:w-[100%] w-[78%]">
                                        <Button
                                            className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[40%] text-[18px] text-center text-white_A700 w-[max-content]"
                                            onClick={() => navigate("/immigration")}
                                            shape="RoundedBorder10"
                                            size="3xl"
                                            variant="OutlineAmber70026"
                                        >
                                            Find out more
                                        </Button>
                                        <div className="flex flex-row gap-[21px] items-center justify-start md:w-[100%] sm:w-[100%] w-[50%]">
                                            <Button
                                                className="common-pointer flex h-[52px] items-center justify-center rounded-radius50 w-[52px]"
                                                onClick={() => navigate("/immigrationtoolkits")}
                                                size="lgIcn"
                                                variant="icbOutlineRed4004c"
                                            >
                                                <Img
                                                    src="images/img_play.svg"
                                                    className="h-[15px] w-[15px]"
                                                    alt="play"
                                                />
                                            </Button>
                                            <Text
                                                className="common-pointer text-gray_603 text-left w-[auto]"
                                                variant="body11"
                                                onClick={() => navigate("/immigrationtoolkits")}
                                            >
                                                Watch the video
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                                <Img
                                    src="images/img_decore_red_400.svg"
                                    className="absolute bottom-[47%] h-[12px] left-[9%] w-[auto]"
                                    alt="Decore One"
                                />
                            </Stack>
                        </Stack>
                        <Button
                            className="absolute bg-light_blue_A700 bottom-[3%] font-medium h-[60px] left-[5%] sm:px-[20px] px-[35px] py-[20px] rounded-radius10 text-center text-shadow-ts text-white_A700 w-[461px]"
                            onClick={() => navigate("/assessment")}
                            variant="body10"
                        >
                            Take a free assessment
                        </Button>
                    </Stack>
                </div>
                <div className="flex flex-col items-end max-w-[1427px] ml-[auto] mr-[auto] mt-[55px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] px-[23px] w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row font-inter gap-[36px] items-center justify-end mt-[20px] md:w-[100%] sm:w-[100%] w-[94%]">
                        <Stack className="h-[776px] relative md:w-[100%] sm:w-[100%] w-[38%]">
                            <Stack className="absolute h-[699px] mx-[auto] top-[0] w-[100%]">
                                <div className="absolute bg-red_A701 bottom-[0] h-[495px] left-[0] w-[77%]"></div>
                                <Img
                                    src="images/img_inspiredyoung.png"
                                    className="absolute h-[659px] mx-[auto] object-cover top-[0] w-[98%]"
                                    alt="inspiredyoung"
                                />
                            </Stack>
                            <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[6px] items-center justify-center left-[14%] p-[28px] sm:px-[20px] rounded-radius16 shadow-bs5 w-[48%]">
                                <Text
                                    className="font-bold mt-[5px] text-black_902 text-left tracking-ls032 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                    variant="body12"
                                >
                                    565,470+
                                </Text>
                                <div className="flex flex-col gap-[17px] items-center justify-start mb-[4px] w-[100%]">
                                    <Text
                                        className="font-normal not-italic text-gray_800 text-left w-[auto]"
                                        variant="body15"
                                    >
                                        People are migrating with us
                                    </Text>
                                    <Stack className="flex h-[45px] relative w-[96%]">
                                        <Stack className="flex h-[45px] my-[auto] w-[83%]">
                                            <Stack className="flex h-[45px] my-[auto] w-[78%]">
                                                <Stack className="flex h-[45px] my-[auto] w-[72%]">
                                                    <Img
                                                        src="images/img_ellipse11.png"
                                                        className="h-[45px] my-[auto] rounded-radius50 w-[45px]"
                                                        alt="EllipseEleven"
                                                    />
                                                    <Img
                                                        src="images/img_ellipse10.png"
                                                        className="h-[45px] ml-[-14px] my-[auto] rounded-radius50 w-[45px] z-[1]"
                                                        alt="EllipseTen"
                                                    />
                                                </Stack>
                                                <Img
                                                    src="images/img_ellipse9.png"
                                                    className="h-[45px] ml-[-14px] my-[auto] rounded-radius50 w-[45px] z-[1]"
                                                    alt="EllipseNine"
                                                />
                                            </Stack>
                                            <Img
                                                src="images/img_ellipse8.png"
                                                className="h-[45px] ml-[-14px] my-[auto] rounded-radius50 w-[45px] z-[1]"
                                                alt="EllipseEight"
                                            />
                                        </Stack>
                                        <Text
                                            className="bg-indigo_600 font-semibold h-[45px] items-center justify-center ml-[-16px] my-[auto] rounded-radius22 text-center text-white_A700 w-[45px] z-[1]"
                                            variant="body14"
                                        >
                                            3+
                                        </Text>
                                    </Stack>
                                </div>
                            </div>
                        </Stack>
                        <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[60%]">
                            <div className="flex flex-col gap-[57px] items-start justify-start w-[100%]">
                                <Stack className="flex h-[20px] relative w-[18%]">
                                    <Text
                                        className="font-bold m-[auto] text-red_400 uppercase w-[auto]"
                                        variant="body9"
                                    >
                                        Worldclass services
                                    </Text>

                                </Stack>
                                <Text
                                    className="sm:mx-[0] text-bluegray_903 text-left sm:w-[100%] w-[92%]"
                                    as="h3"
                                    variant="h3"
                                >
                                    Services trusted by Over 10 Lakh clients all across the globe{" "}
                                </Text>
                                <List
                                    className="sm:flex-col flex-row font-poppins gap-[49px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                                    orientation="horizontal"
                                >
                                    <Stack className="h-[590px] relative w-[100%]">
                                        <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-[auto] top-[0] w-[100%]">
                                            <Button
                                                className="flex h-[70px] items-center justify-center w-[70px]"
                                                shape="icbRoundedBorder16"
                                                size="lgIcn"
                                                variant="icbFillOrange300"
                                            >
                                                <Img
                                                    src="images/img_group115.svg"
                                                    className="h-[36px] w-[36px]"
                                                    alt="Group115"
                                                />
                                            </Button>
                                            <Text
                                                className="capitalize font-black mt-[26px] text-bluegray_904 text-left w-[auto]"
                                                variant="body9"
                                            >
                                                Consultation
                                            </Text>
                                            <div className="flex flex-col font-roboto items-center justify-start mt-[11px] w-[100%]">
                                                <Text
                                                    className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] not-italic text-black_900 text-left w-[100%]"
                                                    variant="body12"
                                                >
                                                    We assist our clients by providing legal immigration
                                                    guidance right from your application process to
                                                    getting the proper authorization for the same. Our
                                                    Legal Experts provide stage-specific consultation for
                                                    a hassle-free experience
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-[auto] w-[100%]">
                                            <Button
                                                className="flex h-[70px] items-center justify-center w-[70px]"
                                                shape="icbRoundedBorder16"
                                                size="lgIcn"
                                                variant="icbFillOrange300"
                                            >
                                                <Img
                                                    src="images/img_bookmark_gray_903.svg"
                                                    className="h-[36px] w-[36px]"
                                                    alt="bookmark"
                                                />
                                            </Button>
                                            <Text
                                                className="font-black mt-[26px] text-bluegray_904 text-left w-[auto]"
                                                variant="body9"
                                            >
                                                Immigration Lawyers
                                            </Text>
                                            <div className="flex flex-col font-roboto items-center justify-start mt-[6px] w-[100%]">
                                                <Text
                                                    className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] not-italic text-bluegray_602 text-left w-[100%]"
                                                    variant="body12"
                                                >
                                                    With over 50+ years of combined experience in the
                                                    industry, our Immigration experts and lawyers are
                                                    MARA/ICCRC certified and ready to guide you at each
                                                    step of the way
                                                </Text>
                                            </div>
                                        </div>
                                    </Stack>
                                    <div className="flex flex-col gap-[30px] justify-start w-[100%]">
                                        <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[70%]">
                                            <Button
                                                className="flex h-[70px] items-center justify-center w-[70px]"
                                                shape="icbRoundedBorder16"
                                                size="lgIcn"
                                                variant="icbFillOrange300"
                                            >
                                                <Img
                                                    src="images/img_calendar.svg"
                                                    className="h-[36px] w-[36px]"
                                                    alt="calendar"
                                                />
                                            </Button>
                                            <Text
                                                className="font-black mt-[30px] text-bluegray_904 text-left w-[auto]"
                                                variant="body9"
                                            >
                                                Assessment
                                            </Text>
                                            <div className="flex flex-col font-roboto items-center justify-start mt-[11px] w-[100%]">
                                                <Text
                                                    className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] not-italic text-bluegray_602 text-left w-[100%]"
                                                    variant="body12"
                                                >
                                                    Discover if you're eligible to take your profession to
                                                    Australia by taking the assessment. Individuals need
                                                    at least 65 points to be eligible. Check your
                                                    eligibility today!
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start justify-start w-[100%]">
                                            <Button
                                                className="flex h-[70px] items-center justify-center w-[70px]"
                                                shape="icbRoundedBorder16"
                                                size="lgIcn"
                                                variant="icbFillOrange300"
                                            >
                                                <Img
                                                    src="images/img_lightbulb.svg"
                                                    className="h-[36px] w-[36px]"
                                                    alt="lightbulb"
                                                />
                                            </Button>
                                            <Text
                                                className="font-black mt-[26px] text-bluegray_904 text-left w-[auto]"
                                                variant="body9"
                                            >
                                                Premium services
                                            </Text>
                                            <div className="flex flex-col font-roboto items-center justify-start mt-[12px] w-[100%]">
                                                <Text
                                                    className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] not-italic text-bluegray_602 text-left w-[100%]"
                                                    variant="body12"
                                                >
                                                    From pre-departure orientation, to file maintence,
                                                    Legal representation, discounts on travel partner
                                                    bookings and much more. Our premium services cater to
                                                    a worldclass experience curated just for you, like
                                                    none other.
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </List>
                            </div>
                            <Text
                                className="cursor-pointer bg-light_blue_A700 font-medium h-[60px] mt-[15px] pb-[17px] pt-[17px] sm:px-[20px] px-[20px] rounded-radius10 text-center text-shadow-ts text-white_A700"
                                variant="body10"
                                onClick={() => navigate("/immigration")}
                            >
                                Check out our Immigration Services
                            </Text>
                        </div>
                    </div>
                </div>
                <Text
                    className="font-bold pt-6 mx-[auto] text-center text-red_400 uppercase w-[auto]"
                    variant="body9"
                >
                    apply now
                </Text>
                <Stack className="font-inter h-[186px] mx-[auto] relative md:w-[100%] sm:w-[100%] w-[64%]">
                    <Text
                        className="leading-[124.50%] text-black_900 text-center w-[100%]"
                        as="h3"
                        variant="h3"
                    >
                        Your immigration overseas is just a click away. Check your
                        eligbility for free.
                    </Text>
                    <Img
                        src="images/img_vector_gray_500.svg"
                        className="absolute bottom-[13%] h-[5px] right-[14%] w-[auto]"
                        alt="Vector"
                    />
                </Stack>
                <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[21%] mx-[auto] mt-[62px] text-[18px] text-center text-white_A700 w-[max-content]"
                    onClick={() => navigate("/assessment")}
                    shape="RoundedBorder10"
                    size="2xl"
                    variant="OutlineAmber70026_1"
                >
                    Take a free assessment
                </Button>
                <div className="flex flex-col font-poppins items-end max-w-[1427px] ml-[auto] mr-[auto] mt-[143px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] md:px-[40px] px-[91px] w-[100%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[95%]">
                        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[18px] sm:gap-[18px] items-start justify-between w-[100%]">
                            <div className="flex flex-col gap-[39px] items-center justify-start md:w-[100%] sm:w-[100%] w-[52%]">
                                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                                    <Text
                                        className="font-poppins font-semibold md:ml-[0] sm:ml-[0] ml-[3px] text-bluegray_601 text-left w-[auto]"
                                        variant="body10"
                                    >
                                        Easy and Fast Processes
                                    </Text>
                                    <Text
                                        className="capitalize font-inter text-bluegray_903 text-left w-[100%]"
                                        as="h3"
                                        variant="h3"
                                    >
                                        Start your pR Journey in 3 easy steps
                                    </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[98%]">
                                    <List
                                        className="flex-col gap-[48px] grid sm:grid-cols-1 items-center w-[100%]"
                                        orientation="vertical"
                                    >
                                        <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                                            <div className="flex sm:flex-col flex-row sm:gap-[21px] items-start justify-between w-[100%]">
                                                <Button
                                                    className="flex items-center justify-center mb-[12px] sm:mt-[0] mt-[4px] w-[47px]"
                                                    shape="icbRoundedBorder13"
                                                    variant="icbFillYellow700"
                                                >
                                                    <Img
                                                        src="images/img_group7.svg"
                                                        className="h-[22px] w-[22px]"
                                                        alt="GroupSeven"
                                                    />
                                                </Button>
                                                <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[90%]">
                                                    <Text
                                                        className="font-bold text-bluegray_601 text-left w-[auto]"
                                                        variant="body12"
                                                    >
                                                        Consultation
                                                    </Text>
                                                    <Text
                                                        className="font-normal leading-[124.50%] mt-[4px] not-italic text-bluegray_601 text-left w-[100%]"
                                                        variant="body12"
                                                    >
                                                        Our immigration experts are available 24*7 at each
                                                        step of the way.{" "}
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-start mr-[38px] my-[0] md:w-[100%] sm:w-[100%] w-[94%]">
                                            <div className="flex sm:flex-col flex-row sm:gap-[21px] items-start justify-between w-[100%]">
                                                <Button
                                                    className="flex items-center justify-center mb-[12px] sm:mt-[0] mt-[4px] w-[47px]"
                                                    shape="icbRoundedBorder13"
                                                    variant="icbFillDeeporange600"
                                                >
                                                    <Img
                                                        src="images/img_map.svg"
                                                        className=""
                                                        alt="map"
                                                    />
                                                </Button>
                                                <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                                                    <Text
                                                        className="font-bold text-bluegray_601 text-left w-[auto]"
                                                        variant="body12"
                                                    >
                                                        Assessment Report
                                                    </Text>
                                                    <Text
                                                        className="font-normal leading-[124.50%] mt-[3px] not-italic text-bluegray_601 text-left w-[100%]"
                                                        variant="body12"
                                                    >
                                                        Printed Points, Skill/Profile Assessment with a
                                                        detailed walkthrough by the appointed expert
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-start mr-[58px] my-[0] md:w-[100%] sm:w-[100%] w-[91%]">
                                            <div className="flex sm:flex-col flex-row sm:gap-[21px] items-start justify-between w-[100%]">
                                                <Button
                                                    className="flex items-center justify-center mb-[33px] sm:mt-[0] mt-[4px] w-[47px]"
                                                    shape="icbRoundedBorder13"
                                                    variant="icbFillCyan900"
                                                >
                                                    <Img
                                                        src="images/img_car.svg"
                                                        className=""
                                                        alt="car"
                                                    />
                                                </Button>
                                                <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                                                    <Text
                                                        className="font-bold text-bluegray_601 text-left w-[auto]"
                                                        variant="body12"
                                                    >
                                                        ‘Personalised’ Immigration Guide
                                                    </Text>
                                                    <Text
                                                        className="font-normal leading-[124.50%] mt-[4px] not-italic text-bluegray_601 text-left w-[100%]"
                                                        variant="body12"
                                                    >
                                                        Purchase a suitable package from our 3 tiers of
                                                        Immigration toolkits, designed to guide you
                                                        thoroughly and stay on track each step of the way
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </List>
                                </div>
                            </div>
                            <Stack className="h-[459px] md:mt-[0] sm:mt-[0] mt-[13px] relative md:w-[100%] sm:w-[100%] w-[47%]">
                                <Img
                                    src="images/img_group589.svg"
                                    className="absolute h-[367px] left-[11%] top-[0] w-[auto]"
                                    alt="Group589"
                                />
                                <Stack className="absolute bottom-[0] flex h-[400px] inset-x-[0] mx-[auto] w-[100%]">
                                    <div className="bg-white_A700 flex flex-col items-center justify-start my-[auto] p-[20px] rounded-radius26 shadow-bs6 w-[68%]">
                                        <div className="flex flex-col items-start justify-start mb-[10px] md:w-[100%] sm:w-[100%] w-[98%]">
                                            <Img
                                                src="images/img_rectangle17.png"
                                                className="h-[161px] sm:h-[auto] object-cover rounded-radius24 w-[100%]"
                                                alt="RectangleSeventeen"
                                            />
                                            <Text
                                                className="font-medium mt-[26px] text-black_903 text-left tracking-ls027 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                                                variant="body10"
                                            >
                                                Australia PR
                                            </Text>
                                            <div className="flex flex-row items-start justify-start mt-[13px] md:w-[100%] sm:w-[100%] w-[57%]">
                                                <Text
                                                    className="font-medium text-bluegray_400 text-left tracking-ls008 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                                    variant="body12"
                                                >
                                                    Subclass
                                                </Text>
                                                <Line className="bg-bluegray_400 h-[16px] ml-[18px] my-[2px] w-[1px]" />
                                                <Text
                                                    className="font-medium ml-[12px] text-bluegray_400 text-left tracking-ls008 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                                    variant="body12"
                                                >
                                                    Skill Code
                                                </Text>
                                            </div>
                                            <Img
                                                src="images/img_options.svg"
                                                className="h-[36px] md:ml-[0] sm:ml-[0] ml-[3px] mt-[21px] w-[auto]"
                                                alt="OPTIONS"
                                            />
                                            <div className="flex flex-row items-start justify-start mt-[29px] w-[100%]">
                                                <Img
                                                    src="images/img_qrcode.svg"
                                                    className="h-[16px] w-[16px]"
                                                    alt="qrcode"
                                                />
                                                <Text
                                                    className="font-medium ml-[15px] text-bluegray_400 text-left tracking-ls032 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                                    variant="body12"
                                                >
                                                    Track Upcoming Steps
                                                </Text>
                                                <Img
                                                    src="images/img_favorite.svg"
                                                    className="h-[18px] ml-[93px] w-[auto]"
                                                    alt="favorite"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Stack className="h-[129px] mb-[52px] ml-[-148px] mt-[auto] w-[60%] z-[1]">
                                        <div className="absolute bg-white_A700 flex flex-col h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[16px] rounded-radius18 shadow-bs6 w-[81%]">
                                            <div className="flex flex-col gap-[7px] justify-start mb-[6px] md:w-[100%] sm:w-[100%] w-[95%]">
                                                <div className="flex flex-row gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[56%]">
                                                    <div className="bg-white_A700_75 h-[50px] mt-[2px] rounded-radius50 shadow-bs7 w-[50px]"></div>
                                                    <Text
                                                        className="font-medium text-bluegray_400 text-left tracking-ls049000000000000005 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                                        variant="body14"
                                                    >
                                                        Ongoing
                                                    </Text>
                                                </div>
                                                <div className="flex flex-col font-gilroyextrabold gap-[10px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[60px] md:w-[100%] sm:w-[100%] w-[73%]">
                                                    <Text
                                                        className="font-normal text-black_903 text-left tracking-ls077 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                                        variant="body14"
                                                    >
                                                        <span className="text-deep_purple_300 text-[14px] font-poppins font-medium">
                                                            40%
                                                        </span>
                                                        <span className="text-black_903 text-[14px] font-poppins font-medium">
                                                            {" "}
                                                            completed
                                                        </span>
                                                    </Text>
                                                    <div
                                                        className="h-[5px] md:ml-[0] sm:ml-[0] ml-[2px] overflow-hidden relative w-[99%]"
                                                        name="GroupThree"
                                                    >
                                                        <div className="w-full h-full absolute bg-undefined"></div>
                                                        <div
                                                            className="h-full absolute"
                                                            style={{ width: "0%" }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </div>
                    </div>
                </div>
                <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[33%] md:ml-[0] sm:ml-[0] ml-[169px] mr-[797px] mt-[74px] text-[18px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder10"
                    size="3xl"
                    variant="OutlineAmber70026_1"
                    onClick={()=>navigate("/immigration")}
                >
                    Buy Now
                </Button>
                <div className="flex flex-col items-end max-w-[1427px] ml-[auto] mr-[auto] mt-[126px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] px-[122px] sm:px-[20px] md:px-[40px] w-[100%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                        <div className="flex flex-col justify-start w-[100%]">
                            <Text
                                className="font-poppins font-semibold md:ml-[0] sm:ml-[0] ml-[425px] text-bluegray_601 text-left w-[auto]"
                                variant="body10"
                            >
                                Immigration News
                            </Text>
                            <Text
                                className="capitalize font-volkhov md:ml-[0] sm:ml-[0] ml-[270px] mt-[8px] text-bluegray_903 text-left w-[auto]"
                                as="h3"
                                variant="h3"
                            >
                                Top Announcements
                            </Text>
                            <div className="flex md:flex-col sm:flex-col flex-row font-poppins md:gap-[20px] sm:gap-[20px] items-center justify-start mt-[60px] w-[100%]">
                                <Stack className="h-[457px] relative md:w-[100%] sm:w-[100%] w-[29%]">
                                    <Img
                                        src="images/img_rectangle14.png"
                                        className="absolute h-[457px] inset-[0] justify-center m-[auto] object-cover rounded-radius24 w-[100%]"
                                        alt="RectangleFourteen"
                                    />
                                    <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[19px] inset-x-[0] items-start justify-center mx-[auto] p-[20px] rounded-bl-[24px] rounded-br-[24px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                                        <Text
                                            className="font-medium mt-[7px] text-bluegray_601 text-left w-[auto]"
                                            variant="body10"
                                        >
                                            Italy
                                        </Text>
                                        <Img
                                            src="images/img_send.svg"
                                            className="h-[20px] mb-[22px] w-[20px]"
                                            alt="send"
                                        />
                                    </div>
                                </Stack>
                                <Stack className="h-[457px] md:ml-[0] sm:ml-[0] ml-[35px] relative md:w-[100%] sm:w-[100%] w-[29%]">
                                    <Img
                                        src="images/img_rectangle14_457x314.png"
                                        className="absolute h-[457px] inset-[0] justify-center m-[auto] object-cover rounded-radius24 w-[100%]"
                                        alt="RectangleFourteen One"
                                    />
                                    <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] p-[20px] rounded-bl-[24px] rounded-br-[24px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                                        <div className="flex flex-col gap-[18px] items-start justify-start mb-[22px] mt-[7px] md:w-[100%] sm:w-[100%] w-[98%]">
                                            <div className="flex flex-row items-start justify-between w-[100%]">
                                                <Text
                                                    className="font-medium text-bluegray_601 text-left w-[auto]"
                                                    variant="body10"
                                                >
                                                    London, UK
                                                </Text>
                                                <Text
                                                    className="font-medium text-bluegray_601 text-left w-[auto]"
                                                    variant="body10"
                                                >
                                                    $4.2k
                                                </Text>
                                            </div>
                                            <Img
                                                src="images/img_send.svg"
                                                className="h-[20px] w-[20px]"
                                                alt="send One"
                                            />
                                        </div>
                                    </div>
                                </Stack>
                                <Stack className="h-[457px] md:ml-[0] sm:ml-[0] ml-[60px] relative md:w-[100%] sm:w-[100%] w-[35%]">
                                    <Img
                                        src="images/img_decore_bluegray_400.svg"
                                        className="absolute bottom-[10%] h-[252px] right-[0] w-[auto]"
                                        alt="Decore Two"
                                    />
                                    <Stack className="absolute h-[457px] inset-y-[0] left-[0] my-[auto] w-[84%]">
                                        <Img
                                            src="images/img_rectangle14_1.png"
                                            className="absolute h-[457px] inset-[0] justify-center m-[auto] object-cover rounded-radius24 w-[100%]"
                                            alt="RectangleFourteen Two"
                                        />
                                        <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[18px] inset-x-[0] justify-center mx-[auto] p-[20px] rounded-bl-[24px] rounded-br-[24px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                                            <Text
                                                className="font-medium md:ml-[0] sm:ml-[0] ml-[230px] mr-[5px] mt-[8px] text-bluegray_601 text-left w-[auto]"
                                                variant="body10"
                                            >
                                                $15k
                                            </Text>
                                            <Img
                                                src="images/img_send.svg"
                                                className="h-[20px] mb-[22px] mr-[255px] w-[20px]"
                                                alt="send Two"
                                            />
                                        </div>
                                    </Stack>
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col font-poppins items-center max-w-[1427px] mb-[508px] ml-[auto] mr-[auto] mt-[155px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] px-[116px] sm:px-[20px] md:px-[40px] w-[100%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[98%]">
                        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                            <div className="flex flex-col items-start justify-start md:mt-[0] sm:mt-[0] mt-[13px] md:w-[100%] sm:w-[100%] w-[36%]">
                                <Text
                                    className="font-poppins font-semibold text-bluegray_601 text-left uppercase w-[auto]"
                                    variant="body10"
                                >
                                    Testimonials
                                </Text>
                                <Text
                                    className="capitalize font-volkhov mt-[12px] text-bluegray_903 text-left"
                                    as="h3"
                                    variant="h3"
                                >
                                    What people say
                                    <br />
                                    about Us.
                                </Text>
                                <PagerIndicator
                                    className="flex h-[12px] mt-[82px] w-[87px]"
                                    count={3}
                                    activeCss="inline-block cursor-pointer rounded-radius50 h-[12px] bg-bluegray_800 w-[12px]"
                                    activeIndex={1}
                                    inactiveCss="inline-block cursor-pointer rounded-radius50 h-[12px] bg-gray_302 w-[12px]"
                                    selectedWrapperCss="inline-block md:ml-[0] mx-[13.00px] sm:ml-[0]"
                                    unselectedWrapperCss="inline-block md:ml-[0] mx-[13.00px] sm:ml-[0]"
                                />
                            </div>
                            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between md:w-[100%] sm:w-[100%] w-[58%]">
                                <Stack className="h-[356px] relative md:w-[100%] sm:w-[100%] w-[89%]">
                                    <div className="absolute bottom-[0] flex flex-col items-start justify-start outline outline-[2px] outline-gray_103 p-[16px] right-[0] rounded-radius10 shadow-bs6 w-[87%]">
                                        <Text
                                            className="font-normal font-opensans leading-[32.00px] md:leading-[normal] sm:leading-[normal] md:ml-[0] ml-[18px] sm:mx-[0] text-bluegray_701 text-left sm:w-[100%] w-[86%]"
                                            variant="body12"
                                        >
                                            “On the Windows talking painted pasture yet its express
                                            parties use. Sure last upon he same as knew next. Of
                                            believed or diverted no.”
                                        </Text>
                                        <Text
                                            className="font-poppins font-semibold md:ml-[0] sm:ml-[0] ml-[18px] mt-[48px] text-bluegray_601 text-left w-[auto]"
                                            variant="body10"
                                        >
                                            Chris Thomas
                                        </Text>
                                        <Text
                                            className="font-medium font-poppins md:ml-[0] sm:ml-[0] ml-[18px] my-[10px] text-bluegray_601 text-left w-[auto]"
                                            variant="body14"
                                        >
                                            CEO of Red Button
                                        </Text>
                                    </div>
                                    <Stack className="absolute h-[279px] left-[0] top-[0] sm:w-[100%] w-[92%]">
                                        <div className="absolute bg-white_A700 bottom-[0] flex flex-col items-start justify-start p-[28px] sm:px-[20px] right-[0] rounded-radius10 shadow-bs6 w-[95%]">
                                            <Text
                                                className="font-medium leading-[32.00px] md:leading-[normal] sm:leading-[normal] md:ml-[0] ml-[6px] sm:mx-[0] text-bluegray_601 text-left sm:w-[100%] w-[90%]"
                                                variant="body12"
                                            >
                                                “On the Windows talking painted pasture yet its express
                                                parties use. Sure last upon he same as knew next. Of
                                                believed or diverted no.”
                                            </Text>
                                            <Text
                                                className="font-semibold md:ml-[0] sm:ml-[0] ml-[6px] mt-[38px] text-bluegray_601 text-left w-[auto]"
                                                variant="body10"
                                            >
                                                Name
                                            </Text>
                                            <Text
                                                className="font-medium md:ml-[0] sm:ml-[0] ml-[6px] my-[10px] text-bluegray_601 text-left w-[auto]"
                                                variant="body14"
                                            >
                                                Location
                                            </Text>
                                        </div>
                                        <Img
                                            src="images/img_image_68x68.png"
                                            className="absolute h-[68px] left-[0] rounded-radius50 top-[0] w-[68px]"
                                            alt="Image Five"
                                        />
                                    </Stack>
                                </Stack>
                                <Img
                                    src="images/img_pagination.svg"
                                    className="h-[71px] w-[auto]"
                                    alt="Pagination"
                                />
                            </div>

                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default LandingPagePage;
