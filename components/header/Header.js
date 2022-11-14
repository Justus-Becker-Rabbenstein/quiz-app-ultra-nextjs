import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Quiz App Ultra</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  opacity: 50%;
  background-color: gold;
`;

export default Header;
