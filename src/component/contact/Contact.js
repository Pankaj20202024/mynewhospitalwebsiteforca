import React from "react";
import styled from "styled-components";
import ImgSlider from "../../mainslider/ImgSlider";
import Navbar from "../Navbar";
export default function Contact() {
  let slidersetting = {
    slidetoshow: 3,
  };

  let data = [
    {
      img: "/FoundationImages/Medicana1.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/FoundationImages/Medicana2.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/FoundationImages/Medicana3.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/FoundationImages/Medicana4.webp",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/FoundationImages/Medicana5.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
  ];
  return (
    <div>
      <ContactContainer>
        <Navbar />
        <ImgSlider data={data} slidersetting={slidersetting} />
        
      </ContactContainer>
    </div>
  );
}

const ContactContainer = styled.div`
  position: relative;
  top: 60px;
`;
