import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        <div>
          <img src="https://www.internetcreation.net/wp-content/uploads/2015/04/banner-web-development.png" />
        </div>
        <div>
          <img src="https://brilliantstarsigns.com/wp-content/uploads/2018/04/banner-graphic-design.png" />
        </div>
        <div>
          <img src="https://www.aquariansoft.in/Encyc/2022/2/23/mobile-App_202202231300379804_H@@IGHT_510_W@@IDTH_1559.png" />
        </div>
      </Carousel>
    </div>
  );
}
