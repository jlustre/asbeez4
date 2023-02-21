import React from "react";

const PageHeader = ({ title, subtitle, link }) => {
  return (
    <div>
      <img
        className="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or{" "}
        <a
          href={link}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          {subtitle}
        </a>
      </p>
    </div>
  );
};

export default PageHeader;
