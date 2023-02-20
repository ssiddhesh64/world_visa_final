import { Stack, Img, Text, Button, Line } from "components";

export const WorldVisaSuite = () => {
    return (
        <div className="bg-white_A701 border border-black_900 border-solid flex flex-col justify-center items-center p-[18px] md:w-[100%] sm:w-[100%] w-[26%]">
            <Text
                className="font-roboto font-semibold md:ml-[0] sm:ml-[0] ml-[45px] text-bluegray_905 text-center w-[auto]"
                variant="body6"
            >
                WorldVisa Suite
            </Text>
            <div
                className="font-inter font-light italic md:ml-[0] sm:ml-[0] mt-[20px] text-black_900 text-center"
                variant="body12"
            >
                Choose from a suite of our professional immigration services
                ranging from
                <ol
                    className="font-inter font-light italic md:ml-[0] sm:ml-[0]  mt-[40px] text-black_900 text-left"
                    variant="body12"
                >
                    <li className="py-2">1. Consultation with Top Legal Experts</li>
                    <li className="py-2">2. Detailed profile assessment reports</li>
                    <li className="py-2">3. End-to-end documentation guidance</li>
                    <li className="py-2">4. Filing and submission as well as our premium services</li>
                </ol>
            </div>
            <Button
                className="cursor-pointer font-medium font-poppins leading-[normal] mb-[28px] min-w-[78%] mt-[250px] mx-[auto] text-[18px] text-center text-white_A700 w-[max-content]"
                shape="RoundedBorder10"
                size="2xl"
                variant="OutlineAmber70026_1"
            >
                Build my Kit
            </Button>
        </div>
    )
}
