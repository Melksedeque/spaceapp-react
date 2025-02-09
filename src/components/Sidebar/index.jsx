import styled from "styled-components";

const StyledSidebar = styled.aside`
  display: block;
  width: 13.75rem;
`;
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <nav>
        <StyledList>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Mais vistas</a>
          </li>
          <li>
            <a href="#">Mais curtidas</a>
          </li>
          <li>
            <a href="#">Novas</a>
          </li>
          <li>
            <a href="#">Surpreenda-me</a>
          </li>
        </StyledList>
      </nav>
    </StyledSidebar>
  );
}
