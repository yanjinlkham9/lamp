import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";

const RootDiv = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: black;
  color: white;
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const logoAnimation = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
`;
const AppLogo = styled.img`
  animation: ${logoAnimation} 1s linear infinite;
`;

const MyA = styled.a`
  color: #61dafb;
`;
export default function Practice() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}
