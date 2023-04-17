import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InnerImgSlider from "../../innersmallslider/InnerImgSlider";
import Footer from "../Footer";

export default function TreatmentDetailsContainer() {
  const navigate = useNavigate();
  let details = [
    {
      Treatment: "Curative Treatment",
      TreamtentDetail:
        "Curative or therapeutic care refers in part to treatments and therapies provided to a patient with the goal of curing an illness or condition. The terms are also used for treatments that delay disease progression even when a cure is not possible.",
      // MoreTreatmentDetails:
      //   "Above mentioned available treatment are just some common curative tratment, to view more details about above mentioned available treatment (like details about the doctors for these available treatment ) and for some extra curative treatment click on view button  ",
      ExampleOfTreatmentAvailableHeading:
        "Example Of Curative Treamtent Available In Our Hospital",
      ExampleOfTreatmentAvailable: [
        {
          treatment: "Antibiotics for bacterial infections",
        },
        {
          treatment: "Chemotherapy or radiation therapy for cancer",
        },
        {
          treatment: "Cast for a broken bone",
        },
        {
          treatment: "Dialysis treatment for kidney failure",
        },
        {
          treatment: "Surgery for appendicitis",
        },
        {
          treatment: "Acupuncture for certain conditions",
        },
        {
          treatment: "Dietary programs for certain conditions",
        },
      ],
      data: [
        {
          img: "/ImagesForTreatmentPage/curative1.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/ImagesForTreatmentPage/curative2.webp",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/ImagesForTreatmentPage/curative3.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/ImagesForTreatmentPage/curative4.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
      ],
      ReviewPatientImg1: "/ImagesForTreatmentPage/Patient1.jpg",
      ReviewOfPatient1:
        " Lorotam cumque dolorum voluptates illum eaque tempore nisi. Dicta maiores deleniti repellat dolorum doloribus alias? Dignissimos facere excepturi sequi nisi, molestias et. Incidunt in quidem ut, vitae tenetur molestiae laboriosam corrupti necessitatibus dolore, neque quod deserunt excepturi nostrum dicta dignissimos cumque earum fuga voluptas corporis dolor? Minus atque fugiat, quos in quam laboriosam, ipsa possimus fugit ducimus quia, illo pariatur! Cumque distinctio totam expedita ab praesentium reprehenderit doloribus sunt iusto laboriosam maiores a deleniti rerum voluptatum, sint ex magni. Incidunt ab accusamus a quam, earum veniam ratione esse minus magni officia quod repellendus aspernatur laudantium, sit et asperiores enim vitae? Aliquid nostrum possimus suscipit officia perferendis, quam eaque eveniet, sapiente et harum nesciunt quae? Dicta similique id sequi veritatis debitis libero iste ut quas cumque ullam iusto necessitatibus doloremque harum, error beatae corporis hic. Voluptatem ipsam porro perferendis, modi veritatis eos quibusdam harum rem cupiditate voluptates, sapiente sed vitae illo necessitatibus est earum cumque neque eveniet suscipit voluptas ducimus placeat ut debitis. Cum pariatur impedit perferendis itaque voluptate amet magnam facere ad corrupti autem sed est, consequuntur quis asperiores labore consectetur maiores at voluptatibus eos ipsum vero. Tenetur.",

      ReviewPatientImg2: "/ImagesForTreatmentPage/Patient3.jpg",
      ReviewOfPatient2:
        " Lorem ipso totam cumque dolorum voluptates illum eaque tempore nisi. Dicta maiores deleniti repellat dolorum doloribus alias? Dignissimos facere excepturi sequi nisi, molestias et. Incidunt in quidem ut, vitae tenetur molestiae laboriosam corrupti necessitatibus dolore, neque quod deserunt excepturi nostrum dicta dignissimos cumque earum fuga voluptas corporis dolor? Minus atque fugiat, quos in quam laboriosam, ipsa possimus fugit ducimus quia, illo pariatur! Cumque distinctio totam expedita ab praesentium reprehenderit doloribus sunt iusto laboriosam maiores a deleniti rerum voluptatum, sint ex magni. Incidunt ab accusamus a quam, earum veniam ratione esse minus magni officia quod repellendus aspernatur laudantium, sit et asperiores enim vitae? Aliquid nostrum possimus suscipit officia perferendis, quam eaque eveniet, sapiente et harum nesciunt quae? Dicta similique id sequi veritatis debitis libero iste ut quas cumque ullam iusto necessitatibus doloremque harum, error beatae corporis hic. Voluptatem ipsam porro perferendis, modi veritatis eos quibusdam harum rem cupiditate voluptates, sapiente sed vitae illo necessitatibus est earum cumque neque eveniet suscipit voluptas ducimus placeat ut debitis. Cum pariatur impedit perferendis itaque voluptate amet magnam facere ad corrupti autem sed est, consequuntur quis asperiores labore consectetur maiores at voluptatibus eos ipsum vero. Tenetur.",

      ReviewPatientImg3: "/ImagesForTreatmentPage/Patient2.jpg",
      ReviewOfPatient3:
        " Lorem ipotam cumque dolorum voluptates illum eaque tempore nisi. Dicta maiores deleniti repellat dolorum doloribus alias? Dignissimos facere excepturi sequi nisi, molestias et. Incidunt in quidem ut, vitae tenetur molestiae laboriosam corrupti necessitatibus dolore, neque quod deserunt excepturi nostrum dicta dignissimos cumque earum fuga voluptas corporis dolor? Minus atque fugiat, quos in quam laboriosam, ipsa possimus fugit ducimus quia, illo pariatur! Cumque distinctio totam expedita ab praesentium reprehenderit doloribus sunt iusto laboriosam maiores a deleniti rerum voluptatum, sint ex magni. Incidunt ab accusamus a quam, earum veniam ratione esse minus magni officia quod repellendus aspernatur laudantium, sit et asperiores enim vitae? Aliquid nostrum possimus suscipit officia perferendis, quam eaque eveniet, sapiente et harum nesciunt quae? Dicta similique id sequi veritatis debitis libero iste ut quas cumque ullam iusto necessitatibus doloremque harum, error beatae corporis hic. Voluptatem ipsam porro perferendis, modi veritatis eos quibusdam harum rem cupiditate voluptates, sapiente sed vitae illo necessitatibus est earum cumque neque eveniet suscipit voluptas ducimus placeat ut debitis. Cum pariatur impedit perferendis itaque voluptate amet magnam facere ad corrupti autem sed est, consequuntur quis asperiores labore consectetur maiores at voluptatibus eos ipsum vero. Tenetur.",
    },

    // Treatment Type 2 information started from here
    {
      Treatment: "Palliative  Treatment",
      TreamtentDetail:
        "Palliative Treatment is specialized medical care for people living with a serious illness. This type of care is focused on providing relief from the symptoms and stress of the illness. The goal is to improve quality of life for both the patient and the family. Palliative Treatment is provided by a specially-trained team of doctors, nurses and other specialists who work together with a patient's other doctors to provide an extra layer of support. Palliative care is based on the needs of the patient, not on the patient's prognosis. It is appropriate at any age and at any stage in a serious illness, and it can be provided along with curative treatment.",
      // MoreTreatmentDetails:
      //   "Above mentioned available treatment are just some common Palliative tratment, to view more details about above mentioned available treatment (like details about the doctors for these available treatment ) and for some extra Palliative treatment click on view button  ",
      ExampleOfTreatmentAvailableHeading:
        "Example Of Palliative Treamtent Available In Our Hospital",
      ExampleOfTreatmentAvailable: [
        {
          treatment: "Amyotrophic lateral sclerosis (ALS)",
        },
        {
          treatment: "Alzheimer's disease",
        },
        {
          treatment: "Cancer",
        },
        {
          treatment: "Chronic obstructive pulmonary disease (COPD)",
        },
        {
          treatment: "Heart disease",
        },
        {
          treatment: "COVID-19",
        },
        {
          treatment: "HIV & AIDS",
        },
        {
          treatment: "Kidney disease",
        },
        {
          treatment: "	Liver disease",
        },
        {
          treatment: "	Lung disease.",
        },
      ],
      data: [
        {
          img: "/ImagesForTreatmentPage/Palliative1.webp",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/ImagesForTreatmentPage/Palliative2.webp",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/ImagesForTreatmentPage/Palliative3.webp",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/ImagesForTreatmentPage/Palliative4.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
      ],
      ReviewPatientImg1: "/ImagesForTreatmentPage/Patient4.jpg",
      ReviewOfPatient1:
        " Lorotam cumque dolorum voluptates illum eaque tempore nisi. Dicta maiores deleniti repellat dolorum doloribus alias? Dignissimos facere excepturi sequi nisi, molestias et. Incidunt in quidem ut, vitae tenetur molestiae laboriosam corrupti necessitatibus dolore, neque quod deserunt excepturi nostrum dicta dignissimos cumque earum fuga voluptas corporis dolor? Minus atque fugiat, quos in quam laboriosam, ipsa possimus fugit ducimus quia, illo pariatur! Cumque distinctio totam expedita ab praesentium reprehenderit doloribus sunt iusto laboriosam maiores a deleniti rerum voluptatum, sint ex magni. Incidunt ab accusamus a quam, earum veniam ratione esse minus magni officia quod repellendus aspernatur laudantium, sit et asperiores enim vitae? Aliquid nostrum possimus suscipit officia perferendis, quam eaque eveniet, sapiente et harum nesciunt quae? Dicta similique id sequi veritatis debitis libero iste ut quas cumque ullam iusto necessitatibus doloremque harum, error beatae corporis hic. Voluptatem ipsam porro perferendis, modi veritatis eos quibusdam harum rem cupiditate voluptates, sapiente sed vitae illo necessitatibus est earum cumque neque eveniet suscipit voluptas ducimus placeat ut debitis. Cum pariatur impedit perferendis itaque voluptate amet magnam facere ad corrupti autem sed est, consequuntur quis asperiores labore consectetur maiores at voluptatibus eos ipsum vero. Tenetur.",

      ReviewPatientImg2: "/ImagesForTreatmentPage/Patient6.jpg",
      ReviewOfPatient2:
        " Lorem ipso totam cumque dolorum voluptates illum eaque tempore nisi. Dicta maiores deleniti repellat dolorum doloribus alias? Dignissimos facere excepturi sequi nisi, molestias et. Incidunt in quidem ut, vitae tenetur molestiae laboriosam corrupti necessitatibus dolore, neque quod deserunt excepturi nostrum dicta dignissimos cumque earum fuga voluptas corporis dolor? Minus atque fugiat, quos in quam laboriosam, ipsa possimus fugit ducimus quia, illo pariatur! Cumque distinctio totam expedita ab praesentium reprehenderit doloribus sunt iusto laboriosam maiores a deleniti rerum voluptatum, sint ex magni. Incidunt ab accusamus a quam, earum veniam ratione esse minus magni officia quod repellendus aspernatur laudantium, sit et asperiores enim vitae? Aliquid nostrum possimus suscipit officia perferendis, quam eaque eveniet, sapiente et harum nesciunt quae? Dicta similique id sequi veritatis debitis libero iste ut quas cumque ullam iusto necessitatibus doloremque harum, error beatae corporis hic. Voluptatem ipsam porro perferendis, modi veritatis eos quibusdam harum rem cupiditate voluptates, sapiente sed vitae illo necessitatibus est earum cumque neque eveniet suscipit voluptas ducimus placeat ut debitis. Cum pariatur impedit perferendis itaque voluptate amet magnam facere ad corrupti autem sed est, consequuntur quis asperiores labore consectetur maiores at voluptatibus eos ipsum vero. Tenetur.",

      ReviewPatientImg3: "/ImagesForTreatmentPage/Patient5.jpg",
      ReviewOfPatient3:
        " Lorem ipotam cumque dolorum voluptates illum eaque tempore nisi. Dicta maiores deleniti repellat dolorum doloribus alias? Dignissimos facere excepturi sequi nisi, molestias et. Incidunt in quidem ut, vitae tenetur molestiae laboriosam corrupti necessitatibus dolore, neque quod deserunt excepturi nostrum dicta dignissimos cumque earum fuga voluptas corporis dolor? Minus atque fugiat, quos in quam laboriosam, ipsa possimus fugit ducimus quia, illo pariatur! Cumque distinctio totam expedita ab praesentium reprehenderit doloribus sunt iusto laboriosam maiores a deleniti rerum voluptatum, sint ex magni. Incidunt ab accusamus a quam, earum veniam ratione esse minus magni officia quod repellendus aspernatur laudantium, sit et asperiores enim vitae? Aliquid nostrum possimus suscipit officia perferendis, quam eaque eveniet, sapiente et harum nesciunt quae? Dicta similique id sequi veritatis debitis libero iste ut quas cumque ullam iusto necessitatibus doloremque harum, error beatae corporis hic. Voluptatem ipsam porro perferendis, modi veritatis eos quibusdam harum rem cupiditate voluptates, sapiente sed vitae illo necessitatibus est earum cumque neque eveniet suscipit voluptas ducimus placeat ut debitis. Cum pariatur impedit perferendis itaque voluptate amet magnam facere ad corrupti autem sed est, consequuntur quis asperiores labore consectetur maiores at voluptatibus eos ipsum vero. Tenetur.",
    },

    // Treatment Type 3 information started from here
    {
      Treatment: "Preventative  Treatment",
      TreamtentDetail:
        "Preventative  or therapeutic care refers in part to treatments and therapies provided to a patient with the goal of curing an illness or condition. The terms are also used for treatments that delay disease progression even when a cure is not possible.",
      // MoreTreatmentDetails:
      //   "Above mentioned available treatment are just some common curative tratment, to view more details about above mentioned available treatment (like details about the doctors for these available treatment ) and for some extra curative treatment click on view button  ",
      ExampleOfTreatmentAvailableHeading:
        "Example Of Preventative  Treamtent Available In Our Hospital",
      ExampleOfTreatmentAvailable: [
        {
          treatment: "Blood pressure tests",
        },
        {
          treatment: "Diabetes screening",
        },
        {
          treatment: "Cholesterol tests",
        },
        {
          treatment: "Routine vaccinations",
        },
        {
          treatment: "Cancer screenings",
        },
        {
          treatment: "STI screenings",
        },
        {
          treatment: "Well-child visits",
        },
        {
          treatment: "Mental health screenings",
        },
      ],
      data: [
        {
          img: "/ImagesForTreatmentPage/Preventative1.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/ImagesForTreatmentPage/Preventative2.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/ImagesForTreatmentPage/Preventative3.jpg",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
        {
          img: "/ImagesForTreatmentPage/Preventative4.webp",
          disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        },
      ],
      ReviewPatientImg1: "/ImagesForTreatmentPage/Patient7.jpg",
      ReviewOfPatient1:
        " Lorotam cumque dolorum voluptates illum eaque tempore nisi. Dicta maiores deleniti repellat dolorum doloribus alias? Dignissimos facere excepturi sequi nisi, molestias et. Incidunt in quidem ut, vitae tenetur molestiae laboriosam corrupti necessitatibus dolore, neque quod deserunt excepturi nostrum dicta dignissimos cumque earum fuga voluptas corporis dolor? Minus atque fugiat, quos in quam laboriosam, ipsa possimus fugit ducimus quia, illo pariatur! Cumque distinctio totam expedita ab praesentium reprehenderit doloribus sunt iusto laboriosam maiores a deleniti rerum voluptatum, sint ex magni. Incidunt ab accusamus a quam, earum veniam ratione esse minus magni officia quod repellendus aspernatur laudantium, sit et asperiores enim vitae? Aliquid nostrum possimus suscipit officia perferendis, quam eaque eveniet, sapiente et harum nesciunt quae? Dicta similique id sequi veritatis debitis libero iste ut quas cumque ullam iusto necessitatibus doloremque harum, error beatae corporis hic. Voluptatem ipsam porro perferendis, modi veritatis eos quibusdam harum rem cupiditate voluptates, sapiente sed vitae illo necessitatibus est earum cumque neque eveniet suscipit voluptas ducimus placeat ut debitis. Cum pariatur impedit perferendis itaque voluptate amet magnam facere ad corrupti autem sed est, consequuntur quis asperiores labore consectetur maiores at voluptatibus eos ipsum vero. Tenetur.",

      ReviewPatientImg2: "/ImagesForTreatmentPage/Patient8.jpg",
      ReviewOfPatient2:
        " Lorem ipso totam cumque dolorum voluptates illum eaque tempore nisi. Dicta maiores deleniti repellat dolorum doloribus alias? Dignissimos facere excepturi sequi nisi, molestias et. Incidunt in quidem ut, vitae tenetur molestiae laboriosam corrupti necessitatibus dolore, neque quod deserunt excepturi nostrum dicta dignissimos cumque earum fuga voluptas corporis dolor? Minus atque fugiat, quos in quam laboriosam, ipsa possimus fugit ducimus quia, illo pariatur! Cumque distinctio totam expedita ab praesentium reprehenderit doloribus sunt iusto laboriosam maiores a deleniti rerum voluptatum, sint ex magni. Incidunt ab accusamus a quam, earum veniam ratione esse minus magni officia quod repellendus aspernatur laudantium, sit et asperiores enim vitae? Aliquid nostrum possimus suscipit officia perferendis, quam eaque eveniet, sapiente et harum nesciunt quae? Dicta similique id sequi veritatis debitis libero iste ut quas cumque ullam iusto necessitatibus doloremque harum, error beatae corporis hic. Voluptatem ipsam porro perferendis, modi veritatis eos quibusdam harum rem cupiditate voluptates, sapiente sed vitae illo necessitatibus est earum cumque neque eveniet suscipit voluptas ducimus placeat ut debitis. Cum pariatur impedit perferendis itaque voluptate amet magnam facere ad corrupti autem sed est, consequuntur quis asperiores labore consectetur maiores at voluptatibus eos ipsum vero. Tenetur.",

      ReviewPatientImg3: "/ImagesForTreatmentPage/Patient9.jpg",
      ReviewOfPatient3:
        " Lorem ipotam cumque dolorum voluptates illum eaque tempore nisi. Dicta maiores deleniti repellat dolorum doloribus alias? Dignissimos facere excepturi sequi nisi, molestias et. Incidunt in quidem ut, vitae tenetur molestiae laboriosam corrupti necessitatibus dolore, neque quod deserunt excepturi nostrum dicta dignissimos cumque earum fuga voluptas corporis dolor? Minus atque fugiat, quos in quam laboriosam, ipsa possimus fugit ducimus quia, illo pariatur! Cumque distinctio totam expedita ab praesentium reprehenderit doloribus sunt iusto laboriosam maiores a deleniti rerum voluptatum, sint ex magni. Incidunt ab accusamus a quam, earum veniam ratione esse minus magni officia quod repellendus aspernatur laudantium, sit et asperiores enim vitae? Aliquid nostrum possimus suscipit officia perferendis, quam eaque eveniet, sapiente et harum nesciunt quae? Dicta similique id sequi veritatis debitis libero iste ut quas cumque ullam iusto necessitatibus doloremque harum, error beatae corporis hic. Voluptatem ipsam porro perferendis, modi veritatis eos quibusdam harum rem cupiditate voluptates, sapiente sed vitae illo necessitatibus est earum cumque neque eveniet suscipit voluptas ducimus placeat ut debitis. Cum pariatur impedit perferendis itaque voluptate amet magnam facere ad corrupti autem sed est, consequuntur quis asperiores labore consectetur maiores at voluptatibus eos ipsum vero. Tenetur.",
    },
  ];

  const SeeMoreCurativeTreatment = () => {
    navigate("/CurativeMoreDetails");
  };
  const SeeMorePalliativeTreatment = () => {
    navigate("/PalliativeMoreDetails");
  };
  const SeeMorePreventativeTreatment = () => {
    navigate("/PreventativeMoreDetails");
  };

  return (
    <>
      <MainContainer>
        <TreatmentHeadingContainers>
          <p>Types Of Treatment</p>
        </TreatmentHeadingContainers>
        {details.map((item, index) => {
          return (
            <TreatmentDetails>
              <TypesOfTreatment>
                <p key={index}>{item.Treatment}</p>
              </TypesOfTreatment>
              <TreatmentInfo>
                <TreatmentInfoContainer>
                  <TreatmentDetailWithImageSlider>
                    <TreatmentInformation>
                      <p key={index}>{item.TreamtentDetail}</p>
                    </TreatmentInformation>
                    <TreatmentSlider>
                      <InnerImgSlider data={item.data} index={index} />
                    </TreatmentSlider>
                  </TreatmentDetailWithImageSlider>
                  <ExampleOfTreatment>
                    <p key={index}>{item.ExampleOfTreatmentAvailableHeading}</p>
                    <TreatmentContainer>
                      {item.ExampleOfTreatmentAvailable.map((x, i) => {
                        return <li>{x.treatment}</li>;
                      })}
                    </TreatmentContainer>
                  </ExampleOfTreatment>
                </TreatmentInfoContainer>

                <TypesOfTreatment>
                  <p>Reviews Of Patients Used This Therapy In Our Hospital</p>
                </TypesOfTreatment>

                <PatientReviewContainer>
                  <ImageContainer>
                    <img src={item.ReviewPatientImg1} alt="MyHospitalWebsite" />
                  </ImageContainer>
                  <ReviewContainer>
                    <p>{item.ReviewOfPatient1}</p>
                  </ReviewContainer>
                </PatientReviewContainer>

                <PatientReviewContainer>
                  <ImageContainer>
                    <img src={item.ReviewPatientImg2} alt="MyHospitalWebsite" />
                  </ImageContainer>
                  <ReviewContainer>
                    <p>{item.ReviewOfPatient2}</p>
                  </ReviewContainer>
                </PatientReviewContainer>

                <PatientReviewContainer>
                  <ImageContainer>
                    <img src={item.ReviewPatientImg3} alt="MyHospitalWebsite" />
                  </ImageContainer>
                  <ReviewContainer>
                    <p>{item.ReviewOfPatient3}</p>
                  </ReviewContainer>
                </PatientReviewContainer>
              </TreatmentInfo>
            </TreatmentDetails>
          );
        })}
      </MainContainer>
      <MoreDetails>
        <Content>
          <p>
            To View More Information About The Above Treatments Check Below
            Buttons
          </p>
        </Content>
        <ButtonForView>
          <ButtonContainerDiv>
            <ButtonForviewDetails onClick={SeeMoreCurativeTreatment}>
              More Details Of Curative Treamtent
            </ButtonForviewDetails>
          </ButtonContainerDiv>
          <ButtonContainerDiv onClick={SeeMorePalliativeTreatment}>
            <ButtonForviewDetails>
              More Details Of Palliative Treamtent
            </ButtonForviewDetails>
          </ButtonContainerDiv>
          <ButtonContainerDiv>
            <ButtonForviewDetails onClick={SeeMorePreventativeTreatment}>
              More Details Of Preventative Treamtent
            </ButtonForviewDetails>
          </ButtonContainerDiv>
        </ButtonForView>
      </MoreDetails>
      <Footer />
    </>
  );
}

const MainContainer = styled.div`
  width: 90%;
  position: relative;
  left: 80px;
  top: 40px;
  text-align: center;
  z-index: -1;
`;

const TreatmentHeadingContainers = styled.div`
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
    border-radius: 5px;
  }
`;

const TreatmentDetails = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  border-radius: 5px;
  background-color: white;
  margin-top: 4%;
`;

// container for showing the meaning of the type of treatment
const TreatmentInfo = styled.div`
  width: 100%;
`;

const TypesOfTreatment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2%;

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
  }
`;

const TreatmentInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TreatmentDetailWithImageSlider = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

const TreatmentInformation = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
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

const TreatmentSlider = styled.div`
  width: 100%;
`;

const ExampleOfTreatment = styled.div`
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

const TreatmentContainer = styled.div`
  padding: 4px;
  margin: 4px;

  li {
    text-align: left;
  }
`;

// container for taking the review of the patients

const ReviewContainer = styled.div`
  width: 70%;
  margin-left: 5%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  border-radius: 5px;
  margin-bottom: 1%;
  p {
    text-align: center;
    color: #090b13;
    font-family: "Roboto", sans-serif;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
    padding: 8px;
  }
`;

// patient review container

const PatientReviewContainer = styled.div`
  display: flex;
  margin-top: 2%;
  align-items: center;
  justify-content: center;
`;

// review patients images container
const ImageContainer = styled.div`
  width: 250px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    padding: 4px;
  }
`;

// container for button for view more details

const MoreDetails = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  border-radius: 5px;
  background-color: white;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 80px;
  top: 40px;
  width: 90%;
`;

const Content = styled.div`
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
  border-radius: 5px;
  margin: 13px;

  p {
    text-align: center;
    color: #090b13;
    font-family: "Roboto", sans-serif;
    word-spacing: 0.5rem;
    line-height: 1.4rem;
    padding: 8px;
    font-size: 1.4rem;
  }
`;

const ButtonForView = styled.div`
  margin-top: 1%;
  display: flex;
`;

const ButtonContainerDiv = styled.div`
  text-align: center;
  margin-top: 3%;
`;

const ButtonForviewDetails = styled.button`
  color: #090b13;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  padding: 3px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  width: 90%;
  transition: all 0.3s ease-in-out;
  border: 2px solid #090b13;

  &:hover {
    transform: scale(1.06);
    background-color: #090b13;
    color: white;
  }
`;
