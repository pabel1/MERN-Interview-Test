import React from "react";
import DrawingCard from "../../Components/Card/DrawingCard";
import { useAllDrawsQuery } from "../../feature/draw/drawApiSlice";

const ShowDraw = () => {
  const { data } = useAllDrawsQuery() || {};

  const { result } = data?.data || {};

  return (
    <div className="container grid grid-cols-2 items-center justify-center gap-4 my-4">
      {result &&
        result.map((item, i) => <DrawingCard drawing={item} key={i} />)}
    </div>
  );
};

export default ShowDraw;
