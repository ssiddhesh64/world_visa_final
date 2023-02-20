import React from "react";

import { Stack, Img, Text, Button, Line } from "components";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { WorldVisaAdvanced, WorldVisaBasic, WorldVisaPremium, WorldVisaSuite } from "../../components";

const ImmigrationToolkitsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-start mx-[auto] pb-[53px] w-[100%]">
        <div className="flex flex-col justify-start w-[100%]">
          <Stack className="font-poppins h-[800px] max-w-[1427px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] relative w-[100%]">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-y-[0] items-end justify-start my-[auto] p-[60px] sm:px-[20px] md:px-[40px] right-[0] w-[57%]"
              style={{ backgroundImage: "url('images/img_decore.png')" }}
            >
              <Img
                src="images/img_image229.png"
                className="h-[294px] sm:h-[auto] mb-[260px] mt-[126px] object-cover md:w-[100%] sm:w-[100%] w-[83%]"
                alt="image229"
              />
            </div>
            <Navbar/>
            <Button
                className="absolute bg-light_blue_A700 bottom-[3%] font-medium h-[60px] left-[5%] sm:px-[20px] px-[35px] py-[20px] rounded-radius10 text-center text-shadow-ts text-white_A700 w-[461px]"
                onClick={() => navigate("/assessment")}
                variant="body10"
            >
                Take a free assessment
            </Button>
          </Stack>
          <div className="flex flex-row items-start justify-between md:ml-[0] sm:ml-[0] ml-[231px] mt-[41px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[24%]">
            <Img
              src="images/img_favorite_black_900.svg"
              className="h-[9px] w-[auto]"
              alt="favorite"
            />
            <Stack className="h-[10px] relative w-[4%]">
              <Img
                src="images/img_favorite_black_900.svg"
                className="absolute h-[9px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                alt="favorite One"
              />
              <Img
                src="images/img_favorite_black_900.svg"
                className="absolute bottom-[0] h-[9px] inset-x-[0] mx-[auto] w-[auto]"
                alt="favorite Two"
              />
            </Stack>
          </div>
          <Text
            className="capitalize font-inter md:ml-[0] sm:ml-[0] ml-[284px] mt-[83px] text-bluegray_903 text-left w-[auto]"
            as="h3"
            variant="h3"
          >
            Explore our popular Immigration Kits
          </Text>
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start max-w-[1259px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] mt-[30px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <WorldVisaBasic/>
            <WorldVisaAdvanced/>
            <WorldVisaPremium/>
            <WorldVisaSuite/>
          </div >
          {/* <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start max-w-[1259px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] mt-[30px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <Stack className="h-[683px] relative md:w-[100%] sm:w-[100%] w-[75%]">
              <Stack className="font-poppins h-[683px] m-[auto] w-[100%]">
                <Stack className="h-[683px] m-[auto] w-[100%]">
                  <Stack className="absolute font-roboto h-[683px] inset-[0] justify-center m-[auto] w-[100%]">
                    <div className="flex flex-col items-center justify-start m-[auto] w-[100%]">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="bg-white_A700 border border-black_900 border-solid h-[682px] w-[34%]"></div>
                        <div className="bg-white_A701 border border-black_900 border-solid flex flex-col md:gap-[40px] sm:gap-[40px] gap-[64px] items-center justify-start p-[21px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[34%]">
                          <Text
                            className="font-semibold mt-[9px] text-bluegray_905 text-left w-[auto]"
                            variant="body6"
                          >
                            WorldVisa Premium
                          </Text>
                          <Stack className="font-inter h-[298px] mb-[244px] relative w-[97%]">
                            <Text
                              className="absolute font-light h-[max-content] inset-[0] italic justify-center m-[auto] sm:mx-[0] text-black_900 text-left sm:w-[100%] w-[95%]"
                              variant="body12"
                            >
                              All of our world-renowned services, in one
                              package. Handheld guidance and support, each step
                              of the way. (representation by our lawyers)
                            </Text>
                            <div className="absolute bottom-[15%] flex flex-col md:gap-[40px] sm:gap-[40px] gap-[92px] inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                              <Text
                                className="capitalize font-normal font-roboto mx-[auto] not-italic text-black_900 text-center w-[auto]"
                                variant="body14"
                              >
                                <span className="text-black_900 text-[14px] font-inter">
                                  Find a detailed List of our services,{" "}
                                </span>
                                <a
                                  href="javascript:"
                                  className="text-red_900 text-[14px] font-inter font-bold underline"
                                >
                                  here
                                </a>
                                <span className="text-black_900 text-[14px] font-inter">
                                  {" "}
                                </span>
                              </Text>
                              <Text
                                className="font-inter font-normal mx-[auto] not-italic text-black_900 text-center w-[auto]"
                                variant="body14"
                              >
                                Explore flexible payment plan options that are
                                pocket friendly and easily accessible
                              </Text>
                            </div>
                          </Stack>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-white_A701 border border-black_900 border-solid flex flex-col h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] p-[4px] w-[34%]">
                      <Text
                        className="font-roboto font-semibold md:ml-[0] sm:ml-[0] ml-[66px] mt-[26px] text-bluegray_905 text-left w-[auto]"
                        variant="body6"
                      >
                        WorldVisa Basic
                      </Text>
                      <Text
                        className="font-normal font-roboto md:ml-[0] sm:ml-[0] ml-[144px] mt-[18px] not-italic text-black_900 text-left w-[auto]"
                        variant="body16"
                      >
                        20K
                      </Text>
                      <Stack className="font-inter h-[308px] md:ml-[0] sm:ml-[0] ml-[21px] mt-[31px] relative w-[94%]">
                        <Text
                          className="absolute font-light h-[max-content] inset-[0] italic justify-center m-[auto] sm:mx-[0] text-black_900 text-left sm:w-[100%] w-[99%]"
                          variant="body12"
                        >
                          Find all the basic guides and Case materials needed to
                          take charge of your own application.{" "}
                        </Text>
                        <Text
                          className="absolute font-light h-[max-content] inset-y-[0] left-[0] my-[auto] text-black_900 text-left"
                          variant="body12"
                        >
                           1. One-time Consultation with our top legal experts
                          to walkthrough profile assessment 2. Case summary,
                          detailed process drift, Allottment of skill
                          code(NOC/ANZSCO) 3. Verification of your profile &
                          skill code allottment
                          <br />
                          4. Access to IELTS Orientation Kit, free assessment
                          and test slot booking services
                          <br />
                          5. Personalised guide prepared by our top Immigration
                          lawyers to fill out your application form with
                          response keys, documentation checklists <br />
                          6. Expert briefing on documentation requirements and
                          sample paper work specific to your Skill code &
                          profile
                        </Text>
                      </Stack>
                      <Text
                        className="font-bold font-poppins mb-[54px] md:ml-[0] sm:ml-[0] ml-[114px] mt-[169px] text-center text-white_A700 w-[auto]"
                        variant="body10"
                      >
                        ddd
                      </Text>
                    </div>
                  </Stack>
                  <Text
                    className="absolute font-inter font-light inset-x-[0] sm:mx-[0] mx-[auto] text-black_900 text-left top-[25%] sm:w-[100%] w-[28%]"
                    variant="body12"
                  >
                    FinFind all the basic guides and Case materials needed to
                    takFind all the basic guides, instructions and sample
                    materials needed to take charge of your own application:e
                    charFind all the basic guides and Case materials needed to
                    take charge of your own application:ge with Case Officer as
                    and when required your own application:d all the basic
                    guides and Case materials needed to take charge of your own
                    application:
                  </Text>
                  <div className="absolute bg-white_A701 border border-black_900 border-solid flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] p-[12px] w-[35%]">
                    <Text
                      className="font-roboto font-semibold mt-[15px] text-bluegray_905 text-left w-[auto]"
                      variant="body6"
                    >
                      WorldVisa Advanced
                    </Text>
                    <Text
                      className="font-normal font-roboto mt-[20px] not-italic text-black_900 text-left w-[auto]"
                      variant="body16"
                    >
                      80K
                    </Text>
                    <Text
                      className="font-normal font-roboto italic mt-[10px] text-green_800 text-left w-[auto]"
                      variant="body16"
                    >
                      Most popular package
                    </Text>
                    <Text
                      className="font-inter font-light italic mb-[253px] mt-[9px] sm:mx-[0] text-black_900 text-left sm:w-[100%] w-[98%]"
                      variant="body12"
                    >
                      For our clients who require stage-by-stage guidance
                    </Text>
                  </div>
                </Stack>
                <div className="absolute bottom-[7%] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[94%]">
                  <div className="flex flex-col gap-[49px] justify-start w-[100%]">
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[603px] text-black_900 text-center w-[auto]"
                      variant="body10"
                    >
                      (Place prefered mode of payment in drop down)
                    </Text>
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between mr-[24px] md:w-[100%] sm:w-[100%] w-[98%]">
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[26%] text-[18px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder10"
                        size="2xl"
                        variant="OutlineAmber70026_1"
                      >
                        Buy Now
                      </Button>
                      <div className="bg-light_blue_A700 flex flex-col items-center justify-end p-[12px] rounded-radius10 shadow-bs3 md:w-[100%] sm:w-[100%] w-[27%]">
                        <Text
                          className="font-medium mt-[8px] text-left text-white_A700 w-[auto]"
                          variant="body10"
                        >
                          Buy Now
                        </Text>
                      </div>
                      <div className="bg-light_blue_A700 flex flex-row items-center justify-end p-[14px] rounded-radius10 shadow-bs3 md:w-[100%] sm:w-[100%] w-[26%]">
                        <Text
                          className="font-medium mt-[5px] text-left text-white_A700 w-[auto]"
                          variant="body10"
                        >
                          Buy Now
                        </Text>
                        <Line className="bg-white_A700 h-[2px] ml-[5px] my-[7px] rotate-[-50deg] w-[6px]" />
                        <Line className="bg-white_A700 h-[2px] mr-[40px] my-[7px] rotate-[-140deg] w-[8px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Stack>
              <Text
                className="absolute bottom-[14%] font-inter font-light inset-x-[0] mx-[auto] text-black_900 text-left"
                variant="body12"
              >
                Consultation with Case Processing Officer at each stage of the
                PR application
                <br />
                Consult with Case Officer as and when required
                <br />
                Access to personalised profile dashboard
                <br />
                Unlocked access to IELTS study material, mock test & answer keys
                <br />
                Expert briefing on documentation requirements and sample paper
                work specific to your Skill code & profile
                <br />
                Additional guidance on preparing, finalising and lodging of
                alternate state/provincial applications
                <br />
                Unlocked access to advisory on preparing designted skill-code
                specific resume
              </Text>
            </Stack>
            <div className="bg-white_A701 border border-black_900 border-solid flex flex-col justify-start p-[18px] md:w-[100%] sm:w-[100%] w-[26%]">
              <Text
                className="font-roboto font-semibold md:ml-[0] sm:ml-[0] ml-[45px] mt-[12px] text-bluegray_905 text-left w-[auto]"
                variant="body6"
              >
                WorldVisa Suite
              </Text>
              <div
                className="font-inter font-light italic md:ml-[0] sm:ml-[0] ml-[15px] mt-[63px] text-black_900 text-left"
                variant="body12"
              >
                Choose from a suite of our professional immigration services
                ranging from
                <ol className="font-inter font-light italic md:ml-[0] sm:ml-[0] ml-[15px] mt-[63px] text-black_900 text-left"
                    variant="body12">
                  <li>Consultation with Top Legal Experts</li>
                  <li>Detailed profile assessment reports</li>
                  <li>End-to-end documentation guidance</li>
                  <li>Filing and submission as well as our premium services</li>
                </ol>
              </div>
              <Button
                className="cursor-pointer font-medium font-poppins leading-[normal] mb-[28px] min-w-[78%] mt-[106px] mx-[auto] text-[18px] text-center text-white_A700 w-[max-content]"
                shape="RoundedBorder10"
                size="2xl"
                variant="OutlineAmber70026_1"
              >
                Build my Kit
              </Button>
            </div>
            <WorldVisaSuite/>
          </div> */}
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[42px] sm:gap-[42px] items-start justify-between max-w-[1335px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] mt-[138px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <Img
              src="images/img_image288.png"
              className="h-[591px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[55%]"
              alt="image288"
            />
            <div className="flex flex-col gap-[45px] items-center justify-between md:w-[100%] sm:w-[100%] w-[43%]">
              <div className="flex flex-col gap-[45px] md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                <Text
                  className="leading-[56.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-bluegray_900 text-center tracking-ls075 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[91%]"
                  as="h3"
                  variant="h3"
                >
                  Why choose our Toolkits?
                </Text>
                <Text
                  className="font-light inset-x-[0] sm:mx-[0] mx-[auto] text-black_900 text-center top-[34%] sm:w-[100%] w-[99%]"
                  variant="body12"
                >
                  Our packages are designed to cater to different kinds of
                  requirements and ensure each customer gets all the help they
                  need to have a smooth immigration process.{" "}
                </Text>
              </div>
              
              <div className="flex items-start justify-start md:h-[auto] sm:h-[auto] w-full">
                <Img
                  src="images/img_checkmark.svg"
                  className="h-[25px] w-[25px]"
                  alt="checkmark Three"
                />
                <Text
                  className="font-normal leading-[28.00px] pl-2 md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                  variant="body12"
                >
                  Tailor made Checklists, Templates and how-to Guides
                </Text>
              </div>
              <div className="flex items-start justify-start md:h-[auto] sm:h-[auto] w-full">
                <Img
                  src="images/img_checkmark.svg"
                  className="h-[25px] w-[25px]"
                  alt="checkmark Three"
                />
                <Text
                  className="font-normal leading-[28.00px] pl-2 md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                  variant="body12"
                >
                  {`'Orientation' manuals delivered to your doorstep`}
                </Text>
              </div>
              <div className="flex items-start justify-start md:h-[auto] sm:h-[auto] w-full">
                <Img
                  src="images/img_checkmark.svg"
                  className="h-[25px] w-[25px]"
                  alt="checkmark Three"
                />
                <Text
                  className="font-normal leading-[28.00px] pl-2 md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                  variant="body12"
                >
                  Guides curated by MARA/IRCC, Expert Legal advisors and
                  Paralegals
                </Text>
              </div>
              <div className="flex items-start justify-start md:h-[auto] sm:h-[auto] w-full">
                <Img
                  src="images/img_checkmark.svg"
                  className="h-[25px] w-[25px]"
                  alt="checkmark Three"
                />
                <Text
                  className="font-normal leading-[28.00px] pl-2 md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                  variant="body12"
                >
                  Tiered Solutions that fit your application needs
                </Text>
              </div>
              
              <Button
                className="bg-light_blue_A700 bottom-[3%] font-medium h-[60px] left-[5%] sm:px-[20px] px-[35px] py-[20px] rounded-radius10 text-center text-shadow-ts text-white_A700 w-[461px]"
                variant="body10"
                onClick={() => navigate("/assessment")}
              >
                Take a Free Assessment
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center max-w-[1039px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] mt-[84px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <Text
              className="capitalize font-roboto mr-[3px] not-italic text-black_900 text-left w-[auto]"
              variant="body1"
            >
              <span className="text-black_900 text-[36px] font-inter font-normal sm:text-[32px] md:text-[34px]">
                Find a detailed comparitive analysis of our packages,{" "}
              </span>
              <a
                href="javascript:"
                className="text-red_900 text-[36px] font-inter font-bold sm:text-[32px] md:text-[34px] underline"
              >
                here
              </a>
              <span className="text-black_900 text-[36px] font-inter font-normal sm:text-[32px] md:text-[34px]">
                {" "}
              </span>
            </Text>
            <Text
              className="font-inter mt-[85px] text-bluegray_900 text-center tracking-ls075 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h3"
              variant="h3"
            >
              Need help choosing the right package?
            </Text>
            <Text
              className="font-inter font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] mt-[55px] not-italic text-black_900 text-center tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
              variant="body12"
            >
              {`Our kits provide a step-by-step overview of the processes involved as well as a better understanding of the required documentation so that you can intuit what might be demanded of your unique scenario. If you feel that you can handle your application on your own, Our Silver Immigration toolkit is the ideal solution. If you feel as if you need a little more assistance, or if you would like an expert to review your document, we offer gold and platinum-tier toolkits depending on the level of expertise and support required, along with access to premium travel and concierge services and discounts on IELTS training. You can receive 2 free consultations and a final evaluation once all of your documentation has been assembled with the Gold package. A representative will assess your case's strengths and shortcomings and make sure that you submit the most compelling case as a result of your unique situation. `}
              <br />
              If you are going to do everything yourself, let us make sure you
              did it right!{" "}
            </Text>
            <div className="pt-6">
            <Button
                className="bg-light_blue_A700 bottom-[3%] font-medium h-[60px] left-[5%] sm:px-[20px] rounded-radius10 text-center text-shadow-ts text-white_A700 w-[461px]"
                onClick={() => navigate("/assessment")}
                variant="body10"
            >
                Contact our Experts
            </Button>
            </div>
          </div>
          <div className="bg-red_400 flex flex-col items-center justify-start mt-[72px] p-[12px] w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row gap-[41px] items-start justify-start max-w-[1321px] mb-[6px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
              <Img
                src="images/img_image228.png"
                className="h-[253px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[55%]"
                alt="image228"
              />
              <div className="flex flex-col justify-start md:mt-[0] sm:mt-[0] mt-[12px] md:w-[100%] sm:w-[100%] w-[44%]">
                <Text
                  className="capitalize font-bold font-volkhov text-bluegray_903 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Get IELTS coaching from our certified trainers{" "}
                </Text>
                <Text
                  className="capitalize font-normal font-roboto md:ml-[0] sm:ml-[0] ml-[6px] not-italic text-left text-white_A700 w-[auto]"
                  variant="body4"
                >
                  Expert Assessment
                </Text>
                <Text
                  className="capitalize font-normal font-roboto md:ml-[0] sm:ml-[0] ml-[109px] mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                  variant="body4"
                >
                  Customised testing
                </Text>
                <Text
                  className="capitalize font-normal font-roboto md:ml-[0] sm:ml-[0] ml-[207px] mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                  variant="body4"
                >
                  Personalised Coaching
                </Text>
              </div>
            </div>
          </div>
                <Footer />
        </div>
      </div>
    </>
  );
};

export default ImmigrationToolkitsPage;
