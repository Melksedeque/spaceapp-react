import { styled } from "styled-components";
import Gallery from "../Gallery";
import { useState } from "react";

const PopularGalleryContainer = styled.div`
  flex: 0 1 212px;
`;

export default function PopularGallery({ pictures, onSelectedPicture }) {
  const [displayCount, setDisplayCount] = useState(5);

  const handleSeeMore = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + 2, pictures.length));
  };

  return (
    <PopularGalleryContainer>
      <Gallery
        alignment="center"
        title="Populares"
        pictures={pictures.slice(0, displayCount)}
        onSelectedPicture={onSelectedPicture}
        dataGallery="popular"
        onSeeMore={displayCount < pictures.length ? handleSeeMore : undefined}
      />
    </PopularGalleryContainer>
  );
}
