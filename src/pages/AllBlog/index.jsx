import React from "react";

import { Text, Img, Line, Input, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const AllBlogPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[50px] items-center justify-start w-full">
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
            <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start md:px-5 w-[45%] md:w-full">
              <Text
                className="font-semibold text-black_900 text-center tracking-[-0.50px] w-[76%] sm:w-full"
                as="h2"
                variant="h2"
              >
                Read the latest news from around the world
              </Text>
              <div className="bg-gray_50 flex md:flex-col flex-row gap-1.5 items-center justify-end pl-2.5 rounded-[15px] w-full">
                <Input
                  wrapClassName="md:flex-1 md:mt-0 my-[13px] w-[82%] md:w-full"
                  className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900 text-black_900 text-left text-lg tracking-[-0.50px] w-full"
                  name="FrameTwentyThree"
                  placeholder="Search New here..."
                  size="md"
                  variant="FillGray50"
                ></Input>
                <Line className="bg-black_900_87 h-[38px] md:h-px md:mt-0 my-[21px] md:w-full w-px" />
                <div className="bg-gray_50 flex md:flex-1 items-center justify-start p-4 rounded-[15px] w-[18%] md:w-full">
                  <div
                    className="common-pointer flex flex-row gap-[11px] items-start justify-center my-[11px] w-[99%] md:w-full"
                    onClick={() => navigate("/allblogfilter")}
                  >
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Filter
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="h-6 mt-0.5 w-6"
                      alt="trash"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1292px] mt-[100px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-[50px] items-center justify-start w-3/4 md:w-full">
                <div className="flex items-center justify-start pb-[23px] w-full">
                  <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="flex flex-1 items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div
                          className="bg-cover bg-no-repeat flex h-[181px] items-center justify-start w-full"
                          style={{
                            backgroundImage: "url('images/img_group38_13.png')",
                          }}
                        >
                          <div className="bg-gradient  flex flex-col md:gap-10 gap-[108px] justify-start p-[13px] w-full">
                            <Input
                              wrapClassName="md:ml-[0] ml-[177px] mr-0.5 mt-0.5 w-[36%]"
                              className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-white_A700 sm:h-auto text-[10px] text-left text-white_A700 tracking-[-0.50px] w-full"
                              name="language"
                              placeholder="Entertaiment "
                              size="sm"
                              variant="FillDeeppurpleA700"
                            ></Input>
                            <Text
                              className="font-semibold mb-1 text-left text-white_A700 tracking-[-0.50px] w-auto"
                              variant="body6"
                            >
                              Ukraine, 24 april 2022
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[13px] items-center justify-start mt-[15px] w-full">
                          <Text
                            className="font-inter font-semibold text-black_900 text-left tracking-[-0.50px] w-full"
                            variant="body4"
                          >
                            Zelensky accuses Russia of worst crimes since WW2{" "}
                          </Text>
                          <Text
                            className="font-normal font-poppins leading-[25.00px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-full"
                            variant="body6"
                          >
                            The Ukrainian leader says Russia must face an
                            international trial as he calls for the country to
                            be thrown off the UN Security Council. Lorem ipsom
                            dolor
                          </Text>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer flex items-center justify-center min-w-[138px] mt-4 w-auto"
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
                          <div className="font-normal leading-[normal] not-italic text-left text-white_A700 text-xs tracking-[-0.50px]">
                            Read More
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div
                          className="bg-cover bg-no-repeat flex h-[181px] items-center justify-start w-full"
                          style={{
                            backgroundImage: "url('images/img_group38_13.png')",
                          }}
                        >
                          <div className="bg-gradient  flex flex-col md:gap-10 gap-[108px] justify-start p-[13px] w-full">
                            <Input
                              wrapClassName="md:ml-[0] ml-[177px] mr-0.5 mt-0.5 w-[36%]"
                              className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-white_A700 sm:h-auto text-[10px] text-left text-white_A700 tracking-[-0.50px] w-full"
                              name="language One"
                              placeholder="Entertaiment "
                              size="sm"
                              variant="FillDeeppurpleA700"
                            ></Input>
                            <Text
                              className="font-semibold mb-1 text-left text-white_A700 tracking-[-0.50px] w-auto"
                              variant="body6"
                            >
                              Ukraine, 24 april 2022
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[13px] items-center justify-start mt-[15px] w-full">
                          <Text
                            className="font-inter font-semibold text-black_900 text-left tracking-[-0.50px] w-full"
                            variant="body4"
                          >
                            Zelensky accuses Russia of worst crimes since WW2{" "}
                          </Text>
                          <Text
                            className="font-normal font-poppins leading-[25.00px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-full"
                            variant="body6"
                          >
                            The Ukrainian leader says Russia must face an
                            international trial as he calls for the country to
                            be thrown off the UN Security Council. Lorem ipsom
                            dolor
                          </Text>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer flex items-center justify-center min-w-[138px] mt-4 w-auto"
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
                          <div className="font-normal leading-[normal] not-italic text-left text-white_A700 text-xs tracking-[-0.50px]">
                            Read More
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div
                          className="bg-cover bg-no-repeat flex h-[181px] items-center justify-start w-full"
                          style={{
                            backgroundImage: "url('images/img_group38_13.png')",
                          }}
                        >
                          <div className="bg-gradient  flex flex-col md:gap-10 gap-[108px] justify-start p-[13px] w-full">
                            <Input
                              wrapClassName="md:ml-[0] ml-[177px] mr-0.5 mt-0.5 w-[36%]"
                              className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-white_A700 sm:h-auto text-[10px] text-left text-white_A700 tracking-[-0.50px] w-full"
                              name="language Two"
                              placeholder="Entertaiment "
                              size="sm"
                              variant="FillDeeppurpleA700"
                            ></Input>
                            <Text
                              className="font-semibold mb-1 text-left text-white_A700 tracking-[-0.50px] w-auto"
                              variant="body6"
                            >
                              Ukraine, 24 april 2022
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[13px] items-center justify-start mt-[15px] w-full">
                          <Text
                            className="font-inter font-semibold text-black_900 text-left tracking-[-0.50px] w-full"
                            variant="body4"
                          >
                            Zelensky accuses Russia of worst crimes since WW2{" "}
                          </Text>
                          <Text
                            className="font-normal font-poppins leading-[25.00px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-full"
                            variant="body6"
                          >
                            The Ukrainian leader says Russia must face an
                            international trial as he calls for the country to
                            be thrown off the UN Security Council. Lorem ipsom
                            dolor
                          </Text>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer flex items-center justify-center min-w-[138px] mt-4 w-auto"
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
                          <div className="font-normal leading-[normal] not-italic text-left text-white_A700 text-xs tracking-[-0.50px]">
                            Read More
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div
                          className="bg-cover bg-no-repeat flex h-[181px] items-center justify-start w-full"
                          style={{
                            backgroundImage: "url('images/img_group38_13.png')",
                          }}
                        >
                          <div className="bg-gradient  flex flex-col md:gap-10 gap-[108px] justify-start p-[13px] w-full">
                            <Input
                              wrapClassName="md:ml-[0] ml-[177px] mr-0.5 mt-0.5 w-[36%]"
                              className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-white_A700 sm:h-auto text-[10px] text-left text-white_A700 tracking-[-0.50px] w-full"
                              name="language Three"
                              placeholder="Entertaiment "
                              size="sm"
                              variant="FillDeeppurpleA700"
                            ></Input>
                            <Text
                              className="font-semibold mb-1 text-left text-white_A700 tracking-[-0.50px] w-auto"
                              variant="body6"
                            >
                              Ukraine, 24 april 2022
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[13px] items-center justify-start mt-[15px] w-full">
                          <Text
                            className="font-inter font-semibold text-black_900 text-left tracking-[-0.50px] w-full"
                            variant="body4"
                          >
                            Zelensky accuses Russia of worst crimes since WW2{" "}
                          </Text>
                          <Text
                            className="font-normal font-poppins leading-[25.00px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-full"
                            variant="body6"
                          >
                            The Ukrainian leader says Russia must face an
                            international trial as he calls for the country to
                            be thrown off the UN Security Council. Lorem ipsom
                            dolor
                          </Text>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer flex items-center justify-center min-w-[138px] mt-4 w-auto"
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
                          <div className="font-normal leading-[normal] not-italic text-left text-white_A700 text-xs tracking-[-0.50px]">
                            Read More
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div
                          className="bg-cover bg-no-repeat flex h-[181px] items-center justify-start w-full"
                          style={{
                            backgroundImage: "url('images/img_group38_13.png')",
                          }}
                        >
                          <div className="bg-gradient  flex flex-col md:gap-10 gap-[108px] justify-start p-[13px] w-full">
                            <Input
                              wrapClassName="md:ml-[0] ml-[177px] mr-0.5 mt-0.5 w-[36%]"
                              className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-white_A700 sm:h-auto text-[10px] text-left text-white_A700 tracking-[-0.50px] w-full"
                              name="language Four"
                              placeholder="Entertaiment "
                              size="sm"
                              variant="FillDeeppurpleA700"
                            ></Input>
                            <Text
                              className="font-semibold mb-1 text-left text-white_A700 tracking-[-0.50px] w-auto"
                              variant="body6"
                            >
                              Ukraine, 24 april 2022
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[13px] items-center justify-start mt-[15px] w-full">
                          <Text
                            className="font-inter font-semibold text-black_900 text-left tracking-[-0.50px] w-full"
                            variant="body4"
                          >
                            Zelensky accuses Russia of worst crimes since WW2{" "}
                          </Text>
                          <Text
                            className="font-normal font-poppins leading-[25.00px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-full"
                            variant="body6"
                          >
                            The Ukrainian leader says Russia must face an
                            international trial as he calls for the country to
                            be thrown off the UN Security Council. Lorem ipsom
                            dolor
                          </Text>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer flex items-center justify-center min-w-[138px] mt-4 w-auto"
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
                          <div className="font-normal leading-[normal] not-italic text-left text-white_A700 text-xs tracking-[-0.50px]">
                            Read More
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div
                          className="bg-cover bg-no-repeat flex h-[181px] items-center justify-start w-full"
                          style={{
                            backgroundImage: "url('images/img_group38_13.png')",
                          }}
                        >
                          <div className="bg-gradient  flex flex-col md:gap-10 gap-[108px] justify-start p-[13px] w-full">
                            <Input
                              wrapClassName="md:ml-[0] ml-[177px] mr-0.5 mt-0.5 w-[36%]"
                              className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-white_A700 sm:h-auto text-[10px] text-left text-white_A700 tracking-[-0.50px] w-full"
                              name="language Five"
                              placeholder="Entertaiment "
                              size="sm"
                              variant="FillDeeppurpleA700"
                            ></Input>
                            <Text
                              className="font-semibold mb-1 text-left text-white_A700 tracking-[-0.50px] w-auto"
                              variant="body6"
                            >
                              Ukraine, 24 april 2022
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[13px] items-center justify-start mt-[15px] w-full">
                          <Text
                            className="font-inter font-semibold text-black_900 text-left tracking-[-0.50px] w-full"
                            variant="body4"
                          >
                            Zelensky accuses Russia of worst crimes since WW2{" "}
                          </Text>
                          <Text
                            className="font-normal font-poppins leading-[25.00px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-full"
                            variant="body6"
                          >
                            The Ukrainian leader says Russia must face an
                            international trial as he calls for the country to
                            be thrown off the UN Security Council. Lorem ipsom
                            dolor
                          </Text>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer flex items-center justify-center min-w-[138px] mt-4 w-auto"
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
                          <div className="font-normal leading-[normal] not-italic text-left text-white_A700 text-xs tracking-[-0.50px]">
                            Read More
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center pb-[3px] pr-[3px] w-1/4 md:w-full">
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    className="h-[15px] w-[15px]"
                    alt="arrowleft"
                  />
                  <Button
                    className="cursor-pointer font-semibold h-[35px] leading-[normal] text-center text-sm text-white_A700 tracking-[-0.50px] w-[35px]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillBluegray900"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[35px] leading-[normal] text-black_900 text-center text-sm tracking-[-0.50px] w-[35px]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillGray100"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[35px] leading-[normal] text-black_900 text-center text-sm tracking-[-0.50px] w-[35px]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillGray100"
                  >
                    3
                  </Button>
                  <Button
                    className="flex h-[35px] items-center justify-center w-[35px]"
                    shape="icbRoundedBorder5"
                    size="smIcn"
                    variant="icbFillGray100"
                  >
                    <Img src="images/img_user.svg" className="h-5" alt="user" />
                  </Button>
                  <Img
                    src="images/img_arrowright_15X15.svg"
                    className="h-[15px] mr-4 w-[15px]"
                    alt="arrowright"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start w-[24%] md:w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-[82%] md:w-full">
                  <div className="flex flex-row gap-6 items-center justify-between w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left tracking-[-0.50px] w-auto"
                      variant="body4"
                    >
                      New Released
                    </Text>
                    <Text
                      className="font-semibold text-black_900_90 text-left tracking-[-0.50px] w-auto"
                      variant="body4"
                    >
                      Hot Topic
                    </Text>
                    <Text
                      className="font-semibold text-black_900_90 text-left tracking-[-0.50px] w-auto"
                      variant="body4"
                    >
                      Popular
                    </Text>
                  </div>
                  <Line className="bg-bluegray_900 h-px w-[38%]" />
                </div>
                <List
                  className="flex-col font-poppins gap-[21px] grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
                    <Img
                      src="images/img_unsplashg0gb14.png"
                      className="h-[65px] md:h-auto object-cover w-[65px]"
                      alt="unsplashG0gbFourteen"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                      <Text
                        className="font-bold text-black_900 text-left tracking-[-0.50px] w-full"
                        variant="body4"
                      >
                        Miami Dolphins won the match and officially qualified
                        for the final
                      </Text>
                      <div className="flex flex-row font-inter items-center justify-start ml-0.5 md:ml-[0] w-[83%] md:w-full">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                          variant="body6"
                        >
                          New York, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal ml-[5px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-auto"
                          variant="body6"
                        >
                          - 10 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
                    <Img
                      src="images/img_unsplashoj0zey.png"
                      className="h-[65px] md:h-auto object-cover w-[65px]"
                      alt="unsplashoj0zeY"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                      <Text
                        className="font-bold text-black_900 text-left tracking-[-0.50px] w-full"
                        variant="body4"
                      >
                        Miami Dolphins won the match and officially qualified
                        for the final
                      </Text>
                      <div className="flex flex-row font-inter items-center justify-start ml-0.5 md:ml-[0] w-[83%] md:w-full">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                          variant="body6"
                        >
                          New York, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal ml-[5px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-auto"
                          variant="body6"
                        >
                          - 10 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
                    <Img
                      src="images/img_unsplashlndpi8.png"
                      className="h-[65px] md:h-auto object-cover w-[65px]"
                      alt="unsplashLNdpiEight"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                      <Text
                        className="font-bold text-black_900 text-left tracking-[-0.50px] w-full"
                        variant="body4"
                      >
                        Miami Dolphins won the match and officially qualified
                        for the final
                      </Text>
                      <div className="flex flex-row font-inter items-center justify-start ml-0.5 md:ml-[0] w-[83%] md:w-full">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                          variant="body6"
                        >
                          New York, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal ml-[5px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-auto"
                          variant="body6"
                        >
                          - 10 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
                    <Img
                      src="images/img_unsplashjsubkj.png"
                      className="h-[65px] md:h-auto object-cover w-[65px]"
                      alt="unsplashJsuBKj"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                      <Text
                        className="font-bold text-black_900 text-left tracking-[-0.50px] w-full"
                        variant="body4"
                      >
                        Miami Dolphins won the match and officially qualified
                        for the final
                      </Text>
                      <div className="flex flex-row font-inter items-center justify-start ml-0.5 md:ml-[0] w-[83%] md:w-full">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                          variant="body6"
                        >
                          New York, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal ml-[5px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-auto"
                          variant="body6"
                        >
                          - 10 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
                    <Img
                      src="images/img_unsplashtvllfy.png"
                      className="h-[65px] md:h-auto object-cover w-[65px]"
                      alt="unsplashTVllFy"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                      <Text
                        className="font-bold text-black_900 text-left tracking-[-0.50px] w-full"
                        variant="body4"
                      >
                        Miami Dolphins won the match and officially qualified
                        for the final
                      </Text>
                      <div className="flex flex-row font-inter items-center justify-start ml-0.5 md:ml-[0] w-[83%] md:w-full">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                          variant="body6"
                        >
                          New York, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal ml-[5px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-auto"
                          variant="body6"
                        >
                          - 10 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
                    <Img
                      src="images/img_unsplashy5pg8z.png"
                      className="h-[65px] md:h-auto object-cover w-[65px]"
                      alt="unsplashy5PG8Z"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                      <Text
                        className="font-bold text-black_900 text-left tracking-[-0.50px] w-full"
                        variant="body4"
                      >
                        Miami Dolphins won the match and officially qualified
                        for the final
                      </Text>
                      <div className="flex flex-row font-inter items-center justify-start ml-0.5 md:ml-[0] w-[83%] md:w-full">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                          variant="body6"
                        >
                          New York, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal ml-[5px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-auto"
                          variant="body6"
                        >
                          - 10 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <footer className="flex items-center justify-center mt-[120px] md:px-5 w-full">
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
      </div>
    </>
  );
};

export default AllBlogPage;
