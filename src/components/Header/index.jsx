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
      font-size: 1rem;
    }
  }
`;

export default function Header({ onSearch }) {
  return (
    <StyledHeader>
      <div className="logo">
        <img src="/imagens/logo.png" alt="logo" />
        <h1 hidden>SpaceApp - React + Vite</h1>
      </div>
      <SearchField onSearch={onSearch} />
    </StyledHeader>
  );
}
