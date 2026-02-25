"use client";

import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function TextArea({
  label,
  error,
  helperText,
  className = "",
  id,
  rows = 4,
  ...props
}: TextAreaProps) {
  const textAreaId = id || React.useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textAreaId}
          className="block text-sm font-medium text-[#111111] mb-2"
        >
          {label}
        </label>
      )}
      <textarea
        id={textAreaId}
        rows={rows}
        className={`
          w-full px-4 py-2.5
          bg-white
          border rounded-md
          text-[#111111] text-base
          placeholder:text-[#999999]
          transition-all duration-150 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-[#8B0000]
          disabled:bg-[#F7F6F3] disabled:text-[#666666] disabled:cursor-not-allowed
          resize-y
          ${error ? "border-[#8B0000]" : "border-[#E5E4E1] hover:border-[#CCCCCC]"}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-[#8B0000]">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-2 text-sm text-[#666666]">{helperText}</p>
      )}
    </div>
  );
}
