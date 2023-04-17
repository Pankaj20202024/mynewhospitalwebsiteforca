import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer";

export default function MainHeadquater() {
  const navigate = useNavigate();

  let BranchInfo = [
    {
      BranchName: "Branch 1 (Medicana In Maharastra )",
      BranchVideo: "/FoundationImages/Vid1.mp4",
      BranchImg: "/FoundationImages/Img1.png",
      Branch: "/Branch1",
      BranchDetials:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident quaerat, alias enim debitis quae a soluta ut voluptatum, aut maiores sed minus nostrum! Lorem ipsum, dolor  sit amet consectetur adipisicing elit. Sed minus dolore architecto eum, molestias vitae cum repellat dolores, id ipsum odio, blanditiis non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio blanditiis asperiores id at, debitis voluptate, deleniti iusto consequuntur laboriosam aliquid. Expedita, excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem est ipsaplaceat quaerat nobis cum modi eum delectus voluptatibus temporibus minima odio, sint facilis, laborum aliquammollitia. At consequatur consequuntur perferendis ab asperiores sed quia esse, ex facere blanditiis?",
    },
    {
      BranchName: "Branch 2 (Medicana In Assam)",
      BranchVideo: "/FoundationImages/Vid2.mp4",
      BranchImg: "/FoundationImages/Img2.png",
      Branch: "/Branch2",
      BranchDetials:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident quaerat, alias enim debitis quae a soluta ut voluptatum, aut maiores sed minus nostrum! Lorem ipsum, dolor  sit amet consectetur adipisicing elit. Sed minus dolore architecto eum, molestias vitae cum repellat dolores, id ipsum odio, blanditiis non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio blanditiis asperiores id at, debitis voluptate, deleniti iusto consequuntur laboriosam aliquid. Expedita, excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem est ipsaplaceat quaerat nobis cum modi eum delectus voluptatibus temporibus minima odio, sint facilis, laborum aliquammollitia. At consequatur consequuntur perferendis ab asperiores sed quia esse, ex facere blanditiis?",
    },
    {
      BranchName: "Branch 3 (Medicana In Gurgaon)",
      BranchVideo: "/FoundationImages/Vid3.mp4",
      BranchImg: "/FoundationImages/Img3.png",
      Branch: "/Branch3",
      BranchDetials:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident quaerat, alias enim debitis quae a soluta ut voluptatum, aut maiores sed minus nostrum! Lorem ipsum, dolor  sit amet consectetur adipisicing elit. Sed minus dolore architecto eum, molestias vitae cum repellat dolores, id ipsum odio, blanditiis non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio blanditiis asperiores id at, debitis voluptate, deleniti iusto consequuntur laboriosam aliquid. Expedita, excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem est ipsaplaceat quaerat nobis cum modi eum delectus voluptatibus temporibus minima odio, sint facilis, laborum aliquammollitia. At consequatur consequuntur perferendis ab asperiores sed quia esse, ex facere blanditiis?",
    },
    {
      BranchName: "Branch 4 (Medicana In Uttarpradesh )",
      BranchVideo: "/FoundationImages/Vid4.mp4",
      BranchImg: "/FoundationImages/Img4.png",
      Branch: "/Branch4",
      BranchDetials:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident quaerat, alias enim debitis quae a soluta ut voluptatum, aut maiores sed minus nostrum! Lorem ipsum, dolor  sit amet consectetur adipisicing elit. Sed minus dolore architecto eum, molestias vitae cum repellat dolores, id ipsum odio, blanditiis non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio blanditiis asperiores id at, debitis voluptate, deleniti iusto consequuntur laboriosam aliquid. Expedita, excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem est ipsaplaceat quaerat nobis cum modi eum delectus voluptatibus temporibus minima odio, sint facilis, laborum aliquammollitia. At consequatur consequuntur perferendis ab asperiores sed quia esse, ex facere blanditiis?",
    },
    {
      BranchName: "Branch 5 (Medicana In Andrapradesh)",
      BranchVideo: "/FoundationImages/Vid5.mp4",
      BranchImg: "/FoundationImages/Img5.png",
      Branch: "/Branch5",
      BranchDetials:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident quaerat, alias enim debitis quae a soluta ut voluptatum, aut maiores sed minus nostrum! Lorem ipsum, dolor  sit amet consectetur adipisicing elit. Sed minus dolore architecto eum, molestias vitae cum repellat dolores, id ipsum odio, blanditiis non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio blanditiis asperiores id at, debitis voluptate, deleniti iusto consequuntur laboriosam aliquid. Expedita, excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem est ipsaplaceat quaerat nobis cum modi eum delectus voluptatibus temporibus minima odio, sint facilis, laborum aliquammollitia. At consequatur consequuntur perferendis ab asperiores sed quia esse, ex facere blanditiis?",
    },
  ];
  return (
    <div>
      <MainContainer>
        <MainBranchMediacan>
          <p>Medicana Hospital</p>
        </MainBranchMediacan>
        <DetailsOfMainBranch>
          <Information>
            <p>
              Headquaters of Medicana is located in Uttarakhand. Our Hospital is
              one of the best hospitals located in Uttarakhand. We have a team
              of expert doctors that take care of patient's health properly. We
              maintain all the hygiene and proper sanitation to keep the
              hospital clean. The staff behaviour is very good with proper
              knowledge. we will assist you at Our best.
            </p>
          </Information>
          <BranchInfromation>
            <p>Their are total 5 branches of Medicana Hospital </p>
          </BranchInfromation>
          {BranchInfo.map((x, i) => {
            return (
              <BranchContainer>
                <Branch1container>
                  <p>{x.BranchName}</p>
                </Branch1container>
                <BranchInformationDetial>
                  <ImgContainer>
                    <img src={x.BranchImg} alt="MyHospitalWebsites" />
                    <video autoPlay={true} loop={true} playsInline={true}>
                      <source src={x.BranchVideo} type="video/mp4" />
                    </video>
                  </ImgContainer>
                  <DetailContainer>
                    <p>{x.BranchDetials}</p>
                  </DetailContainer>
                </BranchInformationDetial>
                <TreamentAvailableInThatBranch>
                  <p>Treatment Available In {x.BranchName} </p>
                  <button
                    onClick={() => {
                      navigate(x.Branch);
                    }}
                  >
                    Treatment Available
                  </button>
                </TreamentAvailableInThatBranch>
              </BranchContainer>
            );
          })}
        </DetailsOfMainBranch>
      </MainContainer>
      <Footer />
    </div>
  );
}

