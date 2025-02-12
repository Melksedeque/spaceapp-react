import { styled } from "styled-components";
import Title from "../../Title";

const StyledPopularGallery = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 0 1 212px;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding: 0;
`;

export default function PopularGallery() {
  return (
    <StyledPopularGallery galleryType="popular">
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
