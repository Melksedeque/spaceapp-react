import styled from "styled-components";
import IconButton from "../IconButton";
import { useState } from "react";

const StyledGalleryImage = styled.figure`
  flex: 0 1 ${(props) => (props.$expanded == true ? "90%" : "450px")};
  height: 335px;
  margin: 0;
  padding: 0;
  img {
    border-radius: 1.25rem 1.25rem 0 0;
    width: 100%;
  }
  figcaption {
    align-items: flex-end;
    background: #001634;
    border: 0 none;
    border-radius: 0 0 1.25rem 1.25rem;
    color: #fff;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    font-size: 0.8rem;
    padding: 0;
    width: 100%;
    > div {
      padding: 0.75rem;
      &.text {
        flex: 1;
      }
    }
    h4,
    footer {
      font: 700 1rem GandhiSansBold;
      margin: 0;
    }
    footer {
      font-weight: normal;
    }
    button {
      background-color: transparent;
      border: 0 none;
      border-radius: 0;
      cursor: pointer;
      margin: 0 0.125rem;
    }
  }
`;

export default function GalleryImage({
  image,
  gallery,
  expanded = false,
  onZoom,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!isFavorite) {
      favorites.push(image.id);
    } else {
      const index = favorites.indexOf(image.id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }
    console.log("Botão de favorito clicado!");
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const handleExpand = () => {
    if (onZoom) {
      console.log("Botão de expandir clicado!");
      onZoom(image);
    }
  };

  return (
    <StyledGalleryImage
      key={image.id}
      galleryType={gallery}
      $expanded={expanded}
    >
      <img src={image.path} alt={`${image.titulo}, ${image.fonte}`} />
      <figcaption>
        <div className="text">
          <h4>{image.titulo}</h4>
          <footer>{image.tagId}</footer>
        </div>
        <div className="buttons">
          <IconButton
            name="favorite"
            icon="/icones/favorito.png"
            activeIcon="/icones/favorito-ativo.png"
            isFavorite={isFavorite}
            onClick={handleFavorite}
          />
          <IconButton
            name="expand"
            icon="/icones/expandir.png"
            onClick={handleExpand}
          />
        </div>
      </figcaption>
    </StyledGalleryImage>
  );
}
