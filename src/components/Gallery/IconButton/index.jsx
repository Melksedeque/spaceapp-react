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

const favoriteClick = (event) => {
  event.preventDefault();
  console.log("Clicou no botão de favoritar");
};

const expandedClick = (event) => {
  event.preventDefault();
  console.log("Clicou no botão de expandir");
};
k;

export default function IconButton({
  name,
  icon,
  activeIcon,
  isFavorite = false,
  isExpanded = false,
}) {
  const handleClick = (event) => {
    if (name === "favorite") {
      favoriteClick(event);
    } else if (name === "expand") {
      expandedClick(event);
    }
  };
  return (
    <StyledIconButton onClick={handleClick}>
      <img src={isFavorite ? activeIcon : icon} alt={`Ícone de ${name}`} />
    </StyledIconButton>
  );
}
