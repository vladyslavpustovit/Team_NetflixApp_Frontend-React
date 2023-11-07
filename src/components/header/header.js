import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import {
    Navbar,
    Typography,
    Collapse,
} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import NavList from "./navbar";
import CollapseIcon from "./collapseIcon";
import Searchbar from "./searchbar";
import SearchIcon from "./search-icon";
import LogoutBtn from "./logout-btn";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth >= 960) {
              setOpenNav(false);
              setOpenSearch(false);
          }
      };

      window.addEventListener("resize", handleResize);

      // Listener Cleanup on header unmount
      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);


  return (
        <Navbar className='bg-neutral-900 w-full'>
            <div className="mx-auto flex items-center">
                {/* Site logo */}
                    <Typography as="a" href="/" className="mr-4 cursor-pointer">
                        <Link to="/">
                            <img src="/assets/images/logo.png" className="logo fill-current w-32" alt="logo" />
                        </Link>
                    </Typography>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex w-full">
                    <NavList />
                    <div className='flex w-1/2 justify-end gap-4'>
                        <Searchbar/>
                        <div className='flex lg:items-center'>
                            <p className='text-white select-none mx-4'>Welcome, {user.username}</p>
                            <LogoutBtn/>
                        </div>
                    </div>
                </div>

                {/* Mobile icons */}
                <div className='flex items-center w-3/4 lg:w-0 justify-end gap-2'>
                    <SearchIcon openSearch={openSearch} setOpenSearch={setOpenSearch}/>
                    <CollapseIcon openNav={openNav} setOpenNav={setOpenNav}/>
                </div>
            </div>

            {/* Openable Mobile Searchbar */}
            <Collapse open={openSearch}>
                <div className="container mx-auto">
                    <Searchbar/>
                </div>
            </Collapse>

            {/* Openable Mobile Menu */}
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    <NavList/>
                    <LogoutBtn/>
                </div>
           </Collapse>
        </Navbar>
  );
}

export default Header;
