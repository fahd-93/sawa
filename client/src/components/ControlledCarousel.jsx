import React from "react";
import { Carousel, Button } from 'react-bootstrap';


class ControlledCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
                className="carousel-fade"
            >
                <Carousel.Item
                >
                    <img
                        className="d-block w-100 carousel-control"
                        src="http://res.cloudinary.com/ddrvpl4zh/image/upload/v1556404639/srzkeg4hnnkiqkvdfsgb.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <Button href="/signin">Get Some Help</Button>
                        <h1>Medical Campaign</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-control"
                        src="http://res.cloudinary.com/ddrvpl4zh/image/upload/v1556403796/clu9bjmosfgrayipm4it.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Button href="/signin">Get Some Help</Button>
                        <h1>Educational Campaign</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-control"
                        src="http://res.cloudinary.com/ddrvpl4zh/image/upload/v1556403697/x4lwggyhdi5om2unhtw7.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Button href="/signin">Get Some Help</Button>
                        <h1>Construction Campaign</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default ControlledCarousel;