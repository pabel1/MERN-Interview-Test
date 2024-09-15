import React from "react";

import DynamicLotties from "../../Components/Lotties/DynamicLotties";
import pencil from "../../Components/Lotties/pencillLotties.json";
import shapeLotties from "../../Components/Lotties/shapeLotties.json";
import Button from "../../Components/Shared/Buttons/Button";
const HomePageBanner = () => {
  return (
    <div className="">
      <div className="w-full xl:flex items-start justify-center">
        <div className="flex flex-col gap-6 w-full xl:w-1/2 items-center">
          <DynamicLotties animationData={pencil} width={"40%"} />
          <h1 className="text-[32px]   font-bold text-[#313e5b] font-outfit">
            Create Your Draw
          </h1>
          <p className="font-semibold text-[16px] text-[#525f81] leading-[30px] ">
            Choose if you are looking for text or background gradients.
          </p>
          <div className=" flex items-center justify-center gap-4">
            <Button
              className={
                "bg-gradient-to-r from-rose-200 to-rose-300 text-black font-semibold text-lg w-fit px-8 py-3 items-center  hover:bg-transparent hover:border-rose-200 "
              }
              href="/start-draw"
            >
              Start Draw
            </Button>
            <Button
              className={
                "bg-transparent border border-rose-200  text-black font-semibold text-lg w-fit px-8 py-3 items-center hover:bg-gradient-to-r hover:from-rose-200 hover:to-rose-300 "
              }
              href="/all-draws"
            >
              See All Draw
            </Button>
          </div>
        </div>

        <div className="xl:w-1/2 p-4">
          <DynamicLotties animationData={shapeLotties} width={"100%"} />
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
