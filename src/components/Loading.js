import React from "react";
import {ProgressBar} from "react-loader-spinner"
export const Loading = () => {
  return (
    <div>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#ffffff"
        barColor="#ffffff"
      />
    </div>
  );
};
