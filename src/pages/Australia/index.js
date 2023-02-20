import React, { useState } from "react";

import { Stack, Text, Img, Button, List, CheckBox, Footer, Subscribe, WhyChooseUs, Testimonials, Pathways, WhyChooseAustralia } from "components";
import { Navbar } from "../../components";
import { useNavigate } from "react-router-dom";



const AustraliaPage = () => {
  const navigate = useNavigate();
  const [panel, setPanel] = useState("Cards");

  return (
    <>
      <Navbar />
      <div className="bg-white_A700 flex flex-col pt-[150px] font-poppins md:gap-[40px] sm:gap-[40px] gap-[416px] items-center justify-center mx-[auto] w-[100%]">
        <div className="flex flex-col items-center w-[100%]">
          <div className="flex flex-col gap-[15px] items-center justify-center md:ml-[0] sm:ml-[0] md:w-[100%] sm:w-[100%] w-[auto]">
            <Text
              className="font-bold font-manrope text-blue_A700 text-center tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body12"
            >
              Immigration
            </Text>
            <Text
              className="font-manrope text-bluegray_900 text-center tracking-ls069 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h4"
              variant="h4"
            >
              Australia
            </Text>
            <Text
              className="font-normal font-opensans leading-[33.00px] md:leading-[normal] sm:leading-[normal] max-w-[1077px] mx-[auto] not-italic text-center text-gray_500 tracking-ls03 md:tracking-ls1 sm:tracking-ls1"
              variant="body9"
            >
              Enjoy all the benefits of an Australian Citizen except the right
              to vote and right to participate in the Government election.
              With a team of qualified immigration & visa consultants,
              WorldVisa offers the best support to make your Australia
              immigration process go smoother without any hassles. Settle,
              work and study in Australia indefinitely, using a point-based
              immigration system.
            </Text>
            <Text
              className="mx-[auto] pt-5 text-bluegray_900 text-center tracking-ls057 md:tracking-ls1 sm:tracking-ls1"
              as="h16"
              variant="h16"
            >
              Take our FREE assessment to find out your eligibility for Australia
              PR
            </Text>
          </div>
          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[21%] mx-[auto] mt-5 text-[18px] text-center text-white_A700 w-[max-content]"
            onClick={() => navigate("/assessment")}
            shape="RoundedBorder10"
            size="2xl"
            variant="OutlineAmber70026_1"
          >
            Take a free assessment
          </Button>
          {/* {isOpen ? <WhyChooseAustralia setisOpen={setisOpen} isOpen={isOpen}/> : CardsView(isOpen, setisOpen)} */}
          {/* <Pathways/> */}
          {(() => {
            switch (panel) {
              case 'Cards':
                return CardsView(panel, setPanel)
              case 'Australia':
                return <WhyChooseAustralia setPanel={setPanel} />
              case 'Pathways':
                return <Pathways setPanel={setPanel} />
              default:
                return null
            }
          })()}
          <WhyChooseUs />
          <Testimonials />
          <div className="bg-gray_100 flex flex-col items-center justify-center mt-[76px] py-[100px] w-[100%]">
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
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
              </Text>
              <Button
                className="cursor-pointer font-bold font-manrope text-[16px] text-center text-white_A700 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[190px]"
                shape="RoundedBorder5"
                size="2xl"
                variant="OutlineBlueA7002d"
                onClick={() => navigate("/contacts")}
              >
                Contact Us
              </Button>
            </div>
            <div className="mt-5 w-[100%]">
              <Subscribe />
            </div>
          </div>
          <div className="mt-[50px] w-[100%]">
            <Footer />
          </div>
        </div>

      </div>
    </>
  );

  function CardsView(panel, setPanel) {
    return <div className="flex flex-col font-manrope items-center justify-center mt-[44px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[100%]">
      <div className="flex flex-col gap-[40px] items-center justify-center w-[100%]">
        <List
          className="flex-col gap-[12px] grid md:grid-cols-1 sm:grid-cols-1 items-center w-[100%]"
          orientation="vertical"
        >
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[30px] sm:gap-[30px] items-center justify-center my-[0] w-[100%]">
            <div className="bg-white_A700 flex flex-col gap-[20px] items-start justify-center sm:px-[20px] px-[35px] py-[20px] rounded-radius6 shadow-bs9 sm:w-[100%] w-[auto]">
              <div className="flex flex-col items-center justify-center w-[60px]">
                <Img
                  src="images/img_iconbookdatabase.svg"
                  className="h-[60px] w-[60px]"
                  alt="iconbookdatabase" />
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-center sm:w-[100%] w-[470px]">
                <Text
                  className="font-bold font-manrope text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body7"
                >
                  Why Choose Australia?
                </Text>
                <Text
                  className="font-normal font-opensans leading-[28.00px] md:leading-[normal] sm:leading-[normal] max-w-[470px] not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                  variant="body12"
                >
                  Australia's rich culture, well-paying employment,
                  excellent healthcare system, minimal air pollution,
                  excellent educational system......
                </Text>
              </div>
              {readMore(navigate, panel, setPanel, 'Australia')}
            </div>
            <div className="bg-white_A700 flex flex-col gap-[20px] items-start justify-center mb-[56px] sm:px-[20px] px-[35px] py-[20px] rounded-radius6 shadow-bs9 sm:w-[100%] w-[auto]">
              <div className="flex flex-col items-start justify-start w-[60px]">
                <Img
                  src="images/img_signal_blue_a700.svg"
                  className="h-[60px] w-[60px]"
                  alt="signal" />
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-center sm:w-[100%] w-[470px]">
                <Text
                  className="font-bold font-manrope text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body7"
                >
                  Calculate PR score
                </Text>
                <Text
                  className="font-normal font-opensans not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body12"
                >
                  Check your Eligibility to Migrate to Australia for FREE
                </Text>
              </div>
              <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                <Text
                  className="font-semibold text-blue_A700 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body14"
                >
                  Check now
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-[20px] w-[20px]"
                  alt="arrowright One" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[30px] sm:gap-[30px] items-start justify-center my-[0] w-[100%]">
            <div className="bg-white_A700 flex flex-col gap-[20px] items-start justify-center sm:px-[20px] px-[35px] py-[20px] rounded-radius6 shadow-bs9 sm:w-[100%] w-[auto]">
              <div className="flex flex-col items-start justify-start w-[60px]">
                <Img
                  src="images/img_trash.svg"
                  className="h-[60px] w-[60px]"
                  alt="trash" />
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-center sm:w-[100%] w-[470px]">
                <Text
                  className="font-bold font-manrope text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body7"
                >
                  PR Application Process
                </Text>
                <Text
                  className="font-normal font-opensans leading-[28.00px] md:leading-[normal] sm:leading-[normal] max-w-[470px] not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                  variant="body12"
                >
                  Big data infrastructure setup and support.; big data
                  quality and security management; big data capture,
                  analysis and reporting.
                </Text>
              </div>
              <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                <Text
                  className="font-semibold text-blue_A700 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body14"
                >
                  Read more
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-[20px] w-[20px]"
                  alt="arrowright One" />
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[20px] items-start justify-center mb-[28px] sm:px-[20px] px-[35px] py-[20px] rounded-radius6 shadow-bs9 sm:w-[100%] w-[auto]">
              <div className="flex flex-col items-start justify-start w-[60px]">
                <Img
                  src="images/img_trash_blue_a700.svg"
                  className="h-[60px] w-[60px]"
                  alt="trash One" />
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-center sm:w-[100%] w-[470px]">
                <Text
                  className="font-bold font-manrope text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body7"
                >
                  Immigration Pathways
                </Text>
                <Text
                  className="font-normal font-opensans not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body12"
                >
                  Migrate to Canada depending on yor
                </Text>
              </div>
              {readMore(navigate, panel, setPanel, 'Pathways')}
            </div>
          </div>
        </List>
        <div className="bg-white_A700 flex flex-col gap-[20px] items-start justify-center max-w-[1110px] sm:px-[20px] px-[35px] py-[20px] rounded-radius6 shadow-bs9 w-[100%]">
          <div className="flex flex-col items-start justify-start w-[60px]">
            <Img
              src="images/img_clock_blue_a700.svg"
              className="h-[60px] w-[60px]"
              alt="clock One" />
          </div>
          <div className="flex flex-col gap-[16px] items-start justify-center sm:w-[100%] w-[470px]">
            <Text
              className="font-bold font-manrope text-bluegray_900 text-left tracking-ls032999999999999996 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body7"
            >
              Useful Australian Resources
            </Text>
            <Text
              className="font-normal font-opensans leading-[28.00px] md:leading-[normal] sm:leading-[normal] max-w-[470px] not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
              variant="body12"
            >
              Access our database of useful Australian resources to
              kickstart your journey today
            </Text>
          </div>
          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
            <Text
              className="font-semibold text-blue_A700 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body14"
            >
              Read more
            </Text>
            <Img
              src="images/img_arrowright.svg"
              className="h-[20px] w-[20px]"
              alt="arrowright Two" />
          </div>
        </div>
      </div>
    </div>;
  }
};

export default AustraliaPage;
function readMore(navigate, panel, setPanel, component) {
  return <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
    <Text
      className="cursor-pointer font-semibold text-blue_A700 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
      variant="body14"
      onClick={() => setPanel(component)}
    >
      Read more
    </Text>
    <Img
      src="images/img_arrowright.svg"
      className="cursor-pointer h-[20px] w-[20px]"
      alt="arrowright"
      onClick={() => setPanel("Australia")} />
  </div>;
}

