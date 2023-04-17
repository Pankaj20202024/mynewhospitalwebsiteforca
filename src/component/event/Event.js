import React from "react";
import styled from "styled-components";
import ImgSlider from "../../mainslider/ImgSlider";
import { useState } from "react";
import Footer from "../Footer";

export default function Event() {
  // useState variables for setting the counter

  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  const [count3, setcount3] = useState(0);
  const [count4, setcount4] = useState(0);
  const [count5, setcount5] = useState(0);

  // useState variable for enabling and disabling the like and dislike button

  const [disableIncreamentbutton1, setdisableIncreamentbutton1] =
    useState(false);
  const [disableDecreamentbutton1, setdisableDecreamentbutton1] =
    useState(false);
  const [disableIncreamentbutton2, setdisableIncreamentbutton2] =
    useState(false);
  const [disableDecreamentbutton2, setdisableDecreamentbutton2] =
    useState(false);
  const [disableIncreamentbutton3, setdisableIncreamentbutton3] =
    useState(false);
  const [disableDecreamentbutton3, setdisableDecreamentbutton3] =
    useState(false);
  const [disableIncreamentbutton4, setdisableIncreamentbutton4] =
    useState(false);
  const [disableDecreamentbutton4, setdisableDecreamentbutton4] =
    useState(false);
  const [disableIncreamentbutton5, setdisableIncreamentbutton5] =
    useState(false);
  const [disableDecreamentbutton5, setdisableDecreamentbutton5] =
    useState(false);

  // useState variable for Switching between the colored and uncolored images of the like and dislike button

  const [IncrementLikeImg1, setIncrementLikeImg1] = useState(
    "/EventImages/likeunColored.png"
  );
  const [IncrementLikeImg2, setIncrementLikeImg2] = useState(
    "/EventImages/likeunColored.png"
  );
  const [IncrementLikeImg3, setIncrementLikeImg3] = useState(
    "/EventImages/likeunColored.png"
  );
  const [IncrementLikeImg4, setIncrementLikeImg4] = useState(
    "/EventImages/likeunColored.png"
  );
  const [IncrementLikeImg5, setIncrementLikeImg5] = useState(
    "/EventImages/likeunColored.png"
  );

  const [DecrementUnlikeImg1, setDecrementUnlikeImg1] = useState(
    "/EventImages/dislikeUncolored.png"
  );
  const [DecrementUnlikeImg2, setDecrementUnlikeImg2] = useState(
    "/EventImages/dislikeUncolored.png"
  );
  const [DecrementUnlikeImg3, setDecrementUnlikeImg3] = useState(
    "/EventImages/dislikeUncolored.png"
  );
  const [DecrementUnlikeImg4, setDecrementUnlikeImg4] = useState(
    "/EventImages/dislikeUncolored.png"
  );
  const [DecrementUnlikeImg5, setDecrementUnlikeImg5] = useState(
    "/EventImages/dislikeUncolored.png"
  );

  let slidersetting = {
    slidetoshow: 3,
  };
  let data = [
    {
      img: "/Images/bacgroundImg(1).jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/Images/bacgroundImg(2).jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/Images/bacgroundImg(3).jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/Images/bacgroundImg(4).jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "/Images/bacgroundImg(5).jpg",
      discription: "Description",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
  ];

  const showDetails = () => {
    alert("Thank For Using Our Service ");
  };

  const IncreaseCount1 = () => {
    setcount1(count1 + 1);
    setdisableIncreamentbutton1(true);
    setdisableDecreamentbutton1(false);
    setIncrementLikeImg1("/EventImages/likeColor.png");
    setDecrementUnlikeImg1("/EventImages/dislikeUncolored.png");
  };

  const DecreaseCount1 = () => {
    if (count1 === 0) {
      setdisableDecreamentbutton1(true);
    } else {
      setcount1(count1 - 1);
      setdisableIncreamentbutton1(false);
      setDecrementUnlikeImg1("/EventImages/dislikeColored.png");
      setIncrementLikeImg1("/EventImages/likeunColored.png");
    }
  };

  const IncreaseCount2 = () => {
    setcount2(count2 + 1);
    setdisableIncreamentbutton2(true);
    setdisableDecreamentbutton2(false);
    setIncrementLikeImg2("/EventImages/likeColor.png");
    setDecrementUnlikeImg2("/EventImages/dislikeUncolored.png");
  };

  const DecreaseCount2 = () => {
    if (count2 === 0) {
      setdisableDecreamentbutton2(true);
    } else {
      setcount2(count2 - 1);
      setdisableIncreamentbutton2(false);
      setDecrementUnlikeImg2("/EventImages/dislikeColored.png");
      setIncrementLikeImg2("/EventImages/likeunColored.png");
    }
  };

  const IncreaseCount3 = () => {
    setcount3(count3 + 1);
    setdisableDecreamentbutton3(false);
    setdisableIncreamentbutton3(true);
    setIncrementLikeImg3("/EventImages/likeColor.png");
    setDecrementUnlikeImg3("/EventImages/dislikeUncolored.png");
  };

  const DecreaseCount3 = () => {
    if (count3 === 0) {
      setdisableDecreamentbutton3(true);
    } else {
      setcount3(count3 - 1);
      setdisableIncreamentbutton3(false);
      setDecrementUnlikeImg3("/EventImages/dislikeColored.png");
      setIncrementLikeImg3("/EventImages/likeunColored.png");
    }
  };

  const IncreaseCount4 = () => {
    setcount4(count4 + 1);
    setdisableIncreamentbutton4(true);
    setdisableDecreamentbutton4(false);
    setIncrementLikeImg4("/EventImages/likeColor.png");
    setDecrementUnlikeImg4("/EventImages/dislikeUncolored.png");
  };

  const DecreaseCount4 = () => {
    if (count4 === 0) {
      setdisableDecreamentbutton4(true);
    } else {
      setcount4(count4 - 1);
      setdisableIncreamentbutton4(false);
      setDecrementUnlikeImg4("/EventImages/dislikeColored.png");
      setIncrementLikeImg4("/EventImages/likeunColored.png");
    }
  };

  const IncreaseCount5 = () => {
    setcount5(count5 + 1);
    setdisableDecreamentbutton5(false);
    setdisableIncreamentbutton5(true);
    setIncrementLikeImg5("/EventImages/likeColor.png");
    setDecrementUnlikeImg5("/EventImages/dislikeUncolored.png");
  };

  const DecreaseCount5 = () => {
    if (count5 === 0) {
      setdisableDecreamentbutton5(true);
    } else {
      setcount5(count5 - 1);
      setdisableIncreamentbutton5(false);
      setDecrementUnlikeImg5("/EventImages/dislikeColored.png");
      setIncrementLikeImg5("/EventImages/likeunColored.png");
    }
  };

  // old events details
  let details = [
    {
      EventHeading: "Lorem, ipsum dolor.",
      EventInformation:
        "Lorem ipsum dolor,  aspernatur blanditiis quibusdam enim ratione deserunt sint magni totam, eveniet, deleniti esse veniam voluptatem quaerat dicta eos est aliquam!",
      IncreaseCountfunciton: IncreaseCount1,
      DecreaseCountfunction: DecreaseCount1,
      count: count1,
      disableIncreamentbutton: disableIncreamentbutton1,
      disableDecreamentbutton: disableDecreamentbutton1,
      IncrementButtonImg: IncrementLikeImg1,
      DecrementButtonImg: DecrementUnlikeImg1,
    },
    {
      EventHeading: "Lorem, ipsum dolor.",
      EventInformation:
        "Lorem ipsum dolor, sit amet conm fugit aspernatur blanditiis quibusdam enim ratione deserunt sint magni totam, eveniet, deleniti esse veniam voluptatem quaerat dicta eos est aliquam!",
      IncreaseCountfunciton: IncreaseCount2,
      DecreaseCountfunction: DecreaseCount2,
      count: count2,
      disableIncreamentbutton: disableIncreamentbutton2,
      disableDecreamentbutton: disableDecreamentbutton2,
      IncrementButtonImg: IncrementLikeImg2,
      DecrementButtonImg: DecrementUnlikeImg2,
    },
    {
      EventHeading: "Lorem, ipsum dolor.",
      EventInformation: "Lorem ipsum dolor, sit amet consectetur adipisiiquam!",
      IncreaseCountfunciton: IncreaseCount3,
      DecreaseCountfunction: DecreaseCount3,
      count: count3,
      disableIncreamentbutton: disableIncreamentbutton3,
      disableDecreamentbutton: disableDecreamentbutton3,
      IncrementButtonImg: IncrementLikeImg3,
      DecrementButtonImg: DecrementUnlikeImg3,
    },
    {
      EventHeading: "Lorem, ipsum dolor.",
      EventInformation: "Lorem ipsum dolor, sit amet consectetur adipisiiquam!",
      IncreaseCountfunciton: IncreaseCount4,
      DecreaseCountfunction: DecreaseCount4,
      count: count4,
      disableIncreamentbutton: disableIncreamentbutton4,
      disableDecreamentbutton: disableDecreamentbutton4,
      IncrementButtonImg: IncrementLikeImg4,
      DecrementButtonImg: DecrementUnlikeImg4,
    },
    {
      EventHeading: "Lorem, ipsum dolor.",
      EventInformation: "Lorem ipsum dolor, sit amet consectetur adipisiiquam!",
      IncreaseCountfunciton: IncreaseCount5,
      DecreaseCountfunction: DecreaseCount5,
      count: count5,
      disableIncreamentbutton: disableIncreamentbutton5,
      disableDecreamentbutton: disableDecreamentbutton5,
      IncrementButtonImg: IncrementLikeImg5,
      DecrementButtonImg: DecrementUnlikeImg5,
    },
  ];

  // upcomming details array
  let upcommingdetails = [
    {
      EventHeading: "Lorem, ipsum dolor.",
      EventInformation:
        "Lorem ipsum dolor,  aspernatur blanditiis quibusdam enim ratione deserunt sint magni totam, eveniet, deleniti esse veniam voluptatem quaerat dicta eos est aliquam!",
      IncreaseCountfunciton: IncreaseCount1,
      DecreaseCountfunction: DecreaseCount1,
      count: count1,
      disableIncreamentbutton: disableIncreamentbutton1,
      disableDecreamentbutton: disableDecreamentbutton1,
      IncrementButtonImg: IncrementLikeImg1,
      DecrementButtonImg: DecrementUnlikeImg1,
    },
    {
      EventHeading: "Lorem, ipsum dolor.",
      EventInformation:
        "Lorem ipsum dolor, sit amet conm fugit aspernatur blanditiis quibusdam enim ratione deserunt sint magni totam, eveniet, deleniti esse veniam voluptatem quaerat dicta eos est aliquam!",
      IncreaseCountfunciton: IncreaseCount2,
      DecreaseCountfunction: DecreaseCount2,
      count: count2,
      disableIncreamentbutton: disableIncreamentbutton2,
      disableDecreamentbutton: disableDecreamentbutton2,
      IncrementButtonImg: IncrementLikeImg2,
      DecrementButtonImg: DecrementUnlikeImg2,
    },
    {
      EventHeading: "Lorem, ipsum dolor.",
      EventInformation: "Lorem ipsum dolor, sit amet consectetur adipisiiquam!",
      IncreaseCountfunciton: IncreaseCount3,
      DecreaseCountfunction: DecreaseCount3,
      count: count3,
      disableIncreamentbutton: disableIncreamentbutton3,
      disableDecreamentbutton: disableDecreamentbutton3,
      IncrementButtonImg: IncrementLikeImg3,
      DecrementButtonImg: DecrementUnlikeImg3,
    },
    {
      EventHeading: "Lorem, ipsum dolor.",
      EventInformation: "Lorem ipsum dolor, sit amet consectetur adipisiiquam!",
      IncreaseCountfunciton: IncreaseCount4,
      DecreaseCountfunction: DecreaseCount4,
      count: count4,
      disableIncreamentbutton: disableIncreamentbutton4,
      disableDecreamentbutton: disableDecreamentbutton4,
      IncrementButtonImg: IncrementLikeImg4,
      DecrementButtonImg: DecrementUnlikeImg4,
    },
    {
      EventHeading: "Lorem, ipsum dolor.",
      EventInformation: "Lorem ipsum dolor, sit amet consectetur adipisiiquam!",
      IncreaseCountfunciton: IncreaseCount5,
      DecreaseCountfunction: DecreaseCount5,
      count: count5,
      disableIncreamentbutton: disableIncreamentbutton5,
      disableDecreamentbutton: disableDecreamentbutton5,
      IncrementButtonImg: IncrementLikeImg5,
      DecrementButtonImg: DecrementUnlikeImg5,
    },
  ];

  return (
    <div>
      <ImgDivContainer>
        <ImgSlider data={data} slidersetting={slidersetting} />
        <EventTypeContainer>
          <p>Old Events</p>
        </EventTypeContainer>
        <EventContainer>
          {details.map((item, index) => {
            return (
              <EventsContainers>
                {console.log(item.IncrementButtonImg)}
                {console.log(item.DecrementButtonImg)}

                <EventInformationContainer>
                  <h2 key={index}>{item.EventHeading}</h2>
                  <p key={index}>{item.EventInformation}</p>
                </EventInformationContainer>

                <LikeDisLikeButtonContainer>
                  <LikeDislikeContainer>
                    <LikeButton
                      onClick={item.IncreaseCountfunciton}
                      key={index}
                      disabled={item.disableIncreamentbutton}
                    >
                      <img
                        src={item.IncrementButtonImg}
                        alt="MyHospitalWebApp"
                        key={index}
                      />
                    </LikeButton>
                    <DislikeButton
                      onClick={item.DecreaseCountfunction}
                      key={index}
                      disabled={item.disableDecreamentbutton}
                    >
                      <img
                        key={index}
                        src={item.DecrementButtonImg}
                        alt="MyHospitalWebApp"
                      />
                    </DislikeButton>
                    <p>{item.count}</p>
                  </LikeDislikeContainer>

                  <ViewDetialsButton
                    onClick={showDetails}
                    key={index}
                    className="ViewDetailsButton"
                  >
                    View Details
                  </ViewDetialsButton>
                </LikeDisLikeButtonContainer>
              </EventsContainers>
            );
          })}
        </EventContainer>

        {/* upcomming events containers and code  */}

        <EventTypeContainer>
          <p>Upcoming Events</p>
        </EventTypeContainer>
        <EventContainer>
          {upcommingdetails.map((item, index) => {
            return (
              <EventsContainers>
                {console.log(item.IncrementButtonImg)}
                {console.log(item.DecrementButtonImg)}

                <EventInformationContainer>
                  <h2 key={index}>{item.EventHeading}</h2>
                  <p key={index}>{item.EventInformation}</p>
                </EventInformationContainer>

                <LikeDisLikeButtonContainer>
                  <LikeDislikeContainer>
                    <LikeButton
                      onClick={item.IncreaseCountfunciton}
                      key={index}
                      disabled={item.disableIncreamentbutton}
                    >
                      <img
                        src={item.IncrementButtonImg}
                        alt="MyHospitalWebApp"
                        key={index}
                      />
                    </LikeButton>
                    <DislikeButton
                      onClick={item.DecreaseCountfunction}
                      key={index}
                      disabled={item.disableDecreamentbutton}
                    >
                      <img
                        key={index}
                        src={item.DecrementButtonImg}
                        alt="MyHospitalWebApp"
                      />
                    </DislikeButton>
                    <p>{item.count}</p>
                  </LikeDislikeContainer>

                  <ViewDetialsButton
                    onClick={showDetails}
                    key={index}
                    className="ViewDetailsButton"
                  >
                     Register
                  </ViewDetialsButton>
                </LikeDisLikeButtonContainer>
              </EventsContainers>
            );
          })}
        </EventContainer>
        <Footer />
      </ImgDivContainer>
    </div>
  );
}

const ImgDivContainer = styled.div`
  position: relative;
  top: 60px;
`;

const EventTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 100px;
  margin-bottom: 4%;

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

const EventContainer = styled.div`
  position: relative;
  top: 80px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const EventsContainers = styled.div`
  margin: 1%;
  border-radius: 50%;
  width: 392px;
  height: 392px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  background-color: rgb(255, 255, 255);
  color: #090b13;
  

  &:hover {
    transform: scale(1.06);
  }
`;

// Event Information containers css

const EventInformationContainer = styled.div`
  h2 {
    text-align: center;
    font-family: "Bree Serif", serif;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 10px;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
    margin: 10px;
  }
  p {
    text-align: center;
    font-family: "Bree Serif", serif;
    font-size: 1.1rem;
    padding: 10px;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
    margin: 10px;
  }
`;

// buttons css

const LikeDisLikeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 500px 500px;
`;

const LikeDislikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-family: "Bree Serif", serif;
    font-size: 1.3rem;
    padding: 10px;
    width: 10%;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
    margin: 10px;
    border-radius: 50%;
    background-color: #090b13;
    color: white;
  }
`;

const ViewDetialsButton = styled.button`
  color: #090b13;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  padding: 3px 18px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 2px solid #090b13;

  &:hover {
    transform: scale(1.06);
    background-color: #090b13;
    color: white;
  }
`;

const LikeButton = styled.button`
  width: 10%;
  margin: 10px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const DislikeButton = styled.button`
  width: 10%;
  margin: 10px;
  img {
    width: 100%;
    height: 100%;
  }
`;
