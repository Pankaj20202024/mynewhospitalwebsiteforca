import React from "react";
import ImgSlider from "../../mainslider/ImgSlider";
import styled from "styled-components";
export default function Branch1() {
  let slidersetting = {
    slidetoshow: 3,
  };

  let data = [
    {
      img: "/ImagesForTreatmentPage/BacgroundImage1.jpg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage2.jpg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage3.jpg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage4.jpeg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage5.webp",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
  ];

  return (
    <Branch1MainContainer>
      <ImgSlider data={data} slidersetting={slidersetting} />
      <p>Branch1</p>
      <p>Branch1</p>
      <p>Branch1</p>
      <p>Branch1</p>
      <p>Branch1</p>
      <p>Branch1</p>
      <p>Branch1</p>
    </Branch1MainContainer>
  );
}

const Branch1MainContainer = styled.div`
  position: relative;
  top: 60px;
`;
