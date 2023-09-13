import React, { useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
const menu =  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-10 h-10">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
const close = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-10 h-10">
<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = () => {
    logout();
  };

  return (
    <>
      <nav className={`parentNav flex items-center m-3 px-5 ${menuOpen ? 'flex-col' : ''}`}>
        <div className="flex items-center flex-shrink-0 mr-2">
          <Link to="/">
            <img
              src="/assets/images/logo.png"
              className="fill-current w-32"
              alt=""
            />
          </Link>
        </div>

        <div className="w-full flex justify-end lg:hidden">
          <button
            onClick={handleToggleMenu}
            className="flex px-2 py-1 text-gray-600 hover:text-red-600 focus:outline-none focus:text-red-600">
            {menuOpen ? <>{close}</> : <>{menu}</>}
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "flex flex-col items-end" : "hidden"
          } w-full lg:w-auto lg:flex-grow lg:flex lg:items-center lg:justify-end`}>
          <div className="lg:inline-block lg:mt-0 hover:text-red-600 hover:no-underline mr-4">
            <Link to="/categories" onClick={handleToggleMenu}>
              Categories (works)
            </Link>
          </div>
          {user && (
            <div className="mt-4 lg:inline-block lg:mt-0">
              <span className="mr-4">Welcome, {user.username}</span>
              <button
                onClick={handleClick}
                className="bg-red-700 rounded p-2 hover:bg-red-900">
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </>
  );
}

export default Header;
