import React from "react";
import DrawingCard from "../../Components/Card/DrawingCard";
import { useAllDrawsQuery } from "../../feature/draw/drawApiSlice";

const ShowDraw = () => {
  const { data } = useAllDrawsQuery() || {};

  const { result } = data?.data || {};
  console.log(result);
  return (
    <div className=" container grid grid-cols-4 items-center justify-center gap-2">
      {result &&
        result.map((item, i) => <DrawingCard drawing={item} key={i} />)}
    </div>
  );
};

export default ShowDraw;
