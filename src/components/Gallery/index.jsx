import styled from "styled-components";
import FilterByTags from "./FilterByTags";
import ImageGallery from "./ImageGallery";

import pictures from "./fotos.json";
import populars from "./populars.json";
import { useState } from "react";
import ZoomModal from "../ZoomModal";

const StyledGalleryContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
`;

export default function Gallery() {
  const [galleryPictures, setGalleryPictures] = useState(pictures);
  const [popularGalleryPictures, setPopularGalleryPictures] = useState(populars);
  const [selectedPicture, setSelectedPicture] = useState(null);
  return (
    <>
      <FilterByTags />
      <StyledGalleryContainer>
        <ImageGallery
          alignment="left"
          title="Navegue pela galeria"
          pictures={galleryPictures}
          onSelectedPicture={(picture) => setSelectedPicture(picture)}
          dataGallery="main"
        />
        <ImageGallery
          alignment="center"
          title="Populares"
          pictures={popularGalleryPictures.slice(0, 5)}
          onSelectedPicture={(picture) => setSelectedPicture(picture)}
          dataGallery="popular"
        />
      </StyledGalleryContainer>
      <ZoomModal picture={selectedPicture} />
    </>
  );
}
