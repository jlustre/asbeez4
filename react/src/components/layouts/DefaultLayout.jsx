import { Disclosure } from "@headlessui/react";
import { Navigate, Outlet } from "react-router-dom";
import CompanyLogo from "../CompanyLogo";
import TopNavigation from "../TopNavigation";
import MobileMenuIcon from "../MobileMenuIcon";
import ProfileDropDown from "../ProfileDropDown";
import { useStateContext } from "../../contexts/ContextProvider";
import MobileTopNavigation from "../MobileTopNavigation";
import MobileProfileDropdown from "../MobileProfileDropdown";
import RightNavButtons from "../RightNavButtons";

const navigation = [
  { name: "Dashboard", to: "/" },
  { name: "Surveys", to: "/surveys" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DefaultLayout() {
  const { currentUser, userToken, setCurrentUser, setUserToken } =
    useStateContext();

  if (!userToken) {
    return <Navigate to="login" />;
  }

  const logout = (ev) => {
    ev.preventDefault();
  };

  const profile = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <CompanyLogo />
                    <div className="hidden md:block">
                      <TopNavigation navigation={navigation} />
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <RightNavButtons />

                      {/* Profile dropdown */}
                      <ProfileDropDown
                        user={currentUser}
                        logout={logout}
                        profile={profile}
                      />
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <MobileMenuIcon open={open} />
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <MobileTopNavigation navigation={navigation} />
                <MobileProfileDropdown
                  user={currentUser}
                  logout={logout}
                  profile={profile}
                />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Outlet />
      </div>
    </>
  );
}
