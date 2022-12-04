import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const WeekChart = () => {
  const navigate = useNavigate();
  const { weekChart: data } = useSelector((state) => state.app);
  const handleWeekChart = (item) => {
    const link = item?.link.split(".")[0];
    navigate(`${link}`);
  };
  return (
    <>
      <div className="capitalize font-medium text-lg mb-3 font-mono">Weeks Rank</div>
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-2">
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} onClick={() => handleWeekChart(item)}>
                <img src={item.banner} alt="" className="rounded-lg" />
              </div>
            );
          })}
      </div>
    </>
  );
};
