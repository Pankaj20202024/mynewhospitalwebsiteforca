import React from "react";
import Slider from "react-slick";

import SliderImage from "./SliderImage";

const MyImgSlider = (props) => {
  let data = [...props.data];

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "60px",
    slidesToShow: props.slidersetting.slidetoshow,
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
  projectSlider = data.map((item) => (
    <SliderImage item={item} key={item.img} />
  ));
  return (
    <div>
      <Slider {...settings}>{projectSlider}</Slider>
    </div>
  );
};

export default MyImgSlider;
