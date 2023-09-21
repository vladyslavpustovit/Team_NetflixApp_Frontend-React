import {Chip, Rating} from "@material-tailwind/react";
import React from "react";

const MovieHeader = ({movie}) => {
    return(
        <div className="mx-auto flex flex-col md:flex-row gap-x-8 px-4 md:px-20 2xl:container">
            <div id='left-info' className="w-full md:w-2/6 flex justify-center"
            >
                <img className='w-full object-contain' src={movie.image_url} alt={movie.name}/>
            </div>
            <div id='right-info' className="w-full md:w-4/6 mt-4 md:mt-0">
                <h1 className='text-4xl'>{movie.name + " " + movie.year}</h1>

                <div id='rating' className='flex content-center mt-12'>
                    <Rating value={ Math.floor(movie.rating / 2)} readonly className='flex content-center text-red-600'/>
                    <h3 className='ml-2'>{movie.rating}</h3>
                </div>

                <div id='movie-genres' className='flex content-center mt-2'>
                    {
                        movie.genre.map((genre)=>(
                            <Chip className='bg-red-900 mr-2' value={genre} />
                        ))
                    }
                </div>

                <p className='mt-8 w-5/6'>{movie.desc}</p>

                <div id='directors' className='mt-12'>
                    <h1 className='text-3xl'>Directors</h1>
                    <div className='underline'></div>
                    <div className='mt-4'>
                        {
                            movie.directors.map((actor=>(
                                <p className='mt-1'>{actor}</p>
                            )))
                        }
                    </div>
                </div>


                <div id='cast' className='mt-8'>
                    <h1 className='text-3xl'>Cast</h1>
                    <div className='underline'></div>
                    <div className='mt-4'>
                        {
                            movie.actors.map((actor=>(
                                <p className='mt-1'>{actor}</p>
                            )))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieHeader;