import {useAuthContext} from "./useAuthContext";
import {useState} from "react";
import {useLogout} from "./useLogout";

export const useMoviesByGenre = () => {
    const {user} = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);
    const {logout} = useLogout();
    const apiUrl = process.env.REACT_APP_API_URL;

    const fetchMoviesByGenre = async (genre) => {
        setIsLoading(true);
        const response  = await fetch(`${apiUrl}/movies/genres/${genre}`, {
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
    return {fetchMoviesByGenre, isLoading}
}