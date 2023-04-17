import Slider from "react-slick";
import SponsorInnerImgSlider from "./SponsorInnerImgSlider";

const MySponsorInnerImgSlider = (props) => {
  
  let data = [
    ...props.data
  ];

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    centerPadding: "60px",
    slidesToShow:props.Innerslidersetting.slidertoshow,
    speed: 500,
    arrows: false, 
    autoplay: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          centerMode: false,
        },
      },
    ],
  };

  let projectSlider = "";
  projectSlider = data.map((item) => (
    <SponsorInnerImgSlider item={item} />
  ));
  return (
    <div>
      <Slider {...settings}>
        {projectSlider}
    </Slider>
    </div>
  );
};

export default MySponsorInnerImgSlider;
