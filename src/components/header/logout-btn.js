import {Button} from "@material-tailwind/react";
import {useLogout} from "../../hooks/useLogout";

const LogoutBtn = () => {
    const { logout } = useLogout();

    const handleLogout = () => {
        logout();
    };

    return (
        <div>
            <Button
                onClick={handleLogout}
                variant="gradient"
                size="sm"
                className="rounded bg-red-700 p-3 hover:bg-red-900 w-full mt-4 lg:mt-0">
                Logout
            </Button>
        </div>
    )
}

export default LogoutBtn;