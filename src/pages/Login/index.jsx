import React from "react";

import { Text, Img, Line, Input, Button, List, CheckBox } from "components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
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
                      className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                      variant="body4"
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
          <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-24 items-center justify-start md:px-5 w-[95%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[78px] justify-start w-[55%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[75px] text-black_900 text-left tracking-[-0.50px] w-[86%] sm:w-full"
                  as="h1"
                  variant="h1"
                >
                  Welcome back, there is the latest news today !!
                </Text>
                <div className="h-[394px] md:h-[783px] relative w-full">
                  <div className="absolute flex md:flex-col flex-row gap-5 h-full inset-[0] items-start justify-center m-auto pb-[23px] sm:pl-5 pl-[23px] w-[97%]">
                    <div className="flex items-center justify-start md:ml-[0] ml-[304px] w-[33%] md:w-full">
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
                          className="cursor-pointer flex items-center justify-center min-w-[138px] mt-4 w-auto"
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
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-[348px] grid grid-cols-2 w-[33%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div
                            className="bg-cover bg-no-repeat flex h-[181px] items-center justify-start w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_background_181X308.png')",
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
                                className="font-semibold mb-1 mr-[171px] text-left text-white_A700 tracking-[-0.50px] w-auto"
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
                            className="cursor-pointer flex items-center justify-center min-w-[138px] mt-4 w-auto"
                            rightIcon={
                              <Img
                                src="images/img_upload_white_A700.png"
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
                          className="cursor-pointer flex items-center justify-center min-w-[138px] mt-4 w-auto"
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
                    </List>
                  </div>
                  <Button
                    className="absolute flex h-[60px] inset-y-[0] items-center justify-center my-auto right-[0] rotate-[180deg] rounded-[50%] w-[60px]"
                    size="mdIcn"
                    variant="icbOutlineWhiteA700"
                  >
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[27px]"
                      alt="arrowright"
                    />
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_900 border-solid flex items-center justify-start md:mt-0 my-1 p-[45px] md:px-10 sm:px-5 w-[39%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-1 w-[92%] md:w-full">
                  <Text
                    className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Neuzy
                  </Text>
                  <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                    <div className="flex flex-col font-poppins items-center justify-start pt-[3px] w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start rounded-[10px] w-full">
                        <Text
                          className="font-normal not-italic text-black_900 text-left tracking-[0.07px] w-auto"
                          variant="body4"
                        >
                          Email
                        </Text>
                        <Input
                          wrapClassName="w-full"
                          className="font-normal not-italic p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left tracking-[0.08px] w-full"
                          type="email"
                          name="Input"
                          placeholder="Enter your email"
                          shape="RoundedBorder10"
                          size="lg"
                          variant="OutlineBlack900"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-3.5 items-start justify-start mt-[23px] rounded-[10px] w-full">
                        <Text
                          className="font-normal not-italic text-black_900 text-left tracking-[0.07px] w-auto"
                          variant="body4"
                        >
                          Password
                        </Text>
                        <Input
                          wrapClassName="w-full"
                          className="font-normal not-italic p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left tracking-[0.08px] w-full"
                          type="password"
                          name="Input One"
                          placeholder="Enter your password"
                          shape="RoundedBorder10"
                          size="lg"
                          variant="OutlineBlack900"
                        ></Input>
                      </div>
                      <div className="flex flex-row items-end justify-between mt-5 w-full">
                        <CheckBox
                          className="font-medium text-base text-black_900 text-left tracking-[0.08px]"
                          inputClassName="h-6 mr-[5px] w-6"
                          name="H4"
                          id="H4"
                          label="Remember me?"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineBlack900"
                        ></CheckBox>
                        <Text
                          className="common-pointer font-medium mt-1.5 text-black_900 text-left tracking-[0.08px] w-auto"
                          variant="body2"
                          onClick={() => navigate("/forgotpassword")}
                        >
                          Forgot password
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer font-medium font-poppins min-w-[400px] sm:min-w-full text-base text-center text-white_A700 tracking-[0.08px] w-auto"
                      onClick={() => navigate("/")}
                      shape="RoundedBorder8"
                      size="3xl"
                      variant="FillBluegray900"
                    >
                      Login
                    </Button>
                    <Text
                      className="common-pointer font-inter font-normal not-italic text-black_900 text-left tracking-[-0.50px] w-auto"
                      variant="body4"
                      onClick={() => navigate("/register")}
                    ></Text>
                  </div>
                </div>
              </div>
            </div>
            <footer className="flex items-center justify-center md:px-5 w-full">
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
                      <div className="flex flex-col gap-[26px] items-start justify-start w-[5%]">
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
                      <div className="flex flex-col gap-6 items-start justify-start w-[9%]">
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
                      <div className="flex flex-col gap-[25px] items-start justify-start w-[14%]">
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

export default LoginPage;
