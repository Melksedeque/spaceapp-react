import styled from "styled-components";

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 0;
  cursor: pointer;
  padding: 0;
  outline: none;
  width: 20px;
  height: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover,
  &:focus {
    opacity: 0.7;
    &:active {
      opacity: 0.6;
    }
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
    <StyledIconButton onClick={handleClick}>
      <img
        src={name === "favorite" && isFavorite ? activeIcon : icon}
        alt={`Ícone de ${name}`}
      />
    </StyledIconButton>
  );
}
