import styled from "styled-components";

const StyledNavItem = styled.li``;

export default function NavItem({
  children,
  icon,
  activeIcon,
  isActive = false,
}) {
  return (
    <StyledNavItem>
      <img src={isActive ? activeIcon : icon} alt="Ícone do item ${children}" />
      <a href="#">{children}</a>
    </StyledNavItem>
  );
}
