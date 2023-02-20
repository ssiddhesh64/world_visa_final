import React from "react";

import { Img, Text, List, Line, Navbar, Footer } from "components";
import { useNavigate } from "react-router-dom";

const TEAMSPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-manrope items-end justify-end mx-[auto] pb-[13px] pl-[13px] w-[100%]">

        <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[84px] justify-end md:w-[100%] sm:w-[100%] w-[96%]">
          <Navbar />
          <div className="flex flex-col items-start justify-start mt-[125px] md:ml-[0] sm:ml-[0] md:w-[100%] sm:w-[100%] w-[99%]">
            <div className="flex flex-col font-manrope items-center justify-start md:w-[100%] sm:w-[100%] w-[6%]">
              <div className="flex flex-row items-center justify-start w-[auto]">
                <Text
                  className="cursor-pointer font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body19"
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
                  variant="body19"
                >
                  Team
                </Text>
              </div>
            </div>
            <Text
              className="capitalize font-inter md:ml-[0] sm:ml-[0] ml-[272px] mt-[61px] text-bluegray_901 text-center sm:w-[100%] w-[59%]"
              as="h8"
              variant="h8"
            >
              place your trust in our world renowned team of experts
            </Text>
            <div className="flex flex-col font-inter items-start justify-start md:ml-[0] sm:ml-[0] mt-[40px] rounded-radius20 md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="bg-gray_100 flex flex-col items-center justify-start max-w-[1440px] sm:px-[20px] md:px-[40px] px-[48px] py-[64px] rounded-radius20 w-[100%]">
                <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <List
                      className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <div className="bg-white_A700 flex flex-col items-start justify-center w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[280px]">
                            <Img
                              src="images/img_image_1.png"
                              className="h-[280px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                              alt="Image"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                            <div className="flex flex-col items-start justify-start pb-[8px] w-[100%]">
                              <Text
                                className="text-black_900 text-left w-[auto]"
                                as="h9"
                                variant="h9"
                              >
                                Ashwin Combs
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start pb-[20px] w-[100%]">
                              <Text
                                className="not-italic text-gray_800 text-left w-[auto]"
                                variant="body18"
                              >
                                CEO
                              </Text>
                            </div>
                            <Line className="bg-black_900 h-[3px] w-[22%]" />
                            <div className="flex flex-col items-start justify-start pt-[20px] w-[100%]">
                              <Text
                                className="leading-[140.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[232px] not-italic text-gray_800 text-left"
                                variant="body18"
                              >
                                Max founded our company. He is the father of our
                                main goals and values. He found the core members
                                of our team and helped them to show their unique
                                talents in the work process. He laid the
                                foundations of the company.
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-center pt-[16px] w-[100%]">
                              <div className="bg-gray_101 flex flex-1 flex-col items-start justify-center p-[16px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="text-deep_purple_A400 text-left w-[auto]"
                                    as="h10"
                                    variant="h10"
                                  >
                                    1.1М+
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-black_900 text-left tracking-ls05 md:tracking-ls11 sm:tracking-ls11 uppercase w-[auto]"
                                    as="h7"
                                    variant="h7"
                                  >
                                    Followers
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-gray_101 flex flex-1 flex-col items-start justify-center p-[16px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="text-deep_purple_A400 text-left w-[auto]"
                                    as="h10"
                                    variant="h10"
                                  >
                                    2.5M
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-black_900 text-left tracking-ls05 md:tracking-ls11 sm:tracking-ls11 uppercase w-[auto]"
                                    as="h7"
                                    variant="h7"
                                  >
                                    Likes
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <div className="bg-white_A700 flex flex-col items-start justify-center w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[280px]">
                            <Img
                              src="images/img_image_280x280.png"
                              className="h-[280px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                              alt="Image One"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                            <div className="flex flex-col items-start justify-start pb-[8px] w-[100%]">
                              <Text
                                className="text-black_900 text-left w-[auto]"
                                as="h9"
                                variant="h9"
                              >
                                Ralphy Fraser
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start pb-[20px] w-[100%]">
                              <Text
                                className="not-italic text-gray_800 text-left w-[auto]"
                                variant="body18"
                              >
                                Developer
                              </Text>
                            </div>
                            <Line className="bg-black_900 h-[3px] w-[22%]" />
                            <div className="flex flex-col items-start justify-start pt-[20px] w-[100%]">
                              <Text
                                className="leading-[140.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[232px] not-italic text-gray_800 text-left"
                                variant="body18"
                              >
                                Max founded our company. He is the father of our
                                main goals and values. He found the core members
                                of our team and helped them to show their unique
                                talents in the work process. He laid the
                                foundations of the company.
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-center pt-[16px] w-[100%]">
                              <div className="bg-gray_101 flex flex-1 flex-col items-start justify-center p-[16px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="text-deep_purple_A400 text-left w-[auto]"
                                    as="h10"
                                    variant="h10"
                                  >
                                    3.1М+
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-black_900 text-left tracking-ls05 md:tracking-ls11 sm:tracking-ls11 uppercase w-[auto]"
                                    as="h7"
                                    variant="h7"
                                  >
                                    Followers
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-gray_101 flex flex-1 flex-col items-start justify-center p-[16px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="text-deep_purple_A400 text-left w-[auto]"
                                    as="h10"
                                    variant="h10"
                                  >
                                    1.1M
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-black_900 text-left tracking-ls05 md:tracking-ls11 sm:tracking-ls11 uppercase w-[auto]"
                                    as="h7"
                                    variant="h7"
                                  >
                                    Likes
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <div className="bg-white_A700 flex flex-col items-start justify-center w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[280px]">
                            <Img
                              src="images/img_image_1.png"
                              className="h-[280px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                              alt="Image Two"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                            <div className="flex flex-col items-start justify-start pb-[8px] w-[100%]">
                              <Text
                                className="text-black_900 text-left w-[auto]"
                                as="h9"
                                variant="h9"
                              >
                                Kaylee Morgan
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start pb-[20px] w-[100%]">
                              <Text
                                className="not-italic text-gray_800 text-left w-[auto]"
                                variant="body18"
                              >
                                UI Designer
                              </Text>
                            </div>
                            <Line className="bg-black_900 h-[3px] w-[22%]" />
                            <div className="flex flex-col items-start justify-start pt-[20px] w-[100%]">
                              <Text
                                className="leading-[140.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[232px] not-italic text-gray_800 text-left"
                                variant="body18"
                              >
                                Max founded our company. He is the father of our
                                main goals and values. He found the core members
                                of our team and helped them to show their unique
                                talents in the work process. He laid the
                                foundations of the company.
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-center pt-[16px] w-[100%]">
                              <div className="bg-gray_101 flex flex-1 flex-col items-start justify-center p-[16px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="text-deep_purple_A400 text-left w-[auto]"
                                    as="h10"
                                    variant="h10"
                                  >
                                    4.3М+
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-black_900 text-left tracking-ls05 md:tracking-ls11 sm:tracking-ls11 uppercase w-[auto]"
                                    as="h7"
                                    variant="h7"
                                  >
                                    Followers
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-gray_101 flex flex-1 flex-col items-start justify-center p-[16px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="text-deep_purple_A400 text-left w-[auto]"
                                    as="h10"
                                    variant="h10"
                                  >
                                    3.4M
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-black_900 text-left tracking-ls05 md:tracking-ls11 sm:tracking-ls11 uppercase w-[auto]"
                                    as="h7"
                                    variant="h7"
                                  >
                                    Likes
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 md:flex-1 sm:flex-1 flex-col items-start justify-start md:self-stretch sm:self-stretch md:w-[100%] sm:w-[100%] w-[auto]">
                        <div className="bg-white_A700 flex flex-col items-start justify-center w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[280px]">
                            <Img
                              src="images/img_image_3.png"
                              className="h-[280px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                              alt="Image Three"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                            <div className="flex flex-col items-start justify-start pb-[8px] w-[100%]">
                              <Text
                                className="text-black_900 text-left w-[auto]"
                                as="h9"
                                variant="h9"
                              >
                                Ayesha Hardin
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start pb-[20px] w-[100%]">
                              <Text
                                className="not-italic text-gray_800 text-left w-[auto]"
                                variant="body18"
                              >
                                UX Designer
                              </Text>
                            </div>
                            <Line className="bg-black_900 h-[3px] w-[22%]" />
                            <div className="flex flex-col items-start justify-start pt-[20px] w-[100%]">
                              <Text
                                className="leading-[140.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[232px] not-italic text-gray_800 text-left"
                                variant="body18"
                              >
                                Max founded our company. He is the father of our
                                main goals and values. He found the core members
                                of our team and helped them to show their unique
                                talents in the work process. He laid the
                                foundations of the company.
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-center pt-[16px] w-[100%]">
                              <div className="bg-gray_101 flex flex-1 flex-col items-start justify-center p-[16px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="text-deep_purple_A400 text-left w-[auto]"
                                    as="h10"
                                    variant="h10"
                                  >
                                    12.3М+
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-black_900 text-left tracking-ls05 md:tracking-ls11 sm:tracking-ls11 uppercase w-[auto]"
                                    as="h7"
                                    variant="h7"
                                  >
                                    Followers
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-gray_101 flex flex-1 flex-col items-start justify-center p-[16px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="text-deep_purple_A400 text-left w-[auto]"
                                    as="h10"
                                    variant="h10"
                                  >
                                    2.0M
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="not-italic text-black_900 text-left tracking-ls05 md:tracking-ls11 sm:tracking-ls11 uppercase w-[auto]"
                                    as="h7"
                                    variant="h7"
                                  >
                                    Likes
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default TEAMSPage;
