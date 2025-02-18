import styled from "styled-components";

const StyledIconButton = styled.button`
  background-color: transparent;
  border: 0 none;
  border-radius: 0;
  cursor: pointer;
  line-height: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  img {
    display: block;
  }
  &:hover {
    opacity: 0.7;
  }
`;

export default function IconButton({
  name,
  icon,
  activeIcon,
  isFavorite = false,
  onClick,
}) {
  const handleClick = (event) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledIconButton onClick={handleClick} data-name={name}>
      <img
        src={name === "favorite" && isFavorite ? activeIcon : icon}
        alt={`Ícone de ${name}`}
      />
    </StyledIconButton>
  );
}
