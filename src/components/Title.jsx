import React from "react";

export default function Title({ children, id }) {
  return (
    <h1
      className="text-2xl font-bold underline dark:text-white underline-offset-8 decoration-4 mb-5 text-stone-900"
      id={id && id}
    >
      {children}
    </h1>
  );
}
