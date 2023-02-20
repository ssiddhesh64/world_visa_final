import {Img, Text, List} from 'components'


export const Testimonials = () => {
  return (
    <div className="flex flex-col font-manrope items-center justify-start mt-[54px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[58%]">
            <div className="flex flex-col gap-[58px] items-center justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                <Text
                  className="sm:mt-[0] mt-[27px] text-bluegray_900 text-left tracking-ls057 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Testimonials{" "}
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-between w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-col gap-[25px] items-start justify-start mx-[0] p-[35px] sm:px-[20px] shadow-bs9">
                  <div className="flex flex-row font-manrope gap-[25px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_001imgperson1.png"
                      className="h-[80px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[80px]"
                      alt="001imgpersonOne"
                    />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body12"
                      >
                        Alex Bern
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        CEO by PixelPerfect
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-normal font-opensans leading-[28.00px] md:leading-[normal] sm:leading-[normal] max-w-[280px] not-italic self-stretch text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                    variant="body12"
                  >
                    “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corpor suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis utem vel eum iure reprehender qui in ea
                    voluptate velit esse quam nihil molesti consequatur, vel
                    illum.”{" "}
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[25px] items-start justify-start mx-[0] p-[35px] sm:px-[20px] shadow-bs9">
                  <div className="flex flex-row font-manrope gap-[25px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_001imgperson1_80x80.png"
                      className="h-[80px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[80px]"
                      alt="001imgpersonOne One"
                    />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body12"
                      >
                        Ruben Chifundo
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        CEO by NOX
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-normal font-opensans leading-[28.00px] md:leading-[normal] sm:leading-[normal] max-w-[280px] not-italic self-stretch text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                    variant="body12"
                  >
                    “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corpor suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis utem vel eum iure reprehender qui in ea
                    voluptate velit esse quam nihil molesti consequatur, vel
                    illum.”{" "}
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[25px] items-start justify-start mx-[0] p-[35px] sm:px-[20px] shadow-bs9">
                  <div className="flex flex-row font-manrope gap-[25px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_003imgperson1.png"
                      className="h-[80px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[80px]"
                      alt="003imgpersonOne"
                    />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-bluegray_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body12"
                      >
                        Tigran Nazaret
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        Data analyst
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-normal font-opensans leading-[28.00px] md:leading-[normal] sm:leading-[normal] max-w-[280px] not-italic self-stretch text-gray_500 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1"
                    variant="body12"
                  >
                    “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corpor suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis utem vel eum iure reprehender qui in ea
                    voluptate velit esse quam nihil molesti consequatur, vel
                    illum.”{" "}
                  </Text>
                </div>
              </List>
            </div>
          </div>
  )
}

