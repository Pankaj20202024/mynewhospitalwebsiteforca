import React from "react";

import styled from "styled-components";
import MyImgSlider from "./MyImgSlider";
const ImgSlider = (props) => {
  return (
    <div>
      <Container>
        <Slide>
          <MyImgSlider  data={props.data}  slidersetting={props.slidersetting}/>
        </Slide>
      </Container>
    </div>
  );
};
const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

const Slide = styled.div``;

export default ImgSlider;
