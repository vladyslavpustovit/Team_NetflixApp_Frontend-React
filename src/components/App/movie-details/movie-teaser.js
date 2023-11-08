import React, {useEffect, useState} from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import {useTrailer} from "../../../hooks/useTrailer";
import LoadingSpinner from "../content/loading-spinner";

const MovieTeaser = ({ movie }) => {
    const [videoURLs, setVideoURLs] = useState([]);
    const { fetchTeaserURLs, loading, error } = useTrailer(movie.imdb_url);

    useEffect(() => {
        const fetchMovieTeaser = async () => {
            const imdbUrl = movie.imdb_url;
            if (imdbUrl) {
                const teaserURLs = await fetchTeaserURLs(imdbUrl);
                if (teaserURLs) {
                    setVideoURLs(teaserURLs);
                } else {
                    console.log('Teaser not Found')
                }
            }
        };
        fetchMovieTeaser();
    }, []);

    if (error) {
        return <LoadingSpinner message='Trailer in not available'/>;
    }

    return (
        <div className="mx-auto px-4 md:px-20 2xl:container mt-8">
            <h1 className="text-2xl text-center py-4">{`${movie.name} - Official Trailer`}</h1>
            <div className="flex justify-center">
                <div className="w-[100vw] md:w-[70vw] relative">
                    <Plyr
                        poster={movie.image_url}
                        options={{
                            controls: [
                                "play-large",
                                "play",
                                "progress",
                                "current-time",
                                "mute",
                                "volume",
                                "captions",
                                "settings",
                                "airplay",
                                "fullscreen",
                            ],
                            settings: ["quality", "speed"],
                            ratio: "16:9",
                            storage: { enabled: true, key: "plyr" },
                            quality: { default: 720, options: [1080, 720, 480] },
                        }}
                        source={{
                            type: "video",
                            sources: videoURLs,
                            poster: movie.image_url,
                        }}
                    />
                    {loading && (
                            <LoadingSpinner size={100}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieTeaser;

