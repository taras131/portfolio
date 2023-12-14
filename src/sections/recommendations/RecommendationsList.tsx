import React, {FC} from 'react';
import {TRecommendation} from "../../models/TRecommendations";
import {RecommendationsListItem} from "./RecommendationsListItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type TProps = {
    recommendations: TRecommendation []
}

export const RecommendationsList: FC<TProps> = ({recommendations}) => {


    const recommendationsList = recommendations.map(recommendation => (<RecommendationsListItem key={recommendation.id}
                                                                                                recommendation={recommendation}/>))
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    };
    return (
        <Slider {...settings}>
            {recommendationsList}
        </Slider>
    );
};
