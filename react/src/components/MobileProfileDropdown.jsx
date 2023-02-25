import React from "react";
import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import Avatar from "../components/Avatar";
import RightNavButtons from "./RightNavButtons";

const MobileProfileDropdown = ({ user, logout, profile }) => {
  return (
    <div className="border-t border-gray-700 pt-4 pb-3">
      <div className="flex justify-between items-center px-2">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Avatar
              source={user.imageUrl}
              size="h-10 w-10"
              alttext={`${user.name} picture`}
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-white">
              {user.name}
            </div>
            <div className="text-sm font-medium leading-none text-gray-400">
              {user.email}
            </div>
          </div>
        </div>
        <RightNavButtons />
      </div>
      <div className="mt-3 space-y-1 px-2">
        <Disclosure.Button
          as="a"
          href="#"
          onClick={(ev) => profile(ev)}
          className="bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-gray-900 cursor-pointer block px-4 py-2 text-sm "
        >
          My Profile
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          onClick={(ev) => logout(ev)}
          className="bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-gray-900 cursor-pointer block px-4 py-2 text-sm "
        >
          Sign Out
        </Disclosure.Button>
      </div>
    </div>
  );
};

export default MobileProfileDropdown;
