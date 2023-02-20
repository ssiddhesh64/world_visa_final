import { Stack, Img, Text, Button, Line } from "components";

export const WorldVisaPremium = () => {
    return (
        <div className="bg-white_A701 border border-black_900 border-solid flex flex-col justify-center items-center md:w-[100%] sm:w-[100%] w-[26%]">
            <Text
                className="font-semibold text-bluegray_905 text-left w-[auto]"
                variant="body6"
            >
                WorldVisa Premium
            </Text>

            <Text
                className="font-inter font-light italic sm:mx-[0] mt-[120px] text-black_900 text-center sm:w-[100%] w-[98%]"
                variant="body12"
            >
                All of our world-renowned services, in one
                package. Handheld guidance and support, each step
                of the way. (representation by our lawyers)
            </Text>

            <div className="bottom-[15%] flex flex-col mt-5 md:gap-[40px] sm:gap-[40px] gap-[92px] inset-x-[0] items-center justify-center mx-[auto] w-[100%]">
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
                    className="font-inter font-normal mx-[auto] mt-[10px] not-italic text-black_900 text-center w-[auto]"
                    variant="body14"
                >
                    Explore flexible payment plan options that are
                    pocket friendly and easily accessible
                </Text>

                <Text
                    className="font-inter font-normal mx-[auto] mt-[10px] not-italic text-black_900 text-center w-[auto]"
                    variant="body6"
                >
                    (Place prefered mode of payment in drop down)
                </Text>
            </div>
            <Button
                className="cursor-pointer font-medium font-poppins leading-[normal] mt-[80px] min-w-[78%] mx-[auto] text-[18px] text-center text-white_A700 w-[max-content]"
                shape="RoundedBorder10"
                size="2xl"
                variant="OutlineAmber70026_1"
            >
                Build my Kit
            </Button>
        </div>
    )
}
