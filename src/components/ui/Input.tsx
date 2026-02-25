"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({
  label,
  error,
  helperText,
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id || React.useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-[#111111] mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`
          w-full px-4 py-2.5
          bg-white
          border rounded-md
          text-[#111111] text-base
          placeholder:text-[#999999]
          transition-all duration-150 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-[#8B0000]
          disabled:bg-[#F7F6F3] disabled:text-[#666666] disabled:cursor-not-allowed
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
