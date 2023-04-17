import React from "react";

import styled from "styled-components";
import MyInnerImgSlider from "./MyInnerImgSlider";

const InnerImgSlider = (props) => {
  return (
    <div>
      <Container>
        <Slide>
          <MyInnerImgSlider data={props.data} />
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

export default InnerImgSlider;
