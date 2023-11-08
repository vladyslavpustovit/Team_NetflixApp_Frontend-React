import {useAuthContext} from "./useAuthContext";
import {useState} from "react";

export const useMoviesByGenre = () => {
    const {user} = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);

    const fetchMoviesByGenre = async (genre) => {
        setIsLoading(true);
        const response  = await fetch(`/movies/genres/${genre}`, {
            method: "GET",
            headers: {"Content-Type": "application/json",
                Authorization:`Bearer ${user.token}`
            }
        })
        const json = await response.json();
        if (!(response.status === 200)) {
            setIsLoading(false)
            return;
        }
        if(response.status === 200) {
            setIsLoading(false)
            return json;
        }
    }
    return {fetchMoviesByGenre, isLoading}
}