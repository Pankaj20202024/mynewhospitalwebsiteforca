import React from "react";
import styled from "styled-components";

export default function DonationForm() {
  const scroll_right = () => {
    var rightsidescoll = document.querySelector("#scroll_left_and_right_side");
    rightsidescoll.scrollBy(1024, 0);
  };

  const scroll_left = () => {
    var leftsidescoll = document.querySelector("#scroll_left_and_right_side");
    leftsidescoll.scrollBy(-1024, 0);
  };

  // Month data array container

  const MonthData = [
    { value: "none", month: "Month" },
    { value: "January", month: "January" },
    { value: "February", month: "February" },
    { value: "March", month: "March" },
    { value: "April", month: "April" },
    { value: "May", month: "May" },
    { value: "June", month: "June" },
    { value: "July", month: "July" },
    { value: "August", month: "August" },
    { value: "September", month: "September" },
    { value: "October", month: "October" },
    { value: "November", month: "November" },
    { value: "December", month: "December" },
  ];

  // Day data array container

  const DayData = [
    { value: "none", day: "Day" },
    { value: "1", day: 1 },
    { value: "2", day: 2 },
    { value: "3", day: 3 },
    { value: "4", day: 4 },
    { value: "5", day: 5 },
    { value: "6", day: 6 },
    { value: "7", day: 7 },
    { value: "8", day: 8 },
    { value: "9", day: 9 },
    { value: "10", day: 10 },
    { value: "11", day: 11 },
    { value: "12", day: 12 },
    { value: "13", day: 13 },
    { value: "14", day: 14 },
    { value: "15", day: 15 },
    { value: "16", day: 16 },
    { value: "17", day: 17 },
    { value: "18", day: 18 },
    { value: "19", day: 19 },
    { value: "20", day: 20 },
    { value: "21", day: 21 },
    { value: "22", day: 22 },
    { value: "23", day: 23 },
    { value: "24", day: 24 },
    { value: "25", day: 25 },
    { value: "26", day: 26 },
    { value: "27", day: 27 },
    { value: "28", day: 28 },
    { value: "29", day: 29 },
    { value: "30", day: 30 },
    { value: "31", day: 31 },
  ];

  // Year data array container

  const YearData = [
    { value: "none", Year: "Year" },
    { value: "2023", Year: 2023 },
    { value: "2022", Year: 2022 },
    { value: "2021", Year: 2021 },
    { value: "2020", Year: 2020 },
    { value: "2019", Year: 2019 },
    { value: "2018", Year: 2018 },
    { value: "2017", Year: 2017 },
    { value: "2016", Year: 2016 },
    { value: "2015", Year: 2015 },
    { value: "2014", Year: 2014 },
    { value: "2013", Year: 2013 },
    { value: "2012", Year: 2012 },
    { value: "2011", Year: 2011 },
    { value: "2010", Year: 2010 },
    { value: "2009", Year: 2009 },
    { value: "2008", Year: 2008 },
    { value: "2007", Year: 2007 },
    { value: "2006", Year: 2006 },
    { value: "2005", Year: 2005 },
    { value: "2004", Year: 2004 },
    { value: "2003", Year: 2003 },
    { value: "2002", Year: 2002 },
    { value: "2001", Year: 2001 },
    { value: "2000", Year: 2000 },
    { value: "1999", Year: 1999 },
    { value: "1998", Year: 1998 },
    { value: "1997", Year: 1997 },
    { value: "1996", Year: 1996 },
    { value: "1995", Year: 1995 },
    { value: "1994", Year: 1994 },
    { value: "1993", Year: 1993 },
    { value: "1992", Year: 1992 },
    { value: "1991", Year: 1991 },
    { value: "1990", Year: 1990 },
    { value: "1989", Year: 1989 },
    { value: "1988", Year: 1988 },
    { value: "1987", Year: 1987 },
    { value: "1986", Year: 1986 },
    { value: "1985", Year: 1985 },
    { value: "1984", Year: 1984 },
    { value: "1983", Year: 1983 },
    { value: "1982", Year: 1982 },
    { value: "1981", Year: 1981 },
    { value: "1980", Year: 1980 },
    { value: "1979", Year: 1979 },
    { value: "1978", Year: 1978 },
    { value: "1977", Year: 1977 },
    { value: "1976", Year: 1976 },
    { value: "1975", Year: 1975 },
    { value: "1974", Year: 1974 },
    { value: "1973", Year: 1973 },
    { value: "1972", Year: 1972 },
    { value: "1971", Year: 1971 },
    { value: "1970", Year: 1970 },
    { value: "1969", Year: 1969 },
    { value: "1968", Year: 1968 },
    { value: "1967", Year: 1967 },
    { value: "1966", Year: 1966 },
    { value: "1965", Year: 1965 },
    { value: "1964", Year: 1964 },
    { value: "1963", Year: 1963 },
    { value: "1962", Year: 1962 },
    { value: "1961", Year: 1961 },
    { value: "1960", Year: 1960 },
  ];

  return (
    <MainContainer>
      <div class="main_container">
        <div className="ImageContainer">
          <img
            src="/DonateImages/left-arrow.png"
            alt="MyHospitalWebsiteApp"
            onClick={scroll_left}
          />
        </div>
        <div class="main-scroll-div">
          <div class="cover">
            <div class="scroll-images" id="scroll_left_and_right_side">
              {/* Html for blood dontaion from  */}

              <div class="child">
                <FormContainer>
                  <div className="FormMainContainer">
                    <div className="FromImageContainer">
                      <img
                        src="/DonateImages/BloodDontaionFormImage.png"
                        alt="HospitalWebApplication"
                      />
                    </div>
                    <div className="BloodDonationDetailsContainer">
                      <div className="HeadingContainer">
                        <h2>Blood Donation Form</h2>
                      </div>
                      <div className="DetailsAboutBloodDonation">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dicta minima sint suscipit, voluptatibus aperiam
                          nihil! Alias deserunt animi similique voluptatum sed,
                          blanditiis quibusdam nam consectetur autem molestiae
                          veritatis repellat sint ut quia modi ab? Lorem ipsum.
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsa perspiciatis suscipit consequuntur commodi
                          dolorum temporibus optio nam, explicabo odio provident
                          itaque? Architecto possimus voluptas excepturi modi,
                          ad iusto itaque dolorem. Ratione unde consectetur
                          facilis?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Html for Username  */}

                  <div className="FormDetailsContainer">
                    <form>
                      <div className="UserNameContainer">
                        <div id="UserFirstName">
                          <span className="FirstName">First Name</span>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="DonarName"
                          />
                        </div>
                        <div id="UserSecondName">
                          <span className="SecondName">Second Name</span>
                          <input
                            type="text"
                            placeholder="Second Name"
                            className="DonarName"
                          />
                        </div>
                      </div>

                      {/* Html For Bllod Group  */}

                      <div className="DonarBloodGroupContainer">
                        <div className="Title_Of_Container">
                          <p>What is your blood type?</p>
                        </div>
                        <div className="BloodGroupMainContainer">
                          <div className="PostiveBloodGroupContainer">
                            <div className="BloodGroupOptionContainer">
                              <div className="bloodgrp">
                                <label> O Rh+ </label>
                                <input type="radio" name="postiveblood" />
                              </div>
                            </div>
                            <div className="BloodGroupOptionContainer">
                              <div className="bloodgrp">
                                <label> A Rh+</label>
                                <input type="radio" name="postiveblood" />
                              </div>
                            </div>
                            <div className="BloodGroupOptionContainer">
                              <div className="bloodgrp">
                                <label> B Rh+ </label>
                                <input type="radio" name="postiveblood" />
                              </div>
                            </div>
                            <div className="BloodGroupOptionContainer">
                              <div className="bloodgrp">
                                <label>AB Rh+</label>
                                <input type="radio" name="postiveblood" />
                              </div>
                            </div>
                          </div>
                          <div className="NegativeBloodGroupContainer">
                            <div className="BloodGroupOptionContainer">
                              <div className="bloodgrp">
                                <label> O Rh-</label>
                                <input type="radio" name="postiveblood" />
                              </div>
                            </div>
                            <div className="BloodGroupOptionContainer">
                              <div className="bloodgrp">
                                <label>A Rh-</label>
                                <input type="radio" name="postiveblood" />
                              </div>
                            </div>
                            <div className="BloodGroupOptionContainer">
                              <div className="bloodgrp">
                                <label>B Rh-</label>
                                <input type="radio" name="postiveblood" />
                              </div>
                            </div>
                            <div className="BloodGroupOptionContainer">
                              <div className="bloodgrp">
                                <label>AB Rh-</label>
                                <input type="radio" name="postiveblood" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Html for date of birth  */}

                      <div className="Date_Of_Birth_Date">
                        <div className="Title_Of_Container">
                          <p>Birth Date</p>
                        </div>
                        <div className="DOB_Container">
                          <div className="Month_Day_Year_Container">
                            <select name="Month" id="Month">
                              {MonthData.map((month, i) => {
                                return (
                                  <option
                                    value={month.value}
                                    key={i}
                                    className="Option_Container"
                                  >
                                    {month.month}
                                  </option>
                                );
                              })}
                            </select>
                          </div>

                          <div className="Month_Day_Year_Container">
                            <select name="Day" id="Day">
                              {DayData.map((day, j) => {
                                return (
                                  <option
                                    value={day.value}
                                    key={j}
                                    className="Option_Container"
                                  >
                                    {day.day}
                                  </option>
                                );
                              })}
                            </select>
                          </div>

                          <div className="Month_Day_Year_Container">
                            <select name="Year" id="Year">
                              {YearData.map((year, k) => {
                                return (
                                  <option
                                    value={year.value}
                                    key={k}
                                    className="Option_Container"
                                  >
                                    {year.Year}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Html for Gender and occupation  */}

                      <div className="ContainerForGenderAndOccupation">
                        <div className="MainContainerForHeading">
                          <div className="MainHeading">
                            <p className="Heading">Gender</p>
                          </div>
                          <div className="Heading_Type">
                            <div className="Heading_option">
                              <input type="radio" name="you_gender" />
                              <span>Male</span>
                            </div>
                            <div className="Heading_option">
                              <input type="radio" name="you_gender" />
                              <span>Female</span>
                            </div>
                          </div>
                        </div>
                        <div className="ContainerForOccupation">
                          <div className="MainContainerForHeading">
                            <div className="MainHeading">
                              <p className="Heading">Occupation</p>
                            </div>
                            <div className="Heading_Type">
                              <div className="Occupation_container">
                                <input
                                  type="text"
                                  className="Occupation"
                                  placeholder="Your Occupation"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Html for Phone Number and Email  */}
                      <div className="PhoneNumberAndEmailContainer">
                        <div className="PhoneNumberAndEmailInnerContainer">
                          <div className="QuestionContainer">
                            <p className="Question">Phone No </p>
                          </div>
                          <div className="Heading_Type_For_Phone_And_Email">
                            <div className="For_Phone_And_Email_container">
                              <input
                                type="text"
                                className="Phone_Email_container"
                                placeholder="Your Phone No"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="PhoneNumberAndEmailInnerContainer">
                          <div className="QuestionContainer">
                            <p className="Question">Email </p>
                          </div>
                          <div className="Heading_Type_For_Phone_And_Email">
                            <div className="For_Phone_And_Email_container">
                              <input
                                type="text"
                                className="Phone_Email_container"
                                placeholder="Your Email"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Html for address container  */}

                      <div className="AddressContainer">
                        <div className="Address_Main_Heading_Container">
                          <p className="AddressHeading">Address</p>
                        </div>
                        <div className="AddressInputContainer">
                          <input
                            type="text"
                            placeholder="Your Address"
                            className="YourAddress"
                          />
                        </div>
                      </div>

                      {/* Html for  Weight and pulses container  */}

                      <div className="PhoneNumberAndEmailContainer">
                        <div className="PhoneNumberAndEmailInnerContainer">
                          <div className="QuestionContainer">
                            <p className="Question">Weight </p>
                          </div>
                          <div className="Heading_Type_For_Phone_And_Email">
                            <div className="For_Phone_And_Email_container">
                              <input
                                type="text"
                                className="Phone_Email_container"
                                placeholder="Your Weight"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="PhoneNumberAndEmailInnerContainer">
                          <div className="QuestionContainer">
                            <p className="Question">Pulses </p>
                          </div>
                          <div className="Heading_Type_For_Phone_And_Email">
                            <div className="For_Phone_And_Email_container">
                              <input
                                type="text"
                                className="Phone_Email_container"
                                placeholder="Your Pulses"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Html for HP and BP container  */}

                      <div className="PhoneNumberAndEmailContainer">
                        <div className="PhoneNumberAndEmailInnerContainer">
                          <div className="QuestionContainer">
                            <p className="Question">HP </p>
                          </div>
                          <div className="Heading_Type_For_Phone_And_Email">
                            <div className="For_Phone_And_Email_container">
                              <input
                                type="text"
                                className="Phone_Email_container"
                                placeholder="Your HP"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="PhoneNumberAndEmailInnerContainer">
                          <div className="QuestionContainer">
                            <p className="Question">BP </p>
                          </div>
                          <div className="Heading_Type_For_Phone_And_Email">
                            <div className="For_Phone_And_Email_container">
                              <input
                                type="text"
                                className="Phone_Email_container"
                                placeholder="Your BP"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* html for tempreature and donate previously  */}

                      <div className="ContainerForGenderAndOccupation">
                        <div className="ContainerForOccupation">
                          <div className="MainContainerForHeading">
                            <div className="MainHeading">
                              <p className="Heading">Tempreature</p>
                            </div>
                            <div className="Heading_Type">
                              <div className="Occupation_container">
                                <input
                                  type="text"
                                  className="Occupation"
                                  placeholder="Tempreature"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="MainContainerForHeading">
                          <div className="MainHeading">
                            <p className="Heading">
                              Have you donated previously?
                            </p>
                          </div>
                          <div className="Heading_Type">
                            <div className="Heading_option">
                              <input type="radio" name="you_gender" />
                              <span>Yes</span>
                            </div>
                            <div className="Heading_option">
                              <input type="radio" name="you_gender" />
                              <span>No</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* html for date  */}
                      <div className="DateContainer">
                        <div className="MainDateContainer">
                          <p id="DateQuestionPara">
                            What was the last time you donated blood?
                          </p>
                        </div>
                        <div className="MainDateContainer">
                          <input type="date" id="DateInput" />
                        </div>
                      </div>

                      {/* html for Question  */}
                      <div className="QuestionMainContainer">
                        <div className="QuestionContainer">
                          <p id="QuestionPara">
                            In the last six months have you had any of the
                            following?
                          </p>
                        </div>
                        <div className="QuestionContainer">
                          <div className="AnswerContainer">
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Tattooing</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Ear piercing</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Dental extraction</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* html for Question  */}
                      <div className="QuestionMainContainer">
                        <div className="QuestionContainer">
                          <p id="QuestionPara">
                            Do you suffer from or have suffered from any of the
                            following diseases?
                          </p>
                        </div>
                        <div className="QuestionContainer">
                          <div className="AnswerContainer">
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Heart Disease</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Diabetes</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Sexually Transmitted Diseases</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Lung Disease</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Allergic Disease</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Epilepsy (Charay rog)</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Jaundice (last one year).</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Fainting spells.</span>
                            </div>
                          </div>
                          <div className="AnswerContainer">
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Cancer/Malignant Disease</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Hepatitis B/C</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Typhoid </span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Tuberculosis</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Malaria (six months)</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>abnormal Bleeding tendency.</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Kidney Disease.</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* html for Question  */}
                      <div className="QuestionMainContainer">
                        <div className="QuestionContainer">
                          <p id="QuestionPara">
                            Are you taking or have you taken any of these in the
                            past 72 hours?
                          </p>
                        </div>
                        <div className="QuestionContainer">
                          <div className="AnswerContainer">
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Antibiotics</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Steroids</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Aspirin</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Vaccinations</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Alcohol</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Dog bite Rabies vaccine (1 year)</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* html for Question  */}
                      <div className="QuestionMainContainer">
                        <div className="QuestionContainer">
                          <p id="QuestionPara">
                            Is there any history of surgery or blood transfusion
                            in the past six months?
                          </p>
                        </div>
                        <div className="QuestionContainer">
                          <div className="AnswerContainer">
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Major</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Minor</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="checkbox" name="Answer" />
                              <span>Blood Transfusion</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="SubmitButton">
                        <input type="submit" value="Submit" id="sub_button" />
                      </div>
                    </form>
                  </div>
                </FormContainer>
              </div>

              {/* Html for money donation form  */}

              <div class="child">
                <FormContainer>
                  <div className="FormMainContainer">
                    <div className="FromImageContainer">
                      <img
                        src="/DonateImages/BloodDontaionFormImage.png"
                        alt="HospitalWebApplication"
                      />
                    </div>
                    <div className="BloodDonationDetailsContainer">
                      <div className="HeadingContainer">
                        <h2>Money Donation Form</h2>
                      </div>
                      <div className="DetailsAboutBloodDonation">
                        <p>
                          Change will not come if we wait for some other person,
                          or if we wait for some other time. We are the ones
                          we've been waiting for. We are the change that we
                          seek.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Html for Username  */}

                  <div className="FormDetailsContainer">
                    <form>
                      <div className="UserNameContainer">
                        <div id="UserFirstName">
                          <span className="FirstName">First Name</span>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="DonarName"
                          />
                        </div>
                        <div id="UserSecondName">
                          <span className="SecondName">Second Name</span>
                          <input
                            type="text"
                            placeholder="Second Name"
                            className="DonarName"
                          />
                        </div>
                      </div>

                      {/* Html for Phone Number and Email  */}
                      <div className="PhoneNumberAndEmailContainer">
                        <div className="PhoneNumberAndEmailInnerContainer">
                          <div className="QuestionContainer">
                            <p className="Question">Phone No </p>
                          </div>
                          <div className="Heading_Type_For_Phone_And_Email">
                            <div className="For_Phone_And_Email_container">
                              <input
                                type="text"
                                className="Phone_Email_container"
                                placeholder="Your Phone No"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="PhoneNumberAndEmailInnerContainer">
                          <div className="QuestionContainer">
                            <p className="Question">Email </p>
                          </div>
                          <div className="Heading_Type_For_Phone_And_Email">
                            <div className="For_Phone_And_Email_container">
                              <input
                                type="text"
                                className="Phone_Email_container"
                                placeholder="Your Email"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* html for Question  */}
                      <div className="QuestionMainContainer">
                        <div className="QuestionContainer">
                          <p id="QuestionPara">Type of Donation</p>
                        </div>
                        <div className="QuestionContainer">
                          <div className="AnswerContainer">
                            <div className="AnswerOption">
                              <input type="radio" name="Answer1" />
                              <span>Love Offering</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="radio" name="Answer1" />
                              <span>Building Expansion</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="radio" name="Answer1" />
                              <span>One Time Donation</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="Donation_Amount_Container">
                        <div className="AmountHeading">
                          <p>Donation Amount </p>
                        </div>
                        <div className="DonationAmount">
                          <input
                            type="text"
                            placeholder="Enter Amount"
                            className="YouDontain"
                          />
                        </div>
                      </div>
                      <div className="SubmitButton">
                        <input type="submit" value="Submit" id="sub_button" />
                      </div>
                    </form>
                  </div>
                </FormContainer>
              </div>

              {/* Html for organ donation form  */}

              <div class="child">
                <FormContainer>
                  <div className="FormMainContainer">
                    <div className="FromImageContainer">
                      <img
                        src="/DonateImages/BloodDontaionFormImage.png"
                        alt="HospitalWebApplication"
                      />
                    </div>
                    <div className="BloodDonationDetailsContainer">
                      <div className="HeadingContainer">
                        <h2>Organ Donation Form</h2>
                      </div>
                      <div className="DetailsAboutBloodDonation">
                        <p>
                          The decision to become a donor can save up to eight
                          lives and enhance many more—men, women, and children
                          who depend on the generosity and sacrifice of others.
                          I encourage individuals of all ages and backgrounds to
                          consider this unique opportunity to help those in need
                          and to discuss this choice with friends and family.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Html for Username  */}

                  <div className="FormDetailsContainer">
                    <form>
                      <div className="UserNameContainer">
                        <div id="UserFirstName">
                          <span className="FirstName">First Name</span>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="DonarName"
                          />
                        </div>
                        <div id="UserSecondName">
                          <span className="SecondName">Second Name</span>
                          <input
                            type="text"
                            placeholder="Second Name"
                            className="DonarName"
                          />
                        </div>
                      </div>

                      <div className="MainDOBContainer">
                        <div id="UserDobContainer">
                          <span className="DateOfBirth">D.O.B</span>
                          <input type="date" className="DOB" />
                        </div>
                      </div>

                      {/* Html for Phone Number and Email  */}
                      <div className="PhoneNumberAndEmailContainer">
                        <div className="PhoneNumberAndEmailInnerContainer">
                          <div className="QuestionContainer">
                            <p className="Question">Phone No </p>
                          </div>
                          <div className="Heading_Type_For_Phone_And_Email">
                            <div className="For_Phone_And_Email_container">
                              <input
                                type="text"
                                className="Phone_Email_container"
                                placeholder="Your Phone No"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="PhoneNumberAndEmailInnerContainer">
                          <div className="QuestionContainer">
                            <p className="Question">Email </p>
                          </div>
                          <div className="Heading_Type_For_Phone_And_Email">
                            <div className="For_Phone_And_Email_container">
                              <input
                                type="text"
                                className="Phone_Email_container"
                                placeholder="Your Email"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                       {/* Html for Phone Number and Email  */}
                       <div className="PhoneNumberAndEmailContainer">
                        <div className="PhoneNumberAndEmailInnerContainer">
                          <div className="QuestionContainer">
                            <p className="Question">Address</p>
                          </div>
                          <div className="Heading_Type_For_Phone_And_Email">
                            <div className="For_Phone_And_Email_container">
                              <input
                                type="text"
                                className="Phone_Email_container"
                                placeholder="You Address"
                              />
                            </div>
                          </div>
                        </div>
                      </div>


                      {/* Html for Phone Number and Email  */}
                      <div className="PhoneNumberAndEmailContainer">
                        <div className="PhoneNumberAndEmailInnerContainer">
                          <div className="QuestionContainer">
                            <p className="Question">Height</p>
                          </div>
                          <div className="Heading_Type_For_Phone_And_Email">
                            <div className="For_Phone_And_Email_container">
                              <input
                                type="text"
                                className="Phone_Email_container"
                                placeholder="You Height"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="PhoneNumberAndEmailInnerContainer">
                          <div className="QuestionContainer">
                            <p className="Question">Weight</p>
                          </div>
                          <div className="Heading_Type_For_Phone_And_Email">
                            <div className="For_Phone_And_Email_container">
                              <input
                                type="text"
                                className="Phone_Email_container"
                                placeholder="Your Weight"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* html for Question  */}
                      <div className="QuestionMainContainer">
                        <div className="QuestionContainer">
                          <p id="QuestionPara">Gender</p>
                        </div>
                        <div className="QuestionContainer">
                          <div className="AnswerContainer">
                            <div className="AnswerOption">
                              <input type="radio" name="Answer1" />
                              <span>Male</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="radio" name="Answer1" />
                              <span>Female</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="radio" name="Answer1" />
                              <span>N/A</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* html for Question  */}
                      <div className="QuestionMainContainer">
                        <div className="QuestionContainer">
                          <p id="QuestionPara">
                            Once my death has been confirmed and the death
                            certification has been released by a physician, I
                            hereby give permission to donate:
                          </p>
                        </div>
                        <div className="QuestionContainer">
                          <div className="AnswerContainer">
                            <div className="AnswerOption">
                              <input type="radio" name="Answer1" />
                              <span>all my organs and tissues</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="radio" name="Answer1" />
                              <span>specific organs and/or tissues</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* html for Question  */}
                      <div className="QuestionMainContainer">
                        <div className="QuestionContainer">
                          <p id="QuestionPara">
                            I authorize you to use my organs/tissues for:
                          </p>
                        </div>
                        <div className="QuestionContainer">
                          <div className="AnswerContainer">
                            <div className="AnswerOption">
                              <input type="radio" name="Answer1" />
                              <span>Research</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="radio" name="Answer1" />
                              <span>Transplant</span>
                            </div>
                            <div className="AnswerOption">
                              <input type="radio" name="Answer1" />
                              <span>Research & Transplant</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="SubmitButton">
                        <input type="submit" value="Submit" id="sub_button" />
                      </div>
                    </form>
                  </div>
                </FormContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="ImageContainer">
          <img
            src="/DonateImages/Right-Arrow.png"
            alt="MyHospitalWebsiteApp"
            onClick={scroll_right}
          />
        </div>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.section`
  .ImageContainer {
    width: 10%;
    height: 100%;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }
  .ImageContainer:hover {
    cursor: pointer;
    transform: scale(1.08);
  }

  .main_container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main-scroll-div {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
    background-color: rgb(255, 255, 255);
    color: #090b13;
  }
  .cover {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .scroll-images {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
    align-items: center;
    overflow: auto;
    position: relative;
    scroll-behavior: smooth;
  }

  .scroll-images::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  .child {
    min-width: 100%;
    height: 100%;
    margin: 1px 1px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
`;

