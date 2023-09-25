import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useMovieDetails = () => {
    const { user } = useAuthContext();
    const [isLoading, setIsLoading] = useState(null);

    const fetchMovieById = async (movieId) => {
        setIsLoading(true);

            const response = await fetch(`${process.env.REACT_APP_API_URL}/movies/${movieId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
            });

        const json = await response.json();
        if (!(response.status === 200)) {
            setIsLoading(false)
            return;
        }
        if(response.status === 200) {
            setIsLoading(false)
            return json;
        }

    };

    return { fetchMovieById, isLoading };
};