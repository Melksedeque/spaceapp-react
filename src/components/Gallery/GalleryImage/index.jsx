import styled from "styled-components";

const StyledGalleryImage = styled.figure`
  border-radius: 0.5rem;
  cursor: pointer;
  flex: 0 1 450px;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  figcaption {
    background: #001634;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem;
    color: #fff;
    font-size: 0.8rem;
    text-align: center;
  }
`;

export default function GalleryImage({ key, image, index, gallery }) {
  return (
    <StyledGalleryImage key={key}>
      <img src={image.path} alt={`${image.titulo}, ${image.fonte}`} />
      <figcaption>
        {image.titulo} in {image.tagId}
      </figcaption>
    </StyledGalleryImage>
  );
}
