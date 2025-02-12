import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";

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

export default function GalleryImage({ image, gallery, expanded = false, onZoom }) {
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
          <FavoriteButton
            favoriteIcon="/icones/favorito.png"
            activeFavoriteIcon="icones/favorito-ativo.png"
          />
          <button className="expand">
            <img src="/icones/expandir.png" alt="Ícone de Expandir" />
          </button>
        </div>
      </figcaption>
    </StyledGalleryImage>
  );
}
