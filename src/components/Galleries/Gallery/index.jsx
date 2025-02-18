import { styled } from "styled-components";
import Title from "../../Title";
import Image from "../Image";
import SeeMoreButton from "../../SeeMoreButton";
import { useState } from "react";

const StyledGallery = styled.section`
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

export default function Gallery({
  title,
  alignment,
  pictures = [],
  onSelectedPicture,
  dataGallery,
}) {
  const [displayCount, setDisplayCount] = useState(5);

  const handleSeeMore = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + 2, pictures.length));
  };

  const displayedPictures =
    dataGallery === "popular" ? pictures.slice(0, displayCount) : pictures;

  const showSeeMoreButton =
    dataGallery === "popular" && displayCount < pictures.length;

  return (
    <StyledGallery data-gallery-type={dataGallery}>
      <Title align={alignment}>{title}</Title>
      {displayedPictures.map((picture) => (
        <Image
          onZoom={onSelectedPicture}
          key={picture.id}
          image={picture}
          dataGallery={dataGallery}
        />
      ))}
      {showSeeMoreButton && <SeeMoreButton onClick={handleSeeMore} />}
    </StyledGallery>
  );
}
