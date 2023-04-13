import React from "react";

import { Text, Img, Line, Button, List, Input } from "components";
import { useNavigate } from "react-router-dom";

const SubscribePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-[50px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-bluegray_900 flex items-center justify-center p-[26px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[94%]">
              <Text
                className="font-semibold text-left text-white_A700 tracking-[-0.50px] w-auto"
                as="h2"
                variant="h2"
              >
                Neuzy
              </Text>
              <div className="flex md:flex-col flex-row gap-6 items-center justify-center md:ml-[0] ml-[173px] w-[47%] md:w-full">
                <Text
                  className="font-semibold text-left text-white_A700 tracking-[-0.50px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Sport
                </Text>
                <Text
                  className="font-semibold text-left text-white_A700 tracking-[-0.50px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Health
                </Text>
                <Text
                  className="font-semibold text-left text-white_A700 tracking-[-0.50px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Political
                </Text>
                <Text
                  className="font-semibold text-left text-white_A700 tracking-[-0.50px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Business
                </Text>
                <Text
                  className="font-semibold text-left text-white_A700 tracking-[-0.50px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Finance
                </Text>
                <Text
                  className="font-semibold text-left text-white_A700 tracking-[-0.50px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Life
                </Text>
                <Text
                  className="font-semibold text-left text-white_A700 tracking-[-0.50px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Entertainment
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[214px] w-[15%] md:w-full">
                <Img
                  src="images/img_search.svg"
                  className="common-pointer h-6 w-6"
                  onClick={() => navigate("/search")}
                  alt="search"
                />
                <Line className="bg-white_A700 h-[26px] w-px" />
                <div className="flex flex-row gap-5 items-center justify-between w-[56%]">
                  <Text
                    className="common-pointer font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                    variant="body4"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Text>
                  <Text
                    className="common-pointer font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                    variant="body4"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[944px] mx-auto md:px-5 w-full">
            <Text
              className="font-semibold text-black_900 text-center tracking-[-0.50px] w-3/4 sm:w-full"
              as="h2"
              variant="h2"
            >
              Subscribe now for the latest and exclusive information alerts
            </Text>
            <Text
              className="font-normal leading-[35.00px] not-italic text-black_900_7f text-center tracking-[-0.50px] w-full"
              as="h6"
              variant="h6"
            >
              <>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </>
            </Text>
          </div>
          <div className="flex flex-col font-poppins gap-[50px] items-center justify-start max-w-[1140px] mt-[50px] mx-auto md:px-5 w-full">
            <div className="bg-white_A700 flex flex-row gap-[30px] items-center justify-center sm:pr-5 pr-[39px] rounded-[22px] w-1/5 md:w-full">
              <Button
                className="cursor-pointer font-normal leading-[normal] min-w-[111px] not-italic text-[10px] text-center text-white_A700 tracking-[0.83px] w-auto"
                shape="RoundedBorder8"
                size="2xl"
                variant="FillBluegray900"
              >
                MONTHLY
              </Button>
              <Text
                className="font-normal not-italic text-black_900 text-left tracking-[0.83px] w-auto"
                variant="body6"
              >
                YEARLY
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="border border-bluegray_900 border-solid flex flex-1 flex-col items-start justify-end p-9 sm:px-5 w-full">
                <Text
                  className="font-poppins ml-1 md:ml-[0] mt-[11px] not-italic text-black_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Starter
                </Text>
                <div className="flex flex-row items-end justify-start ml-1 md:ml-[0] mr-auto mt-7 w-[52%] md:w-full">
                  <Text
                    className="font-inter font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                    as="h2"
                    variant="h2"
                  >
                    $20
                  </Text>
                  <Text
                    className="font-poppins ml-[5px] mt-[17px] not-italic text-black_900_87 text-left w-auto"
                    variant="body1"
                  >
                    /month
                  </Text>
                </div>
                <Line className="bg-gray_200 h-px ml-1 md:ml-[0] mt-4 w-[98%]" />
                <div className="flex flex-col font-poppins items-start justify-start ml-1 md:ml-[0] mt-6 w-auto md:w-full">
                  <Text
                    className="not-italic text-black_900_a2 text-left w-auto"
                    variant="body3"
                  >
                    Access All News
                  </Text>
                  <Text
                    className="mt-6 not-italic text-black_900_a2 text-left w-auto"
                    variant="body3"
                  >
                    Latest News Notification
                  </Text>
                  <Text
                    className="mt-[25px] not-italic text-black_900_a2 text-left w-auto"
                    variant="body3"
                  >
                    Send News Articles
                  </Text>
                  <Text
                    className="mt-[25px] not-italic text-black_900_a2 text-left w-auto"
                    variant="body3"
                  >
                    Latest Movie Recommendation
                  </Text>
                  <Text
                    className="mt-[27px] not-italic text-black_900_a2 text-left w-auto"
                    variant="body3"
                  >
                    Updated News
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-inter font-normal leading-[normal] min-w-[260px] ml-1 md:ml-[0] mt-6 not-italic text-bluegray_900 text-center text-lg tracking-[-0.50px] w-auto"
                  size="2xl"
                  variant="OutlineBluegray900_1"
                >
                  Subscribe
                </Button>
              </div>
              <div className="border border-bluegray_900 border-solid flex flex-1 flex-col gap-[50px] items-center justify-end p-9 sm:px-5 w-full">
                <Text
                  className="mt-[7px] not-italic text-black_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  MOST POPULAR
                </Text>
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <Text
                    className="font-poppins not-italic text-black_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Pro
                  </Text>
                  <div className="flex flex-row gap-2 items-end justify-start mt-7 w-[62%] md:w-full">
                    <Text
                      className="font-inter font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                      as="h2"
                      variant="h2"
                    >
                      $100
                    </Text>
                    <Text
                      className="font-poppins mt-[17px] not-italic text-black_900_87 text-left w-auto"
                      variant="body1"
                    >
                      /month
                    </Text>
                  </div>
                  <Line className="bg-gray_200 h-px mt-4 w-full" />
                  <div className="flex flex-col font-poppins items-start justify-start mt-6 w-auto md:w-full">
                    <Text
                      className="not-italic text-black_900_a2 text-left w-auto"
                      variant="body3"
                    >
                      Access All News
                    </Text>
                    <Text
                      className="mt-6 not-italic text-black_900_a2 text-left w-auto"
                      variant="body3"
                    >
                      Latest News Notification
                    </Text>
                    <Text
                      className="mt-[25px] not-italic text-black_900_a2 text-left w-auto"
                      variant="body3"
                    >
                      Send News Articles
                    </Text>
                    <Text
                      className="mt-[25px] not-italic text-black_900_a2 text-left w-auto"
                      variant="body3"
                    >
                      Latest Movie Recommendation
                    </Text>
                    <Text
                      className="mt-[27px] not-italic text-black_900_a2 text-left w-auto"
                      variant="body3"
                    >
                      Updated News
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-inter font-normal leading-[normal] min-w-[260px] mt-6 not-italic text-center text-lg text-white_A700 tracking-[-0.50px] w-auto"
                    size="2xl"
                    variant="FillBluegray900"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="border border-bluegray_900 border-solid flex flex-1 flex-col items-start justify-end p-9 sm:px-5 w-full">
                <Text
                  className="font-poppins ml-1 md:ml-[0] mt-[13px] not-italic text-black_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Enterprise
                </Text>
                <div className="flex flex-row items-end justify-start ml-1 md:ml-[0] mr-auto mt-[22px] w-[61%] md:w-full">
                  <Text
                    className="font-inter font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                    as="h2"
                    variant="h2"
                  >
                    $200
                  </Text>
                  <Text
                    className="font-poppins ml-[3px] mt-[17px] not-italic text-black_900_87 text-left w-auto"
                    variant="body1"
                  >
                    /month
                  </Text>
                </div>
                <Line className="bg-gray_200 h-px ml-1 md:ml-[0] mt-4 w-[98%]" />
                <div className="flex flex-col font-poppins items-start justify-start ml-1 md:ml-[0] mt-6 w-auto md:w-full">
                  <Text
                    className="not-italic text-black_900_a2 text-left w-auto"
                    variant="body3"
                  >
                    Access All News
                  </Text>
                  <Text
                    className="mt-6 not-italic text-black_900_a2 text-left w-auto"
                    variant="body3"
                  >
                    Latest News Notification
                  </Text>
                  <Text
                    className="mt-[25px] not-italic text-black_900_a2 text-left w-auto"
                    variant="body3"
                  >
                    Send News Articles
                  </Text>
                  <Text
                    className="mt-[25px] not-italic text-black_900_a2 text-left w-auto"
                    variant="body3"
                  >
                    Latest Movie Recommendation
                  </Text>
                  <Text
                    className="mt-[27px] not-italic text-black_900_a2 text-left w-auto"
                    variant="body3"
                  >
                    Updated News
                  </Text>
                </div>
                <Text
                  className="border border-bluegray_900 border-solid font-inter font-normal ml-1 md:ml-[0] mt-6 not-italic sm:px-5 px-[35px] py-[15px] text-bluegray_900 text-left tracking-[-0.50px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Contact
                </Text>
              </div>
            </List>
          </div>
          <div className="flex font-inter items-center justify-start max-w-[1294px] mt-[120px] mx-auto pb-[34px] md:px-5 w-full">
            <div className="flex flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                  <Text
                    className="font-semibold mb-0.5 text-black_900 text-left tracking-[-0.50px] w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Hot Topic News{" "}
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[122px] sm:mt-0 mt-[5px] text-center text-sm text-white_A700 tracking-[-0.50px] w-auto"
                    onClick={() => navigate("/allblog")}
                    shape="RoundedBorder8"
                    size="xl"
                    variant="FillBluegray900"
                  >
                    View All
                  </Button>
                </div>
                <Line className="bg-black_900_7f h-px w-full" />
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex h-[246px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group38_13.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Input
                          wrapClassName="md:ml-[0] ml-[267px] mr-1.5 mt-1.5 w-[29%]"
                          className="font-bold leading-[normal] p-0 placeholder:text-white_A700 text-left text-white_A700 text-xs tracking-[0.12px] w-full"
                          name="language One"
                          placeholder="Entertaiment "
                          size="sm"
                          variant="FillDeeppurpleA700"
                        ></Input>
                        <Text
                          className="font-normal mr-[267px] not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[21px] w-full">
                      <Text
                        className="font-inter font-semibold text-black_900 text-left tracking-[-0.50px] w-full"
                        as="h6"
                        variant="h6"
                      >
                        Zelensky accuses Russia of worst crimes since WW2{" "}
                      </Text>
                      <Text
                        className="font-normal font-poppins leading-[25.00px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-full"
                        variant="body5"
                      >
                        The Ukrainian leader says Russia must face an
                        international trial as he calls for the country to be
                        thrown off the UN Security Council.
                      </Text>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[151px] ml-3 md:ml-[0] mt-[21px] w-auto"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] mr-[30px] my-2.5"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillBlack900"
                    >
                      <div className="font-normal leading-[normal] not-italic text-left text-sm text-white_A700 tracking-[-0.50px]">
                        Read More
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex h-[247px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group38_14.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[300px] mr-2 mt-2 text-center text-white_A700 text-xs tracking-[0.12px] w-auto"
                          size="sm"
                          variant="FillOrangeA700"
                        >
                          Finance
                        </Button>
                        <Text
                          className="font-normal mr-[269px] not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[21px] w-full">
                      <Text
                        className="font-inter font-semibold text-black_900 text-left tracking-[-0.50px] w-full"
                        as="h6"
                        variant="h6"
                      >
                        Zelensky accuses Russia of worst crimes since WW2{" "}
                      </Text>
                      <Text
                        className="font-normal font-poppins leading-[25.00px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-full"
                        variant="body5"
                      >
                        The Ukrainian leader says Russia must face an
                        international trial as he calls for the country to be
                        thrown off the UN Security Council.
                      </Text>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[151px] mt-[21px] w-auto"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] mr-[30px] my-2.5"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillBlack900"
                    >
                      <div className="font-normal leading-[normal] not-italic text-left text-sm text-white_A700 tracking-[-0.50px]">
                        Read More
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex h-[246px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group38_15.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[298px] mr-1.5 mt-1.5 text-center text-white_A700 text-xs tracking-[0.12px] w-auto"
                          size="sm"
                          variant="FillRed900"
                        >
                          Political
                        </Button>
                        <Text
                          className="font-normal mr-[267px] not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[21px] w-full">
                      <Text
                        className="font-inter font-semibold text-black_900 text-left tracking-[-0.50px] w-full"
                        as="h6"
                        variant="h6"
                      >
                        Zelensky accuses Russia of worst crimes since WW2{" "}
                      </Text>
                      <Text
                        className="font-normal font-poppins leading-[25.00px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-full"
                        variant="body5"
                      >
                        The Ukrainian leader says Russia must face an
                        international trial as he calls for the country to be
                        thrown off the UN Security Council.
                      </Text>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[151px] mt-[21px] w-auto"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[5px] mr-[30px] my-2.5"
                          alt="upload"
                        />
                      }
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillBlack900"
                    >
                      <div className="font-normal leading-[normal] not-italic text-left text-sm text-white_A700 tracking-[-0.50px]">
                        Read More
                      </div>
                    </Button>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <footer className="flex font-inter items-center justify-center mt-[120px] md:px-5 w-full">
            <div className="bg-black_900 flex items-center justify-center p-[60px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[53px] items-center justify-center w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[22px] items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-left text-white_A700 tracking-[-0.50px] w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Neuzy
                    </Text>
                    <Text
                      className="font-normal leading-[35.00px] not-italic text-left text-white_A700 tracking-[-0.50px] w-full"
                      variant="body4"
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-row items-start justify-between pt-2.5 w-[57%] md:w-full">
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[10%]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.50px] w-auto"
                        variant="body4"
                      >
                        World
                      </Text>
                      <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Politcts
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Health
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Business
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Tech
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Entertaiment
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[8%]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.50px] w-auto"
                        variant="body4"
                      >
                        Tech
                      </Text>
                      <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Siance
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Magazine
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Start up
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Crypto
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[5%]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.50px] w-auto"
                        variant="body4"
                      >
                        Life
                      </Text>
                      <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Food
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Style
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Sport
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Movie
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Music
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[23px] items-start justify-start w-[9%]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.50px] w-auto"
                        variant="body4"
                      >
                        Magezine
                      </Text>
                      <div className="flex flex-col gap-[18px] items-start justify-start w-auto md:w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Fasion
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Blogger
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          People
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[26px] items-start justify-start w-[14%]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.50px] w-auto"
                        variant="body4"
                      >
                        Other
                      </Text>
                      <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          About
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Contact us
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Terms & Conditions
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                  <Line className="bg-white_A700 h-px w-full" />
                  <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                    <Text
                      className="font-normal mt-1 not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                      variant="body4"
                    >
                      Copyright © Neuzy | All Rights Reserved
                    </Text>
                    <Img
                      src="images/img_group20875.svg"
                      className="h-6 w-auto"
                      alt="Group20875"
                    />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SubscribePage;
