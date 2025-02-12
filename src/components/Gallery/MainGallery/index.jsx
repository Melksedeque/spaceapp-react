import { styled } from "styled-components";
import Title from "../../Title";

const StyledMainGallery = styled.section`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: space-between;
  h2 {
    width: 100%;
  }
  .main-gallery__image {
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
  }
`;

export default function MainGallery({ title, pictures = [] }) {
  return (
    <StyledMainGallery>
      <Title>{title}</Title>
      {pictures.map((picture) => (
        <figure className="main-gallery__image" key={picture.id}>
          <img src={picture.path} alt={`${picture.titulo}, ${picture.fonte}`} />
          <figcaption>
            {picture.titulo} in {picture.tagId}
          </figcaption>
        </figure>
      ))}
    </StyledMainGallery>
  );
}
