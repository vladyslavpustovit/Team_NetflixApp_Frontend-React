import {Link} from "react-router-dom";

const fontStyle = {
    color: "#e50914",
};

const NavList = (props) => {
    const {setOpenNav} = props;

    const closeNavbar = () => {
        // Check if current navbar is mobile
        if (window.innerWidth <= 960) {
            setOpenNav(false); // Close mobile navigation
        }
    };
    return (
        <ul style={fontStyle} className={`font-medium mt-2 flex flex-col
            lg:gap-5 lg:mt-0 lg:flex-row lg:items-center lg:justify-center lg:w-1/2`}>
            <Link to="/" as="li" className="p-2 rounded hover:bg-neutral-800" onClick={closeNavbar}>
                Home
            </Link>
            <Link to="/categories" as="li" className="p-2 rounded hover:bg-neutral-800" onClick={closeNavbar}>
                Categories
            </Link>
            <Link to="/top" as="li" className="p-2 rounded hover:bg-neutral-800" onClick={closeNavbar}>
                Top Movies
            </Link>
        </ul>
    );
}

export default NavList;