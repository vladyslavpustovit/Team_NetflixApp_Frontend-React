import './header.css'
import {useLogout} from "../../hooks/useLogout";
import {useAuthContext} from "../../hooks/useAuthContext";
import {Link} from "react-router-dom";
function Header() {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const handleClick = () => {
        logout();
    }
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-neutral-900 px-6">
                <div className="flex items-center flex-shrink-0 mr-6 hover:bg-neutral-800 mr-2">
                    <Link to='/'>
                    <img src="/assets/images/logo.png" className="fill-current w-32"/>
                    </Link>
                </div>

                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">

                    {/*Left Side Links*/}
                    <div className="text-sm lg:flex-grow">
                        <Link to="/categories" className="block hover:underline mt-4 lg:inline-block lg:mt-0 hover:text-red-600 mr-4">
                            Categories (works)
                        </Link>
                    </div>

                    {/*Right Side*/}
                    <div>
                        {user && (
                            <div>
                                <span className='mr-4'>Welcome, {user.username}</span>
                                <button
                                    onClick={handleClick}
                                    className="bg-red-700 rounded p-2 hover:bg-red-900">
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Header;
