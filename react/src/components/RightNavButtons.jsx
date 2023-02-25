import React from "react";
import { BellIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const RightNavButtons = () => {
  return (
    <div className="flex justify-end align-items gap-1">
      <button
        type="button"
        className="rounded-full bg-gray-800 py-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="sr-only">View Mails</span>
        <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="rounded-full bg-gray-800 py-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="sr-only">View Notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default RightNavButtons;
