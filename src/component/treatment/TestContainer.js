import React from "react";

import styled from "styled-components";
import ImgSlider from "../../mainslider/ImgSlider";
import { useNavigate } from "react-router-dom";
import SideBarForOtherComponentsThanHome from "../SideBarForOtherComponentsThanHome";

export default function TestContainer() {
  // writing function for  switching the container inside the treatment page using the sidebarbutton
  const navigate = useNavigate();

  const TestContainerFunction = () => {
    navigate("/Test");
  };

  const MedicalIssueContainerFunction = () => {
    navigate("/MedicalIssue");
  };

  const MentalHealthContainerFunction = () => {
    navigate("/MentalHealth");
  };

  const SurgicalProcedureContainerFunction = () => {
    navigate("/SurgicalProcedure");
  };

  const CareAndSupportContainerFunction = () => {
    navigate("/CareAndSupport");
  };

  let ImgUrlsForSideBar = [
    {
      id: 1,
      child: (
        <>
          <p className="flex mx-1 w-18">Test</p>
          <img
            className="w-12 ImgContainer"
            src="/ImagesForTreatmentPage/test.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      SwitchContainer: TestContainerFunction,
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <p className="mx-1 w-18">Medical Issue</p>
          <img
            className="w-12 ImgContainer"
            src="/ImagesForTreatmentPage/MedicalIssue.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      SwitchContainer: MedicalIssueContainerFunction,
    },
    {
      id: 3,
      child: (
        <>
          <p className="mx-1 w-18"> Mental Health </p>
          <img
            className="w-12 ImgContainer "
            src="/ImagesForTreatmentPage/MentalHealth.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      SwitchContainer: MentalHealthContainerFunction,
    },
    {
      id: 4,
      child: (
        <>
          <p className="mx-1 w-18">Surgical Procedure</p>
          <img
            className="w-12 ImgContainer "
            src="/ImagesForTreatmentPage/SurgicalProcedure.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      SwitchContainer: SurgicalProcedureContainerFunction,
    },
    {
      id: 5,
      child: (
        <>
          <p className="mx-1 w-18 ">Care And Support</p>
          <img
            className="w-12 ImgContainer"
            src="/ImagesForTreatmentPage/CareAndSupport.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      SwitchContainer: CareAndSupportContainerFunction,
      style: "rounded-br-md",
    },
  ];

  let slidersetting = {
    slidetoshow: 3,
  };
  let data = [
    {
      img: "/ImagesForTreatmentPage/BacgroundImage1.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage2.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage3.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage4.jpeg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage5.webp",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
  ];
  return (
    <TestImageDivContainer>
      <ImgSlider data={data} slidersetting={slidersetting} />

      <MainContainer>
        <h1>Test Container </h1>
        <h1>Test Container </h1>
        <h1>Test Container </h1>
        <h1>Test Container </h1>
        <h1>Test Container </h1>
        <h1>Test Container </h1>
        <h1>Test Container </h1>
      </MainContainer>
      <SideBarForOtherComponentsThanHome
        ImgUrlsForSideBar={ImgUrlsForSideBar}
      />
    </TestImageDivContainer>
  );
}

const TestImageDivContainer = styled.div`
  position: relative;
  top: 60px;
`;

const MainContainer = styled.div`
  width: 90%;
  position: relative;
  left: 80px;
  top: 40px;
  text-align: center;
  border: 2px solid crimson;
  z-index: -1;
`;
