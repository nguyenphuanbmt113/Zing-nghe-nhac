import React from "react";
import { useSelector } from "react-redux";
import { Section } from "../../components/Section";
import Slider from "../../components/SliceSwiper";
// import { SliceSwiper } from "../../components/SliceSwiper";
import Scrollbars from "react-custom-scrollbars-2";
import { NewReleases } from "../../components/NewReleases";
import { WeekChart } from "../../components/WeekChart";
import { Artists } from "../../components/Artists";
export const Home = () => {
  const { friday, newEveryday, top100, xone, newMusic } = useSelector(
    (state) => state.app
  );
  return (
    <Scrollbars style={{ width: "100%", height: "80%" }} autoHide>
      <div>
        <Slider></Slider>
      </div>
      <div className="px-[59px] pt-[30px]">
        <Section data={friday}></Section>
      </div>
      <div className="px-[59px] pt-[30px]">
        <NewReleases></NewReleases>
      </div>
      <div className="px-[59px] pt-[30px]">
        <Section data={newEveryday}></Section>
      </div>
      <div className="px-[59px] pt-[30px]">
        <WeekChart></WeekChart>
      </div>
      <div className="px-[59px] pt-[30px]">
        {/* <Artists></Artists> */}
      </div>

      <div className="px-[59px] pt-[30px]">
        <Section data={top100}></Section>
      </div>
      <div className="px-[59px] pt-[30px]">
        <Section data={xone}></Section>
      </div>
      <div className="px-[59px] pt-[30px]">
        <Section data={newMusic}></Section>
      </div>

      <div className="h-[500px]"></div>
    </Scrollbars>
  );
};
