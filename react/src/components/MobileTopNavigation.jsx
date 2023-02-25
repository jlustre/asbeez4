import React from "react";
import { NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MobileTopNavigation = ({ navigation }) => {
  return (
    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          as="a"
          to={item.to}
          className={({ isActive }) =>
            classNames(
              isActive
                ? "bg-gray-600 text-white"
                : "bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-gray-900",
              "block px-3 py-2 rounded-md font-medium"
            )
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default MobileTopNavigation;
