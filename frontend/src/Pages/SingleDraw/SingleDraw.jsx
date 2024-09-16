import React from "react";
import { useParams } from "react-router-dom";
import DrawingCard from "../../Components/Card/DrawingCard";
import { useSingleDrawQuery } from "../../feature/draw/drawApiSlice";

const SingleDraw = () => {
  const { id } = useParams();
  console.log(id);

  const { data, isLoading, isSuccess, isError } =
    useSingleDrawQuery({ id }) || {};

  console.log(data);
  let content = null;
  if (!isLoading && isSuccess && !isError && data) {
    const { result } = data.data || {};
    content = (
      <>
        <div className=" flex items-center justify-start gap-6">
          <div>
            <h1 className=" text-lg font-medium text-gray-600 capitalize  ">
              {result?.title}
            </h1>
            <p className="  py-2 text-gray-500">{result?.description}</p>
          </div>
        </div>

        <div>
          <DrawingCard drawing={result} />
        </div>
      </>
    );
  }
  return <div className=" container my-8 space-y-4">{content}</div>;
};

export default SingleDraw;
