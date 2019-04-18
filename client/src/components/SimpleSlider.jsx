import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <img src="https://via.placeholder.com/500" alt="sample" />
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/500" alt="sample" />
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/500" alt="sample" />
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/500" alt="sample" />
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/500" alt="sample" />
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}
