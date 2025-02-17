import { styled } from "styled-components";
import Title from "../../Title";
import GalleryImage from "../GalleryImage";

const StyledImageGallery = styled.section`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  gap: 30px;
  justify-content: flex-start;
  h2 {
    margin: 0;
    width: 100%;
  }
  &[data-gallery-type="popular"] {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex: 0 1 212px;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    padding: 0;
  }
`;

export default function ImageGallery({
  title,
  alignment,
  pictures = [],
  onSelectedPicture,
  dataGallery,
}) {
  return (
    <StyledImageGallery data-gallery-type={dataGallery}>
      <Title align={alignment}>{title}</Title>
      {pictures.map((picture) => (
        <GalleryImage
          onZoom={onSelectedPicture}
          key={picture.id}
          image={picture}
          dataGallery={dataGallery}
        />
      ))}
      {dataGallery === "popular" && <button>Ver mais</button>}
    </StyledImageGallery>
  );
}
