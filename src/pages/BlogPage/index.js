import React from "react";

import { Navbar, Img, Text, Line, Button, List, Footer } from "components";
import { useNavigate } from "react-router-dom";

const BlogsingleplaceholdPage = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    window.location.href = "https://accounts.google.com/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-manrope items-center justify-end mx-[auto] w-[100%]">
        <div className="flex flex-col items-start justify-end w-[100%]">
          <div className="bg-gray_100 flex flex-col items-center justify-start pb-[98px] w-[100%]">
            <Navbar />
            <Text
              className="mt-[113px] text-bluegray_900 text-left tracking-ls069 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h4"
              variant="h4"
            >
              Latest Immigration News
            </Text>
            <div className="flex flex-row items-center justify-start mt-[80px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[auto]">
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
                Latest Immigration News
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] ml-[200px] items-center justify-center md:ml-[0] sm:ml-[0] mt-[120px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[70%]">
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-center justify-center md:w-[100%] sm:w-[100%] w-[100%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <Img
                  src="images/img_img7.png"
                  className="h-[330px] sm:h-[auto] object-cover rounded-radius6 w-[100%]"
                  alt="imgSeven"
                />
                <div className="flex flex-row font-opensans gap-[30px] items-start justify-start mt-[25px] w-[auto]">
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_iconcalendar.svg"
                      className="h-[16px] w-[16px]"
                      alt="iconcalendar"
                    />
                    <Text
                      className="font-normal not-italic text-gray_500 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body14"
                    >
                      22 June 2020
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_user_gray_500.svg"
                      className="h-[16px] w-[16px]"
                      alt="user"
                    />
                    <Text
                      className="font-normal not-italic text-gray_500 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body14"
                    >
                      William Pond
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-manrope leading-[40.00px] md:leading-[normal] sm:leading-[normal] mt-[40px] text-bluegray_900 text-left tracking-ls044999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  variant="body3"
                >
                  2022 Immigration updates explained with benefits
                </Text>
                <Text
                  className="font-normal font-opensans leading-[28.00px] md:leading-[normal] sm:leading-[normal] mt-[30px] not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                  variant="body12"
                >
                  <span className="text-gray_500 text-[16px]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos{" "}
                  </span>
                  <span className="text-gray_500 text-[16px]">
                    dolores et quas
                  </span>
                  <span className="text-gray_500 text-[16px]">
                    . Nulla rhoncus consectetur eros non iaculis “
                  </span>
                  <span className="text-gray_500 text-[16px] italic">
                    Vivamus lectus enim, convallis nec dapibus vel, semper id
                    ante. Morbi pulvinar sapien nulla, eu dignissim enim
                    ullamcorper vitae”.
                  </span>
                  <span className="text-gray_500 text-[16px]">
                    {" "}
                    <br />
                    Ut sit amet neque vel mauris consequat aliquam at in arcu.
                    Ut vulputate, augue luctus dignissim pretium, elit magna
                    placerat elit, at venenatis lacus arcu eget quam. Fusce nec
                    cursus mi, sed{" "}
                  </span>
                  <a
                    className="text-blue_A700 text-[16px] underline"
                  >
                    blandit.
                  </a>
                  <span className="text-gray_500 text-[16px]">
                    {" "}
                    <br />
                    Phasellus tristique eu nisl eu consectetur. Morbi urna
                    massa, imperdiet in mauris et, euismod vestibulum lacus.
                    Integer enim elit, tincidunt aliq uam ligula id, lacinia
                    auctor orci. Sed quis lobortis eros. Fusce id commodo
                    libero. Praesent mollis velit ac accumsan ultrices. Ut
                    convallis ipsum pulvinar ante maximus suscipit.
                  </span>
                </Text>
                <div className="flex sm:flex-col flex-row font-opensans gap-[34px] items-center justify-start ml-[auto] mt-[30px] sm:w-[100%] w-[auto]">
                  <Line className="bg-blue_A700 h-[114px] sm:h-[4px] sm:w-[100%] w-[4px]" />
                  <Text
                    className="font-normal leading-[33.00px] md:leading-[normal] sm:leading-[normal] max-w-[506px] not-italic text-bluegray_900 text-left tracking-ls03 md:tracking-ls1 sm:tracking-ls1"
                    variant="body9"
                  >
                    “Morbi urna massa, imperdiet in mauris et, euismod
                    vestibulum lacus. Integer enim elit, tincidunt aliquam
                    ligula id, lacinia auctor orci. Sed quis lobortis eros.
                    Fusce id commodo libero”
                  </Text>
                </div>
                <Text
                  className="font-normal font-opensans leading-[28.00px] md:leading-[normal] sm:leading-[normal] mt-[30px] not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                  variant="body12"
                >
                  <span className="text-gray_500 text-[16px]">
                    Mauris purus diam, iaculis non leo nec, ultricies fringilla
                    odio. Fusce feugiat elit facilisis volutpat venenatis.{" "}
                  </span>
                  <span className="text-gray_500 text-[16px] font-bold">
                    Vestibulum tempor ligula vel orci consectetur, eu euismod
                    augue bibendum. In volutpat libero velit, et mattis tortor
                    placerat eget.
                    <br />
                  </span>
                  <span className="text-gray_500 text-[16px]">
                    Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex
                    maximus iaculis. Sed placerat, ligula vel tempor
                    pellentesque, odio ipsum lobortis orci, sit amet fermentum
                    ex nunc ac diam.{" "}
                  </span>
                </Text>
                <div className="flex sm:flex-col flex-row font-opensans gap-[30px] items-center justify-center mt-[35px] sm:w-[100%] w-[auto]">
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_share.svg"
                      className="h-[16px] w-[16px]"
                      alt="share"
                    />
                    <Text
                      className="font-normal not-italic text-gray_500 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body14"
                    >
                      481 Views
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_call.svg"
                      className="h-[16px] w-[16px]"
                      alt="call"
                    />
                    <Text
                      className="font-normal not-italic text-gray_500 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body14"
                    >
                      Share:
                    </Text>
                    <Img
                      src="images/img_iconlinkedin.svg"
                      className="h-[16px] w-[16px]"
                      alt="iconlinkedin"
                    />
                    <Img
                      src="images/img_plus.svg"
                      className="h-[16px] w-[16px]"
                      alt="plus"
                    />
                    <Img
                      src="images/img_icontwitter.svg"
                      className="h-[16px] w-[16px]"
                      alt="icontwitter"
                    />
                    <Img
                      src="images/img_google.svg"
                      className="common-pointer h-[16px] w-[16px]"
                      onClick={handleNavigate}
                      alt="google"
                    />
                    <Img
                      src="images/img_play_gray_500.svg"
                      className="h-[16px] w-[16px]"
                      alt="play"
                    />
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-start justify-start sm:w-[100%] w-[auto]">
              <div className="bg-white_A700 border border-gray_500 border-solid flex flex-row items-center justify-between sm:pl-[20px] pl-[25px] rounded-radius6 w-[100%]">
                <div className="flex flex-col font-opensans items-start justify-center w-[80px]">
                  <div className="flex flex-col items-start justify-center w-[71px]">
                    <Text
                      className="font-semibold text-bluegray_900 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body14"
                    >
                      Search
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold font-manrope text-[16px] text-center text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[125px]"
                  shape="RoundedBorder5"
                  size="2xl"
                  variant="FillBlueA700"
                >
                  Search
                </Button>
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start sm:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body7"
                >
                  Popular posts
                </Text>
                <List
                  className="flex-col gap-[30px] grid sm:grid-cols-1 items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_img8_114x190.png"
                      className="h-[114px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 sm:w-[100%] w-[190px]"
                      alt="imgEight One"
                    />
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[235px]">
                      <Text
                        className="font-normal font-opensans not-italic text-gray_500 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        22 June 2022
                      </Text>
                      <Text
                        className="font-bold font-manrope leading-[24.00px] md:leading-[normal] sm:leading-[normal] max-w-[235px] text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                        variant="body12"
                      >
                        ISO 13485 compliance of medical devices
                      </Text>
                      <div className="flex flex-row font-manrope gap-[4px] items-center justify-center w-[auto]">
                        <Text
                          className="font-semibold text-blue_A700 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body14"
                        >
                          Read more
                        </Text>
                        <Img
                          src="images/img_arrowright.svg"
                          className="h-[20px] w-[20px]"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_img1.png"
                      className="h-[114px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 sm:w-[100%] w-[190px]"
                      alt="imgSeven One"
                    />
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[235px]">
                      <Text
                        className="font-normal font-opensans not-italic text-gray_500 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        22 June 2022
                      </Text>
                      <Text
                        className="font-bold font-manrope leading-[24.00px] md:leading-[normal] sm:leading-[normal] max-w-[235px] text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                        variant="body12"
                      >
                        Business analysis helps you in finance
                      </Text>
                      <div className="flex flex-row font-manrope gap-[4px] items-center justify-center w-[auto]">
                        <Text
                          className="font-semibold text-blue_A700 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body14"
                        >
                          Read more
                        </Text>
                        <Img
                          src="images/img_arrowright.svg"
                          className="h-[20px] w-[20px]"
                          alt="arrowright One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_img6.png"
                      className="h-[114px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 sm:w-[100%] w-[190px]"
                      alt="imgSix"
                    />
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[235px]">
                      <Text
                        className="font-normal font-opensans not-italic text-gray_500 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        22 June 2022
                      </Text>
                      <Text
                        className="font-bold font-manrope leading-[24.00px] md:leading-[normal] sm:leading-[normal] max-w-[235px] text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                        variant="body12"
                      >
                        Benefits of telemedicine in nursing homes
                      </Text>
                      <div className="flex flex-row font-manrope gap-[4px] items-center justify-center w-[auto]">
                        <Text
                          className="font-semibold text-blue_A700 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body14"
                        >
                          Read more
                        </Text>
                        <Img
                          src="images/img_arrowright.svg"
                          className="h-[20px] w-[20px]"
                          alt="arrowright Two"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_img9.png"
                      className="h-[114px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 sm:w-[100%] w-[190px]"
                      alt="imgNine"
                    />
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[235px]">
                      <Text
                        className="font-normal font-opensans not-italic text-gray_500 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        22 June 2022
                      </Text>
                      <Text
                        className="font-bold font-manrope leading-[24.00px] md:leading-[normal] sm:leading-[normal] max-w-[235px] text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                        variant="body12"
                      >
                        5 web portal examples your business can learn from
                      </Text>
                      <div className="flex flex-row font-manrope gap-[4px] items-center justify-center w-[auto]">
                        <Text
                          className="font-semibold text-blue_A700 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body14"
                        >
                          Read more
                        </Text>
                        <Img
                          src="images/img_arrowright.svg"
                          className="h-[20px] w-[20px]"
                          alt="arrowright Three"
                        />
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start sm:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body7"
                >
                  Categories
                </Text>
                <List
                  className="flex-col font-opensans sm:gap-[20px] grid sm:grid-cols-1 items-start w-[auto]"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-[20px] items-start justify-center my-[0] pt-[20px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-row items-center justify-between sm:w-[100%] w-[445px]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left tracking-ls03 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body9"
                      >
                        Software development
                      </Text>
                      <Img
                        src="images/img_arrowright_bluegray_900.svg"
                        className="h-[20px] w-[20px]"
                        alt="arrowright Four"
                      />
                    </div>
                    <Line className="bg-gray_500 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-center my-[0] pt-[20px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-row items-center justify-between sm:w-[100%] w-[445px]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left tracking-ls03 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body9"
                      >
                        Information security
                      </Text>
                      <Img
                        src="images/img_arrowright_bluegray_900.svg"
                        className="h-[20px] w-[20px]"
                        alt="arrowright Five"
                      />
                    </div>
                    <Line className="bg-gray_500 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-center my-[0] pt-[20px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-row items-center justify-between sm:w-[100%] w-[445px]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left tracking-ls03 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body9"
                      >
                        Internet of things
                      </Text>
                      <Img
                        src="images/img_arrowright_bluegray_900.svg"
                        className="h-[20px] w-[20px]"
                        alt="arrowright Six"
                      />
                    </div>
                    <Line className="bg-gray_500 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-center my-[0] pt-[20px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-row items-center justify-between sm:w-[100%] w-[445px]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left tracking-ls03 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body9"
                      >
                        Digital transformation
                      </Text>
                      <Img
                        src="images/img_arrowright_bluegray_900.svg"
                        className="h-[20px] w-[20px]"
                        alt="arrowright Seven"
                      />
                    </div>
                    <Line className="bg-gray_500 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-center my-[0] pt-[20px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-row items-center justify-between sm:w-[100%] w-[445px]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left tracking-ls03 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body9"
                      >
                        Healthcare it
                      </Text>
                      <Img
                        src="images/img_arrowright_bluegray_900.svg"
                        className="h-[20px] w-[20px]"
                        alt="arrowright Eight"
                      />
                    </div>
                    <Line className="bg-gray_500 h-[1px] w-[100%]" />
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start sm:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body7"
                >
                  Tags
                </Text>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[10px] items-center justify-between w-[100%]">
                      <Text
                        className="bg-blue_A700 font-extrabold justify-center px-[11px] py-[3px] rounded-radius6 text-left text-white_A700 tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        All topics
                      </Text>
                      <Text
                        className="border border-gray_100 border-solid font-extrabold px-[11px] py-[3px] rounded-radius6 text-blue_A700 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        App
                      </Text>
                      <Text
                        className="border border-gray_100 border-solid font-extrabold px-[11px] py-[3px] rounded-radius6 text-blue_A700 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        Management
                      </Text>
                      <Button
                        className="cursor-pointer font-extrabold min-w-[54px] text-[14px] text-blue_A700 text-center tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        shape="RoundedBorder5"
                        size="md"
                        variant="OutlineGray100"
                      >
                        CMR
                      </Button>
                      <Text
                        className="border border-gray_100 border-solid font-extrabold px-[11px] py-[3px] rounded-radius6 text-blue_A700 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        Big data
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Button
                        className="cursor-pointer font-extrabold min-w-[63px] text-[14px] text-blue_A700 text-center tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        shape="RoundedBorder5"
                        size="md"
                        variant="OutlineGray100"
                      >
                        Media
                      </Button>
                      <Button
                        className="cursor-pointer font-extrabold min-w-[67px] text-[14px] text-blue_A700 text-center tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        shape="RoundedBorder5"
                        size="md"
                        variant="OutlineGray100"
                      >
                        Future
                      </Button>
                      <Button
                        className="cursor-pointer font-extrabold min-w-[47px] text-[14px] text-blue_A700 text-center tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        shape="RoundedBorder5"
                        size="md"
                        variant="OutlineGray100"
                      >
                        CIO
                      </Button>
                      <Text
                        className="border border-gray_100 border-solid font-extrabold px-[11px] py-[3px] rounded-radius6 text-blue_A700 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        Startup
                      </Text>
                      <Button
                        className="cursor-pointer font-extrabold min-w-[59px] text-[14px] text-blue_A700 text-center tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        shape="RoundedBorder5"
                        size="md"
                        variant="OutlineGray100"
                      >
                        Team
                      </Button>
                      <Button
                        className="cursor-pointer font-extrabold min-w-[54px] text-[14px] text-blue_A700 text-center tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        shape="RoundedBorder5"
                        size="md"
                        variant="OutlineGray100"
                      >
                        Data
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] sm:w-[100%] w-[87%]">
                      <Text
                        className="border border-gray_100 border-solid font-extrabold px-[11px] py-[3px] rounded-radius6 text-blue_A700 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        Data analytics
                      </Text>
                      <Text
                        className="border border-gray_100 border-solid font-extrabold px-[11px] py-[3px] rounded-radius6 text-blue_A700 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        Information security
                      </Text>
                      <Text
                        className="border border-gray_100 border-solid font-extrabold px-[11px] py-[3px] rounded-radius6 text-blue_A700 text-left tracking-ls021 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        Proxy
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_100 flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[4px] mt-[168px] p-[100px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col gap-[30px] items-center justify-start sm:w-[100%] w-[auto]">
              <Text
                className="font-manrope text-bluegray_900 text-left tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h6"
                variant="h6"
              >
                Do you need help?
              </Text>
              <Text
                className="font-normal font-opensans leading-[28.00px] md:leading-[normal] sm:leading-[normal] max-w-[540px] mx-[auto] not-italic text-center text-gray_500 tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                variant="body12"
              >
                Choose your Immigration pathway and let our experts help you
                throughout the way
              </Text>
              <Button
                className="cursor-pointer font-bold font-manrope text-[16px] text-center text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[190px]"
                shape="RoundedBorder5"
                size="2xl"
                variant="OutlineBlueA7002d"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BlogsingleplaceholdPage;
