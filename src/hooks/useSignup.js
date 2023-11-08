import { useState } from "react";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const signup = async (email, username, password) => {
        setIsLoading(true);
        setError(null);

        const controller = new AbortController();
        const timeout = 20000; // 20 seconds

        // Set up a timeout to abort the request after 20 seconds
        const timeoutId = setTimeout(() => {
            controller.abort();
        }, timeout);

        try {
            const response = await fetch("/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, username, password }),
                signal: controller.signal, // Pass the abort signal to the fetch request
            });

            const json = await response.json();
            console.log(response.status);

            if (response.status !== 201) {
                setError(json.msg);
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

    return { signup, isLoading, error };
};

