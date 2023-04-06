import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Line, Button, Input } from "components";

const SearchModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-auto !w-[90%]"
        overlayClassName="bg-black_900_90 fixed flex h-full inset-y-[0] w-full"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
          <div className="bg-white_A700 flex flex-col gap-[50px] items-start justify-start max-w-[1290px] mb-[549px] mt-7 mx-auto p-[41px] md:px-5 rounded-[30px] w-full">
            <div className="flex flex-col gap-14 items-center justify-start md:ml-[0] ml-[19px] w-[96%] md:w-full">
              <div className="flex flex-row md:gap-10 items-end justify-between w-full">
                <Text
                  className="text-black_900 text-left tracking-[-0.50px] w-auto"
                  as="h4"
                  variant="h4"
                >
                  Search News
                </Text>
                <Img
                  src="images/img_close.svg"
                  className="h-6 mt-1.5 w-6"
                  alt="close"
                />
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                <Text
                  className="font-normal not-italic text-black_900 text-left tracking-[-0.50px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Search News here...
                </Text>
                <Line className="bg-black_900_7f h-px w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-[27px] items-start justify-start mb-1 md:ml-[0] ml-[19px] rounded-[10px] w-[71%] md:w-full">
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
                  name="items"
                  placeholder="Entertainment"
                  shape="RoundedBorder10"
                  size="sm"
                  variant="FillGray50"
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default SearchModal;