// Blood Donation Form Css
const FormContainer = styled.div`
  width: 100%;
  height: 600px;
  overflow-y: auto;
  margin-left: 12px;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  .FormMainContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 230px;
  }

  .FromImageContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .BloodDonationDetailsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
  }
  .HeadingContainer {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    color: #090b13;
    word-spacing: 0.3rem;
    line-height: 1.4rem;
    padding: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
    border-radius: 5px;
    background-color: white;
  }
  .DetailsAboutBloodDonation {
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    color: #090b13;
    word-spacing: 0.3rem;
    line-height: 1.4rem;
    padding: 8px;
  }

  /* creating css for the form  */

  .FormDetailsContainer {
    .UserNameContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      #UserFirstName {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .FirstName {
          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
            rgba(0, 0, 0, 0.1) 0px 8px 16px;
          border-radius: 5px;
          background-color: white;
          color: green;
          font-size: 1.2rem;
          width: 40%;
          margin: 5px;
        }
      }
      #UserSecondName {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .SecondName {
          padding: 2px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
            rgba(0, 0, 0, 0.1) 0px 8px 16px;
          border-radius: 5px;
          background-color: white;
          color: green;
          font-size: 1.2rem;
          margin: 5px;
          width: 40%;

          text-align: center;
        }
      }

      .DonarName {
        width: 100%;
        padding: 4px;
        font-size: 1.1rem;
        text-align: center;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
          rgba(0, 0, 0, 0.1) 0px 8px 16px;
        border-radius: 5px;
        background-color: white;
        margin: 8px;
        transition: all 0.3s ease-in-out;
        outline: none;
      }
      .DonarName:hover {
        transform: scale(1.04);
        cursor: pointer;
      }
    }

    /* css for organ donation container  */
    .MainDOBContainer {
      margin: 1px;
      #UserDobContainer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 3px;

        .DateOfBirth {
          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
            rgba(0, 0, 0, 0.1) 0px 8px 16px;
          border-radius: 5px;
          background-color: white;
          font-family: "Open Sans", sans-serif;
          color: green;
          word-spacing: 0.3rem;
          line-height: 1.4rem;
          padding: 4px;
          margin: 2px;
          width: 135px;
          text-align: left;
        }
        .DOB {
          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
            rgba(0, 0, 0, 0.1) 0px 8px 16px;
          border-radius: 5px;
          background-color: white;
          font-family: "Open Sans", sans-serif;
          color: #090b13;
          word-spacing: 0.3rem;
          line-height: 1.4rem;
          padding: 4px;
          margin: 2px;
          margin-top: 15px;
          width: 200px;
          text-align: left;
        }
      }
    }

    /* css for blood group main container  */

    .Title_Of_Container {
      margin-top: 2%;
      display: flex;
      align-items: flex-start;

      padding: 1.5px;
      p {
        display: inline-block;
        margin: 2px;
        font-size: 1.2rem;
        color: green;
        font-family: "Open Sans", sans-serif;
        padding: 4px;
        text-align: left;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
          rgba(0, 0, 0, 0.1) 0px 8px 16px;
        border-radius: 5px;
        background-color: white;
      }
    }

    .BloodGroupMainContainer {
      display: flex;
      padding: 5px;
      .BloodGroupOptionContainer {
        width: 100%;
        display: flex;
      }
    }
    .PostiveBloodGroupContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    .NegativeBloodGroupContainer {
      width: 100%;
    }

    .bloodgrp {
      width: 17%;
      margin: 2px;
      padding: 3px;
      text-align: left;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
        rgba(0, 0, 0, 0.1) 0px 8px 16px;
      border-radius: 5px;
      background-color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      transition: all 0.3s ease-in-out;
    }
    .bloodgrp:hover {
      cursor: pointer;
      transform: scale(1.06);
    }
  }

  /* css for date of birth container  */

  .Date_Of_Birth_Date {
    margin-top: 2%;
    .DOB_Container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      /* Month Container css  */

      .Month_Day_Year_Container {
        padding: 3px;
        margin: 4px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
          rgba(0, 0, 0, 0.1) 0px 8px 16px;
        border-radius: 5px;
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        select {
          outline: none;
          width: 200px;
        }
      }
    }
  }

  /* css for gender and occupation container */
  .ContainerForGenderAndOccupation {
    margin: 0.5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2%;

    .MainContainerForHeading {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      .MainHeading {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .Heading {
          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
            rgba(0, 0, 0, 0.1) 0px 8px 16px;
          border-radius: 5px;
          background-color: white;
          color: green;
          padding: 4px;
          margin: 2px;
          font-family: "Open Sans", sans-serif;
          font-size: 1.2rem;
        }
      }
      .Heading_Type {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 4px;
        .Heading_option {
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
            rgba(0, 0, 0, 0.1) 0px 8px 16px;
          border-radius: 5px;
          background-color: white;
          padding: 3px;
          font-family: "Open Sans", sans-serif;
          transition: all 0.3s ease-in-out;

          span {
            margin: 1px;
          }

          &:hover {
            transform: scale(1.06);
            cursor: pointer;
          }
        }
      }
    }
    .ContainerForOccupation {
      width: 100%;
      .Occupation_container {
        width: 100%;
        padding: 3px;
        .Occupation {
          width: 100%;
          font-family: "Open Sans", sans-serif;
          font-size: 1.1rem;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
            rgba(0, 0, 0, 0.1) 0px 8px 16px;
          border-radius: 5px;
          background-color: white;
          outline: none;
          text-align: center;
          padding: 4px;
          color: #090b13;
        }
      }
    }
  }

  /* css for phone number and email  */
  .PhoneNumberAndEmailContainer {
    margin: 0.5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1%;
    .PhoneNumberAndEmailInnerContainer {
      width: 100%;
      .QuestionContainer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .Question {
          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
            rgba(0, 0, 0, 0.1) 0px 8px 16px;
          border-radius: 5px;
          background-color: white;
          color: green;
          padding: 4px;
          margin: 2px;
          font-family: "Open Sans", sans-serif;
          font-size: 1.2rem;
        }
      }
      .Heading_Type_For_Phone_And_Email {
        width: 100%;
        .For_Phone_And_Email_container {
          width: 100%;
          padding: 3px;
          margin-top: 4px;
          .Phone_Email_container {
            width: 100%;
            font-family: "Open Sans", sans-serif;
            font-size: 1.1rem;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
              rgba(0, 0, 0, 0.1) 0px 8px 16px;
            border-radius: 5px;
            background-color: white;
            outline: none;
            text-align: center;
            padding: 4px;
            color: #090b13;
          }
        }
      }
    }
  }

  /* css for Address container  */

  .AddressContainer {
    margin: 0.5%;
    margin-top: 2%;
    .Address_Main_Heading_Container {
      display: flex;
      align-items: flex-start;
      margin: 3px;

      .AddressHeading {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
          rgba(0, 0, 0, 0.1) 0px 8px 16px;
        border-radius: 5px;
        background-color: white;
        color: green;
        padding: 4px;

        font-family: "Open Sans", sans-serif;
        font-size: 1.2rem;
      }
    }
    .AddressInputContainer {
      margin: 3px;
      margin-top: 1%;
      .YourAddress {
        width: 100%;
        font-family: "Open Sans", sans-serif;
        font-size: 1.1rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
          rgba(0, 0, 0, 0.1) 0px 8px 16px;
        border-radius: 5px;
        background-color: white;
        outline: none;
        text-align: center;
        padding: 4px;
        color: #090b13;
      }
    }
  }
  // css for date input in form
  .DateContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    margin: 0.4%;
    .MainDateContainer {
      text-align: start;
      margin: 3px;

      #DateQuestionPara {
        width: 100%;
        font-family: "Open Sans", sans-serif;
        font-size: 1.2rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
          rgba(0, 0, 0, 0.1) 0px 8px 16px;
        border-radius: 5px;
        background-color: white;
        padding: 3px;
        color: green;
      }
      #DateInput {
        font-family: "Open Sans", sans-serif;
        font-size: 1.1rem;
        margin-top: 4px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
          rgba(0, 0, 0, 0.1) 0px 8px 16px;
        border-radius: 5px;
        background-color: white;
        padding: 3px;
        outline: none;
        color: #090b13;
      }
    }
  }

  .QuestionMainContainer {
    margin: 0.8%;
    .QuestionContainer {
      display: flex;
      #QuestionPara {
        font-family: "Open Sans", sans-serif;
        font-size: 1.2rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
          rgba(0, 0, 0, 0.1) 0px 8px 16px;
        border-radius: 5px;
        background-color: white;
        padding: 3px;
        color: green;
      }
      .AnswerContainer {
        width: 100%;
        text-align: left;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
          rgba(0, 0, 0, 0.1) 0px 8px 16px;
        border-radius: 5px;
        background-color: white;
        padding: 3px;
        margin: 2px;
        margin-top: 1%;

        .AnswerOption {
          padding: 4px;
          display: flex;
          flex-direction: row;
          font-size: 1.1rem;
          input {
            cursor: pointer;
          }
          span {
            padding: 2px;
            margin: 3px;
          }
        }
      }
    }
  }

  .SubmitButton {
    margin: 3px;
    /* border: 2px solid pink; */
    #sub_button {
      font-family: "Open Sans", sans-serif;
      font-size: 1.4rem;
      border-radius: 4px;
      padding: 8px;
      background-color: #090b13;
      color: white;
      word-spacing: 0.5rem;
      line-height: 1.4rem;
      transition: all 0.3s ease-in-out;
      text-align: "center";
      :hover {
        cursor: pointer;
        transform: scale(1.06);
        border-radius: 4px;
      }
    }
  }

  /* MoneyDonation container css  */

  .Donation_Amount_Container {
    display: flex;
    flex-direction: column;
    margin: 5px;
    .AmountHeading {
      display: flex;
      align-item: "flex-start";
      justify-content: "center";
      margin: 4px;
      font-size: 1.2rem;
      font-family: "Open Sans", sans-serif;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
        rgba(0, 0, 0, 0.1) 0px 8px 16px;
      background-color: white;
      color: green;
      width: 20%;
      padding: 3px;
    }
    .DonationAmount {
      display: flex;
      align-item: "flex-start";
      justify-content: "center";
      width: 50%;
      margin: 4px;
      .YouDontain {
        width: 100%;
        outline: none;
        font-size: 1.15rem;
        font-family: "Open Sans", sans-serif;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px,
          rgba(0, 0, 0, 0.1) 0px 8px 16px;
        background-color: white;
        padding: 2px;
        text-align: center;
      }
    }
  }
`;
