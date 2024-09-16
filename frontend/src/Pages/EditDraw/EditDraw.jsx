import React from "react";
import { useParams } from "react-router-dom";
import DrawingBoard from "../../Components/Board/DrawingBoard";
import { useSingleDrawQuery } from "../../feature/draw/drawApiSlice";

const EditDraw = () => {
  const { id } = useParams();
  //   console.log(id);

  const { data, isLoading, isSuccess, isError } =
    useSingleDrawQuery({ id }) || {};

  //   console.log(data);
  let content = null;
  if (!isLoading && isSuccess && !isError && data) {
    const { result } = data.data || {};
    console.log(result);
    content = (
      <>
        {/* <div className=" flex items-center justify-start gap-6">
          <div>
            <h1 className=" text-lg font-medium text-gray-600 capitalize  ">
              {result?.title}
            </h1>
            <p className="  py-2 text-gray-500">{result?.description}</p>
          </div>
        </div> */}

        <div>
          <DrawingBoard drawing={result} />
        </div>
      </>
    );
  } else {
    content = <p>No drawing elements found.</p>;
  }
  return <div>{content}</div>;
};

export default EditDraw;
