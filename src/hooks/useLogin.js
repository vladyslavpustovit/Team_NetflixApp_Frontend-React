import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();
    const apiUrl = process.env.REACT_APP_API_URL;

    const login = async (username, password) => {
        setIsLoading(true);
        setError(null);

        const controller = new AbortController();
        const timeout = 20000; // 20 seconds

        // Set up a timeout to abort the request after 20 seconds
        const timeoutId = setTimeout(() => {
            controller.abort();
        }, timeout);

        try {
            const response = await fetch(`${apiUrl}/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
                signal: controller.signal, // Pass the abort signal to the fetch request
            });

            const json = await response.json();
            console.log(response.status);

            if (response.status !== 200) {
                setError(json.msg);
            } else {
                localStorage.setItem("user", JSON.stringify(json));
                dispatch({ type: 'LOGIN', payload: json });
            }
        } catch (error) {
            if (error.name === 'AbortError') {
                setError('Request timed out');
            } else {
                setError('An error occurred during the request');
            }
        } finally {
            clearTimeout(timeoutId); // Clear the timeout
            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
};