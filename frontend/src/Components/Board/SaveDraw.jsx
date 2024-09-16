import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCreateDrawMutation } from "../../feature/draw/drawApiSlice";
import { Form } from "../Shared/Form/Form";
import { FormField } from "../Shared/Form/FormField";

const SaveDraw = ({ elements }) => {
  const navigate = useNavigate();
  const [createDraw] = useCreateDrawMutation() || {};
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (data, form) => {
    if (elements?.length && formData) {
      const res = await createDraw({
        title: formData.title,
        description: formData.description,
        elements,
      });

      if (res.error) {
        console.log("first");
        toast.error("Failed to save the drawing.");
      } else {
        toast.success("Drawing saved successfully!");
        navigate("/all-draws");
      }
    } else {
      toast.error("Please add elements before saving!");
    }
  };

  return (
    <div className="space-y-2 ">
      {" "}
      <Form
        model={formData}
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center px-2 md:px-0  space-y-4"
      >
        <FormField required name="title" type="text">
          {({ errors, ...props }) => (
            <div className="flex flex-col gap-2 w-full">
              <input
                {...props}
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className={`shadow-sm block px-3 py-2 border rounded-md placeholder-gray-400 sm:text-sm focus:outline-none focus:border-indigo-600 ${
                  errors ? "border-red-600" : ""
                }`}
              />
              {errors && (
                <p className="text-xs text-red-600 capitalize">
                  {errors.message}
                </p>
              )}
            </div>
          )}
        </FormField>

        <FormField required name="description" type="text">
          {({ errors, ...props }) => (
            <div className="flex flex-col gap-2 w-full">
              <textarea
                {...props}
                rows={3}
                placeholder="Description"
                onChange={handleChange}
                value={formData.description}
                className={`shadow-sm block px-3 py-2 border rounded-md placeholder-gray-400 sm:text-sm focus:outline-none focus:border-indigo-600 ${
                  errors ? "border-red-600" : ""
                }`}
              />
              {errors && (
                <p className="text-xs text-red-600 capitalize">
                  {errors.message}
                </p>
              )}
            </div>
          )}
        </FormField>

        <button
          // disabled={!elements?.length}
          // onClick={() => setOpenSave(true)}
          type="submit"
          className="sticky z-50 min-w-max mr-4 shadow border-2 border-red-100 hover:bg-gray-100 rounded-lg cursor-pointer py-2 px-6"
        >
          Save Changes
        </button>
      </Form>
    </div>
  );
};

export default SaveDraw;
