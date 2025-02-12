import { styled } from "styled-components";
import Title from "../../Title";
import GalleryImage from "../GalleryImage";

const StyledMainGallery = styled.section`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: space-between;
  h2 {
    width: 100%;
  }
`;

export default function MainGallery({ title, pictures = [] }) {
  return (
    <StyledMainGallery>
      <Title>{title}</Title>
      {pictures.map((picture) => (
        <GalleryImage key={picture.id} image={picture} gallery="main" />
      ))}
    </StyledMainGallery>
  );
}
