import { Link } from "react-router-dom";
import defaultAvatar from "../assets/icons/avatar.png";
import { logOut } from "../auth/firebase";
import { useAuthContext } from "../context/AuthContextProvider";
import Switch from "./Switch";

const Navbar = () => {
  const { currentUser } = useAuthContext();
  // const { currentUser } = useContext(AuthContext);

  return (
    <>
      <nav className=" w-full flex flex-wrap items-center justify-between py-3 bg-[ dark:bg-gray-900   shadow-lg navbar navbar-expand-lg fixed-top">
        <div className="container-fluid w-full flex  items-center justify-between px-6">
          <Link className="navbar-text text-2xl pr-2 font-semibold" to="/">
            <span
              className="dark:text-white
            text-gray-900 "
            >
              Movie App
            </span>
          </Link>
          <div className="flex items-center relative">
            <Switch />
            {currentUser && (
              <h5 className="mr-10 capitalize">{currentUser?.displayName}</h5>
            )}
            <div className="dropdown relative">
              <Link
                className="dropdown-toggle flex items-center hidden-arrow"
                to="#"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={currentUser?.photoURL || defaultAvatar}
                  className="rounded-full"
                  style={{ height: 25, width: 25 }}
                  alt="user"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <ul
                className="dropdown-menu min-w-max absolute  bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-2 hidden m-0 bg-clip-padding border-none left-auto right-0"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  {!currentUser && (
                    <Link
                      className="dropdown-item text-md py-2 px-10 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      to="/"
                    >
                      Home
                    </Link>
                  )}
                  {!currentUser ? (
                    <Link
                      className="dropdown-item text-md py-2 px-10 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      to="/register"
                    >
                      Register
                    </Link>
                  ) : (
                    <Link
                      className="dropdown-item text-md py-2 px-10 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      to="/"
                    >
                      Home
                    </Link>
                  )}
                </li>
                {currentUser && (
                  <li>
                    <Link
                      className="dropdown-item text-md py-2 px-10 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      to="#"
                    >
                      Profile Settings
                    </Link>
                  </li>
                )}
                <li>
                  {!currentUser ? (
                    <Link
                      className="dropdown-item text-md py-2 px-10 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      to="/login"
                    >
                      Login
                    </Link>
                  ) : (
                    <span
                      className="dropdown-item text-md py-2 px-10 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      role="button"
                      onClick={() => logOut()}
                    >
                      Logout
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>
      <div className="h-[52px]"></div>
    </>
  );
};

export default Navbar;
