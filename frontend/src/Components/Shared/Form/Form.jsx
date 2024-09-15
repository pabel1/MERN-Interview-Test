import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const Form = ({
  model = {},
  onSubmit,
  children,
  className = "",
  mode = "onSubmit",
  criteriaMode = "all",
  reValidateMode = "onChange",
}) => {
  const form = useForm({
    mode,
    reValidateMode,
    defaultValues: model,
    criteriaMode,
  });

  useEffect(() => {
    if (model) {
      form.reset(model);
    }
  }, [model, form]);

  return (
    <FormProvider {...form}>
      <form
        className={className}
        noValidate
        onSubmit={form.handleSubmit((data) => onSubmit(data, form))}
      >
        {children}
      </form>
    </FormProvider>
  );
};
