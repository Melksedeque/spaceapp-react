import styled from "styled-components";

const StyledFavoriteButton = styled.button`
  background-color: transparent;
  border: none;
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

export default function FavoriteButton({
  favoriteIcon,
  activeFavoriteIcon,
  isFavorite = false,
}) {
  return (
    <StyledFavoriteButton onClick={favoriteClick}>
      <img
        src={isFavorite ? activeFavoriteIcon : favoriteIcon}
        alt="Ícone de Favorito"
      />
    </StyledFavoriteButton>
  );
}
