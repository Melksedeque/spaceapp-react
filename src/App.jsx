import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Galleries from "./components/Galleries";
import Footer from "./components/Footer";
import { useState } from "react";

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

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 100%;
  width: 1440px;
`;

const MainContainer = styled.main`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  gap: 24px;
  section.mainContent {
    flex: 1;
  }
`;

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header onSearch={handleSearch} />
        <MainContainer>
          <Sidebar />
          <section className="mainContent">
            <Banner>A galeria mais completa de fotos do espaço!</Banner>
            <Galleries searchTerm={searchTerm} />
          </section>
        </MainContainer>
      </AppContainer>
      <Footer />
    </GradientBackground>
  );
}

export default App;
