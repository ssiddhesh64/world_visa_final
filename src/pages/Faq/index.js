import React from "react";

import { Img, Text, Button, Line, List, Footer, Navbar, Subscribe, Accordian } from "components";
import { accordionData } from '../../utils/Ffaq';
import { useNavigate } from "react-router-dom";

const FAQOnePage = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className="bg-white_A700 flex flex-col font-manrope items-center justify-start mx-[auto] w-[100%]">
                <Navbar />
                <div className="bg-gray_100 flex flex-col items-center justify-start pb-[96px] w-[100%]">
                    <Text
                        className="font-manrope mt-[108px] text-bluegray_900 text-left tracking-ls069 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h15"
                        variant="h15"
                    >
                        FAQs
                    </Text>
                    <div className="flex flex-row font-manrope items-center justify-center mt-[20px] md:px-[20px] sm:px-[20px] w-[auto]">
                        <Text
                            className="cursor-pointer font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body14"
                            onClick={() => navigate("/home")}
                        >
                            Home
                        </Text>
                        <Img
                            src="images/img_clock.svg"
                            className="h-[20px] w-[20px]"
                            alt="clock"
                        />
                        <Text
                            className="font-semibold text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body14"
                        >
                            FAQs
                        </Text>
                    </div>
                    <Button
                        className="flex items-center justify-center mt-[20px] text-center w-[168px]"
                        leftIcon={
                            <Img
                                src="images/img_vector_white_a700.svg"
                                className="mr-[10px] text-center"
                                alt="Vector"
                            />
                        }
                        size="md"
                        variant="FillBlueA700"
                    >
                        <div className="bg-transparent cursor-pointer font-manrope font-semibold text-[14px] text-left text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1">
                            Watch the demo
                        </div>
                    </Button>
                </div>
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-stretch justify-start pl-[200px] mt-[80px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[100%]">
                    <div className="flex flex-col gap-[50px] items-stretch justify-start md:mt-[0] sm:mt-[0] mt-[35px] w-[auto] pr-[50px]">
                        <Text
                            className="text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h15"
                            variant="h15"
                        >
                            Popular articles
                        </Text>
                        <div className="flex flex-col gap-[20px] items-start justify-start w-[auto]">
                            <Text
                                className="font-semibold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[254px] text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body14"
                            >
                                Benefits of telemedicine in nursing homes
                            </Text>
                            <Line className="bg-gray_500 h-[1px] w-[100%]" />
                            <Text
                                className="font-semibold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[254px] text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body14"
                            >
                                ISO 13485 compliance of medical devices.
                            </Text>
                            <Line className="bg-gray_500 h-[1px] w-[100%]" />
                            <Text
                                className="font-semibold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[254px] text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body14"
                            >
                                Supply chain automation for streamlined, accurate operations
                            </Text>
                            <Line className="bg-gray_500 h-[1px] w-[100%]" />
                            <Text
                                className="font-semibold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[254px] text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body14"
                            >
                                Supply chain management software: reduce supply chain risks
                            </Text>
                            <Line className="bg-gray_500 h-[1px] w-[100%]" />
                            <Text
                                className="font-semibold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[254px] text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body14"
                            >
                                eSourcing software: unlock the best-value deals with suppliers
                            </Text>
                            <Line className="bg-gray_500 h-[1px] w-[100%]" />
                            <Text
                                className="font-semibold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[254px] text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                                variant="body14"
                            >
                                Vulnerability testing as a part of information security
                                management
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch justify-center max-w-[730px] w-[100%]">
                        {accordionData.map(({ title, content }) => (
                            <Accordian title={title} content={content} />
                        ))}
                    </div>
                </div>

                {/* <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between mt-[80px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[58%]">
          <div className="flex flex-col gap-[50px] items-start justify-start md:mt-[0] sm:mt-[0] mt-[35px] w-[auto]">
            <Text
              className="text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h15"
              variant="h15"
            >
              Popular articles
            </Text>
            <div className="flex flex-col gap-[20px] items-start justify-start w-[auto]">
              <Text
                className="font-semibold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[254px] text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                variant="body14"
              >
                Benefits of telemedicine in nursing homes
              </Text>
              <Line className="bg-gray_500 h-[1px] w-[100%]" />
              <Text
                className="font-semibold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[254px] text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                variant="body14"
              >
                ISO 13485 compliance of medical devices.
              </Text>
              <Line className="bg-gray_500 h-[1px] w-[100%]" />
              <Text
                className="font-semibold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[254px] text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                variant="body14"
              >
                Supply chain automation for streamlined, accurate operations
              </Text>
              <Line className="bg-gray_500 h-[1px] w-[100%]" />
              <Text
                className="font-semibold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[254px] text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                variant="body14"
              >
                Supply chain management software: reduce supply chain risks
              </Text>
              <Line className="bg-gray_500 h-[1px] w-[100%]" />
              <Text
                className="font-semibold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[254px] text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                variant="body14"
              >
                eSourcing software: unlock the best-value deals with suppliers
              </Text>
              <Line className="bg-gray_500 h-[1px] w-[100%]" />
              <Text
                className="font-semibold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[254px] text-bluegray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                variant="body14"
              >
                Vulnerability testing as a part of information security
                management
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[730px] w-[100%]">
            <div className="flex flex-col gap-[30px] items-start justify-start max-w-[730px] pt-[35px] w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row font-manrope gap-[20px] items-center justify-start w-[100%]">
                <Text
                  className="leading-[33.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[686px] text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1"
                  as="h15"
                  variant="h15"
                >
                  What’s the difference in service offerings between Silver and
                  Gold Packages?
                </Text>
                <div className="flex flex-col items-start justify-start w-[24px]">
                  <Img
                    src="images/img_arrowup.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowup"
                  />
                </div>
              </div>
              <Text
                className="font-normal font-opensans leading-[33.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[686px] not-italic text-gray_500 text-left tracking-ls03 md:tracking-ls1 sm:tracking-ls1"
                as="h14"
                variant="h14"
              >
                Phasellus tristique eu nisl eu consectetur. Morbi urna massa,
                imperdiet in mauris et, euismod vestibulum lacus. Integer enim
                elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis
                lobortis eros.{" "}
              </Text>
              <Line className="bg-gray_500 h-[1px] w-[100%]" />
            </div>
            <List
              className="flex-col gap-[1px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[30px] items-center justify-start max-w-[730px] pt-[30px] w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h15"
                    variant="h15"
                  >
                    Can I upgrade once I have purchased Silver or Gold Packages?
                  </Text>
                  <div className="flex flex-col items-start justify-start w-[24px]">
                    <Img
                      src="images/img_arrowdown_bluegray_900.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowdown Two"
                    />
                  </div>
                </div>
                <Line className="bg-gray_500 h-[1px] w-[100%]" />
              </div>
              <div className="flex flex-1 flex-col gap-[30px] items-center justify-start max-w-[730px] pt-[30px] w-[100%]">
                <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h15"
                    variant="h15"
                  >
                    What is the validity of my membership?
                  </Text>
                  <div className="flex flex-col items-start justify-start w-[24px]">
                    <Img
                      src="images/img_arrowdown_bluegray_900.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowdown Three"
                    />
                  </div>
                </div>
                <Line className="bg-gray_500 h-[1px] w-[100%]" />
              </div>
              <div className="flex flex-1 flex-col gap-[30px] items-center justify-start max-w-[730px] pt-[30px] w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                  <Text
                    className="leading-[33.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[686px] text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1"
                    as="h15"
                    variant="h15"
                  >
                    Will I receive any additional discounts on premium services
                    as a platinum member?
                  </Text>
                  <div className="flex flex-col items-start justify-start w-[24px]">
                    <Img
                      src="images/img_arrowdown_bluegray_900.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowdown Four"
                    />
                  </div>
                </div>
                <Line className="bg-gray_500 h-[1px] w-[100%]" />
              </div>
              <div className="flex flex-1 flex-col gap-[30px] items-center justify-start max-w-[730px] pt-[30px] w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                  <Text
                    className="leading-[33.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[686px] text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1"
                    as="h15"
                    variant="h15"
                  >
                    Can I pay extra consultation charges once I have exceeded
                    the limit under Silver package?
                  </Text>
                  <div className="flex flex-col items-start justify-start w-[24px]">
                    <Img
                      src="images/img_arrowdown_bluegray_900.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowdown Five"
                    />
                  </div>
                </div>
                <Line className="bg-gray_500 h-[1px] w-[100%]" />
              </div>
              <div className="flex flex-1 flex-col gap-[30px] items-center justify-start max-w-[730px] pt-[30px] w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h15"
                    variant="h15"
                  >
                    Will my money be refunded in the case of a PR refusal?
                  </Text>
                  <div className="flex flex-col items-start justify-start w-[24px]">
                    <Img
                      src="images/img_arrowdown_bluegray_900.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowdown Six"
                    />
                  </div>
                </div>
                <Line className="bg-gray_500 h-[1px] w-[100%]" />
              </div>
              <div className="flex flex-1 flex-col gap-[30px] items-center justify-start max-w-[730px] pt-[30px] w-[100%]">
                <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h15"
                    variant="h15"
                  >
                    What if I’m not eligible for PR upon first assessment?
                  </Text>
                  <div className="flex flex-col items-start justify-start w-[24px]">
                    <Img
                      src="images/img_arrowdown_bluegray_900.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowdown Seven"
                    />
                  </div>
                </div>
                <Line className="bg-gray_500 h-[1px] w-[100%]" />
              </div>
            </List>
          </div>
        </div> */}


                <div className="bg-gray_100 flex flex-col items-center justify-start mt-[21px] p-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between md:w-[100%] sm:w-[100%] w-[67%]">
                        <div className="flex flex-col gap-[53px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                            <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                                <Text
                                    className="leading-[56.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[540px] text-bluegray_900 text-left tracking-ls057 md:tracking-ls1 sm:tracking-ls1"
                                    as="h6"
                                    variant="h6"
                                >
                                    Left questions? Contact us now for a free consultation and
                                    profile assessment
                                </Text>
                            </div>
                            <div className="flex flex-col font-opensans gap-[24px] items-start justify-start sm:w-[100%] w-[540px]">
                                <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                                    <Text
                                        className="font-normal not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                        variant="body12"
                                    >
                                        Email address
                                    </Text>
                                    <Text
                                        className="font-bold text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                        variant="body12"
                                    >
                                        ensome@info.co.us
                                    </Text>
                                </div>
                                <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                                    <Text
                                        className="font-normal not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                        variant="body12"
                                    >
                                        Phone number
                                    </Text>
                                    <Text
                                        className="font-bold text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                        variant="body12"
                                    >
                                        +1601-201-5580
                                    </Text>
                                </div>
                                <div className="flex flex-col gap-[2px] items-start justify-start sm:w-[100%] w-[auto]">
                                    <Text
                                        className="font-normal not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                        variant="body12"
                                    >
                                        Address
                                    </Text>
                                    <Text
                                        className="font-bold text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                        variant="body12"
                                    >
                                        1642 Washington Avenue, Jackson, MS, Mississippi, 39201
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start p-[50px] sm:px-[20px] md:px-[40px] rounded-radius6 shadow-bs3 md:w-[100%] sm:w-[100%] w-[auto]">
                            <Text
                                className="text-bluegray_900 text-left tracking-ls044999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                as="body3"
                                variant="body3"
                            >
                                Contact Us
                            </Text>
                            <div className="flex flex-col font-opensans items-start justify-start mt-[30px] w-[auto]">
                                <List
                                    className="flex-col gap-[20px] grid items-center w-[100%]"
                                    orientation="vertical"
                                >
                                    <div className="flex flex-col gap-[5px] h-[59px] md:h-[auto] sm:h-[auto] items-start justify-between w-[345px]">
                                        <Text
                                            className="text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                            variant="body21"
                                        >
                                            Name
                                        </Text>
                                        <div className="flex flex-col items-center justify-start w-[auto]">
                                            <Text
                                                className="font-semibold text-bluegray_900 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                                variant="body14"
                                            >
                                                <input />
                                            </Text>
                                        </div>
                                        <Line className="bg-gray_500 h-[1px] w-[100%]" />
                                    </div>
                                    <div className="flex flex-col gap-[5px] h-[59px] md:h-[auto] sm:h-[auto] items-start justify-between w-[345px]">
                                        <Text
                                            className="text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                            variant="body21"
                                        >
                                            Email
                                        </Text>
                                        <div className="flex flex-col items-center justify-start w-[auto]">
                                            <Text
                                                className="font-semibold text-bluegray_900 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                                variant="body14"
                                            >
                                                <input />
                                            </Text>
                                        </div>
                                        <Line className="bg-gray_500 h-[1px] w-[100%]" />
                                    </div>
                                    <div className="flex flex-col gap-[5px] h-[59px] md:h-[auto] sm:h-[auto] items-start justify-between w-[345px]">
                                        <Text
                                            className="text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                            variant="body21"
                                        >
                                            Theme
                                        </Text>
                                        <div className="flex flex-col items-center justify-start w-[auto]">
                                            <Text
                                                className="font-semibold text-bluegray_900 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                                variant="body14"
                                            >
                                                <input />
                                            </Text>
                                        </div>
                                        <Line className="bg-gray_500 h-[1px] w-[100%]" />
                                    </div>
                                    <div className="flex flex-col gap-[5px] h-[59px] md:h-[auto] sm:h-[auto] items-start justify-between w-[345px]">
                                        <Text
                                            className="text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                            variant="body21"
                                        >
                                            Message
                                        </Text>
                                        <div className="flex flex-col items-center justify-start w-[auto]">
                                            <Text
                                                className="font-semibold text-bluegray_900 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                                variant="body14"
                                            >
                                                <input />
                                            </Text>
                                        </div>
                                        <Line className="bg-gray_500 h-[1px] w-[100%]" />
                                    </div>
                                </List>
                            </div>
                            <Button
                                className="cursor-pointer font-semibold md:ml-[0] sm:ml-[0] ml-[208px] mt-[83px] text-[14px] text-center text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[137px] rounded-md"
                                size="lg"
                                variant="FillBlueA700"
                            >
                                Send
                            </Button>
                        </div>
                    </div>
                </div>
                <Subscribe />
                <Footer />
            </div>
        </>
    );
};

export default FAQOnePage;
