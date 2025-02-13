import { styled } from "styled-components";
import Title from "../../Title";
import GalleryImage from "../GalleryImage";

const StyledMainGallery = styled.section`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  gap: 50px;
  justify-content: space-between;
  h2 {
    margin: 0;
    width: 100%;
  }
`;

export default function MainGallery({
  title,
  pictures = [],
  aoSelectedPicture,
}) {
  return (
    <StyledMainGallery>
      <Title>{title}</Title>
      {pictures.map((picture) => (
        <GalleryImage
          onZoom={aoSelectedPicture}
          key={picture.id}
          image={picture}
          galleryType="main"
        />
      ))}
    </StyledMainGallery>
  );
}