const MainContainer = styled.div`
  width: 90%;
  position: relative;
  left: 95px;
  top: 40px;
  text-align: center;
`;

const MainBranchMediacan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3%;

  p {
    text-align: center;
    font-family: "Bree Serif", serif;
    font-size: 2rem;
    color: white;
    font-weight: bold;
    display: inline-flex;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
    background-color: rgb(255, 255, 255);
    color: #090b13;
    border-radius: 5px;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
  }
`;

const DetailsOfMainBranch = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  border-radius: 5px;
  background-color: white;
`;

const Information = styled.div`
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
    box-sizing: border-box;
    margin-top: 10px;
  }
`;


const BranchInfromation = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 3%;

  p {
    text-align: center;
    font-family: "Bree Serif", serif;
    font-size: 1.7rem;
    color: white;
    font-weight: bold;
    display: inline-flex;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
    background-color: rgb(255, 255, 255);
    color: #090b13;
    border-radius: 5px;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
  }
`;

const BranchContainer = styled.div`
  margin-bottom: 5%;
`;
const Branch1container = styled.div`
  display: flex;
  align-items: flex-start;
  p {
    text-align: center;
    font-family: "Bree Serif", serif;
    font-size: 1.7rem;
    color: white;
    font-weight: bold;
    display: inline-flex;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
    background-color: rgb(255, 255, 255);
    color: #090b13;
    border-radius: 5px;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
    margin: 10px;
  }
`;

// Styled css for branch of the hospital 
const BranchInformationDetial = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DetailContainer = styled.div`
  margin: 4px;
  width: 1100px;
  p {
    text-align: center;
    color: #090b13;
    font-family: "Roboto", sans-serif;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
  }
`;

const ImgContainer = styled.div`
  width: 65%;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;
  margin: 1.5%;
  img {
    object-fit: cover;
    opacity: 1;
    width: 100%;
    inset: 0px;
    position: relative;
    display: block;
    top: 0;
    border-radius: 5px;
  }

  video {
    width: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
    border-radius: 5px;
  }
  &:hover {
    transform: scale(1.06);
    cursor: pointer;
    border-radius: 5px;
    img {
      opacity: 0;
    }
    video {
      opacity: 1;
      z-index: 1;
    }
  }
`;

const TreamentAvailableInThatBranch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1%;
  p {
    text-align: center;
    font-family: "Bree Serif", serif;
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
    display: inline-flex;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
    background-color: rgb(255, 255, 255);
    color: #090b13;
    border-radius: 5px;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
    margin: 10px;
  }
  button {
    color: #090b13;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    padding: 3px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 2px solid #090b13;
    &:hover {
      transform: scale(1.06);
      background-color: #090b13;
      color: white;
    }
  }
`;
