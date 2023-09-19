import {MovieCard} from "./movieCard";
import Carousel from "nuka-carousel";
import {useEffect, useState} from "react";

const CardsSection = ({movies, name}) => {
    const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());

    function calculateSlidesToShow() {
        return window.innerWidth < 768 ? 2 : 5;
    }

    useEffect(() => {
        function handleResize() {
            setSlidesToShow(calculateSlidesToShow());
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return(
        <>
            <h1 className='ml-1.5 text-2xl font-bold mb-4'>{name}</h1>
                <Carousel slidesToShow={slidesToShow}
                          cellSpacing={10}
                          renderBottomCenterControls={() => null}>
                    {
                        movies.map((movie, index)=>(
                            <MovieCard key={index} movie={movie}/>
                        ))
                    }
                </Carousel>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
        </>
    );
}

export default CardsSection;