import styled from "styled-components";
import FavoriteButton from "../../FavoriteButton";

const StyledGalleryImage = styled.figure`
  border-radius: 1.25rem;
  flex: 0 1 ${(props) => (props.$expanded == true ? "90%" : "450px")};
  height: 335px;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  img {
    height: auto;
    width: 100%;
  }
  figcaption {
    align-items: flex-end;
    background: #001634;
    bottom: 0;
    color: #fff;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    font-size: 0.8rem;
    left: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    > div {
      padding: 1.3rem 1rem;
      &.text {
        flex: 1;
      }
    }
    h4 {
      font: 700 1.25rem GandhiSansBold;
      margin: 0;
    }
    button {
      background-color: transparent;
      border: 0 none;
      cursor: pointer;
      margin: 0 0.125rem;
    }
  }
`;

export default function GalleryImage({ image, gallery, expanded = false }) {
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
