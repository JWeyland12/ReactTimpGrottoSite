import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
import { Link } from "react-router-dom";

// ADD CAPTIONS TO THE CAROUSEL

const Home = ({ carousel }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        const nextIndex = activeIndex === carousel.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
        if (animating) return;
    };

    const previous = () => {
        const nextIndex = activeIndex === 0 ? carousel.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
        if (animating) return;
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = carousel.map((item) => {
        return (
            <CarouselItem key={item.id}>
                <img className="carousel-image" src={item.src} alt={item.alt} />
                <Link to={item.link}>
                    <CarouselCaption className="carousel-link" captionText={item.caption} captionHeader={item.header} />
                    <CarouselCaption className="carousel-link d-inline-block d-md-none"  captionHeader={item.header} />
                </Link>
            </CarouselItem>
        );
    });

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={carousel} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
};

// const Home = ({ carousel }) => {
//     console.log("this is subcaption:", carousel.caption);
//     if (carousel) {
//         return <UncontrolledCarousel items={carousel} indicators={true} />;
//     }
//     return <div />;
// };

export default Home;
