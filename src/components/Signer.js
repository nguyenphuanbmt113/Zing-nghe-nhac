import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArtist } from "../service/webApi";

export const Signer = () => {
  const { singer } = useParams();
  const [artistData, setArtistData] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const res = await getArtist(singer);
      console.log("res", res)
      if (res.err === 0) {
        setArtistData(res?.data);
      }
    };
    fetching();
  }, [singer]);
  console.log("artistData", artistData);
  return (
    <div className="flex flex-col w-full">
      <div className="mt-[-70px]">
        <img src={artistData?.cover} alt="" />
      </div>
    </div>
  );
};
