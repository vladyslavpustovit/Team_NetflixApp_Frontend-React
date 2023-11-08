import {useAuthContext} from "./useAuthContext";
import {useState} from "react";
import {useLogout} from "./useLogout";

export const useMoviesCatalog = () => {
    const {user} = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);
    const { logout } = useLogout();


    const fetchMovieList = async () => {
        setIsLoading(true);
        const response  = await fetch('/movies', {
            method: "GET",
            headers: {"Content-Type": "application/json",
                      Authorization:`Bearer ${user.token}`
            }
        })
        const json = await response.json();
        if (response.status === 401) {
            setIsLoading(false);
            logout();
        }

        if (!(response.status === 200)) {
            setIsLoading(false);
            return;
        }

        if(response.status === 200) {
            setIsLoading(false)
            return json;
        }
    }
    return {fetchMovieList, isLoading}
}