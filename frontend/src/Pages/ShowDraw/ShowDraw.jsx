import React from "react";
import DrawingCard from "../../Components/Card/DrawingCard";
import { useAllDrawsQuery } from "../../feature/draw/drawApiSlice";

const ShowDraw = () => {
  const { data, isLoading, isError, isSuccess } = useAllDrawsQuery() || {};

  let content = null;
  if (!isLoading && isSuccess && !isError && data) {
    const { result } = data.data || {};
    content = result.map((item, i) => <DrawingCard drawing={item} key={i} />);
  }

  return (
    <div className="container grid grid-cols-2 items-center justify-center gap-4 my-4">
      {content}
    </div>
  );
};

export default ShowDraw;
