import React from "react";
import styled from "styled-components";

const MySliderImage = (props) => {
  return (
    <Container>
      <img src={props.item.img} alt="MyHospitalWebApp" />
      <div className="disc">
        <h1>Description</h1>
        <h2>
          {props.item.disc}
          <a href="#">Demo</a>
        </h2>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 15rem;
  margin: 3px;
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 400ms ease-in-out;
    text-align: center;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -12rem;
    text-align: center;
    padding: 0.5rem;
    transition: all 400ms ease-in-out;
    h1 {
      font-size: 2rem;
      font-family: "Great Vibes", cursive;
      color: #090b13;
      text-align: center;
    }
    h2 {
      width: 90%;
      font-size: 1.5rem;
      color: #090b13;
      text-align: center;
      font-family: "Great Vibes", cursive;
      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }

  &:hover > img {
    transform: scale(1.3);
    opacity: 0.75;
  }
  &:hover > div {
    bottom: 0;
  }
`;
export default MySliderImage;
