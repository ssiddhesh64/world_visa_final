import React from "react";

import { Img, Text, Stack, List, Line, Button } from "components";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Input } from "../../components";

const ContactsTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-manrope items-center justify-end mx-[auto] pl-[3px] pt-[3px] w-[100%]">
        <Navbar />
        <div className="flex flex-col items-start justify-end mt-[60px] w-[100%]">

          <div className="flex flex-col gap-[27px] justify-start mt-[84px] w-[100%]">
            <div className="flex flex-row items-center justify-start md:ml-[0] sm:ml-[0] ml-[171px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[auto]">
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
                Contacts
              </Text>
            </div>
            <div>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3321790945893!2d-122.0111606847933!3d37.33464377984202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sin!4v1676548979313!5m2!1sen!2sin" width="600" height="450" style={{border:"0", width:"80%", margin: "20px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9420815681456!2d77.6146612!3d12.975556299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1684169b582f%3A0x2232ae8e3335115b!2sWorld%20Visa%20Consultants%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1676621150038!5m2!1sen!2sin" width="600" height="450" style={{ border: "0", width: "80%", margin: "20px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[72px] items-start justify-start md:mt-[0] sm:mt-[0] md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-start justify-center sm:pr-[20px] md:pr-[40px]">
                  <div className="flex flex-col gap-[4px] ml-[50px] items-start justify-start w-[auto]">
                    <Text
                      className="font-bold font-manrope text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body12"
                    >
                      Phone
                    </Text>
                    <Text
                      className="font-normal font-opensans not-italic text-bluegray_900 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body14"
                    >
                      +1 601-201-5580
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                  <Text
                    className="font-bold font-manrope text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body12"
                  >
                    Email
                  </Text>
                  <Text
                    className="font-normal font-opensans not-italic text-bluegray_900 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body14"
                  >
                    ensome@info.co.us
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center w-[auto]">
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                    <Text
                      className="font-bold font-manrope text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body12"
                    >
                      Address
                    </Text>
                    <Text
                      className="font-normal font-opensans not-italic text-bluegray_900 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body14"
                    >
                      Address goes here
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 absolute  top-[150px] right-[180px] flex flex-col md:gap-[40px] sm:gap-[40px] gap-[83px] items-end justify-end mb-[3px] p-[50px] sm:px-[20px] md:px-[40px] rounded-radius6 shadow-bs9 md:w-[100%] sm:w-[100%] w-[30%]">
                <div className="flex flex-col font-opensans items-start justify-start mt-[70px] w-[auto]">
                  <List
                    className="flex-col gap-[20px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-col gap-[5px] h-[59px] md:h-[auto] sm:h-[auto] items-start justify-between w-[345px]">
                      <Text
                        className="font-semibold text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body16"
                      >
                        Name
                      </Text>
                      <div className="flex flex-col items-start justify-center w-[auto]">
                        <Text
                          className="font-semibold text-bluegray_900 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body14"
                        >
                          <input ></input>
                        </Text>
                      </div>
                      <Line className="bg-gray_500 h-[1px] self-stretch w-[100%]" />
                    </div>
                    <div className="flex flex-col gap-[5px] h-[59px] md:h-[auto] sm:h-[auto] items-start justify-between w-[345px]">
                      <Text
                        className="font-semibold text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body16"
                      >
                        Email
                      </Text>
                      <div className="flex flex-col items-start justify-center w-[auto]">
                        <Text
                          className="font-semibold text-bluegray_900 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body14"
                        >
                          <input ></input>
                        </Text>
                      </div>
                      <Line className="bg-gray_500 h-[1px] self-stretch w-[100%]" />
                    </div>
                    <div className="flex flex-col gap-[5px] h-[59px] md:h-[auto] sm:h-[auto] items-start justify-between w-[345px]">
                      <Text
                        className="font-semibold text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body16"
                      >
                        Phone Number
                      </Text>
                      <div className="flex flex-col items-start justify-center w-[auto]">
                        <Text
                          className="font-semibold text-bluegray_900 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body14"
                        >
                          <input ></input>
                        </Text>
                      </div>
                      <Line className="bg-gray_500 h-[1px] self-stretch w-[100%]" />
                    </div>
                    <div className="flex flex-col gap-[5px] h-[59px] md:h-[auto] sm:h-[auto] items-start justify-between w-[345px]">
                      <Text
                        className="font-semibold text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body16"
                      >
                        Message
                      </Text>
                      <div className="flex flex-col items-start justify-center w-[auto]">
                        <Text
                          className="font-semibold text-bluegray_900 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body14"
                        >
                          <input ></input>
                        </Text>
                      </div>
                      <Line className="bg-gray_500 h-[1px] self-stretch w-[100%]" />
                    </div>
                  </List>
                </div>
                <Button
                  className="cursor-pointer font-manrope font-semibold text-[14px] text-center text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[137px]"
                  shape="RoundedBorder5"
                  size="2xl"
                  variant="FillBlueA700"
                >
                  Send
                </Button>
              </div>
            </div>
            {/* <Stack className="h-[596px] relative w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[66px] h-[max-content] inset-[0] items-end justify-center m-[auto] w-[58%]">
                
                
              </div>
            </Stack> */}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactsTwoPage;
