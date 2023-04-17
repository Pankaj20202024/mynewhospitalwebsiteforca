import React from "react";
import styled from "styled-components";

export default function RegisterForAppointment() {
  return (
    <RegisterContainer>
      <a href="">
        <p>Book Appointment</p>
        <div>
          <img src="/Images/register.png" alt="MyHospitalWebsite" />
        </div>
      </a>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
  width: 5%;
  position: fixed;
  right: 6%;
  top: 60%;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    opacity: 0.75;
    p {
      text-align: center;
      width: 200%;
      font-family: "Roboto", sans-serif;
      color: white;
      background-color: #090b13;
      border-radius: 5px;
      font-size: 1rem;
      padding: 2px;
    }
    div {
      border-radius: 50%;
      background-color: #090b13;
      img {
        width: 100%;
        height: 100%;
        filter: invert(100%);
        padding: 4px;
      }
    }
  }
  &:hover{
    transform: scale(1.06);
    a{
      opacity: 1;
    }
  }
`;
