import React from "react";
import styled from "styled-components";
import ImgSlider from "../../mainslider/ImgSlider";
import Footer from "../Footer";
import MySponsorImgSlider from "./MySponsorImgSlider";

export default function AboutWebsite() {
  let data = [
    {
      img: "/AboutHospitalImages/Doctor1.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/AboutHospitalImages/Doctor2.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/AboutHospitalImages/Doctor3.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/AboutHospitalImages/Doctor4.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/AboutHospitalImages/Doctor5.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
  ];

  let slidersetting = {
    slidetoshow: 3,
  };

  let Innerslidersetting = {
    slidertoshow: 5,
    imgWidth: "50%",
    imgWidth: "50%",
  };

  let Content = [
    {
      Heading1: "History Of Hospital",
      aboutCompany:
        "International Medical Network Medicana is one of the largest networks of medical institutions in the region. Medicana hospitals group occupy leading positions among the most high-tech medical centers in Turkey. Quality and safety of services in institutions of Medicana complies with the latest international health standards and the level of centers are compared with the top world leaders in medicine. First clinic was founded in 1995, today the Medicana network consist of 9 modern medical centers (two of which are highly advanced Dental centers), specialized institutions and research departments. The leading clinics of the group are situated in Istanbul, Ankara, Konya and Samsun. People come to Medicana seeking for treatment in fields of neurosurgery, transplantology, oncology, heart surgery, obstetrics, gynecology, and so on.",
      detail1: [
        "1338 patient beds for inpatient treatment",
        "more than 550 highly qualified physicians, 200 of whom are professors",
        "hospital personnel over 3500 people",
        "41 000 surgical interventions on the heart",
      ],
      detail2: [
        "more than 20 000 orthopedic interventions",
        "over 500 successful kidney transplants",
        "over 200 liver transplants",
        "over 1 000 000 patients per year",
      ],
      Heading2: "Features Of The Clinic",
      aboutFeatures:
        "On the basis of the medical center, complex neurosurgical, oncological, cardiosurgical interventions are performed on daily basis using the latest international medical protocols. The clinic also diagnoses and treats various diseases in orthopedics and traumatology, general surgery, gynecology, plastic surgery, reconstructive surgery, spinal surgery, ophthalmology, reproductive medicine, vascular surgery, urology and gastroenterology. The experts of the center annually take trainings in leading medical institutions of Europe and North America, which is confirmed by number of professional certificates. The level of the clinic and practicing specialists is confirmed by the availability of the JCI international accreditation certificate.",
      aboutOwnerHeading: "Founder Of Medicana",
      ownerImg: "/AboutHospitalImages/Doctor1.jpg",
      AboutOwner:
        "On the basis of the medical center, complex neurosurgical, oncological, cardiosurgical interventions are performed on daily basis using the latest international medical protocols. The clinic also diagnoses and treats various diseases in orthopedics and traumatology, general surgery, gynecology, plastic surgery, reconstructive surgery, spinal surgery, ophthalmology, reproductive medicine, vascular surgery, urology and gastroenterology. The experts of the center annually take trainings in leading medical institutions of Europe and North America, which is confirmed by number of professional certificates. The level of the clinic and practicing specialists is confirmed by the availability of the JCI international accreditation certificate.",

      Heading3: "Sponsor To Us",

      SponserContent: [
        {
          img: "/AboutHospitalImages/sponsorImg1.png",
        },
        {
          img: "/AboutHospitalImages/sponsorImg2.png",
        },
        {
          img: "/AboutHospitalImages/sponsorImg3.png",
        },
        {
          img: "/AboutHospitalImages/sponserImg4.png",
        },
        {
          img: "/AboutHospitalImages/sponserImg5.png",
        },
        {
          img: "/AboutHospitalImages/sponserImg6.png",
        },
        {
          img: "/AboutHospitalImages/sponserImg7.png",
        },
        {
          img: "/AboutHospitalImages/sponsorImg8.png",
        },
        {
          img: "/AboutHospitalImages/sponsorImg9.png",
        },
        {
          img: "/AboutHospitalImages/sponsorImg10.png",
        },
      ],
    },
  ];

  return (
    <AboutWebsiteContainer>
      <ImgSlider data={data} slidersetting={slidersetting} />
      <div>
        <MainContainer>
          {Content.map((item, index) => {
            return (
              <HistoryOfHospital>
                <HeadingContainer>
                  <p key={index}>{item.Heading1}</p>
                </HeadingContainer>
                <DetailContainer>
                  <p key={index}>{item.aboutCompany}</p>
                </DetailContainer>
                <InformationContainer>
                  <FirstContainer>
                    {item.detail1.map((x, i) => {
                      return <li key={i}>{x}</li>;
                    })}
                  </FirstContainer>
                  <SecondContainer>
                    {item.detail2.map((x, i) => {
                      return <li key={i}>{x}</li>;
                    })}
                  </SecondContainer>
                </InformationContainer>
                <FeatureContainer>
                  <HeadingContainer>
                    <p key={index}>{item.Heading2}</p>
                  </HeadingContainer>
                  <DetailContainer>
                    <p key={index}>{item.aboutFeatures}</p>
                  </DetailContainer>
                </FeatureContainer>
                <FounderContainer>
                  <HeadingContainer>
                    <p key={index}>{item.aboutOwnerHeading}</p>
                  </HeadingContainer>
                  <ImageAndDetailsOfFounder>
                    <FounderDetailsContainers>
                      <p key={index}>{item.AboutOwner}</p>
                    </FounderDetailsContainers>
                    <ImageContainer>
                      <img src={item.ownerImg} alt="Image Not Found" />
                    </ImageContainer>
                  </ImageAndDetailsOfFounder>
                  <SponsorContainer>
                    <HeadingContainer>
                      <p key={index}>{item.Heading3}</p>
                    </HeadingContainer>
                    <MySponsorImgSlider
                      data={item.SponserContent}
                      Innerslidersetting={Innerslidersetting}
                      index={index}
                    />
                  </SponsorContainer>
                </FounderContainer>
              </HistoryOfHospital>
            );
          })}
        </MainContainer>
      </div>
      <Footer />
    </AboutWebsiteContainer>
  );
}

const AboutWebsiteContainer = styled.div`
  position: relative;
  top: 60px;
`;

const MainContainer = styled.div`
  width: 95%;
  position: relative;
  left: 30px;
  top: 40px;
  text-align: center;
`;

const HistoryOfHospital = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  border-radius: 5px;
  background-color: white;
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-family: "Bree Serif", serif;
    font-size: 1.8rem;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
    background-color: white;
    color: #090b13;
    padding: 4px;
    margin-top: 30px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2%;
  border-radius: 5px;
  padding: 3px;

  p {
    text-align: center;
    color: #090b13;
    font-family: "Roboto", sans-serif;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
  }
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FirstContainer = styled.div`
  width: 50%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  background-color: white;
  color: #090b13;
  border-radius: 3px;
  margin: 2%;
  padding: 4px;
  background-color: rgb(240, 233, 223);
  li {
    text-align: left;
    color: #090b13;
    font-family: "Roboto", sans-serif;
    word-spacing: 0.7rem;
    line-height: 1.6rem;
    padding: 4px;
  }
`;

const SecondContainer = styled.div`
  width: 50%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  background-color: white;
  color: #090b13;
  padding: 4px;
  margin: 2%;
  background-color: rgb(240, 233, 223);
  border-radius: 4px;
  li {
    text-align: left;
    color: #090b13;
    font-family: "Roboto", sans-serif;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
    padding: 4px;
  }
`;

const FeatureContainer = styled.div``;

const FounderContainer = styled.div``;

// styled css for owner of the hospital

const ImageAndDetailsOfFounder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FounderDetailsContainers = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2%;
  border-radius: 5px;
  padding: 3px;
  width: 90%;
  p {
    text-align: center;
    color: #090b13;
    font-family: "Roboto", sans-serif;
    word-spacing: 0.5rem;
    line-height: 1.6rem;
    background-color: rgb(240, 233, 223);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
    color: #090b13;
    border-radius: 3px;
  }
`;

const ImageContainer = styled.div`
  width: 40%;
  margin-right: 1%;

  img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
      transform: scale(1.06);
      border-radius: 3px;
    }
  }
`;

// sponsor container

const SponsorContainer = styled.div``;
