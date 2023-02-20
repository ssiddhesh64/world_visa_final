import { Stack, Img, Text, Button, Line } from "components";

export const WorldVisaAdvanced = () => {
    return (
        <div className="bg-white_A701 border border-black_900 border-solid flex flex-col justify-center items-center md:w-[100%] sm:w-[100%] w-[26%]">
            <Text
                className="font-roboto font-semibold text-bluegray_905 text-left w-[auto] pt-10"
                variant="body6"
            >
                WorldVisa Advanced
            </Text>
            <Text
                className="font-normal font-roboto mt-4 not-italic text-black_900 text-left w-[auto]"
                variant="body16"
            >
                80K
            </Text>
            <Text
                className="font-normal font-roboto italic mt-[20px] text-green_800 text-left w-[auto]"
                variant="body16"
            >
                Most popular package
            </Text>
            <Text
                className="font-inter font-light italic mb-4 mt-[20px] sm:mx-[0] text-black_900 text-center sm:w-[100%] w-[98%]"
                variant="body12"
            >
                For our clients who require stage-by-stage guidance
            </Text>

            <div
                className="font-inter font-light italic md:ml-[0] sm:ml-[0] ml-[15px] text-black_900 text-center"
                variant="body12"
            >
                <ol
                    className="font-inter font-light italic md:ml-[0] sm:ml-[0] mt-3  text-black_900 text-left"
                    variant="body12"
                >
                    <li className="py-2">1. Consultation with Case Processing Officer at each stage of the PR application</li>
                    <li className="py-2">2. Consult with Case Officer as and when required</li>
                    <li className="py-2">3. Access to personalised profile dashboard</li>
                    <li className="py-2">4. Unlocked access to IELTS study material, mock test & answer keys</li>
                    <li className="py-2">5. Expert briefing on documentation requirements and sample paper work specific to your Skill code & profile</li>
                    <li className="py-2">6. Additional guidance on preparing, finalising and lodging of alternate state/provincial applications</li>
                    <li className="py-2">6. Unlocked access to advisory on preparing designted skill-code specific resume</li>
                </ol>
            </div>
            <Button
                className="cursor-pointer font-medium font-poppins leading-[normal] mb-5 min-w-[78%] mt-5 mx-[auto] text-[18px] text-center text-white_A700 w-[max-content]"
                shape="RoundedBorder10"
                size="2xl"
                variant="OutlineAmber70026_1"
            >
                Build my Kit
            </Button>
        </div>
    )
}
