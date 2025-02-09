import styled from "styled-components";
import SearchField from "../SearchField";

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 3.75rem 0;
  .logo {
    display: flex;
    align-items: center;
    max-width: 212px;
    img {
      height: auto;
      max-width: 100%;
    }
    h1 {
      /**
        IMPORTAR FONTE PADRÃO
        */
      font-size: 1rem;
    }
  }
  .searchBar {
    align-items: center;
    background: linear-gradient(to right, #c98cf1 0%, #7b78e5 100%);
    border-radius: 0.625rem;
    display: flex;
    height: 3.75rem;
    padding: 2px;
    width: 600px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="logo">
        <img src="/imagens/logo.png" alt="logo" />
        <h1 hidden>SpaceApp - React + Vite</h1>
      </div>
      <div className="searchBar">
        <SearchField />
      </div>
    </StyledHeader>
  );
}
