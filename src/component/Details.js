import React from "react";
import styled from "styled-components";
import InnerImgSlider from "../innersmallslider/InnerImgSlider";


export default function Details() {
  let details = [
    {
      NgoHeading: "We For You",
      WorkDetails1:
        "We for You (WFY) was founded in 2007 by our doctors, medical students and like-minded people with a vision of “health for all”. Currently, WFY is working on various projects in 17 different states across India involving healthcare professionals, disaster management practitioners, social workers, etc. It reaches out to segments affected by extreme poverty, disasters, neglect and years of injustice.",
      WorkDetails2:
        "Our major focus is to address the healthcare and nutritional needs of the affected population. We also work to improve sexual and reproductive health, maternal, infant and child health in emergencies and have vast experience working in disaster-prone areas. WFY has received several awards like the SAARC Award (2010), The British Medical Journal Group Award (2009), Golden Ruby Award (2015) and recognition from state governments for their outstanding contribution to the humanitarian field.",
      data: [
        {
          img: "/Images/workforyou1.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/Images/workforyou2.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/Images/workforyou3.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/Images/workforyou4.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
      ],
    },
    {
      NgoHeading: "Rural Heath Treatment Foundation",
      WorkDetails1:
        "Rural Health Treatment Foundation (RHTF) has been working for healthcare since 2009 and provides high quality and affordable primary medical care to low-income and underprivileged groups in West Bengal. Their aim is to make healthcare accessible to the poorest and the most deprived sections. RHTF has 17 centres operating across the state which include 12 centres in remote rural areas. Their goal is to continue improving the health and lives of the underserved who face social and financial challenges.",
      WorkDetails2:
        "Their healthcare centres provide patients with affordable medical consultations along with a week's supply of free medication. To date, over 23 lakh patients have been treated at the RHTF centres.",
      data: [
        {
          img: "/Images/RuralHealth1.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/Images/RuralHealth2.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/Images/RuralHealth3.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/Images/RuralHealth4.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
      ],
    },
    {
      NgoHeading: "Foundation for Mother and Child Health",
      WorkDetails1:
        " This is a grassroots organisation that ensures healthcare and nutrition intervention for women and children in vulnerable communities of Mumbai. Their programmes encourage preventive health, balanced nutrition and child development practices in underprivileged settlements. To this effect, they have adopted a holistic approach to embrace, educating and empowering mothers and children in their social environment.",
      WorkDetails2:
        "The FMCH Training Center in Mumbai was launched with the objective of developing a cadre of professionals across Maharashtra and eventually the entire country. Urban Nutrition Initiative and Project Poshan are nutrition-specific interventions where FMCH works closely with the families and large groups to promote good health, hygiene, and nutrition practices. Their programmes impact over 930 pregnant and lactating mothers annually.",

      data: [
        {
          img: "/Images/FoundationOfMotherChild1.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/Images/FoundationOfMotherChild2.webp",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/Images/FoundationOfMotherChild3.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/Images/FoundationOfMotherChild4.png",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
      ],
    },
  ];


  return (
    <MainContainer>
      <QuotesAndHeadingContainer>
        <p>"Promote Health, Keep The World Safe, Serve The Vulnerable"</p>
      </QuotesAndHeadingContainer>
      <QuotesAndHeadingContainer>
        <p>Our Work Toward Remote Area</p>
      </QuotesAndHeadingContainer>
      {details.map((item, index) => {
        return (
          <NgoContainers>
            <NgoHeadingContainers>
              <p key={index}>{item.NgoHeading}</p>
            </NgoHeadingContainers>
            <WorkDetails>
              <p key={index}>{item.WorkDetails1}</p>
            </WorkDetails>
            <InnerImgSlider data={item.data} key={index} />
            <WorkDetails key={index}>
              <p>{item.WorkDetails2}</p>
            </WorkDetails>
            <ButtonContainerDiv>
              <ButtonForThisNgo>View Details</ButtonForThisNgo>
              <ButtonForThisNgo>Join Us</ButtonForThisNgo>
            </ButtonContainerDiv>
          </NgoContainers>
        );
      })}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 90%;
  position: relative;
  left: 80px;
  top: 40px;
  text-align: center;
`;

const QuotesAndHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3%;

  p {
    text-align: center;
    font-family: "Bree Serif", serif;
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
    display: inline-flex;
    padding: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
    background-color: rgb(255, 255, 255);
    color: #090b13;
    border-radius: 5px;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
  }
`;

const NgoContainers = styled.div`
  
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  border-radius: 5px;
  background-color: white;
`;

const NgoHeadingContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3%;

  p {
    text-align: center;
    font-family: "Bree Serif", serif;
    font-size: 1.5rem;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    display: inline-flex;
    padding: 4px;
    margin-top: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
    border-radius: 5px;
    background-color: white;
    color: #090b13;
    /* box-shadow: 0px 0px 15px 4px #090b13; */
    /* background-color: #090b13; */
  }
`;

const WorkDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 3%;
  p {
    text-align: center;
    color: #090b13;
    font-family: "Roboto", sans-serif;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
  }
`;

const ButtonContainerDiv = styled.div`
  text-align: center;
  margin-top: 3%;
`;

const ButtonForThisNgo = styled.button`
  border: 3px solid #090b13;
  color: #090b13;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  padding: 3px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  width: 20%;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.06);
    background-color: #090b13;
    color: white;
  }
`;
