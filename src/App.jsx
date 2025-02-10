import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Title from "./components/Title";

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
  section {
    flex: 1;
  }
`;

function App() {
  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <Sidebar />
          <section>
            <Banner>A galeria mais completa de fotos do espaço!</Banner>
            <section className="tags-navigation">
              <nav>
                <ul>
                  <li>
                    <a href="#">Estrelas</a>
                  </li>
                  <li>
                    <a href="#">Galáxia</a>
                  </li>
                  <li>
                    <a href="#">Lua</a>
                  </li>
                  <li>
                    <a href="#">Planetas</a>
                  </li>
                  <li>
                    <a href="#">Todas</a>
                  </li>
                </ul>
              </nav>
            </section>
            <section className="gallery-container">
              <Title>Navegue pela galeria</Title>
              <section className="gallery">
                <figure>
                  <img src="imagem1.jpg" alt="Imagem 1" />
                </figure>
                <figure>
                  <img src="imagem2.jpg" alt="Imagem 2" />
                </figure>
                <figure>
                  <img src="imagem3.jpg" alt="Imagem 3" />
                </figure>
                <figure>
                  <img src="imagem4.jpg" alt="Imagem 4" />
                </figure>
              </section>

              <aside className="popular-gallery">
                <Title>Populares</Title>
                <figure>
                  <img src="popular1.jpg" alt="Popular 1" />
                </figure>
                <figure>
                  <img src="popular2.jpg" alt="Popular 2" />
                </figure>
                <figure>
                  <img src="popular3.jpg" alt="Popular 3" />
                </figure>
              </aside>
            </section>
          </section>
        </MainContainer>
      </AppContainer>
    </GradientBackground>
  );
}

export default App;
