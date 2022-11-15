import styled from "styled-components";
import Link from "next/link";

const Navigation = () => {
  return (
    <navbarContainer>
      <ulContainer>
        <Link href="/api/hello">
          <liContainer>
            <img
              src="/house-user-solid.svg"
              alt="test"
              height="100px"
              width="100px"
            />
          </liContainer>
        </Link>
        <liContainer>
          <img
            src="/bookmark-solid.svg"
            alt="test"
            height="100px"
            width="100px"
          />
        </liContainer>
        <Link href="/create/Create">
          <liContainer>
            <img
              src="/file-circle-plus-solid.svg"
              alt="Create Page"
              height="100px"
              width="100px"
            />
          </liContainer>
        </Link>
        <liContainer>
          <img
            src="/user-solid.svg "
            alt="Profile Page"
            height="100px"
            width="100px"
          />
        </liContainer>
      </ulContainer>
    </navbarContainer>
  );
};

export default Navigation;

const navbarContainer = styled.nav`
  border: 3px solid black;
  position: static;
  background-color: goldenrod;
  height: 100%;
  width: 100%;
`;
const ulContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  min-height: 100%;
  position: sticky;
  bottom: 0;
`;

const liContainer = styled.li`
  height: 100%;
  width: 100%;
  background-color: gold;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);
`;
