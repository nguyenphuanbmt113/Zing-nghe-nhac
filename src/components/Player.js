import React from "react";

export const Player = () => {
  return (
    <div className="h-full px-5 flex">
      <div className="w-[30%] flex gap-3 items-center justify-center border">
        Detail
      </div>
      <div className="w-[40%] flex-auto flex items-center justify-center gap-4 flex-col py-2">
        Song
      </div>
      <div className="w-[30%] flex-auto flex items-center justify-center gap-5 border">
        Info Song
      </div>
    </div>
  );
};
