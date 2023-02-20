import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { WorldVisaAdvanced, WorldVisaBasic, WorldVisaPremium, WorldVisaSuite } from "../../components";

const ImmigrationToolkitsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-start mx-[auto] pb-[53px] w-[100%]">
        <Navbar />
        <Img
          src="images/img_decore.png"
          className="sm:h-[auto] h-[100%] w-[50%] absolute top-0 right-0"
          alt="image229"
        />
        <div className="flex sm:flex-col md:flex-col mt-[150px] px-[50px] h-[500px] items-start justify-start">
          <div className="flex-1 flex-col items-start justify-start">
            <div className="flex flex-col">
              <Text
                className="capitalize font-inter md:ml-[0] sm:ml-[0] text-bluegray_903 text-center w-[auto]"
                as="h3"
                variant="h3"
              >
                Immigration? now you can ‘Do-it-Yourself’!
              </Text>
            </div>
            <div className="flex flex-col pl-[20px] justify-start items-start mt-[10px]">
              <div className="flex mt-[20px]">
                <Img
                  src="images/imageflower.svg"
                  alt="image229"
                />
                <Text
                  className="font-light pl-[20px] inset-x-[0] sm:mx-[0] mx-[auto] text-black_900  top-[34%] sm:w-[100%] w-[99%]"
                  variant="body12"
                >
                  Our packages are designed to cater to different kinds of
                  requirements and ensure each customer gets all the help they
                  need to have a smooth immigration process.{" "}
                </Text>
              </div>
              <div className="flex mt-[20px]">
                <Img
                  src="images/imageflower.svg"
                  alt="image229"
                />
                <Text
                  className="font-light pl-[20px] inset-x-[0] sm:mx-[0] mx-[auto] text-black_900 top-[34%] sm:w-[100%] w-[99%]"
                  variant="body12"
                >
                  Easy to follow step-by-step guides for each and every immigration pathway that will help you take charge of your own application.
                </Text>
              </div>
              <div className="flex mt-[20px]">
                <Img
                  src="images/imageflower.svg"
                  alt="image229"
                />
                <Text
                  className="font-light pl-[20px] inset-x-[0] sm:mx-[0] mx-[auto] text-black_900 top-[34%] sm:w-[100%] w-[99%]"
                  variant="body12"
                >
                  You can complete most immigration matters yourself with our kits. However, there can be some issues that are so complex or so unique that you cannot foresee them. That is where we come in.
                </Text>
              </div>
              <div className="flex mt-[20px]">
                <Img
                  src="images/imageflower.svg"
                  alt="image229"
                />
                <Text
                  className="font-light pl-[20px] inset-x-[0] sm:mx-[0] mx-[auto] text-black_900 top-[34%] sm:w-[100%] w-[99%]"
                  variant="body12"
                >
                  Our experts will be with you every step of the way, from preparing forms and documents to collecting supporting documents, submitting your application, and following it to ensure its success.
                </Text>
              </div>
              <div className="flex mt-[20px]">
                <Img
                  src="images/imageflower.svg"
                  alt="image229"
                />
                <Text
                  className="font-light pl-[20px] inset-x-[0] sm:mx-[0] mx-[auto] text-black_900 top-[34%] sm:w-[100%] w-[99%]"
                  variant="body12"
                >
                  Your first eligibility assessment is on us. Take a free assessment to know your PR eligibility to Australia, Canada, Germany or UK
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-center mt-[20px] w-[100%]">
              <Button
                className="bg-light_blue_A700 bottom-[3%] font-medium sm:px-[20px] px-[35px] py-[20px] mb-[20px] rounded-radius10 text-center text-shadow-ts text-white_A700 w-[80%]"
                onClick={() => navigate("/assessment")}
                variant="body10"
              >
                Take a free assessment
              </Button>
            </div>
          </div>
          <div className="flex-1 h-[100%] z-10">
            <Img
              src="images/img_image229.png"
              className="sm:h-[auto] object-contain pl-[10px] md:w-[100%] sm:w-[100%] w-[100%] h-[60%]"
              alt="image229"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start w-[100%]">
          <Text
            className="capitalize font-inter md:ml-[0] sm:ml-[0] mt-[83px] text-bluegray_903 text-center w-[auto]"
            as="h3"
            variant="h3"
          >
            Explore our popular Immigration Kits
          </Text>
          <div className="flex items-stretch md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] justify-start max-w-[1259px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] mt-[30px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <WorldVisaBasic />
            <WorldVisaAdvanced />
            <WorldVisaPremium />
            <WorldVisaSuite />
          </div >

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
            <div className="pt-8">
              <Button
                className="bg-light_blue_A700 bottom-[3%] font-medium h-[60px] left-[5%] sm:px-[20px] rounded-radius10 text-center text-shadow-ts text-white_A700 w-[461px]"
                onClick={() => navigate("/contacts")}
                variant="body10"
              >
                Contact our Experts
              </Button>
            </div>
          </div>
          <div className="bg-red_400 flex flex-col items-center justify-start mt-[48px] p-[12px] w-[100%]">
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
