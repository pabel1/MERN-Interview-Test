import classnames from "classnames";
import React from "react";
import { useNavigate } from "react-router-dom";

const buttonClassesMap = {
  common:
    "inline-flex relative py-2 px-4 border shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
  primary:
    "border-transparent rounded text-white bg-primary hover:bg-red-700 focus:bg-red-700 disabled:bg-red-100 disabled:text-gray-300",
  secondary:
    "border-gray-300 rounded text-gray-900 bg-transparent hover:bg-gray-100 focus:ring-gray-200 disabled:bg-gray-200 disabled:text-gray-300",
};

export default function Button({
  className,
  kind = "primary",
  loading,
  children,
  onClick,
  href,
  ...props
}) {
  const navigate = useNavigate();
  let onButtonClick = onClick;
  if (href) {
    onButtonClick = (e) => {
      if (typeof href !== "string") navigate(href.toString());
      else navigate(href);
      if (onClick) onClick(e);
    };
  }

  return (
    <button
      disabled={loading || props.disabled}
      className={classnames(
        buttonClassesMap[kind],
        buttonClassesMap.common,
        className
      )}
      onClick={onButtonClick}
      {...props}
    >
      {loading && (
        <div className="left-0 absolute w-full flex justify-center">
          <div
            className={classnames(`border-2 w-5 h-5 rounded-full animate-spin`)}
          />
        </div>
      )}
      <span
        className={
          loading
            ? "opacity-0 inline-flex items-center"
            : "inline-flex items-center"
        }
      >
        {children}
      </span>
    </button>
  );
}
