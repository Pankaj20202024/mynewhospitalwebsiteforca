import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <p> Copyright © ShopOn.com. All rights reserved</p>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`

  margin-top: 7%;
  text-align: center;

  p{
    font-size: 1.3rem;
    font-family: 'Roboto', sans-serif;
    background-color: #090b13;
    color: white;
    padding: 4px;
  }
`;
