import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import useTrailer from "../../../hooks/useTrailer";
import LoadingSpinner from "../content/loading-spinner"; // Import your custom hook

const MovieTeaser = ({ movie }) => {
    const { filteredVideoURLs, loading, error } = useTrailer(movie.imdb_url);


    if (error) {
        return <LoadingSpinner message='Trailer in not available'/>;
    }

    return (
        <div className="mx-auto px-4 md:px-20 2xl:container mt-8">
            <h1 className="text-3xl text-center py-4">{`${movie.name} - Official Trailer`}</h1>
            <div className="flex justify-center">
                <div className="w-[60vw] relative">
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
                            sources: filteredVideoURLs,
                            poster: movie.image_url,
                        }}
                    />
                    {/*{loading && (*/}
                    {/*    <div className="absolute inset-0 flex items-center justify-center">*/}
                    {/*        <div className='text-red-600'>Hello</div>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </div>
            </div>
        </div>
    );
};

export default MovieTeaser;
