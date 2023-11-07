import {Link} from "react-router-dom";

const fontStyle = {
    color: "#e50914",
};

const NavList = () => {
    return (
        <ul style={fontStyle} className={`font-medium mt-2 flex flex-col
            lg:gap-5 lg:mt-0 lg:flex-row lg:items-center lg:justify-center lg:w-1/2`}>
            <Link to="/" as="li" className="p-2 rounded hover:bg-neutral-800">
                Home
            </Link>
            <Link to="/categories" as="li" className="p-2 rounded hover:bg-neutral-800">
                Categories
            </Link>
            <Link to="/top" as="li" className="p-2 rounded hover:bg-neutral-800">
                Top Movies
            </Link>
        </ul>
    );
}

export default NavList;