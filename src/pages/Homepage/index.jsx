import React from "react";

import {
  Text,
  Img,
  Line,
  List,
  Button,
  PagerIndicator,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const HomepagePage = () => {
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
        <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start w-full">
          <div className="flex items-center justify-start max-w-[1292px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
                <Img
                  src="images/img_rectangle5.png"
                  className="md:flex-1 h-[255px] sm:h-auto object-cover w-auto md:w-full"
                  alt="RectangleFive"
                />
                <div className="flex md:flex-1 flex-col gap-[45px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[16%] md:w-full">
                      <div className="bg-bluegray_900 h-[15px] my-[3px] rounded-[50%] w-[15px]"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left tracking-[-0.50px] w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Hot Topic
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[23px] text-black_900 text-left tracking-[-0.50px] w-full"
                      as="h2"
                      variant="h2"
                    >
                      Miami Dolphins won the match and officially qualified for
                      the final
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[38px] w-[55%] md:w-full">
                      <Text
                        className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                        as="h6"
                        variant="h6"
                      >
                        New York, 22 Agust 2022{" "}
                      </Text>
                      <Text
                        className="font-semibold ml-1 text-left text-white_A700_87 tracking-[-0.50px] w-auto"
                        as="h6"
                        variant="h6"
                      ></Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[13px] items-end justify-start w-[17%] md:w-full">
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-left tracking-[-0.50px] w-auto"
                      variant="body4"
                    >
                      Read More
                    </Text>
                    <Img
                      src="images/img_arrow1.svg"
                      className="h-px mb-[5px] mt-[11px] w-1/4"
                      alt="ArrowOne"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[55px] items-center justify-between w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[55px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between sm:ml-[0] w-full">
                    <Img
                      src="images/img_rectangle1479.png"
                      className="h-[84px] md:h-auto object-cover w-[84px]"
                      alt="Rectangle1479"
                    />
                    <div className="flex sm:flex-1 flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="font-bold text-black_900 text-left tracking-[-0.50px] w-full"
                        as="h6"
                        variant="h6"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_87 text-left tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between sm:ml-[0] w-full">
                    <Img
                      src="images/img_rectangle1479_84X84.png"
                      className="h-[84px] md:h-auto object-cover w-[84px]"
                      alt="Rectangle1479 One"
                    />
                    <div className="flex sm:flex-1 flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="font-bold text-black_900 text-left tracking-[-0.50px] w-full"
                        as="h6"
                        variant="h6"
                      >
                        john kennedy won 3rd oscar trophy at los angles
                      </Text>
                      <div className="flex flex-row items-center justify-start w-4/5 md:w-full">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Los Angles, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal ml-1 not-italic text-black_900_87 text-left tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          - 22 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-1 sm:flex-col flex-row gap-2.5 items-center justify-between w-[31%] md:w-full">
                  <Img
                    src="images/img_rectangle1479_1.png"
                    className="h-[84px] md:h-auto object-cover w-[84px]"
                    alt="Rectangle1479 Two"
                  />
                  <div className="flex flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                    <Text
                      className="font-bold text-black_900 text-left tracking-[-0.50px] w-full"
                      as="h6"
                      variant="h6"
                    >
                      Miami Dolphins won the match and officially qualified for
                      the final
                    </Text>
                    <div className="flex flex-row items-center justify-start w-[77%] md:w-full">
                      <Text
                        className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                        variant="body5"
                      >
                        New York, 22 Agust 2022{" "}
                      </Text>
                      <Text
                        className="font-normal ml-1 not-italic text-black_900_87 text-left tracking-[-0.50px] w-auto"
                        variant="body5"
                      >
                        - 10 minutes ago
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1292px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between rounded-lg w-full">
              <Text
                className="font-semibold mb-0.5 text-black_900 text-left tracking-[-0.50px] w-auto"
                as="h2"
                variant="h2"
              >
                Latest Release
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
            <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[43%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex h-[270px] items-center justify-start w-full"
                  style={{ backgroundImage: "url('images/img_group38.png')" }}
                >
                  <div className="bg-gradient  flex flex-col md:gap-10 gap-[189px] justify-end p-[15px] w-full">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[88px] md:ml-[0] ml-[423px] mr-[9px] mt-[9px] text-center text-white_A700 text-xs tracking-[0.12px] w-auto"
                      size="sm"
                      variant="FillDeeporangeA400"
                    >
                      Hot Topic
                    </Button>
                    <Text
                      className="font-normal ml-2 md:ml-[0] mr-[376px] not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                      variant="body4"
                    >
                      Ukraine, 24 april 2022
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-center justify-start mt-[27px] w-full">
                  <Text
                    className="text-black_900 text-left tracking-[-0.50px] w-full"
                    as="h4"
                    variant="h4"
                  >
                    Zelensky accuses Russia of worst crimes since WW2{" "}
                  </Text>
                  <Text
                    className="font-normal leading-[35.00px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-full"
                    variant="body4"
                  >
                    The Ukrainian leader says Russia must face an international
                    trial as he calls for the country to be thrown off the UN
                    Security Council.
                  </Text>
                </div>
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[177px] mt-[23px] w-auto"
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
                  <div className="font-normal leading-[normal] not-italic text-left text-lg text-white_A700 tracking-[-0.50px]">
                    Read More
                  </div>
                </Button>
              </div>
              <List
                className="md:flex-1 flex-col gap-[50px] grid w-[54%] md:w-full"
                orientation="vertical"
              >
                <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between my-0 w-full">
                  <Img
                    src="images/img_unsplashj5keq1.png"
                    className="md:flex-1 h-[229px] sm:h-auto object-cover w-auto md:w-full"
                    alt="unsplashj5kEQOne"
                  />
                  <div className="flex md:flex-1 flex-col gap-5 items-start justify-start rounded-lg w-auto md:w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="font-normal not-italic text-black_900 text-left tracking-[-0.50px] w-auto"
                        variant="body4"
                      >
                        New York, 19 april 2022
                      </Text>
                      <div className="flex flex-col font-poppins gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-black_900 text-left tracking-[-0.50px] w-full"
                          as="h5"
                          variant="h5"
                        >
                          Jhon Lorni has won 1st place in international match
                        </Text>
                        <Text
                          className="font-normal leading-[25.00px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-full"
                          variant="body5"
                        >
                          this is his first victory in the international
                          olympics, so his name is quite explosive on the
                          international scene
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] w-auto"
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
                <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between my-0 w-full">
                  <Img
                    src="images/img_unsplashl2p8f.png"
                    className="md:flex-1 h-[229px] sm:h-auto object-cover w-auto md:w-full"
                    alt="unsplashL2p8f"
                  />
                  <div className="flex md:flex-1 flex-col gap-5 items-start justify-start rounded-lg w-auto md:w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="font-normal not-italic text-black_900 text-left tracking-[-0.50px] w-auto"
                        variant="body4"
                      >
                        Amsterdam, 23 april 2022
                      </Text>
                      <div className="flex flex-col font-poppins gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-black_900 text-left tracking-[-0.50px] w-full"
                          as="h5"
                          variant="h5"
                        >
                          The extinction of the Arabian turtle made the
                          government...
                        </Text>
                        <Text
                          className="font-normal leading-[25.00px] not-italic text-black_900_87 text-left tracking-[-0.50px] w-full"
                          variant="body5"
                        >
                          The jalabiya turtle is a very unique species because
                          it is thought to have existed from ancient times, but
                          has begun to become..
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] w-auto"
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
          <div className="flex flex-col gap-[50px] items-center justify-start w-full">
            <Text
              className="font-semibold text-black_900 text-center tracking-[-0.50px] w-[39%] sm:w-full"
              as="h2"
              variant="h2"
            >
              <>The Audience&#39;s choice of the Best Films</>
            </Text>
            <div className="flex flex-col md:px-5 relative w-full">
              <div className="flex items-center justify-start mx-auto w-full">
                <div
                  className="bg-cover bg-no-repeat flex h-[700px] items-center justify-start w-full"
                  style={{ backgroundImage: "url('images/img_slider.png')" }}
                >
                  <div className="bg-gradient1  flex items-center justify-start p-[75px] md:px-10 sm:px-5 w-full">
                    <div className="flex flex-row items-start justify-between mb-[142px] mt-[245px] w-full">
                      <Img
                        src="images/img_arrowleft.svg"
                        className="h-[60px] mb-[103px] w-[60px]"
                        alt="arrowleft"
                      />
                      <PagerIndicator
                        className="flex h-[15px] mt-[148px] w-[115px]"
                        count={5}
                        activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white_A700 w-[15px]"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white_A700_4f w-[15px]"
                        selectedWrapperCss="inline-block mx-[5.00px]"
                        unselectedWrapperCss="inline-block mx-[5.00px]"
                      />
                      <Button
                        className="flex h-[60px] items-center justify-center mb-[103px] rotate-[180deg] rounded-[50%] w-[60px]"
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
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[-197px] mx-auto w-[90%] z-[1]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    src="images/img_rectangle17.png"
                    className="h-[307px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    alt="RectangleSeventeen"
                  />
                  <div className="flex flex-col items-center justify-start w-[65%] md:w-full">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Avengers Age of Ultron
                    </Text>
                    <Text
                      className="font-normal mt-[13px] not-italic text-black_900_7f text-left tracking-[-0.50px] w-auto"
                      variant="body4"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      src="images/img_group51.svg"
                      className="h-5 mt-3 w-1/2"
                      alt="GroupFiftyOne"
                    />
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    src="images/img_rectangle17_307X308.png"
                    className="h-[307px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    alt="RectangleSeventeen One"
                  />
                  <div className="flex flex-col items-center justify-start w-[65%] md:w-full">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Captain Marvel
                    </Text>
                    <Text
                      className="font-normal mt-[13px] not-italic text-black_900_7f text-left tracking-[-0.50px] w-auto"
                      variant="body4"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      src="images/img_group51.svg"
                      className="h-5 mt-3 w-1/2"
                      alt="GroupFiftyOne One"
                    />
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    src="images/img_rectangle17_1.png"
                    className="h-[307px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    alt="RectangleSeventeen Two"
                  />
                  <div className="flex flex-col items-center justify-start w-[65%] md:w-full">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Avengers End Game
                    </Text>
                    <Text
                      className="font-normal mt-[13px] not-italic text-black_900_7f text-left tracking-[-0.50px] w-auto"
                      variant="body4"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      src="images/img_group51.svg"
                      className="h-5 mt-3 w-1/2"
                      alt="GroupFiftyOne Two"
                    />
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    src="images/img_rectangle17_2.png"
                    className="h-[307px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    alt="RectangleSeventeen Three"
                  />
                  <div className="flex flex-col items-center justify-start w-[71%] md:w-full">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[-0.50px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Spiderman Far from Home
                    </Text>
                    <Text
                      className="font-normal mt-[13px] not-italic text-black_900_7f text-left tracking-[-0.50px] w-auto"
                      variant="body4"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      src="images/img_group51.svg"
                      className="h-5 mt-3 w-[47%]"
                      alt="GroupFiftyOne Three"
                    />
                  </div>
                </div>
              </List>
            </div>
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[122px] text-center text-sm text-white_A700 tracking-[-0.50px] w-auto"
              onClick={() => navigate("/allblog")}
              shape="RoundedBorder8"
              size="xl"
              variant="FillBluegray900"
            >
              View All
            </Button>
          </div>
          <div className="bg-black_900 flex items-center justify-start p-[50px] md:px-10 sm:px-5 w-full">
            <div className="flex items-center justify-start max-w-[1291px] mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
                <div className="flex md:flex-1 items-center justify-start w-[62%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex h-[600px] items-center justify-start w-full"
                    style={{
                      backgroundImage: "url('images/img_background.png')",
                    }}
                  >
                    <div className="bg-gradient2  flex flex-col gap-[55px] items-center justify-end p-[45px] md:px-10 sm:px-5 w-full">
                      <div className="flex flex-col gap-[50px] items-center justify-start mt-[225px] w-[51%] md:w-full">
                        <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                          <div className="flex flex-row gap-2.5 items-start justify-center w-[43%] md:w-full">
                            <div className="bg-bluegray_900 h-[15px] mt-[3px] rounded-[50%] w-[15px]"></div>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                              variant="body4"
                            >
                              Entertainment Topic
                            </Text>
                          </div>
                          <Text
                            className="font-semibold text-center text-white_A700 tracking-[-0.50px] w-full"
                            as="h2"
                            variant="h2"
                          >
                            Best Place for Vacation in Sydney
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-semibold leading-[normal] min-w-[154px] text-center text-lg text-white_A700 tracking-[-0.50px] w-auto"
                          shape="RoundedBorder8"
                          size="xl"
                          variant="OutlineWhiteA700"
                        >
                          Read Now
                        </Button>
                      </div>
                      <PagerIndicator
                        className="flex h-[15px] justify-center w-[115px]"
                        count={5}
                        activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white_A700 w-[15px]"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white_A700_4f w-[15px]"
                        selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                        unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                      />
                    </div>
                  </div>
                </div>
                <List
                  className="md:flex-1 flex-col gap-[45px] grid w-[35%] md:w-full"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      src="images/img_rectangle1479_84X121.png"
                      className="sm:flex-1 h-[84px] md:h-auto object-cover w-auto sm:w-full"
                      alt="Rectangle1479 Three"
                    />
                    <div className="flex sm:flex-1 flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.50px] w-full"
                        as="h6"
                        variant="h6"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="font-semibold text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_87 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      src="images/img_rectangle1479_2.png"
                      className="sm:flex-1 h-[84px] md:h-auto object-cover w-auto sm:w-full"
                      alt="Rectangle1479 Four"
                    />
                    <div className="flex sm:flex-1 flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.50px] w-full"
                        as="h6"
                        variant="h6"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="font-semibold text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_87 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      src="images/img_rectangle1479_3.png"
                      className="sm:flex-1 h-[84px] md:h-auto object-cover w-auto sm:w-full"
                      alt="Rectangle1479 Five"
                    />
                    <div className="flex sm:flex-1 flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.50px] w-full"
                        as="h6"
                        variant="h6"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="font-semibold text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_87 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      src="images/img_rectangle1479_4.png"
                      className="sm:flex-1 h-[84px] md:h-auto object-cover w-auto sm:w-full"
                      alt="Rectangle1479 Six"
                    />
                    <div className="flex sm:flex-1 flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.50px] w-full"
                        as="h6"
                        variant="h6"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="font-semibold text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_87 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      src="images/img_rectangle1479_5.png"
                      className="sm:flex-1 h-[84px] md:h-auto object-cover w-auto sm:w-full"
                      alt="Rectangle1479 Seven"
                    />
                    <div className="flex sm:flex-1 flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.50px] w-full"
                        as="h6"
                        variant="h6"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="font-semibold text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_87 tracking-[-0.50px] w-auto"
                          variant="body5"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start w-full">
            <div
              className="bg-cover bg-no-repeat flex h-[500px] items-center justify-start w-full"
              style={{
                backgroundImage: "url('images/img_background_500X1440.png')",
              }}
            >
              <div className="bg-gradient3  flex items-center justify-end p-[39px] sm:px-5 w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start max-w-[1287px] mt-[151px] mx-auto md:px-5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                      <div className="flex flex-row gap-2.5 items-start justify-start w-[14%] md:w-full">
                        <div className="bg-deep_orange_A400 h-[15px] mt-[3px] rounded-[50%] w-[15px]"></div>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[-0.50px] w-auto"
                          variant="body4"
                        >
                          Life Topic
                        </Text>
                      </div>
                      <Text
                        className="mt-2 text-left text-white_A700 tracking-[-0.50px] w-full"
                        as="h1"
                        variant="h1"
                      >
                        <>St Pete&#39;s most beautiful beach in Florida</>
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] min-w-[160px] mt-[58px] text-center text-lg text-white_A700 tracking-[-0.50px] w-auto"
                        shape="RoundedBorder8"
                        size="xl"
                        variant="OutlineWhiteA700"
                      >
                        Read More
                      </Button>
                    </div>
                    <Img
                      src="images/img_arrowright_60X60.svg"
                      className="h-[60px] md:mt-0 mt-[30px] w-[60px]"
                      alt="arrowright One"
                    />
                  </div>
                  <PagerIndicator
                    className="flex h-[15px] justify-center w-[115px]"
                    count={5}
                    activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white_A700 w-[15px]"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white_A700_4f w-[15px]"
                    selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                    unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                  />
                </div>
              </div>
            </div>
          </div>
          <List
            className="flex-col md:gap-10 gap-[120px] grid items-center max-w-[1294px] mx-auto md:px-5 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                  <Text
                    className="font-semibold mb-0.5 text-black_900 text-left tracking-[-0.50px] w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Entertaiment{" "}
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
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-between pb-[33px] w-full">
                <div className="flex flex-1 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex h-[246px] items-center justify-start w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_group38_246X418.png')",
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] md:ml-[0] ml-[11px] mt-5 w-auto"
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
                        backgroundImage: "url('images/img_group38_1.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Input
                          wrapClassName="md:ml-[0] ml-[267px] mr-1.5 mt-1.5 w-[29%]"
                          className="font-bold leading-[normal] p-0 placeholder:text-white_A700 text-left text-white_A700 text-xs tracking-[0.12px] w-full"
                          name="language Three"
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] md:ml-[0] ml-[11px] mt-5 w-auto"
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
                        backgroundImage: "url('images/img_group38_2.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Input
                          wrapClassName="md:ml-[0] ml-[267px] mr-1.5 mt-1.5 w-[29%]"
                          className="font-bold leading-[normal] p-0 placeholder:text-white_A700 text-left text-white_A700 text-xs tracking-[0.12px] w-full"
                          name="language Five"
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] md:ml-[0] ml-[11px] mt-5 w-auto"
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
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                  <Text
                    className="font-semibold mb-0.5 text-black_900 text-left tracking-[-0.50px] w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Political{" "}
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
              <div className="gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-between pb-[33px] w-full">
                <div className="flex flex-1 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex h-[247px] items-center justify-start w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_group38_247X418.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[300px] mr-2 mt-2 text-center text-white_A700 text-xs tracking-[0.12px] w-auto"
                          size="sm"
                          variant="FillRed900"
                        >
                          Political
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] mt-5 w-auto"
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
                        backgroundImage: "url('images/img_group38_3.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[300px] mr-2 mt-2 text-center text-white_A700 text-xs tracking-[0.12px] w-auto"
                          size="sm"
                          variant="FillRed900"
                        >
                          Political
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] mt-5 w-auto"
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
                        backgroundImage: "url('images/img_group38_4.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[300px] mr-2 mt-2 text-center text-white_A700 text-xs tracking-[0.12px] w-auto"
                          size="sm"
                          variant="FillRed900"
                        >
                          Political
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] mt-5 w-auto"
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
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                  <Text
                    className="font-semibold mb-0.5 text-black_900 text-left tracking-[-0.50px] w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Sport{" "}
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
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-between pb-[33px] w-full">
                <div className="flex flex-1 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex h-[246px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group38_5.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[64px] md:ml-[0] ml-[312px] mr-1.5 mt-1.5 text-center text-white_A700 text-xs tracking-[0.12px] w-auto"
                          size="sm"
                          variant="FillGreen700"
                        >
                          Sport
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] md:ml-[0] ml-[11px] mt-5 w-auto"
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
                        backgroundImage: "url('images/img_group38_6.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[64px] md:ml-[0] ml-[312px] mr-1.5 mt-1.5 text-center text-white_A700 text-xs tracking-[0.12px] w-auto"
                          size="sm"
                          variant="FillGreen700"
                        >
                          Sport
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] md:ml-[0] ml-[11px] mt-5 w-auto"
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
                        backgroundImage: "url('images/img_group38_7.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[64px] md:ml-[0] ml-[312px] mr-1.5 mt-1.5 text-center text-white_A700 text-xs tracking-[0.12px] w-auto"
                          size="sm"
                          variant="FillGreen700"
                        >
                          Sport
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] md:ml-[0] ml-[11px] mt-5 w-auto"
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
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                  <Text
                    className="font-semibold mb-0.5 text-black_900 text-left tracking-[-0.50px] w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Health{" "}
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
              <div className="gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-between pb-[33px] w-full">
                <div className="flex flex-1 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex h-[247px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group38_8.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[70px] md:ml-[0] ml-[308px] mr-2 mt-2 text-center text-white_A700 text-xs tracking-[0.12px] w-auto"
                          size="sm"
                          variant="FillPurple500"
                        >
                          Health
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] mt-5 w-auto"
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
                        backgroundImage: "url('images/img_group38_9.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[70px] md:ml-[0] ml-[308px] mr-2 mt-2 text-center text-white_A700 text-xs tracking-[0.12px] w-auto"
                          size="sm"
                          variant="FillPurple500"
                        >
                          Health
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] mt-5 w-auto"
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
                        backgroundImage: "url('images/img_group38_10.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[70px] md:ml-[0] ml-[308px] mr-2 mt-2 text-center text-white_A700 text-xs tracking-[0.12px] w-auto"
                          size="sm"
                          variant="FillPurple500"
                        >
                          Health
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] mt-5 w-auto"
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
              </div>
            </div>
          </List>
          <div className="flex flex-col gap-[49px] items-start justify-start max-w-[1294px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
              <div className="flex flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                <Text
                  className="font-semibold mb-0.5 text-black_900 text-left tracking-[-0.50px] w-auto"
                  as="h2"
                  variant="h2"
                >
                  Finance{" "}
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
              className="sm:flex-col flex-row gap-[19px] grid md:grid-cols-1 grid-cols-2 pb-[33px] w-[67%]"
              orientation="horizontal"
            >
              <div className="flex items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex h-[247px] items-center justify-start w-full"
                    style={{
                      backgroundImage: "url('images/img_group38_11.png')",
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
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] mt-5 w-auto"
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
              <div className="flex items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex h-[247px] items-center justify-start w-full"
                    style={{
                      backgroundImage: "url('images/img_group38_12.png')",
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
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] mt-5 w-auto"
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
          <div className="bg-gray_900 flex items-center justify-start max-w-[1290px] mx-auto p-[37px] md:px-5 rounded-[20px] w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start mb-[5px] rounded-[50px] w-[54%] md:w-full">
              <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                <Text
                  className="text-center text-white_A700 tracking-[-0.50px] w-full"
                  as="h1"
                  variant="h1"
                >
                  Get the Latest Notifications and Info from Us
                </Text>
                <Text
                  className="font-normal leading-[35.00px] not-italic text-center text-white_A700_b2 tracking-[-0.50px] w-full"
                  variant="body2"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled.
                  </>
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[196px] text-bluegray_900 text-center text-lg tracking-[-0.50px] w-auto"
                shape="CircleBorder26"
                size="2xl"
                variant="OutlineBluegray900"
              >
                Subscribe Now
              </Button>
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

export default HomepagePage;
