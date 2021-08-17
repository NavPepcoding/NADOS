import React from 'react'
import "./LoginSignUpCarousel.css";
import Rectangle17 from "../../assets/Rectangle17.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../assets/Image1.svg";
import Image2 from "../../assets/Image2.svg";
import Image3 from "../../assets/Image3.svg";
function LoginSignupCarousel() {

    return (
            <Carousel interval={2000} transitionTime={1000}  autoPlay={true} axis="horizontal" infiniteLoop={true}
                showStatus={false} showIndicators={true} showThumbs={false} showArrows={false} dynamicHeight={true}
            >
                <div className="image_div">
                    <img className="image" src={Image1} />

                </div>
                <div className="image_div">
                    <img className="image" src={Image2} />

                </div>
                <div className="image_div">
                    <img className="image" src={Image3} />

                </div>
            </Carousel>
    )
}

export default LoginSignupCarousel
{/**/ }