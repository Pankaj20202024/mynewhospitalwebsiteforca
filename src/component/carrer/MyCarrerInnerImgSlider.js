import React from "react";
import CarrerInnerImgSlider from "./CarrerInnerImgSlider";
import Slider from "react-slick";
export default function MyCarrerInnerImgSlider(props) {
  let data = [...props.data];

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  let projectSlider = "";
  projectSlider = data.map((item) => <CarrerInnerImgSlider item={item} />);

  return (
    <div>
      <Slider {...settings}>{projectSlider}</Slider>
    </div>
  );
}
