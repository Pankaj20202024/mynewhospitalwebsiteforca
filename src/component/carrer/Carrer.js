import React from "react";
import styled from "styled-components";
import ImgSlider from "../../mainslider/ImgSlider";
import MyCarrerInnerSlider from "./MyCarrerInnerSlider";
import Footer from "../Footer";

export default function Carrer() {
  let slidersetting = {
    slidetoshow: 3,
  };
  let data = [
    {
      img: "/CarrerImages/StudentsCarrerImg1.avif",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/CarrerImages/StudentsCarrerImg2.avif",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/CarrerImages/StudentsCarrerImg3.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/CarrerImages/StudentsCarrerImg4.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/CarrerImages/StudentsCarrerImg5.jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
  ];

  const ShowRegisterContainer1 = () => {
    alert("this is for showRegistercontainer1");
  };
  const ShowRegisterContainer2 = () => {
    alert("this is for showRegistercontainer2");
  };
  const ShowRegisterContainer3 = () => {
    alert("this is for showRegistercontainer3");
  };
  const ShowRegisterContainer4 = () => {
    alert("this is for showRegistercontainer4");
  };
  const ShowRegisterContainer5 = () => {
    alert("this is for showRegistercontainer5");
  };

  const ShowViewDetailsContaine1 = () => {
    alert("this is for showdetailscontainer1");
  };
  const ShowViewDetailsContaine2 = () => {
    alert("this is for showdetailscontainer2");
  };
  const ShowViewDetailsContaine3 = () => {
    alert("this is for showdetailscontainer3");
  };
  const ShowViewDetailsContaine4 = () => {
    alert("this is for showdetailscontainer4");
  };
  const ShowViewDetailsContaine5 = () => {
    alert("this is for showdetailscontainer5");
  };

  let InternshipData = [
    {
      internshipName: "Lorem ipsum dolor sit amet.",
      Type: "One Year InterShip",
      Stipend: "300000",
      jobDescription: "Front End WebDeveloper",
      ShowRegisterContainer: ShowRegisterContainer1,
      ShowViewDetailsContainer: ShowViewDetailsContaine1,
    },
    {
      internshipName: "Lorem ipsum dolor sit amet.",
      Type: "One Year InterShip",
      Stipend: "300000",
      jobDescription: "Front End WebDeveloper",
      ShowRegisterContainer: ShowRegisterContainer2,
      ShowViewDetailsContainer: ShowViewDetailsContaine2,
    },
    {
      internshipName: "Lorem ipsum dolor sit amet.",
      Type: "One Year InterShip",
      Stipend: "300000",
      jobDescription: "Front End WebDeveloper",
      ShowRegisterContainer: ShowRegisterContainer3,
      ShowViewDetailsContainer: ShowViewDetailsContaine3,
    },
    {
      internshipName: "Lorem ipsum dolor sit amet.",
      Type: "One Year InterShip",
      Stipend: "300000",
      jobDescription: "Front End WebDeveloper",
      ShowRegisterContainer: ShowRegisterContainer4,
      ShowViewDetailsContainer: ShowViewDetailsContaine4,
    },
    {
      internshipName: "Lorem ipsum dolor sit amet.",
      Type: "One Year InterShip",
      Stipend: "300000",
      jobDescription: "Front End WebDeveloper",
      ShowRegisterContainer: ShowRegisterContainer5,
      ShowViewDetailsContainer: ShowViewDetailsContaine5,
    },
  ];

  let Content = [
    {
      placedStudent: [
        {
          img: "/CarrerImages/Student1.jpg",
        },
        {
          img: "/CarrerImages/Student2.jpg",
        },
        {
          img: "/CarrerImages/Student3.jpg",
        },
        {
          img: "/CarrerImages/Student4.jpg",
        },
        {
          img: "/CarrerImages/Student5.jpg",
        },
        {
          img: "/CarrerImages/Student6.webp",
        },
      ],
    },
  ];

  return (
    <>
      <MainContainer>
        <ImgSlider data={data} slidersetting={slidersetting} />
        <CarrerMainContainer>
          <CarrerSupportOfMedicanaContainer>
            <p>How Medicana Supports Carrer Of Interns</p>
          </CarrerSupportOfMedicanaContainer>
          <DetailsOfCarrerSupportOfMedicanaContainer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              nobis ullam minus ex numquam voluptatum maxime doloribus cum.
              Assumenda id mollitia et facere. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Porro numquam aut eos nisi, quasi
              accusantium nostrum consequuntur. Placeat nam qui dolorem
              voluptatum laboriosam totam minus provident, dolorum deserunt
              minima. Magni, unde officiis, deleniti odio, dicta rerum alias
              dolorem quia explicabo voluptatem tempore. Rerum, facere suscipit!
            </p>
          </DetailsOfCarrerSupportOfMedicanaContainer>

          <NewInterShipOfferContainer>
            <CarrerSupportOfMedicanaContainer>
              <p>New Internship For Interns</p>
            </CarrerSupportOfMedicanaContainer>
            <NewInternShipContainer>
              {InternshipData.map((intern, index) => {
                return (
                  <div key={index} className="InterShipsDiv">
                    <InterShipDetails key={index}>
                      <h2 key={index}>
                        <b key={index}>{intern.internshipName}</b>
                      </h2>
                      <p key={index}>
                        <b>Types Of InterShip : </b>
                        {intern.Type}
                      </p>
                      <p key={index}>
                        <b>Job Description : </b> {intern.jobDescription}
                      </p>
                      <p key={index}>
                        <b>Stipend : </b> {intern.Stipend}
                      </p>
                      <ButtonContainer>
                        <button
                          onClick={intern.ShowRegisterContainer}
                          key={index}
                        >
                          Register Now
                        </button>
                        <button
                          onClick={intern.ShowViewDetailsContainer}
                          key={index}
                        >
                          View Details
                        </button>
                      </ButtonContainer>
                    </InterShipDetails>
                  </div>
                );
              })}
            </NewInternShipContainer>
            <CarrerSupportOfMedicanaContainer>
              <p>Students Who Recentely Got Parmanent Job</p>
            </CarrerSupportOfMedicanaContainer>
            <InnerStudentCotainer>
              {Content.map((content, i) => {
                return (
                  <MyCarrerInnerSlider data={content.placedStudent} index={i} />
                );
              })}
            </InnerStudentCotainer>
          </NewInterShipOfferContainer>
        </CarrerMainContainer>
        <Footer />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  position: relative;
  top: 60px;
`;

const CarrerMainContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  border-radius: 5px;
  background-color: white;
  width: 97%;
  position: relative;
  left: 20px;
  top: 45px;
`;

const CarrerSupportOfMedicanaContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2%;
  position: relative;
  top: 20px;

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

const DetailsOfCarrerSupportOfMedicanaContainer = styled.div`
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

const NewInterShipOfferContainer = styled.div``;

const NewInternShipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  .InterShipsDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4px;
    margin: 1%;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.06);
    }
  }
`;

const InterShipDetails = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.4) 0px 8px 16px;
  background-color: rgb(255, 255, 255);
  color: #090b13;
  border-radius: 4px;

  h2 {
    text-align: center;
    color: #090b13;
    font-family: "Roboto", sans-serif;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
    box-sizing: border-box;
    margin: 10px;
    font-size: 1.4rem;
  }
  p {
    b {
      font-size: 1.1rem;
      color: #090b13;
    }
    text-align: center;
    color: #090b13;
    font-family: "Roboto", sans-serif;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
    box-sizing: border-box;
    margin: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  button {
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    padding: 3px;
    margin: 8px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 2px solid #090b13;
    background-color: #090b13;
    color: white;
    &:hover {
      transform: scale(1.06);
    }
  }
`;

const InnerStudentCotainer = styled.div`
  padding: 4px;
  margin: 20px;
`;
