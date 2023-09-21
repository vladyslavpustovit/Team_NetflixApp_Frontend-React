import Carousel from "nuka-carousel";
const HeroSection = () => {
    return(
        <div id="welcome-slider" className="mx-auto flex w-full sm:px-0 md:px-8 2xl:container">
            <Carousel
                autoplay={true}
                renderCenterLeftControls={({ previousSlide }) => null}
                renderCenterRightControls={({ nextSlide }) => null}
                slidesToShow={1}
                wrapAround={true}
                renderBottomCenterControls={() => null}>
                    <img src="/assets/images/posters/batman.jpg"/>
                    <img src="/assets/images/posters/interstellar.jpeg"/>
                    <img src="/assets/images/posters/star-wars.jpg"/>
            </Carousel>
        </div>
    )
}

export default HeroSection;