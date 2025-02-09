import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";

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

const MainContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  main {
    flex: 1;
    padding-left: 2rem;
  }
`;

function App() {
  return (
    <GradientBackground>
      <GlobalStyles />
      <Header />
      <MainContainer>
        <Sidebar />
        <main>
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
            <h2>Navegue pela galeria</h2>
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
              <h2>Populares</h2>
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
        </main>
      </MainContainer>
    </GradientBackground>
  );
}

export default App;
