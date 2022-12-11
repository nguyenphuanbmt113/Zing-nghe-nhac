import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import { SongItem } from "../../components/SongItem";

export const SearchSong = () => {
  const { songs } = useSelector((state) => state.search);
  return (
    <Scrollbars style={{ width: "100%", height: "550px" }} autoHide>
      <div>
        {songs &&
          songs.length > 0 &&
          songs.map((item, i) => {
            return (
              <div className="px-[59px]" key={i}>
                <SongItem
                  data={item}
                  sid={item.encodeId}
                  key={item.encodeId}></SongItem>
              </div>
            );
          })}
      </div>
    </Scrollbars>
  );
};
