import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";

class CarouselComponent extends Component {

    static get CONTAINER_STYLE() {
        return {
            position: "unset",
            height: "100%",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle"
        };
    }

    static get CARD_STYLE() {
        return {
            height: "400px",
            width: "500px",
            textAlign: "center",
            background: "rgb(44, 65, 129)",
            color: "#FFF",
            fontFamily: "sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            borderRadius: "10px",
            boxSizing: "border-box"
        };
    }

    static get IMAGE_STYLE() {
        return {
            height: "400px",
            width: "500px",
            borderRadius: "10px",
        };
    }

    static get DESCRIPTION_STYLE() {
        return {
            color: 'lavender',
            position: "absolute",
            fontSize: "21px",
            fontWeight: "600",
            width: "100%",
            height: "100px",
            background: "rgba(0, 0, 0, 0.8)",
            bottom: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 10px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
        };
    }

    render() {
        return (
            <div style={CarouselComponent.CONTAINER_STYLE}>
                <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
                    <div style={CarouselComponent.CARD_STYLE}>
                        <img style={CarouselComponent.IMAGE_STYLE} src="/img/carousel/wifi.jpeg" alt="Carousel"/>
                        <div style={CarouselComponent.DESCRIPTION_STYLE}>Full control via wifi devices</div>
                    </div>
                    <div style={CarouselComponent.CARD_STYLE}>
                        <img style={CarouselComponent.IMAGE_STYLE} src="/img/carousel/access-controls.jpg" alt="Carousel"/>
                        <div style={CarouselComponent.DESCRIPTION_STYLE}>Remote locks control</div>
                    </div>
                    <div style={CarouselComponent.CARD_STYLE}>
                        <img style={CarouselComponent.IMAGE_STYLE} src="/img/carousel/remote-control.jpg" alt="Carousel"/>
                        <div style={CarouselComponent.DESCRIPTION_STYLE}>Web application management</div>
                    </div>
                    <div style={CarouselComponent.CARD_STYLE}>
                        <img style={CarouselComponent.IMAGE_STYLE} src="/img/carousel/monitoring.jpg" alt="Carousel"/>
                        <div style={CarouselComponent.DESCRIPTION_STYLE}>Online home surveillance</div>
                    </div>
                </ReactCardCarousel>
            </div>
        );
    }
}

export default CarouselComponent;
/*
render() {
    return (
        <div style={CarouselComponent.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={55000000}>
                <div style={CarouselComponent.CARD_STYLE}>First Card</div>
                <div style={CarouselComponent.CARD_STYLE}>Second Card</div>
                <div style={CarouselComponent.CARD_STYLE}>Third Card</div>
                <div style={CarouselComponent.CARD_STYLE}>Fourth Card</div>
                <div style={CarouselComponent.CARD_STYLE}>Fifth Card</div>
            </ReactCardCarousel>
        </div>
    );
}
*/