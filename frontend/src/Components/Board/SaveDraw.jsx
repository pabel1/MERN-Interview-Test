import React from "react";
import Button from "../Shared/Buttons/Button";
import { Form } from "../Shared/Form/Form";
import { FormField } from "../Shared/Form/FormField";

const SaveDraw = () => {
  return (
    <div className="space-y-2 ">
      {" "}
      <Form
        // onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center px-2 md:px-0  space-y-4"
      >
        <FormField required name="title" type="text">
          {({ errors, ...props }) => (
            <div className="flex flex-col gap-2 w-full">
              <input
                {...props}
                placeholder="Title"
                // defaultValue={title}
                className={`shadow-sm block px-3 py-2 border rounded-md placeholder-gray-400 sm:text-sm focus:outline-none focus:border-indigo-600 ${
                  errors ? "border-red-600" : ""
                }`}
              />
              {errors && (
                <p className="text-xs text-error-red capitalize">
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
                // defaultValue={description}
                className={`shadow-sm block px-3 py-2 border rounded-md placeholder-gray-400 sm:text-sm focus:outline-none focus:border-indigo-600 ${
                  errors ? "border-red-600" : ""
                }`}
              />
              {errors && (
                <p className="text-xs text-error-red capitalize">
                  {errors.message}
                </p>
              )}
            </div>
          )}
        </FormField>

        {/* <div className="mt-4 flex items-center space-x-4 justify-end w-full">
      <Button type="button" kind="secondary" >
        Cancel
      </Button>
      <Button
        // disabled={mutation.isLoading}
        // loading={mutation.isLoading}
        type="submit"
      >
        Save
      </Button>
    </div> */}
      </Form>
      <Button
        // disabled={!elements?.length}
        // onClick={() => setOpenSave(true)}
        className="sticky z-50 min-w-max mr-4 shadow border-2 border-red-100 hover:bg-gray-100 rounded-lg cursor-pointer"
      >
        Save Changes
      </Button>
    </div>
  );
};

export default SaveDraw;
