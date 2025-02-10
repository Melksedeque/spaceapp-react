import { styled } from "styled-components";
import Title from "../../Title";

const StyledPopularGallery = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 1rem;
  box-sizing: border-box;
  gap: 1rem;
`;

export default function PopularGallery() {
  return (
    <StyledPopularGallery className="popular-gallery">
      <Title align="center">Popular</Title>
      <figure className="main-gallery__image">
        <img src="/images/image-product-1.jpg" alt="Space 005" />
        <figcaption>Space 005</figcaption>
      </figure>
      <figure className="main-gallery__image">
        <img src="/images/image-product-2.jpg" alt="Space 006" />
        <figcaption>Space 006</figcaption>
      </figure>
      <figure className="main-gallery__image">
        <img src="/images/image-product-3.jpg" alt="Space 007" />
        <figcaption>Space 007</figcaption>
      </figure>
      <figure className="main-gallery__image">
        <img src="/images/image-product-4.jpg" alt="Space 008" />
        <figcaption>Space 008</figcaption>
      </figure>
    </StyledPopularGallery>
  );
}
