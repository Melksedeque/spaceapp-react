import styled from "styled-components";
import FilterByTags from "./FilterByTags";
import MainGallery from "./MainGallery";
import PopularGallery from "./PopularGallery";

import pictures from "./fotos.json";
import { useState } from "react";

const StyledGalleryContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
`;

export default function Gallery({ onSelectedPicture }) {
  const [galleryPictures, setGalleryPictures] = useState(pictures);
  return (
    <>
      <FilterByTags />
      <StyledGalleryContainer>
        <MainGallery
          title="Navegue pela galeria"
          pictures={galleryPictures}
          onSelectedPicture
        />
        <PopularGallery />
      </StyledGalleryContainer>
    </>
  );
}
