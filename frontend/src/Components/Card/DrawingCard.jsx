import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDeleteDrawMutation } from "../../feature/draw/drawApiSlice";
import DrawingPreview from "../Board/DrawingPreview";
import DrawingMenu from "../Shared/Menu/DrawingMenu";
const DrawingCard = ({ drawing }) => {
  const [deleteDraw, { isLoading, isSuccess }] = useDeleteDrawMutation() || {};
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/draw/${drawing?._id}`);
  };

  const handleEdit = () => {
    navigate(`/edit-draw/${drawing?._id}`);
  };

  const handleDelete = async () => {
    console.log(drawing?._id);
    const res = await deleteDraw({ id: drawing?._id });
    console.log(res);
    if (res.error) {
      toast.error("Something Went Wrong!!");
    } else {
      navigate(`/all-draws`);
      toast.success("Drawing Deleted Successfull");
    }
  };
  return (
    <div className="relative  w-full border border-gray-200 rounded-lg cursor-pointer">
      <div onClick={handleClick}>
        <DrawingPreview drawing={drawing} />
      </div>

      <div className="absolute right-3 top-3 p-2 hover:bg-gray-200 rounded-full ">
        <DrawingMenu
          onOption1Click={handleEdit}
          onOption2Click={handleDelete}
        />
      </div>
    </div>
  );
};

export default DrawingCard;
