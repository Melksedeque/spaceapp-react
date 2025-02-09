import NavItem from "./NavItem";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  display: block;
  height: 100vh;
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
          <NavItem
            icon="/icones/home-inativo.png"
            activeIcon="/icones/home-ativo.png"
            isActive
          >
            Início
          </NavItem>
          <NavItem
            icon="/icones/mais-vistas-inativo.png"
            activeIcon="/icones/mais-vistas-ativo.png"
          >
            Mais vistas
          </NavItem>
          <NavItem
            icon="/icones/mais-curtidas-inativo.png"
            activeIcon="/icones/mais-curtidas-ativo.png"
          >
            Mais curtidas
          </NavItem>
          <NavItem
            icon="/icones/novas-inativo.png"
            activeIcon="/icones/novas-ativo.png"
          >
            Novas
          </NavItem>
          <NavItem
            icon="/icones/surpreenda-me-inativo.png"
            activeIcon="/icones/surpreenda-me-ativo.png"
          >
            Surpreenda-me
          </NavItem>
        </StyledList>
      </nav>
    </StyledSidebar>
  );
}
