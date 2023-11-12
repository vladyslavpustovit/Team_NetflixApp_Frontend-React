import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import {useLogout} from "./useLogout";

export const useMovieDetails = () => {
    const { user } = useAuthContext();
    const [isLoading, setIsLoading] = useState(null);
    const {logout} = useLogout();
    const apiUrl = process.env.REACT_APP_API_URL;

    const fetchMovieById = async (movieId) => {
        setIsLoading(true);

            const response = await fetch(`${apiUrl}/movies/${movieId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
            });

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

    };

    return { fetchMovieById, isLoading };
};