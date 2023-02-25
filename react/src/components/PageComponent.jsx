import React from "react";
import DefaultHeader from "./DefaultHeader";

export default function PageComponent({ title, buttons = "", children }) {
  return (
    <>
      <DefaultHeader title={title} buttons={buttons} />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  );
}
