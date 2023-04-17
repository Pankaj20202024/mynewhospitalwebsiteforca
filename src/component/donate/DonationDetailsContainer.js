import React from "react";
import styled from "styled-components";
import InnerImgSlider from "../../innersmallslider/InnerImgSlider";
import Footer from "../Footer";
import DonationForm from "./DonationForm";

export default function DonationDetailsContainer() {
  let details = [
    {
      ExampleOfDonorHeading: "People Who Donate To Medicana",
      NameOfDonors: [
        {
          DonorsName: "Samrat Dhara",
        },
        {
          DonorsName: "Ravi Mishara",
        },
        {
          DonorsName: "Shreya Singhal",
        },
        {
          DonorsName: "Kiran Fartyal",
        },
        {
          DonorsName: "Sumit Pandey",
        },
        {
          DonorsName: "Riya Pandey",
        },
        {
          DonorsName: "Ram Charan",
        },
        {
          DonorsName: "Juniou Ntr",
        },
        {
          DonorsName: "Subham Prajapati",
        },
        {
          DonorsName: "Austosh Verma",
        },
        {
          DonorsName: "Sneha Gupta",
        },
        {
          DonorsName: "Yashi Gupta",
        },
      ],
      data: [
        {
          img: "/DonateImages/DonorsPatientImg1.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/DonateImages/DonorsPatientImg2.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/DonateImages/DonorsPatientImg3.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/DonateImages/DonorsPatientImg4.webp",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/DonateImages/DonorsPatientImg5.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/DonateImages/DonorsPatientImg6.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
      ],
    },
  ];

  return (
    <div>
      <MainContainer>
        <ThankingToDonor>
          <p>Thanking To Medicana Donor</p>
        </ThankingToDonor>
        <DetailsOfThankingToDonor>
          {details.map((item, index) => {
            return (
              <>
                <InformationOfDonors>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Pariatur laudantium fuga deleniti veritatis qui culpa
                    molestias minus, ea illo reprehenderit magni sit assumenda
                    corrupti quasi est ex fugit aliquid, ipsa nemo fugiat
                    necessitatibus obcaecati. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Alias harum, omnis quo in,
                    ullam facilis autem totam dolorum reiciendis ratione natus
                    veniam cum similique suscipit cupiditate. Consequuntur
                    consequatur distinctio non sit architecto repellendus
                    impedit!
                  </p>
                </InformationOfDonors>
                <DonorDetails>
                  <DonorInfo>
                    <DonorInfoContainer>
                      <DonorDetailWithImageSlider>
                        <DonorSlider>
                          <InnerImgSlider data={item.data} index={index} />
                        </DonorSlider>
                      </DonorDetailWithImageSlider>
                      <ExampleOfDonor>
                        <p key={index}>{item.ExampleOfDonorHeading}</p>
                        <DonorContainer>
                          {item.NameOfDonors.map((x, i) => {
                            return <li>{x.DonorsName}</li>;
                          })}
                        </DonorContainer>
                      </ExampleOfDonor>
                    </DonorInfoContainer>
                  </DonorInfo>
                </DonorDetails>
              </>
            );
          })}
        </DetailsOfThankingToDonor>
        <ThankingToDonor>
          <p>Want to donate someting </p>
        </ThankingToDonor>
        <DonationForm />
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

const ThankingToDonor = styled.div`
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

const DetailsOfThankingToDonor = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  border-radius: 5px;
  background-color: white;
`;

const InformationOfDonors = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    color: #090b13;
    font-family: "Roboto", sans-serif;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
    box-sizing: border-box;
    margin-top: 15px;
  }
`;

const DonorDetails = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  border-radius: 5px;
  background-color: white;
  margin-top: 4%;
`;

// container for showing the meaning of the type of treatment
const DonorInfo = styled.div`
  width: 100%;
`;

const DonorInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DonorDetailWithImageSlider = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const DonorSlider = styled.div`
  width: 100%;
`;

const ExampleOfDonor = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  border-radius: 5px;
  padding: 3px;
  margin: 10px;
  background-color: rgb(240, 233, 223);
  p {
    text-align: center;
    color: #090b13;
    font-family: "Roboto", sans-serif;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
    padding: 8px;
  }
`;

const DonorContainer = styled.div`
  padding: 4px;
  margin: 4px;
  li {
    text-align: left;
  }
`;
