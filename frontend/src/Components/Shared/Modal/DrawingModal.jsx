import { DialogTitle } from "@headlessui/react";
// import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
// import { editDrawing, saveDrawing } from "../../providers/reactQuery";

import Button from "../Buttons/Button";

import { Form } from "../Form/Form";
import { FormField } from "../Form/FormField";
import Modal from "./Modal";

const DrawingModal = ({
  isOpen,
  onClose,
  elements,
  title = "",
  description = "",
}) => {
  const { drawingId } = useParams();
  const navigate = useNavigate();

  const mutation = useMutation(drawingId ? editDrawing : saveDrawing, {
    // onMutate: async (newDrawing) => {
    //   const previousDrawings = queryClient.getQueryData("drawings");
    //   queryClient.setQueryData("drawings", newDrawing);
    //   return { previousDrawings };
    // },
    // onSuccess: () => {
    //   onClose();
    //   toast.success(`Drawing ${drawingId ? "updated" : "saved"} successfully`);
    //   navigate("/drawings/explore");
    // },
    // onError: (err) => {
    //   toast.error(err.response?.data?.message || "An error occurred");
    // },
  });

  const handleSubmit = (data) => {
    // const payload = {
    //   title: data.title || "",
    //   description: data.description || "",
    //   elements,
    // };
    // if (drawingId) payload.id = drawingId;
    // mutation.mutate(payload);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <DialogTitle
        as="h3"
        className="text-lg font-medium leading-8 text-gray-900"
      >
        Enter the Title and Description for your Drawing!
      </DialogTitle>

      <Form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center px-2 md:px-0 mt-4 space-y-4"
      >
        <FormField required name="title" type="text">
          {({ errors, ...props }) => (
            <div className="flex flex-col gap-2 w-full">
              <input
                {...props}
                placeholder="Title"
                defaultValue={title}
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
                defaultValue={description}
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

        <div className="mt-4 flex items-center space-x-4 justify-end w-full">
          <Button type="button" kind="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            disabled={mutation.isLoading}
            loading={mutation.isLoading}
            type="submit"
          >
            Save
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default DrawingModal;
