import React from "react";
import ReactCardCarousel from "react-card-carousel";
import  useWindowSize   from '../../helpers/WindowSize';

function CarouselComponent () {
    const state = { autoplay : true };
    // dynamic get screen width
    const [ width ] = useWindowSize();
    let carousel_width =  500;
    let carousel_height =  400;
    let carousel_fontSize =  21;

    if(1380 < width && width< 1530){
        carousel_width = 450;
        carousel_height = 360;
    }else if(1200 < width && width <= 1380){
        carousel_width = 400;
        carousel_height = 320;
    }else if(1100 < width && width <= 1200){
        carousel_width = 280;
        carousel_height = 230;
        carousel_fontSize = 20;
    }else if(1000 < width && width <= 1100){
        carousel_width = 270;
        carousel_height = 220;
        carousel_fontSize = 19;
    }else if(800 < width && width <= 1000){
        carousel_width = 250;
        carousel_height = 200;
        carousel_fontSize = 18;
    }else if(600 < width && width <= 800){
        carousel_width = 225;
        carousel_height = 175;
        carousel_fontSize = 17;
    }else if(400 < width && width <= 600){
        carousel_width = 190;
        carousel_height = 145;
        carousel_fontSize = 16;
    }else if(320 <= width && width <= 400){
        carousel_width = 180;
        carousel_height = 140;
        carousel_fontSize = 15;
    }
    // console.log('width',width);
    // console.log('carousel_width',carousel_width);
    // console.log('carousel_height',carousel_height);

    const CONTAINER_STYLE =  {
            position: "unset",
            height: "100%",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle"
        };

    const CARD_STYLE = {
            height: `${carousel_height}px`,
            width: `${carousel_width}px`,
            textAlign: "center",
            background: "rgb(44, 65, 129)",
            color: "#FFF",
            fontFamily: "sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            borderRadius: "10px",
            boxSizing: "border-box"
        };

    const IMAGE_STYLE = {
            height: `${carousel_height}px`,
            width: `${carousel_width}px`,
            borderRadius: "10px",
        };

    const DESCRIPTION_STYLE = {
            color: 'lavender',
            position: "absolute",
            fontSize: `${carousel_fontSize}px`,
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

    return (
        <div style={ CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={state.autoplay} autoplay_speed={3000}>
                <div style={ CARD_STYLE}>
                    <img style={ IMAGE_STYLE} src="/img/carousel/wifi.jpeg" alt="Carousel"/>
                    <div style={ DESCRIPTION_STYLE}>Full control via wifi devices</div>
                </div>
                <div style={ CARD_STYLE}>
                    <img style={ IMAGE_STYLE} src="/img/carousel/access-controls.jpg" alt="Carousel"/>
                    <div style={ DESCRIPTION_STYLE}>Remote locks control</div>
                </div>
                <div style={ CARD_STYLE}>
                    <img style={ IMAGE_STYLE} src="/img/carousel/remote-control.jpg" alt="Carousel"/>
                    <div style={ DESCRIPTION_STYLE}>Web application management</div>
                </div>
                <div style={ CARD_STYLE}>
                    <img style={ IMAGE_STYLE} src="/img/carousel/monitoring.jpg" alt="Carousel"/>
                    <div style={ DESCRIPTION_STYLE}>Online home surveillance</div>
                </div>
            </ReactCardCarousel>
        </div>
    );
}

export default CarouselComponent;