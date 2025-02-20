import styled from "styled-components";
import FilterByTags from "./FilterByTags";
import Gallery from "./Gallery";

import pictures from "./fotos.json";
import populars from "./populars.json";
import { useState } from "react";
import ZoomModal from "../ZoomModal";
import { filterImages } from "../../utils/galleryUtils";

const StyledGalleryContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
`;

export default function Galleries({ searchTerm }) {
  const [galleryPictures, setGalleryPictures] = useState(pictures);
  const [popularGalleryPictures, setPopularGalleryPictures] =
    useState(populars);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [selectedTag, setSelectedTag] = useState(0);

  const filteredPictures = filterImages(
    galleryPictures,
    selectedTag,
    searchTerm
  );

  const handleCloseModal = () => {
    setSelectedPicture(null);
  };

  return (
    <>
      <FilterByTags selectedTag={selectedTag} onTagSelect={setSelectedTag} />
      <StyledGalleryContainer>
        <Gallery
          alignment="left"
          title="Navegue pela galeria"
          pictures={filteredPictures}
          onSelectedPicture={(picture) => setSelectedPicture(picture)}
          dataGallery="main"
        />
        <Gallery
          alignment="center"
          title="Populares"
          pictures={popularGalleryPictures}
          onSelectedPicture={(picture) => setSelectedPicture(picture)}
          dataGallery="popular"
        />
      </StyledGalleryContainer>
      <ZoomModal picture={selectedPicture} onClose={handleCloseModal} />
    </>
  );
}
