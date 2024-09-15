import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export const FormField = ({
  name,
  label,
  required = false,
  type = "text",
  pattern,
  minLength,
  maxLength,
  children,
  onChange,
  onPaste,
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  // Pattern handling
  const patternRegex =
    pattern || (type === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/ : undefined);

  const validationRules = {
    required: required ? `${label || name} is required` : false,
    pattern: patternRegex
      ? { value: patternRegex, message: `Invalid ${type} format` }
      : undefined,
    minLength: minLength
      ? {
          value: minLength,
          message: `${
            label || name
          } must be at least ${minLength} characters long`,
        }
      : undefined,
    maxLength: maxLength
      ? {
          value: maxLength,
          message: `${label || name} must be less than ${maxLength} characters`,
        }
      : undefined,
  };

  const inputProps = register(name, validationRules);

  // Handling custom onChange and onPaste
  if (onChange) {
    const originalOnChange = inputProps.onChange;
    inputProps.onChange = (e) => {
      onChange(e, form);
      originalOnChange(e);
    };
  }

  useEffect(() => {
    if (onPaste) {
      const inputEl = document.querySelector(`[name="${name}"]`);
      if (inputEl) {
        const handlePaste = (e) => onPaste(e, form);
        inputEl.addEventListener("paste", handlePaste);
        return () => inputEl.removeEventListener("paste", handlePaste);
      }
    }
  }, [name, onPaste]);

  return typeof children === "function"
    ? children({ ...inputProps, type, label, errors: errors[name] })
    : children;
};
