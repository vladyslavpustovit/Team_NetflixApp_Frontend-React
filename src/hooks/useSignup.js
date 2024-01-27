import {useState} from "react";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const apiUrl = process.env.REACT_APP_API_URL;

    const signup = async (userInfo, onRegSuccess) => {
        setIsLoading(true);
        setError(null);

        const controller = new AbortController();
        const timeout = 20000; // 20 seconds

        // Set up a timeout to abort the request after 20 seconds
        const timeoutId = setTimeout(() => {
            controller.abort();
        }, timeout);

        try {
            const response = await fetch(`${apiUrl}/users/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userInfo),
                signal: controller.signal, // Pass the abort signal to the fetch request
            });

            const json = await response.json();

            if (response.status !== 201) {
                throw new Error(json.msg);
            }

            // Redirect to /login page if signup is successful
            onRegSuccess();
        } catch (error) {
            if (error.name === 'AbortError') {
                setError('Request timed out');
            } else {
                setError(error.message || 'An error occurred during the request');
            }
        } finally {
            clearTimeout(timeoutId); // Clear the timeout
            setIsLoading(false);
        }
    };

    return { signup, isLoading, error };
};
