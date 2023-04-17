import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SideBarForOtherComponentsThanHome from "../SideBarForOtherComponentsThanHome";
import ImgSlider from "../../mainslider/ImgSlider";
import MainHeadquater from "./MainHeadquater";
export default function FoundationMain() {
  // writing function for  switching the container inside the treatment page using the sidebarbutton
  const navigate = useNavigate();

  const MedicanaHospitalbranch1 = () => {
    navigate("/Branch1");
  };

  const MedicanaHospitalbranch2 = () => {
    navigate("/Branch2");
  };

  const MedicanaHospitalbranch3 = () => {
    navigate("/Branch3");
  };

  const MedicanaHospitalbranch4 = () => {
    navigate("/Branch4");
  };

  const MedicanaHospitalbranch5 = () => {
    navigate("/Branch5");
  };

  let ImgUrlsForSideBar = [
    {
      id: 1,
      child: (
        <>
          <p className="flex mx-1 w-18">Branch 1(Medicana In Maharastra)</p>
          <img
            className="w-12 ImgContainer"
            src="/Images/foundation.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      SwitchContainer: MedicanaHospitalbranch1,
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <p className="mx-1 w-18">Branch 2(Medicana In Assam)</p>
          <img
            className="w-12 ImgContainer"
            src="/Images/foundation.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      SwitchContainer: MedicanaHospitalbranch2,
    },
    {
      id: 3,
      child: (
        <>
          <p className="mx-1 w-18"> Branch 3(Medicana In Gurgaon)</p>
          <img
            className="w-12 ImgContainer "
            src="/Images/foundation.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      SwitchContainer: MedicanaHospitalbranch3,
    },
    {
      id: 4,
      child: (
        <>
          <p className="mx-1 w-18">Branch 4(Medicana In UttarPradesh)</p>
          <img
            className="w-12 ImgContainer "
            src="/Images/foundation.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      SwitchContainer: MedicanaHospitalbranch4,
    },
    {
      id: 5,
      child: (
        <>
          <p className="mx-1 w-18 ">Branch 5(Medicana In AndraPradesh)</p>
          <img
            className="w-12 ImgContainer"
            src="/Images/foundation.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      SwitchContainer: MedicanaHospitalbranch5,
      style: "rounded-br-md",
    },
  ];

  let slidersetting = {
    slidetoshow: 2,
  };

  let data = [
    {
      img: "/FoundationImages/Medicana1.jpg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/FoundationImages/Medicana2.jpg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/FoundationImages/Medicana3.jpg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/FoundationImages/Medicana4.webp",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/FoundationImages/Medicana5.jpg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
  ];
  return (
    <TreatmentImageDivContainer>
      <ImgSlider data={data} slidersetting={slidersetting} />
      <MainHeadquater/>
      <SideBarForOtherComponentsThanHome
        ImgUrlsForSideBar={ImgUrlsForSideBar}
      />
    </TreatmentImageDivContainer>
  );
}

const TreatmentImageDivContainer = styled.div`
  position: relative;
  top: 60px;
`;
