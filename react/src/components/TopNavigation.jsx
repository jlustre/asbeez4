import React from "react";
import { NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TopNavigation = ({ navigation }) => {
  return (
    <div className="ml-10 flex items-baseline space-x-4">
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className={({ isActive }) =>
            classNames(
              isActive
                ? "bg-gray-600 text-white"
                : "text-gray-300 hover:bg-gray-500 hover:text-white",
              "px-3 py-2 rounded-md text-sm font-medium"
            )
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default TopNavigation;
