import {useAuthContext} from "./useAuthContext";
import {useState} from "react";

export const useMoviesCatalog = () => {
    const {user} = useAuthContext();
    const [isLoading, setIsLoading] = useState(null);

    const fetchMovieList = async () => {
        setIsLoading(true)
        const response  = await fetch(`/api/movies`, {
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
    return {fetchMovieList, isLoading}
}