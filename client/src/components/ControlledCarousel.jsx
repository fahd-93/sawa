import React from "react";
import { Carousel } from 'react-bootstrap';


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
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/image.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Educational Campaign</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/image.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Construction Campaign</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/image.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Medical Campaign</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default ControlledCarousel;