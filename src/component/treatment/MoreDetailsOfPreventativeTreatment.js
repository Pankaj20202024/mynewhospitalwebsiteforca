import React from "react";
import styled from "styled-components";
import ImgSlider from "../../mainslider/ImgSlider";
export default function MoreDetailsOfPreventativeTreatment() {
  let data = [
    {
      img: "/ImagesForTreatmentPage/BacgroundImage1.jpg",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage2.jpg",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage3.jpg",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage4.jpeg",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage5.webp",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
  ];

  let slidersetting = {
    slidetoshow: 3,
  };

  return (
    <PrevantativeDetails>
      <ImgSlider data={data} slidersetting={slidersetting} />
      <div>
        <h1>MoreDetailsOfPreventativeTreatment</h1>
        <h1>MoreDetailsOfPreventativeTreatment</h1>
        <h1>MoreDetailsOfPreventativeTreatment</h1>
        <h1>MoreDetailsOfPreventativeTreatment</h1>
        <h1>MoreDetailsOfPreventativeTreatment</h1>
        <h1>MoreDetailsOfPreventativeTreatment</h1>
        <h1>MoreDetailsOfPreventativeTreatment</h1>
        <h1>MoreDetailsOfPreventativeTreatment</h1>
      </div>
    </PrevantativeDetails>
  );
}

const PrevantativeDetails = styled.div`
  position: relative;
  top: 60px;
`;
