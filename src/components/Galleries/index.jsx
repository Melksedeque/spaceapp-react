import styled from "styled-components";
import FilterByTags from "./FilterByTags";
import pictures from "./fotos.json";
import populars from "./populars.json";
import { useState } from "react";
import ZoomModal from "../ZoomModal";
import MainGallery from "./MainGallery";
import PopularGallery from "./PopularGallery";

const StyledGalleryContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
`;

export default function Galleries({ searchTerm }) {
  const [galleryPictures] = useState(pictures);
  const [popularPictures] = useState(populars);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [selectedTag, setSelectedTag] = useState(0);

  const handleCloseModal = () => {
    setSelectedPicture(null);
  };

  return (
    <>
      <FilterByTags selectedTag={selectedTag} onTagSelect={setSelectedTag} />
      <StyledGalleryContainer>
        <MainGallery
          pictures={galleryPictures}
          selectedTag={selectedTag}
          searchTerm={searchTerm}
          onSelectedPicture={(picture) => setSelectedPicture(picture)}
        />
        <PopularGallery
          pictures={popularPictures}
          onSelectedPicture={(picture) => setSelectedPicture(picture)}
        />
      </StyledGalleryContainer>
      <ZoomModal picture={selectedPicture} onClose={handleCloseModal} />
    </>
  );
}