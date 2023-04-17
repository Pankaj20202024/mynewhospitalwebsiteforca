import React from "react";

import styled from "styled-components";
import MySponsorInnerImgSlider from "./MySponsorInnerImgSlider";

const MySponsorImgSlider = (props) => {
  return (
    <div>
      <Container>
        <Slide>
          <MySponsorInnerImgSlider
            data={props.data}
            Innerslidersetting={props.Innerslidersetting}
          />
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

const Slide = styled.div`

`;

export default MySponsorImgSlider;
