import styled from "styled-components";

const StyledNavItem = styled.li`
  align-items: center;
  color: ${(props) => (props.$active ? "#7B78E5" : "#D9D9D9")};
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  gap: 1.375rem;
  line-height: 1.813rem;
  margin-bottom: 30px;
`;

export default function NavItem({
  children,
  icon,
  activeIcon,
  isActive = false,
}) {
  return (
    <StyledNavItem $active={isActive}>
      <img src={isActive ? activeIcon : icon} alt="Ícone do item ${children}" />
      {children}
    </StyledNavItem>
  );
}
