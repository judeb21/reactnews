import React from "react";

import { Text, Img, Line, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const UpdatePasswordPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
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
        <div className="flex flex-col md:gap-10 gap-[130px] items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1291px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[120px] items-start justify-start w-auto md:w-full">
              <Text
                className="text-black_900 text-left tracking-[-0.50px] w-full"
                as="h1"
                variant="h1"
              >
                Enter your new password to update the old password
              </Text>
              <Text
                className="font-normal leading-[35.00px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-[88%] sm:w-full"
                as="h6"
                variant="h6"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                </>
              </Text>
            </div>
            <div className="bg-white_A700 border border-bluegray_900 border-solid flex md:flex-1 items-center justify-start p-[51px] md:px-10 sm:px-5 w-[41%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-[3px] rounded-[10px] w-[94%] md:w-full">
                <Text
                  className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                  as="h2"
                  variant="h2"
                >
                  Neuzy
                </Text>
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col font-poppins gap-[23px] items-center justify-start pt-[3px] rounded-[10px] w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start rounded-[10px] w-full">
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
                        name="Input"
                        placeholder="Enter your Password"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineBlack900"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start rounded-[10px] w-full">
                      <Text
                        className="font-normal not-italic text-black_900 text-left tracking-[0.07px] w-auto"
                        variant="body4"
                      >
                        Confirm Password
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-normal not-italic p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left tracking-[0.08px] w-full"
                        type="password"
                        name="Input One"
                        placeholder="Enter your Password"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineBlack900"
                      ></Input>
                    </div>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-medium font-poppins min-w-[400px] sm:min-w-full text-base text-center text-white_A700 tracking-[0.08px] w-auto"
                    onClick={() => navigate("/login")}
                    shape="RoundedBorder8"
                    size="3xl"
                    variant="FillBluegray900"
                  >
                    Submit
                  </Button>
                  <Text
                    className="font-inter font-normal md:ml-[0] ml-[50px] not-italic text-black_900 text-left tracking-[-0.50px] w-auto"
                    variant="body4"
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
    </>
  );
};

export default UpdatePasswordPage;
