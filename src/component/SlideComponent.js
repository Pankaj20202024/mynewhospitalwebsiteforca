import React from "react";
import styled from "styled-components";

export default function SlideComponent() {
  const list = [
    {
      id: 1,
      child: (
        <>
          <p className="mx-1 w-18">Connnet On Facebook</p>
          <img
            className="w-12 ImgContainer"
            src="/Images/facebook.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      href: "https://www.facebook.com/pankajsingh.raikwal.3/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <p className="mx-1 w-18">Connnet On Instagram</p>
          <img
            className="w-12 ImgContainer"
            src="/Images/instagram.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      href: "https://www.instagram.com/",
    },
    {
      id: 3,
      child: (
        <>
          <p className="mx-1 w-18"> Connnet On LinkedIn </p>
          <img
            className="w-12 ImgContainer "
            src="/Images/linkedin.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      href: "https://www.linkedin.com/in/pankaj-singh-243155256/",
    },
    {
      id: 4,
      child: (
        <>
          <p className="mx-1 w-18">Connnet On Twitter</p>
          <img
            className="w-12 ImgContainer"
            src="/Images/twitter.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      href: "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D",
    },
    {
      id: 5,
      child: (
        <>
          <p className="mx-1 w-18">Connnet On Email</p>
          <img
            className="w-12 ImgContainer"
            src="/Images/email.png"
            alt="MyHospitalWebApp"
          />
        </>
      ),
      href: "https://mail.google.com/mail/u/0/#inbox",
      style: "rounded-br-md",
    },
  ];
  return (
    <MainContainer className="flex flex-col top-[45%] left-0 fixed">
      <ul>
        {list.map((item) => {
          return (
            <>
              <li
                key={item.id}
                className={
                  "LiContainer flex justify-between items-center w-60 h-14 px-4  ml-[-170px] hover:ml-[-7px] hover:rounded-md duration-300 " +
                  " " +
                  item.style
                }
              >
                <a
                  href={item.href}
                  className="flex justify-between items-center w-full text-white
                  "
                  target="_blank"
                >
                  {item.child}
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  cursor: pointer;
  .ImgContainer {
    filter: invert(100%);
  }

  .LiContainer {
    background-color: #090b13;
  }
`;
