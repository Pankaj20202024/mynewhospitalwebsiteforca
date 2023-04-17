import React from "react";

import styled from "styled-components";
export default function Navbar() {
  return (
    <div>
      <Nav>
        <Logo>
          <img src="/Images/HospitalLogo.png" alt="MyHospitalWebsite" />
        </Logo>
        <NavItem>
          <a href="/Home">
            <img src="/Images/home.png" alt="MyhospitalWebsite" />
            <span>Home</span>
          </a>
          <a href="/Treatment">
            <img src="/Images/treatmenticon.png" alt="MyhospitalWebsite" />
            <span>Treatments</span>
          </a>
          <a href="/Foundations">
            <img src="/Images/foundation.png" alt="MyhospitalWebsite" />
            <span>Foundations</span>
          </a>
          <a href="/About">
            <img src="/Images/abouticon.png" alt="MyhospitalWebsite" />
            <span>About</span>
          </a>
          <a href="/Event">
            <img src="/Images/eventicon.png" alt="MyhospitalWebsite" />
            <span>Event</span>
          </a>
   
          <a href="/Carrer">
            <img src="/Images/carrericon.png" alt="MyhospitalWebsite" />
            <span>Carrer</span>
          </a>
          <a href="/Donate">
            <img src="/Images/donateicon.png" alt="MyhospitalWebsite" />
            <span>Donate</span>
          </a>
          <a href="/Search">
            <img src="/Images/searchicon.png" alt="MyhospitalWebsite" />
          </a>
        </NavItem>
      </Nav>
    </div>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  z-index: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #090b13;
`;

const Logo = styled.a`
  img {
    width: 100px;
    position: relative;
    left: -10px;

  }
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  
  width: 100%;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
    text-decoration: none;
    justify-content: center;

    img {
      width: 23px;
      filter: invert(100%);
      margin: 2px;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 20px;
      padding: 2px 0px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      white-space: nowrap;
      position: relative;
      font-family: "Raleway", sans-serif;

      &::before {
        content: " ";
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        height: 2px;
        position: absolute;
        bottom: -1px;
        left: 0px;
        right: 0px;
        transform-origin: left center;
        width: auto;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
        visibility: hidden;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;
