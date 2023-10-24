import { useEffect, useState } from "react";

function useTrailer(imdbUrl) {
    const [videoURLs, setVideoURLs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const inputString = imdbUrl;
        const parts = inputString.split("/");
        let imdbId;

        if (parts.length >= 3) {
            imdbId = parts[2];
        } else {
            setError("Oops, there is an error");
        }

        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://europe-west1-puppeteer-teaser.cloudfunctions.net/scraper?title=${imdbId}`
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setVideoURLs(data);
            } catch (error) {
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [imdbUrl]);

    // Filter and process the data within the hook
    const filteredVideoURLs = videoURLs
        .filter((source) => /\d/.test(source.displayName.value)) // Include values with numbers
        .map((source) => ({
            src: source.url,
            type: "video/mp4",
            size: source.displayName.value.replace(/[^\d]/g, ""), // Remove all non-digit characters
        }));

    return { filteredVideoURLs, loading, error };
}

export default useTrailer;
