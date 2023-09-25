import {useState} from "react";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const signup = async (email, username, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/users/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({email, username, password}),
            }
        );
        const json = await response.json();
        console.log(response.status)
        if (!(response.status === 201)) {
            setIsLoading(false);
            setError(json.msg);
        }
        if (response.status === 201) {
            setIsLoading(false);
        }
    }
    return { signup, isLoading, error }
}
