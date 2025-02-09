import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  min-height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <GradientBackground>
      <GlobalStyles />
      <Header />
      <Sidebar />
    </GradientBackground>
  );
}

export default App;
