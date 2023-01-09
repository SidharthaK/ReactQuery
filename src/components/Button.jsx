import React from "react";

export default function Button({ children, className, ...rest }) {
  return (
    <button
      className={`px-4 py-1 text-white rounded bg-orange-400 hover:bg-orange-400 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
