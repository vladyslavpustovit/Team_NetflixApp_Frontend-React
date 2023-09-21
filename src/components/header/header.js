import React from "react";
import './header.css'

import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };
  

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);


  const navList = (
    <ul className="font-medium mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10" id="navItems">
      <Link
        to="/"
        as="li"
        className="p-2 font-medium">
        Home
      </Link>
      <Link
        to="/categories"
        as="li"
        className="p-2 ">
          Categories
      </Link>
        <Link
            to="/top"
            as="li"
            className="p-2 ">
            Top Movies
        </Link>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between p-2">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer">
          <Link to="/">
            <img
              src="/assets/images/logo.png"
              className="fill-current w-32"
              alt=""
            />
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>


      <div>
      <span className="mr-5 invisible lg:visible">Welcome, {user.username}</span>
        <Button
          onClick={handleClick}
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block bg-red-700 rounded p-3 hover:bg-red-900">
          <span className="">Logout</span>
        </Button>

      </div>
        <IconButton
          variant="text"
          className="mr-4 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto pl-2">
          {navList}
          <Button
            onClick={handleClick}
            className="ml-2 bg-red-700 rounded p-2.5 hover:bg-red-900 my-2">
            <span className="">Logout</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default Header;
