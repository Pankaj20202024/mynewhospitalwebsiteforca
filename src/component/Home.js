import styled from "styled-components";
import ImgSlider from "../mainslider/ImgSlider";
import Details from "./Details";
import RegisterForAppointment from "./RegisterForAppointment";
import SlideComponent from "./SlideComponent";
import Footer from "./Footer";

export default function Home() {

  let slidersetting = {
    slidetoshow: 1,
  };
  let data = [
    {
      img: "/Images/bacgroundImg(1).jpg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/Images/bacgroundImg(2).jpg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/Images/bacgroundImg(3).jpg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/Images/bacgroundImg(4).jpg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/Images/bacgroundImg(5).jpg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
  ];

  return (
    <div>
      <ImgDivContainer>
        <ImgSlider data={data} slidersetting={slidersetting} />
        <Details />
        <Footer />
        <RegisterForAppointment />
        <SlideComponent />
      </ImgDivContainer>
    </div>
  );
}

const ImgDivContainer = styled.div`
  position: relative;
  top: 60px;
`;
