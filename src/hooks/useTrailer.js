import { useState} from "react";
export const useTrailer = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTeaserURLs = async (imdbUrl) => {
        setLoading(true);

        const inputString = imdbUrl;
        const parts = inputString.split("/");
        let imdbId;

        if (parts.length >= 3) {
            imdbId = parts[2];
        } else {
            setError("Oops, there is an error");
        }

        const response = await fetch(
            `https://europe-west1-puppeteer-teaser.cloudfunctions.net/scraper?title=${imdbId}`
        );

        const json = await response.json();
        if (!(response.status === 200)) {
            setLoading(false)
            setError('Unable to fetch teaser URL')
            return;
        }
        if(response.status === 200) {
            // Filter and process the data
            const filteredVideoURLs = json
                .filter((source) => /\d/.test(source.displayName.value)) // Include values with numbers
                .map((source) => ({
                    src: source.url,
                    type: "video/mp4",
                    size: source.displayName.value.replace(/[^\d]/g, ""), // Remove all non-digit characters
                }));
            setLoading(false);
            return filteredVideoURLs;
        }
    }
    return { fetchTeaserURLs, loading, error };
}