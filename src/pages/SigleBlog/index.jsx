import React from "react";

import { Text, Img, Line, Button, List, Input } from "components";
import { useNavigate } from "react-router-dom";

const SigleBlogPage = () => {
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
          <div className="flex flex-col items-center justify-start md:px-5 w-[45%] md:w-full">
            <div className="flex flex-row gap-2.5 items-end justify-center w-[17%] md:w-full">
              <div className="bg-bluegray_900 h-[15px] mt-1.5 rounded-[50%] w-[15px]"></div>
              <Text
                className="font-normal not-italic text-black_900 text-left tracking-[-0.50px] w-auto"
                as="h6"
                variant="h6"
              >
                Hot Topic
              </Text>
            </div>
            <Text
              className="font-bold mt-[23px] text-black_900 text-center tracking-[-0.50px] w-full"
              as="h2"
              variant="h2"
            >
              Miami Dolphins won the match and officially qualified for the
              final
            </Text>
            <div className="flex flex-row items-center justify-center mt-[38px] w-[56%] md:w-full">
              <Text
                className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                as="h6"
                variant="h6"
              >
                New York, 22 Agust 2022{" "}
              </Text>
              <Text
                className="font-semibold ml-1 text-black_900_87 text-left tracking-[-0.50px] w-auto"
                as="h6"
                variant="h6"
              ></Text>
            </div>
          </div>
          <Img
            src="images/img_rectangle5_497X1440.png"
            className="h-[497px] sm:h-auto mt-[50px] object-cover w-full"
            alt="RectangleFive"
          />
          <div className="flex flex-col gap-[50px] items-center justify-start mt-[60px] md:px-5 w-3/5 md:w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                  as="h2"
                  variant="h2"
                >
                  About Team
                </Text>
                <Text
                  className="font-normal leading-[35.00px] mt-[30px] not-italic text-black_900 text-left tracking-[-0.50px] w-full"
                  variant="body2"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </>
                </Text>
                <Text
                  className="font-normal leading-[35.00px] mt-5 not-italic text-black_900 text-left tracking-[-0.50px] w-full"
                  variant="body2"
                >
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </Text>
              </div>
              <Img
                src="images/img_unsplashxhzbz.png"
                className="h-[400px] md:h-auto object-cover w-full"
                alt="unsplashxHZBz"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                as="h2"
                variant="h2"
              >
                Officially Qualified for the Final
              </Text>
              <Text
                className="font-normal leading-[35.00px] mt-[30px] not-italic text-black_900 text-left tracking-[-0.50px] w-full"
                variant="body2"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </>
              </Text>
              <Text
                className="font-normal leading-[35.00px] mt-5 not-italic text-black_900 text-left tracking-[-0.50px] w-full"
                variant="body2"
              >
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
              <Text
                className="font-normal leading-[35.00px] mt-5 not-italic text-black_900 text-left tracking-[-0.50px] w-full"
                variant="body2"
              >
                <>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
                  Good and Evil) by Cicero, written in 45 BC. This book is a
                  treatise on the theory of ethics, very popular during the
                  Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum
                  dolor sit amet..&quot;, comes from a line in section 1.10.32.
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="font-semibold text-black_900 text-left tracking-[-0.50px] w-full"
                  as="h2"
                  variant="h2"
                >
                  Typing skills and strategy are the keys to victory this time
                </Text>
                <Text
                  className="font-normal leading-[35.00px] mt-10 not-italic text-black_900 text-left tracking-[-0.50px] w-full"
                  variant="body2"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </>
                </Text>
                <Text
                  className="font-normal leading-[35.00px] mt-5 not-italic text-black_900 text-left tracking-[-0.50px] w-full"
                  variant="body2"
                >
                  <>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et
                    Malorum&quot; (The Extremes of Good and Evil) by Cicero,
                    written in 45 BC. This book is a treatise on the theory of
                    ethics, very popular during the Renaissance. The first line
                    of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;,
                    comes from a line in section 1.10.32.
                  </>
                </Text>
              </div>
              <Img
                src="images/img_unsplash26mjgn.png"
                className="h-[400px] md:h-auto object-cover w-full"
                alt="unsplash26MJGn"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                as="h2"
                variant="h2"
              >
                Best regards from Miami Dolphins
              </Text>
              <Text
                className="font-normal leading-[35.00px] mt-[30px] not-italic text-black_900 text-left tracking-[-0.50px] w-full"
                variant="body2"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </>
              </Text>
              <Text
                className="font-normal leading-[35.00px] mt-5 not-italic text-black_900 text-left tracking-[-0.50px] w-full"
                variant="body2"
              >
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </div>
            <Line className="bg-black_900_4c h-px w-full" />
          </div>
          <div className="flex flex-col gap-[50px] items-center justify-start mt-[49px] md:px-5 w-[28%] md:w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-row gap-2.5 items-start justify-center w-1/2 md:w-full">
                <Img
                  src="images/img_unsplashtwuphb.png"
                  className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                  alt="unsplashTwuPHb"
                />
                <div className="flex flex-col gap-[7px] items-start justify-start mt-[3px] w-auto">
                  <Text
                    className="text-black_900 text-left tracking-[-0.50px] w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Jhone RIck
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900_7f text-left tracking-[-0.50px] w-auto"
                    variant="body5"
                  >
                    About Author
                  </Text>
                </div>
              </div>
              <Text
                className="font-normal leading-[35.00px] not-italic text-black_900 text-center tracking-[-0.50px] w-full"
                variant="body4"
              >
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s.
              </Text>
            </div>
            <div className="flex flex-col gap-[25px] items-center justify-start w-[45%] md:w-full">
              <Text
                className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                as="h6"
                variant="h6"
              >
                Connect with Author
              </Text>
              <Img
                src="images/img_group20875_black_900.svg"
                className="h-6 w-[65%]"
                alt="Group20875"
              />
            </div>
          </div>
          <div className="flex items-center justify-start max-w-[1294px] mt-[120px] mx-auto pb-[34px] md:px-5 w-full">
            <div className="flex flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                  <Text
                    className="font-semibold mb-0.5 text-black_900 text-left tracking-[-0.50px] w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Related News
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[122px] mt-[5px] text-center text-sm text-white_A700 tracking-[-0.50px] w-auto"
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
                          className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-white_A700 sm:h-auto text-left text-white_A700 text-xs tracking-[0.12px] w-full"
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
                      className="cursor-pointer flex items-center justify-center min-w-[151px] ml-3 md:ml-[0] mt-[21px] w-auto"
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
                          className="cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[282px] mr-[21px] mt-1.5 text-center text-white_A700 text-xs tracking-[0.12px] w-auto"
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
                      className="cursor-pointer flex items-center justify-center min-w-[151px] ml-3 md:ml-[0] mt-[21px] w-auto"
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
                      className="cursor-pointer flex items-center justify-center min-w-[151px] mt-[21px] w-auto"
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
                      alt="Group20875 One"
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

export default SigleBlogPage;
