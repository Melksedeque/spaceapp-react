import styled from "styled-components";
import IconButton from "../IconButton";
import { useState } from "react";
import { getTagById } from "../../../utils/galleryUtils";

const StyledImage = styled.figure`
  flex: 0 1 ${(props) => (props.$expanded == true ? "90%" : "450px")};
  border-radius: 1.25rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  > img {
    display: block;
    width: 100%;
  }
  figcaption {
    align-items: flex-end;
    background: #001634;
    border: 0 none;
    color: #fff;
    display: flex;
    flex-flow: row nowrap;
    font-size: 0.8rem;
    justify-content: space-between;
    padding: 0;
    width: 100%;
    > div {
      padding: 0.75rem 1.5rem;
      &.text {
        flex: 1;
      }
      &.buttons {
        align-items: center;
        display: flex;
        flex-flow: row nowrap;
        gap: 1rem;
        justify-content: flex-end;
        padding: 1rem 1.5rem;
      }
    }
    h4 {
      font: 700 1.25rem GandhiSansBold;
      margin: 0;
    }
    footer {
      font: normal 1rem GandhiSansRegular;
    }
  }
  &[data-gallery="popular"] {
    flex: 1;
    > img {
      border-radius: 1.25rem;
    }
    figcaption {
      display: none;
      opacity: 0;
      transition: all 0.25s ease-in-out;
    }
    &:hover {
      cursor: pointer;
      position: relative;
      figcaption {
        background-color: rgba(0, 22, 52, 0.7);
        border-radius: 1.25rem;
        bottom: 0;
        display: flex;
        left: 0;
        opacity: 1;
        position: absolute;
        right: 0;
        top: 0;
        h4,
        footer,
        .text,
        .buttons button[data-name="favorite"] {
          display: none;
        }
        .buttons {
          display: flex;
          align-items: center;
          height: 100%;
          justify-content: center;
          padding: 0;
          width: 100%;
          button[data-name="expand"] {
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: center;
            width: 100%;
            img {
              width: 1.5rem;
            }
            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;

export default function age({ image, expanded = false, onZoom, dataGallery }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    return favorites.includes(image.id);
  });

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!favorites.includes(image.id)) {
      favorites.push(image.id);
    } else {
      const index = favorites.indexOf(image.id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const handleExpand = () => {
    console.log("Botão de expandir clicado!");
    onZoom(image);
  };

  return (
    <StyledImage key={image.id} $expanded={expanded} data-gallery={dataGallery}>
      <img
        src={image.path || null}
        alt={
          image.titulo ? `${image.titulo}, ${image.fonte}` : "Imagem da galeria"
        }
      />
      <figcaption>
        <div className="text">
          <h4>{image.titulo}</h4>
          <footer>{getTagById(image.tagId)}</footer>
        </div>
        <div className="buttons">
          <IconButton
            name="favorite"
            icon="/icones/favorito.png"
            activeIcon="/icones/favorito-ativo.png"
            isFavorite={isFavorite}
            onClick={handleFavorite}
          />
          {!expanded && (
            <IconButton
              name="expand"
              icon="/icones/expandir.png"
              onClick={handleExpand}
              aria-hidden={expanded}
            />
          )}
        </div>
      </figcaption>
    </StyledImage>
  );
}
