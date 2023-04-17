import styled from "styled-components";

export default function SideBarForOtherComponentsThanHome(props) {
  const list = [...props.ImgUrlsForSideBar];

  return (
    <MainContainer className="flex flex-col top-[45%] left-0 fixed">
      <ul>
        {list.map((item) => {
          return (
            <>
              <li
                key={item.id}
                className={
                  "LiContainer flex justify-between items-center w-60 h-14 px-4  ml-[-170px] hover:ml-[-7px] hover:rounded-md duration-300  z-3"+
                  item.style
                }
              >
                <button
                  className="flex justify-between items-center w-full text-white z-3
                      "
                  target="_blank"
                  onClick={item.SwitchContainer}
                >
                  {item.child}
                </button>
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
    border-radius: 50%;
    padding: 2px;
    background-color: white;
  }

  .LiContainer {
    background-color: #090b13;
  
  }
`;
