import { Text, Button, Line } from "components";

export const Subscribe = () => {
  return (
    <div className="bg-teal_100 flex flex-col items-center justify-start pt-[80px] w-[full]">
      <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[58%]">
          <div className="flex flex-col gap-[24px] items-start justify-start sm:w-[100%] w-[auto]">
            <Text
              className="font-manrope text-left text-white_A700 tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h13"
              variant="h13"
            >
              Subscribe to our newsletter
            </Text>
            <Text
              className="font-normal font-opensans leading-[33.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[540px] not-italic text-left text-white_A700 tracking-ls03 md:tracking-ls1 sm:tracking-ls1"
              as="h14"
              variant="h14"
            >
              Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium.
            </Text>
          </div>
          <div className="bg-bluegray_100 gap-[20px] flex flex-row items-center justify-between md:mt-[0] sm:mt-[0] my-[46px] rounded-radius6 md:w-[100%] sm:w-[100%] w-[auto]">
            <input />
            <Button
              className="cursor-pointer font-bold font-manrope text-[16px] text-bluegray_900 text-center tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="FillWhiteA700"
            >
              Send
            </Button>
          </div>
        </div>
        <Line className="bg-bluegray_500 h-[1px] w-[100%]" />
      </div>
    </div>
  )
}
