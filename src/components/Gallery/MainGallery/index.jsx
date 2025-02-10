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

export default function MainGallery() {
  return (
    <StyledMainGallery>
      <Title>Navegue pela galeria</Title>
      <figure className="main-gallery__image">
        <img src="/images/image-product-1.jpg" alt="Space 001" />
        <figcaption>Space 001</figcaption>
      </figure>
      <figure className="main-gallery__image">
        <img src="/images/image-product-2.jpg" alt="Space 002" />
        <figcaption>Space 002</figcaption>
      </figure>
      <figure className="main-gallery__image">
        <img src="/images/image-product-3.jpg" alt="Space 003" />
        <figcaption>Space 003</figcaption>
      </figure>
      <figure className="main-gallery__image">
        <img src="/images/image-product-4.jpg" alt="Space 004" />
        <figcaption>Space 004</figcaption>
      </figure>
    </StyledMainGallery>
  );
}
