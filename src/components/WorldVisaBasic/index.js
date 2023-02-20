import { Stack, Img, Text, Button, Line } from "components";

export const WorldVisaBasic = () => {
    return (
        <div className="bg-white_A701 border border-black_900 border-solid flex flex-col justify-center items-center md:w-[100%] sm:w-[100%] w-[26%]">
            <Text
                className="font-roboto font-semibold  text-bluegray_905 text-center"
                variant="body6"
            >
                WorldVisa Basic
            </Text>
            <Text
                className="font-normal font-roboto  mt-4 not-italic text-black_900 text-center w-[auto]"
                variant="body16"
            >
                20K
            </Text>
            <div
                className="font-inter font-light italic mt-6  ml-[15px] text-black_900 text-center"
                variant="body12"
            >
                Find all the basic guides and Case materials needed to
                take charge of your own application.{" "}
                <ol
                    className="font-inter font-light italic  gap-2 mt-[43px]  text-black_900 text-left"
                >
                    <li className="py-2">1. One-time Consultation with our top legal experts
                        to walkthrough profile assessment</li>
                    <li className="py-2">2. Case summary, detailed process drift, Allottment of skill code(NOC/ANZSCO)</li>
                    <li className="py-2">3. Verification of your profile &
                        skill code allottment</li>
                    <li className="py-2">4. Access to IELTS Orientation Kit, free assessment and test slot booking services</li>
                    <li className="py-2">5. Personalised guide prepared by our top Immigration lawyers to fill out your application form with
                        response keys, documentation checklists </li>
                    <li className="py-2">6. Expert briefing on documentation requirements and sample paper work specific to your Skill code &
                        profile</li>
                </ol>
            </div>
            <Button
                className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[78%] mt-5 mx-[auto] text-[18px] text-center text-white_A700 w-[max-content]"
                shape="RoundedBorder10"
                size="2xl"
                variant="OutlineAmber70026_1"
            >
                Build my Kit
            </Button>
        </div>
    )
}
