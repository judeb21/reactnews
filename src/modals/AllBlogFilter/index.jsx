import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Button, Input, List } from "components";
import { useNavigate } from "react-router-dom";

const AllBlogFilterModal = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-auto !w-[90%]"
        overlayClassName="bg-black_900_90 fixed flex h-full inset-y-[0] w-full"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
          <div className="bg-white_A700 flex flex-col items-start justify-start max-w-[1290px] mb-[1090px] mt-7 mx-auto p-[39px] md:px-5 rounded-[30px] w-full">
            <div className="flex flex-row md:gap-10 items-end justify-between md:ml-[0] ml-[27px] w-[96%] md:w-full">
              <Text
                className="text-black_900 text-left tracking-[-0.50px] w-auto"
                as="h4"
                variant="h4"
              >
                Filter News
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer h-6 mt-1.5 w-6"
                onClick={() => navigate("/allblog")}
                alt="close"
              />
            </div>
            <div className="flex flex-col gap-[27px] items-start justify-start md:ml-[0] ml-[27px] mt-14 rounded-[10px] w-[71%] md:w-full">
              <Text
                className="text-black_900 text-left tracking-[-0.50px] w-auto"
                as="h4"
                variant="h4"
              >
                Category News
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between rounded-[10px] w-full">
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[86px] not-italic text-center text-lg text-white_A700 tracking-[-0.50px] w-auto"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillBluegray900"
                >
                  Sport
                </Button>
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[94px] not-italic text-black_900 text-center text-lg tracking-[-0.50px] w-auto"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillGray50"
                >
                  Health
                </Button>
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[102px] not-italic text-black_900 text-center text-lg tracking-[-0.50px] w-auto"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillGray50"
                >
                  Political
                </Button>
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[113px] not-italic text-black_900 text-center text-lg tracking-[-0.50px] w-auto"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillGray50"
                >
                  Business
                </Button>
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[104px] not-italic text-black_900 text-center text-lg tracking-[-0.50px] w-auto"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillGray50"
                >
                  Finance
                </Button>
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[70px] not-italic text-black_900 text-center text-lg tracking-[-0.50px] w-auto"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillGray50"
                >
                  Life
                </Button>
                <Input
                  wrapClassName="sm:flex-1 w-auto sm:w-full"
                  className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900 text-black_900 text-left text-lg tracking-[-0.50px] w-full"
                  name="FrameThirteen"
                  placeholder="Entertainment"
                  shape="RoundedBorder10"
                  size="sm"
                  variant="FillGray50"
                ></Input>
              </div>
            </div>
            <List
              className="flex-col gap-[55px] grid md:ml-[0] ml-[27px] mt-[55px] w-[48%]"
              orientation="vertical"
            >
              <div className="flex flex-col gap-[27px] items-start justify-start rounded-[10px] w-[94%] md:w-full">
                <Text
                  className="text-black_900 text-left tracking-[-0.50px] w-auto"
                  as="h4"
                  variant="h4"
                >
                  News Rating
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between rounded-[10px] w-full">
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[118px] not-italic text-black_900 text-center text-lg tracking-[-0.50px] w-auto"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray50"
                  >
                    Hot Topic
                  </Button>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[127px] not-italic text-black_900 text-center text-lg tracking-[-0.50px] w-auto"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray50"
                  >
                    Most Seen
                  </Button>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[143px] not-italic text-center text-lg text-white_A700 tracking-[-0.50px] w-auto"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillBluegray900"
                  >
                    The Craziest
                  </Button>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[87px] not-italic text-black_900 text-center text-lg tracking-[-0.50px] w-auto"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray50"
                  >
                    Fraud
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[27px] items-start justify-start rounded-[10px] w-full">
                <Text
                  className="text-black_900 text-left tracking-[-0.50px] w-auto"
                  as="h4"
                  variant="h4"
                >
                  News post time
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between rounded-[10px] w-full">
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[131px] not-italic text-black_900 text-center text-lg tracking-[-0.50px] w-auto"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray50"
                  >
                    Last 1 Hour
                  </Button>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[135px] not-italic text-black_900 text-center text-lg tracking-[-0.50px] w-auto"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray50"
                  >
                    Last 3 Hour
                  </Button>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[124px] not-italic text-center text-lg text-white_A700 tracking-[-0.50px] w-auto"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillBluegray900"
                  >
                    This Week
                  </Button>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[132px] not-italic text-black_900 text-center text-lg tracking-[-0.50px] w-auto"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray50"
                  >
                    This Month
                  </Button>
                </div>
              </div>
            </List>
            <Button
              className="cursor-pointer font-semibold leading-[normal] mb-1.5 min-w-[171px] md:ml-[0] ml-[27px] mt-[55px] text-center text-lg text-white_A700 tracking-[-0.50px] w-auto"
              shape="RoundedBorder8"
              size="2xl"
              variant="FillBlack900"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default AllBlogFilterModal;
