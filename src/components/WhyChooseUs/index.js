import {Img, Text, CheckBox} from 'components'
export const WhyChooseUs = () => {
  return (
    <div className="flex sm:flex-col md:flex-col items-stretch font-manrope mt-[43px] overflow-x-auto w-[100%]">
              <div className="bg-gray_100 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] pb-[6px] pr-[6px] w-[100%]">
                <Img
                  src="images/img_image288.png"
                  className="sm:h-[auto] md:w-[100%] sm:w-[100%]"
                  alt="image288"
                />
              </div>
              <div className=" flex flex-col h-[max-content] inset-[0] items-start justify-start m-[auto] sm:px-[20px] md:px-[40px] w-[100%]">
                <div className="flex flex-col items-start justify-start mx-[auto] mt-[14px] md:w-[100%] sm:w-[100%] w-[100%] pl-5">
                  <Text
                    className="text-bluegray_900 text-left tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Why choose us?
                  </Text>
                  <div className="flex flex-col gap-[15px] items-start justify-start mt-[50px] w-[100%]">
                    <CheckBox
                      className="font-bold font-manrope text-[16px] text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="description Four"
                      label="Machine learning"
                    ></CheckBox>
                    <Text
                      className="font-normal font-opensans leading-[28.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      variant="body12"
                    >
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start mt-[30px] w-[100%]">
                    <CheckBox
                      className="font-bold font-manrope text-[16px] text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="description Six"
                      label="Embed analytics"
                    ></CheckBox>
                    <Text
                      className="font-normal font-opensans leading-[28.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      variant="body12"
                    >
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start mt-[30px] w-[100%]">
                    <CheckBox
                      className="font-bold font-manrope text-[16px] text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="description Eight"
                      label="Access control"
                      size="sm"
                    ></CheckBox>
                    <Text
                      className="font-normal font-opensans leading-[28.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      variant="body12"
                    >
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores.
                    </Text>
                  </div>
                </div>
              </div>
          </div>
  )
}
