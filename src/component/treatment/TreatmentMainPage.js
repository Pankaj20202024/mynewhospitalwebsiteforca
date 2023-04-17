import ImgSlider from "../../mainslider/ImgSlider";
import styled from "styled-components";
import SideBarForOtherComponentsThanHome from "../SideBarForOtherComponentsThanHome";
import TreatmentDetailsContainer from "./TreatmentDetailsContainer";
import { useNavigate } from "react-router-dom";

export default function TreatmentMainPage() {
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

  let slidersetting = {
    slidetoshow: 3,
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

  let data = [
    {
      img: "/ImagesForTreatmentPage/BacgroundImage1.jpg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage2.jpg", 
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage3.jpg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage4.jpeg",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/ImagesForTreatmentPage/BacgroundImage5.webp",
      discription:"Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
  ];

  return (
    <TreatmentImageDivContainer>
      <ImgSlider data={data} slidersetting={slidersetting} />
      <TreatmentDetailsContainer />
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
