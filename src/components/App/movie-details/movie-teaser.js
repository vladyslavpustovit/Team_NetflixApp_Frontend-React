import React, { useEffect, useState } from "react";
import cheerio from "cheerio";

const MovieTeaser = ({ movie }) => {
    const [videoUrl, setVideoUrl] = useState("");

    useEffect(() => {
        fetch('https://www.imdb.com/title/tt0055630/')
            .then((response) => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Failed to fetch the page');
                }
            })
            .then((html) => {
                // Load the HTML content into Cheerio
                const $ = cheerio.load(html);

                // Use a selector to locate the element
                const element = $('a[aria-label="Watch Official Trailer"]');

                // Extract the href attribute
                const href = element.attr('href');

                console.log('Element Href:', href);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            <a href={"https://www.imdb.com" + movie.imdb_url}>
                {"https://www.imdb.com" + movie.imdb_url}
            </a>
        </>
    );
};

export default MovieTeaser;