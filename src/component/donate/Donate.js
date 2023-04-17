import React from "react";
import styled from "styled-components";
import ImgSlider from "../../mainslider/ImgSlider";
import { useNavigate } from "react-router-dom";
import SideBarForOtherComponentsThanHome from "../SideBarForOtherComponentsThanHome";
import DonationDetailsContainer from "./DonationDetailsContainer";

export default function Donate() {
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
          <p className="flex mx-1 w-18">Cash </p>
          <img
            className="w-12 ImgContainer"
            src="/DonateImages/Cash.png"
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
          <p className="mx-1 w-18">Stocks & securities</p>
          <img
            className="w-12 ImgContainer"
            src="/DonateImages/StockAndSecurity.png"
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
          <p className="mx-1 w-18"> Planned giving and charitable trusts</p>
          <img
            className="w-12 ImgContainer "
            src="/DonateImages/charitable.png"
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
          <p className="mx-1 w-18">Valuable assets</p>
          <img
            className="w-12 ImgContainer "
            src="/DonateImages/assets.png"
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
          <p className="mx-1 w-18 ">Blood Donation</p>
          <img
            className="w-12 ImgContainer"
            src="/DonateImages/bloodDonation.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      SwitchContainer: MedicanaHospitalbranch5,
      style: "rounded-br-md",
    },
  ];

  let slidersetting = {
    slidetoshow: 3,
  };
  let data = [
    {
      img: "/DonateImages/DonationImg1.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/DonateImages/DonationImg2.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/DonateImages/DonationImg3.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/DonateImages/DonationImg4.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/DonateImages/DonationImg5.webp",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/DonateImages/DonationImg6.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
  ];
  return (
    <ImgDivContainer>
      <ImgSlider data={data} slidersetting={slidersetting} />
      <DonationDetailsContainer />
      <SideBarForOtherComponentsThanHome
        ImgUrlsForSideBar={ImgUrlsForSideBar}
      />
    </ImgDivContainer>
  );
}

const ImgDivContainer = styled.div`
  position: relative;
  top: 60px;
`;
