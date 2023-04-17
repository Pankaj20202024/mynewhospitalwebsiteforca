import React from 'react'
import styled from 'styled-components';
import ImgSlider from '../../mainslider/ImgSlider';
export default function Branch4() {
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
    <Branch4MainContainer>
      <ImgSlider data={data} slidersetting={slidersetting} />
      <p>Branch4</p>
      <p>Branch4</p>
      <p>Branch4</p>
      <p>Branch4</p>
      <p>Branch4</p>
      <p>Branch4</p>
      <p>Branch4</p>
    </Branch4MainContainer>
  );
}

const Branch4MainContainer = styled.div`
  position: relative;
  top: 60px;
`;
